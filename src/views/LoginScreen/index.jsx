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
            </div>
        );
    } 
}

export default LoginScreen;