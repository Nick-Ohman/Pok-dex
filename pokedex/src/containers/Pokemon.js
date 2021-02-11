import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonActions";
import _ from "lodash";

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch()
    const pokemonState = useSelector(state => state.Pokemon)

    React.useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, [dispatch, pokemonName])

    
    const ShowData = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokeData = pokemonState.data[pokemonName];
            const p = pokemonName.toUpperCase()
            return (
                <>
                <div className="namerender">

                <h1 className="name" >{p}</h1>
                </div>
                <div className="pokemon-wrapper">
                    
                    <div className="'item">
                    
                        <img className="pimage" src={pokeData.sprites.front_default} alt=""/>
                    </div>
                    <div className="item">
                        <h2>Stats</h2>
                        {pokeData.stats.map(list => {
                            return <p>{list.stat.name} {list.base_stat}</p>
                        })}
                    </div>

                    <div className="item">
                        <h2>Abilities</h2>
                        {pokeData.abilities.map(list => {
                            return <p>{list.ability.name}</p>
                        })}

                    </div>

                </div>
                </>
            )
        }

        if (pokemonState.loading) {
            return <p>Loading...</p>
        }

        if (pokemonState.errorMsg !== "") {
            return <p>{pokemonState.errorMsg}</p>
        }

        return <p>error getting pokemon</p>
    }
    return (
        <>
            
            <div>{ShowData()}</div>
        </>
    )
};

export default Pokemon;