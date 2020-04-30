import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import Home from './components/Home.js'
//se esta creando el class component 
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1><a href="https://fontmeme.com/pokemon-font/"><img src="https://fontmeme.com/permalink/200213/54094a75ad0cab6a2805fe58ea555d47.png" alt="pokemon-font" border="0"/></a></h1>
        {/* link es como un anchor tag */}
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        
             <Switch>
             {/* route renders out the component based on the URL. If you want to go to that page to only show up when you go to that page */}
               <Route exact path='/:pokemon?' component={Home}/>
               {/* <Route exact path='/about/:some-param' component={About}/>
               <Route exact path='/pokemons/:pokemonid' component={Detail}/>
               <Route component={NotFound}/> */}
            </Switch>
        </div>
       </Router>
    );
}
}
 