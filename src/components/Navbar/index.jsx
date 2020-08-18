import React from 'react';
import { Link } from "react-router-dom"; 

//Styles
import './navbar.scss';

function Navbar(){

    const logoutHandler = () => {
        sessionStorage.clear();
    };

    return(
        <Link 
            className="navbar"
            to="/login"
            onClick={logoutHandler}
        >
            <div className="navbar__button --logout"/>  
        </Link>
    );
}

export default Navbar;