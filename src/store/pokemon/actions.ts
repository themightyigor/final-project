import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { getPokemon } from '../../services/pokemonService';
import { IPokemonActions } from './types';
import { StoreType } from '..';

export enum PokemonActionTypes {
  FETCH_POKEMON_REQUEST = 'POKEMON_FETCH_REQUEST',
  FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS',
  FETCH_POKEMON_ERROR = 'POKEMON_FETCH_ERROR'
}

export const fetchPokemon: ActionCreator<ThunkAction<
  void,
  StoreType,
  null,
  IPokemonActions
>> = (id: number) => {
  return async (dispatch: Dispatch) => {
    console.log(id);
    dispatch({ type: PokemonActionTypes.FETCH_POKEMON_REQUEST });
    try {
      const result = await getPokemon(id);

      dispatch({
        type: PokemonActionTypes.FETCH_POKEMON_SUCCESS,
        payload: result.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
