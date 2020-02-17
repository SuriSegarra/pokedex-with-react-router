import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
// import Detail from './Detail';
import Home from './Home';
// import NotFound from './NotFound.js';
import './App.css';
import Header from './components/Header.js';



export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Link to='/'>Go Home </Link>
        </div>
        <Switch>
          <Route exact path='/:pokemon?' component={Home}/>
        
        </Switch>
      </Router>
    );
  }
}
