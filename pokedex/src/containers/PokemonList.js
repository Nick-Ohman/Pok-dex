import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions"
import { Link } from "react-router-dom"

const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList);
    React.useEffect(() => {
        FetchData(1)
    }, []);

    const FetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }

    const showData = () => {
        if (!_.isEmpty(pokemonList.data)) {
            return (
                <div className="list-wrapper">
                    {pokemonList.data.map(list => {
                        return (
                            <div className="pokemon-item">
                                <p>{list.name}</p>
                                <Link to={`/pokemon/${list.name}`}>View</Link>
                            </div>
                        )
                    })}
                </div>
            )
        }
        
        if (pokemonList.loading) {
            return <p>Loading...</p>
        }

        if (pokemonList.errorMsg !== "") {
            return <p>{pokemonList.errorMsg}</p>
        }
        return <p>unable to get data</p>
    };
    return (
        <div>
            {showData()}
        </div>
    )
};

export default PokemonList;