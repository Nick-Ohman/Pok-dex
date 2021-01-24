import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import PokemonList from './containers/PokemonList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
      </Switch>
    </div>
  );
}

export default App;
