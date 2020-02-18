import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { getPokemons, getPokemon } from '../../services/pokemonService';
import { IPokemonsActions } from './types';
import { StoreType } from '..';

export enum PokemonsActionTypes {
  FETCH_POKEMONS_REQUEST = 'POKEMONS_FETCH_REQUEST',
  FETCH_POKEMONS_SUCCESS = 'POKEMONS_FETCH_SUCCESS',
  FETCH_POKEMONS_ERROR = 'POKEMONS_FETCH_ERROR',
  CLEAR_POKEMONS = 'CLEAR_POKEMONS',
  FETCH_CAUGHT_POKEMONS_SUCCESS = 'FETCH_CAUGHT_POKEMONS_SUCCESS'
}

export const fetchPokemons = (page: number) => async dispatch => {
  dispatch({ type: PokemonsActionTypes.FETCH_POKEMONS_REQUEST });
  try {
    const result = await getPokemons(page);

    if (result.status === 200) {
      dispatch({
        type: PokemonsActionTypes.FETCH_POKEMONS_SUCCESS,
        payload: {
          data: result.data,
          totalCount: result.headers['x-total-count']
        }
      });
    } else {
      throw new Error(`Error: ${result.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchCaughtPokemons: ActionCreator<ThunkAction<
  void,
  StoreType,
  null,
  IPokemonsActions
>> = (id: number) => async (dispatch: Dispatch) => {
  dispatch({ type: PokemonsActionTypes.FETCH_POKEMONS_REQUEST });
  try {
    const result = await getPokemon(id);

    if (result.status === 200) {
      dispatch({
        type: PokemonsActionTypes.FETCH_CAUGHT_POKEMONS_SUCCESS,
        payload: result.data
      });
    } else {
      throw new Error(`Error: ${result.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const clearPokemons = () => {
  return {
    type: PokemonsActionTypes.CLEAR_POKEMONS
  };
};
