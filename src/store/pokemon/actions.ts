import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { getPokemon } from '../../services/pokemonService';
import { IPokemonActions } from './types';
import { StoreType } from '..';
import { IPokemon } from '../../types/models/pokemons';

export enum PokemonActionTypes {
  FETCH_POKEMON_REQUEST = 'POKEMON_FETCH_REQUEST',
  FETCH_POKEMON_SUCCESS = 'POKEMON_FETCH_SUCCESS',
  FETCH_POKEMON_ERROR = 'POKEMON_FETCH_ERROR'
}

const fetchPokemonRequest: ActionCreator<IPokemonActions> = () => {
  return {
    type: PokemonActionTypes.FETCH_POKEMON_REQUEST
  };
};

const fetchPokemonSuccess: ActionCreator<IPokemonActions> = (
  pokemon: IPokemon
) => {
  return {
    type: PokemonActionTypes.FETCH_POKEMON_SUCCESS,
    payload: pokemon
  };
};

const fetchPokemonError: ActionCreator<IPokemonActions> = () => {
  return {
    type: PokemonActionTypes.FETCH_POKEMON_ERROR
  };
};

export const fetchPokemon: ActionCreator<ThunkAction<
  void,
  StoreType,
  null,
  IPokemonActions
>> = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPokemonRequest());
    try {
      const result = await getPokemon(id);
      const { data: pokemon } = result;

      dispatch(fetchPokemonSuccess(pokemon));
    } catch (error) {
      console.log(error);
      dispatch(fetchPokemonError());
    }
  };
};
