import React from 'react';
import {  
  Route,
  Switch
} from "react-router-dom"; 

//Styles
import './App.css';

//Components
import LoginScreen from './views/login';
import SearchScreen from './views/search';


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
