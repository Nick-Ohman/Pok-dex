import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GetPokemon} from "../actions/pokemonActions";
import _ from "lodash";

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch()
    const pokemonState = useSelector(state => state.Pokemon)

    React.useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, [])

    console.log(pokemonState)
    const ShowData = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])){
            return <p>Have data</p>
        }

        if(pokemonState.loading) {
            return <p>Loading...</p>
        }

        if(pokemonState.errorMsg !== ""){
            return <p>{pokemonState.errorMsg}</p>
        }

        return <p>error getting pokemon</p>
    }
    return (
        <>
        <div>{pokemonName}</div>
        <div>{ShowData()}</div>
        </>
    )
};

export default Pokemon;