
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import Home from './Home';
import {Switch,Route,Redirect} from 'react-router-dom'
import Recent from './Recent';
import Romance from './Romance';
import Kids from './Kids';
import Thriller from './Thriller';
import Textbook from './Textbook';
import Author from './Author';



function App() {
    return ( 
        <>
        
        <Switch>
          <Route exact path="/" component={Home }/>
          <Redirect to="/" />
        </Switch>
        <Recent/>
        <Romance/>
        <Kids/>
        <Thriller/>
        <Textbook/>
        <Author/>
        </>)
  
}

export default App;
