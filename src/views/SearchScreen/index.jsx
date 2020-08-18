import React from 'react';
import { Redirect } from "react-router-dom"; 

//Compenents
import SearchForm from '../../components/searchForm';
import Nodes from '../../components/Nodes';

function SearchScreen() {
    if(sessionStorage.getItem('isLoggedIn')){
        return(
            <React.Fragment>
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