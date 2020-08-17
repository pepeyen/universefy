import React from 'react';
import {useSelector} from 'react-redux';
import { Redirect } from "react-router-dom"; 

//Compenents
import SearchForm from '../../components/SearchForm';
import Nodes from '../../components/Nodes';

function SearchScreen() {
    const recommendations = useSelector(state => state.recommendations);
    
    if(sessionStorage.getItem('isLoggedIn')){
        if(recommendations.length <= 0){
            return(
                <React.Fragment>
                    <main>
                        <SearchForm />
                    </main>
                </React.Fragment>
            );
        }else{
            return(
                <React.Fragment>
                    <main>
                        <SearchForm />
                        <Nodes />
                    </main>
                </React.Fragment>
            );
        }  
    }else{
        return (
            <Redirect to="/login"/>
        );
    }
}

export default SearchScreen;