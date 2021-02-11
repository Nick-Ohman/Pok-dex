import React from 'react';
import './App.css';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon'
import pokemon from "./assets/pokemon.png"


function App() {
  return (
    <div className="App">
      <nav>
      <img className="logo" src={pokemon} alt="pokemon"></img>
        <NavLink to={"/"}>Home</NavLink>
      </nav>
      <Switch>
        
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
