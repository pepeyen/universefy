import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() { 
    super(); 
    this.state = { 
      user: {}
    }
  } 
  componentDidMount() { 
    if(window.location.hash !== ''){
      const parsed = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function(initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
      let accessToken = parsed.access_token; 
      if(accessToken){
        fetch('https://api.spotify.com/v1/me', { 
          headers: {
            'Authorization': 'Bearer ' + accessToken
          } 
        })
        .then(response => response.json()) 
        .then(data => {
          this.setState({ 
            user: { 
              name: data.display_name 
            } 
          })
        })
      }
      else return;
    }
  }
  render() {
    return (
      <div>
        <a className="App" href="http://localhost:8888/login">
          <span>Log in with Spotify</span>
        </a>
        <p>{this.state.user.name}</p>
      </div>
    );
  }
}

export default App;
