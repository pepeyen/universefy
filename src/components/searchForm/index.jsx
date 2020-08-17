import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//Styles
import './searchform.scss';

//Actions
import {setAuthValues, setRecommendations} from '../../actions'

//Services
import getSeed from '../../services/getSeed';
import getAuthValues from '../../services/getAuthValues';
import getRecommendations from '../../services/getRecommendations';
import getTrackEnergy from '../../services/getTrackEnergy';

function SearchForm() {
    const [userSearchText, setUserSearchText] = useState('');
    const [userSearchType, setUserSearchType] = useState('track');
    const dispatch = useDispatch();
    const authValues = useSelector(state => state.authValues);

    useEffect(() => {
        let parsed = getAuthValues();
        dispatch(setAuthValues(parsed));
    }, [dispatch]);

    const userSearchTextHandler = (e) => {
        setUserSearchText(encodeURIComponent(e.target.value));
    };
    const userSearchTypeHandler = (e) => {
        setUserSearchType(e.target.value);
    };
    const getTracks = () => {
        switch (userSearchType) {
            case "track":
                let track = {
                    name: '',
                    seed: '',
                    energy: 0,
                    url: '',
                    popularity: 0
                }
            
                track.name = userSearchText;
                getSeed({
                    searchType: "track",
                    accessToken: authValues.access_token, 
                    searchText: track.name
                })
                .then(res => {
                    track.name = res.tracks.items[0].name;
                    track.seed = res.tracks.items[0].id;
                    track.url = res.tracks.items[0].external_urls.spotify;
                    track.popularity = res.tracks.items[0].popularity;

                    getTrackEnergy(authValues.access_token,track.seed)
                    .then(res => {
                        track.energy = res.audio_features[0].energy;
                        getRecommendations({
                            accessToken: authValues.access_token, 
                            searchType: "track",
                            seed: track.seed,
                            trackEnergy: track.energy,
                            trackPopularity: track.popularity
                        })
                        .then(res => {
                            dispatch(setRecommendations(res.tracks));
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
            
                artist.name = userSearchText;
                getSeed({
                    accessToken: authValues.access_token, 
                    searchType: "artist",
                    searchText: artist.name
                })
                .then(res => {
                    artist.seed = res.artists.items[0].id;
                    getRecommendations({
                        accessToken: authValues.access_token, 
                        searchType: "artist",
                        seed: artist.seed
                    })
                    .then(res => {
                        dispatch(setRecommendations(res.tracks));
                    })
                })
                break;
            default:
                break;
        }
    };
    return(
        <div className="search-form">
            <input 
                className="search-form__input"
                type="text" 
                placeholder="Insert a track or artist" 
                onChange={userSearchTextHandler}
            />
            <div className="search-form__types">
                <button 
                    className={userSearchType === "track" ? "search-form__type --active": "search-form__type"}
                    value="track"
                    onClick={userSearchTypeHandler}
                >
                    Track
                </button>
                <button 
                    className={userSearchType === "artist" ? "search-form__type --active": "search-form__type"}
                    value="artist"
                    onClick={userSearchTypeHandler}
                >
                    Artist
                </button>
            </div> 
            <button 
                className="search-form__submit"
                onClick={getTracks}
            >
                Search
            </button>
        </div>
    );
}

export default SearchForm;