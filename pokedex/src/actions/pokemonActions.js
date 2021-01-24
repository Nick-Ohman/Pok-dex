import axios from "axios";

export const GetPokemonList = (page) => async dispatch => {
    try {
        dispatch({
            type:"POKEMON_LIST_LOADING"
        })

        const perPage = 15;
        const offset = (page * perPage) - perPage;

        const res = await axions.get(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`)

        dispatch({
            type:"POKEMON_LIST_SUCCESS",
            payload: res.data
        })
 
    } catch (e) {
        dispatch({
            type: "POKEMON_LIST_FAIL"
        })
    }
};