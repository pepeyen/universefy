import React, { Component } from 'react';
import './App.css';

//Services
import getSeed from './services/GET/getSeed';
import getAuthValues from './services/GET/getAuthValues';
import getRecommendations from './services/GET/getRecommendations';
import getTrackEnergy from './services/GET/getTrackEnergy';

class App extends Component {
  constructor() { 
    super(); 
    this.state = {
      searchType: 'track',
      searchText: '',
      authTokens: {},
      recommendations: [],
      isLoggedIn: false,
      isSearched: false
    }
  } 
  componentDidMount() { 
    let parsed = getAuthValues();

    if(parsed.access_token){
      this.setState({
        authTokens: {
          accessToken: parsed.access_token,
          refreshToken: parsed.refresh_token
        },
        isLoggedIn: true
      })
    }else{
      this.setState({
        isLoggedIn: false
      })
    }
  }
  setsearchText =  (e) => {
    this.setState({
      searchText: e.target.value
    })
  }
  setSearchType = (e) => {
    this.setState({
      searchType: e.target.value
    })
  }
  getRecommendations = (e) => {
    switch (this.state.searchType) {
      case "track":
        let track = {
          name: '',
          seed: '',
          energy: 0
        }
    
        track.name = encodeURIComponent(this.state.searchText.trim());
        getSeed({
          searchType: "track",
          accessToken: this.state.authTokens.accessToken, 
          searchText: track.name
        })
        .then(res => {
          track.seed = res.tracks.items[0].id;
          getTrackEnergy(this.state.authTokens.accessToken,track.seed)
          .then(res => {
            track.energy = res.audio_features[0].energy;
            getRecommendations({
              accessToken: this.state.authTokens.accessToken, 
              searchType: "track",
              seed: track.seed,
              trackEnergy: track.energy
            })
            .then(res => {
              this.setState({
                recommendations: res.tracks,
                isSearched: true
              }) 
            })
          })
        })
        break;
      case "artist":
        let artist = {
          name: '',
          seed: '',
          energy: 0
        }
    
        artist.name = encodeURIComponent(this.state.searchText.trim());
        getSeed({
          accessToken: this.state.authTokens.accessToken, 
          searchType: "artist",
          searchText: artist.name
        })
        .then(res => {
          artist.seed = res.artists.items[0].id;
          getRecommendations({
            accessToken: this.state.authTokens.accessToken, 
            searchType: "artist",
            seed: artist.seed
          })
          .then(res => {
            this.setState({
              recommendations: res.tracks,
              isSearched: true
            })
          })
        })
        break;
      default:
        break;
    }
  }
  render() {
    if(this.state.isLoggedIn === false){
      return (
        <div className="App" >
          <a href="http://localhost:8888/login">
            <span>Log in with Spotify</span>
          </a>
        </div>
      );
    }else{
      if(this.state.isSearched === false){
        return (
          <div className="App" >
            <input type="text" placeholder="Search for a song" onChange={this.setsearchText}/>
            <select name="search-type" id="search-type" onChange={this.setSearchType}>
              <option value="track">Track</option>
              <option value="artist">Artist</option>
            </select> 
            <button onClick={this.getRecommendations}>Search</button>
          </div>
        );
      }else{
        return (
          this.state.recommendations.map(function(item, i){
            return (
              <li key={i}>
                <a href={item.external_urls.spotify} rel="noopener noreferrer" target="_blank">{item.name}</a>
              </li>
            );
          })

        );
      }
    }
  }
}

export default App;
