import React from 'react';
import { Redirect } from "react-router-dom"; 

//Compenents
import Navbar from '../../components/Navbar';
import Nodes from '../../components/Nodes';

function SearchScreen() {
    if(sessionStorage.getItem('isLoggedIn')){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Nodes />
                </main>
            </React.Fragment>
        );  
    }else{
        return (
            <Redirect to="/login"/>
        );
    }
}

export default SearchScreen;