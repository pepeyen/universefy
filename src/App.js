import React from 'react';
import {  
  Route,
  Switch
} from "react-router-dom"; 

//Styles
import './App.css';

//Components
import LoginScreen from './views/LoginScreen';
import SearchScreen from './views/SearchScreen';


function App (){
  return(
    <Switch>
      <Route exact path="/" component={LoginScreen} />
      <Route exact path="/login" component={LoginScreen} />
      <Route path="/search/" component={SearchScreen} />
    </Switch>
  );
}

export default App;
