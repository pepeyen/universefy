import React from 'react';
import { Redirect } from "react-router-dom"; 

//Compenents
import Navbar from '../../components/Navbar';
import SearchForm from '../../components/SearchForm';
import Nodes from '../../components/Nodes';

function SearchScreen() {
    if(sessionStorage.getItem('isLoggedIn')){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <SearchForm />
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