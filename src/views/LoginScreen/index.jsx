import React from 'react';
import { Redirect } from "react-router-dom"; 

//Styles
import './loginscreen.scss';

function LoginScreen() {
    const loginHandler = () => {
        sessionStorage.setItem('isLoggedIn', true);
    };
    if(sessionStorage.getItem('isLoggedIn')){
        return (
            <Redirect to="/search/"/>
        );
    }else{
        return (
            <div className="login-page" >
                <div className="login__logo"/>
                <a 
                    className="login"
                    href="http://localhost:8888/login"
                >
                    <button 
                        className="login__button" 
                        onClick={loginHandler}
                    >
                        Log In with Spotify
                    </button>
                </a>
                <div className="login__player">
                    <iframe 
                        title="spotify-player"
                        src="https://open.spotify.com/embed/playlist/6qnV44cGctRXC1LzVvLmeF" 
                        width="100%" 
                        height="80" 
                        frameborder="0" 
                        allowtransparency="true" 
                        allow="encrypted-media"
                    />
                </div>
            </div>
        );
    } 
}

export default LoginScreen;