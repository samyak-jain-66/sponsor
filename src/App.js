import React, { Component } from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Home from './components/HomeComponent';
import Category from './components/CategoryComponent';
import './App.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={()=><Home/>}/>
          <Route exact path="/category" component={()=><Category/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
