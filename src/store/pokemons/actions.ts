import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { getPokemons, getPokemon } from '../../services/pokemonService';
import { IPokemonsActions } from './types';
import { IPokemon } from '../../types/models/pokemons';
import { StoreType } from '..';

export enum PokemonsActionTypes {
  FETCH_POKEMONS_REQUEST = 'POKEMONS_FETCH_REQUEST',
  FETCH_POKEMONS_SUCCESS = 'POKEMONS_FETCH_SUCCESS',
  FETCH_POKEMONS_ERROR = 'POKEMONS_FETCH_ERROR',
  CLEAR_POKEMONS = 'CLEAR_POKEMONS',
  FETCH_CAUGHT_POKEMONS_SUCCESS = 'POKEMONS_CAUGHT_FETCH_SUCCESS'
}

const fetchPokemonsRequest: ActionCreator<IPokemonsActions> = () => {
  return {
    type: PokemonsActionTypes.FETCH_POKEMONS_REQUEST
  };
};

const fetchPokemonsSuccess: ActionCreator<IPokemonsActions> = (
  pokemons: IPokemon[],
  totalCount: number
) => {
  return {
    type: PokemonsActionTypes.FETCH_POKEMONS_SUCCESS,
    payload: { pokemons, totalCount }
  };
};

const fetchCaughtPokemonsSuccess: ActionCreator<IPokemonsActions> = (
  caughtPokemon: IPokemon
) => {
  return {
    type: PokemonsActionTypes.FETCH_CAUGHT_POKEMONS_SUCCESS,
    payload: caughtPokemon
  };
};

const fetchPokemonsError: ActionCreator<IPokemonsActions> = () => {
  return {
    type: PokemonsActionTypes.FETCH_POKEMONS_ERROR
  };
};

export const fetchPokemons: ActionCreator<ThunkAction<
  void,
  StoreType,
  null,
  IPokemonsActions
>> = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPokemonsRequest());

    try {
      const result = await getPokemons(page);
      const { data: pokemons, headers } = result;
      const totalCount = headers['x-total-count'];

      dispatch(fetchPokemonsSuccess(pokemons, totalCount));
    } catch (error) {
      console.log(error);
      dispatch(fetchPokemonsError());
    }
  };
};

export const fetchCaughtPokemons: ActionCreator<ThunkAction<
  void,
  StoreType,
  null,
  IPokemonsActions
>> = (id: number) => async (dispatch: Dispatch) => {
  dispatch(fetchPokemonsRequest());

  try {
    const result = await getPokemon(id);
    const { data: caughtPokemon } = result;

    dispatch(fetchCaughtPokemonsSuccess(caughtPokemon));
  } catch (error) {
    console.log(error);
    dispatch(fetchPokemonsError());
  }
};

export const clearPokemons = () => {
  return {
    type: PokemonsActionTypes.CLEAR_POKEMONS
  };
};
