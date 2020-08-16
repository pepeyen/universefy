import React from 'react';

function LoginScreen() {
    const loginHandler = () => {
        sessionStorage.setItem('isLoggedIn', true);
    };
    return (
        <div className="login-page" >
            <a 
                className="login__link"
                href="http://localhost:8888/login"
            >
                <button 
                    className="login__button" 
                    onClick={loginHandler}
                >
                    Log in with Spotify
                </button>
            </a>
        </div>
    );
}

export default LoginScreen;