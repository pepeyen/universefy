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
    const [userSearchType, setUserSearchType] = useState('Track');
    const [isLoading, setIsLoading] = useState(false);
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
            case "Track":
                let track = {
                    name: '',
                    seed: '',
                    energy: 0,
                    url: '',
                    popularity: 0
                }
                setIsLoading(true);
                track.name = userSearchText;
                getSeed({
                    searchType: "Track",
                    accessToken: authValues.access_token, 
                    searchText: track.name
                })
                .then(res => {
                    if(res.tracks.items.length === 0){
                        setIsLoading(false);
                        dispatch(setRecommendations({tracks: [], isErrorLess: false}));
                    }else{
                        track.name = res.tracks.items[0].name;
                        track.seed = res.tracks.items[0].id;
                        track.url = res.tracks.items[0].external_urls.spotify;
                        track.popularity = res.tracks.items[0].popularity;
    
                        getTrackEnergy(authValues.access_token,track.seed)
                        .then(res => {
                            track.energy = res.audio_features[0].energy;
                            getRecommendations({
                                accessToken: authValues.access_token, 
                                searchType: "Track",
                                seed: track.seed,
                                trackEnergy: track.energy,
                                trackPopularity: track.popularity
                            })
                            .then(res => {
                                setIsLoading(false);
                                dispatch(setRecommendations({tracks: res.tracks, isErrorLess: true}));
                            })
                        })
                    }
                })
                break;
            case "Artist":
                let artist = {
                    name: '',
                    seed: '',
                    energy: 0
                }
                setIsLoading(true);

                artist.name = userSearchText;
                getSeed({
                    accessToken: authValues.access_token, 
                    searchType: "Artist",
                    searchText: artist.name
                })
                .then(res => {
                    if(res.artists.items.length === 0){
                        setIsLoading(false);
                        dispatch(setRecommendations({tracks: [], isErrorLess: false}));
                    }else{
                        artist.seed = res.artists.items[0].id;
                        getRecommendations({
                            accessToken: authValues.access_token, 
                            searchType: "Artist",
                            seed: artist.seed
                        })
                        .then(res => {
                            setIsLoading(false);
                            dispatch(setRecommendations({tracks: res.tracks, isErrorLess: true}));
                        })
                    }
                })
                break;
            default:
                break;
        }
    };
    return(
        <div className={isLoading ? "search-form --loading" : "search-form"}>
            <label 
                className="search-form__label"
                to="userInput"
            >
                Insert the <span>{userSearchType}</span>
            </label>
            <input 
                className="search-form__text"
                name="userInput"
                type="text" 
                onChange={userSearchTextHandler}
            />
            <div className="search-form__types">
                <button 
                    className={userSearchType === "Track" ? "search-form__type --active": "search-form__type"}
                    value="Track"
                    onClick={userSearchTypeHandler}
                >
                    Track
                </button>
                <button 
                    className={userSearchType === "Artist" ? "search-form__type --active": "search-form__type"}
                    value="Artist"
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