import { Action } from 'redux';
import { IPokemon } from '../../types/models/pokemons';
import { PokemonsActionTypes } from './actions';

export interface IFetchPokemonsSuccessAction
  extends Action<typeof PokemonsActionTypes.FETCH_POKEMONS_SUCCESS> {
  readonly payload: {
    pokemons: IPokemon[];
    totalCount: number;
  };
}

export interface IFetchCaughtPokemonsSuccessAction
  extends Action<typeof PokemonsActionTypes.FETCH_CAUGHT_POKEMONS_SUCCESS> {
  readonly payload: IPokemon;
}

export interface IFetchPokemonsRequestAction
  extends Action<typeof PokemonsActionTypes.FETCH_POKEMONS_REQUEST> {}

export interface IFetchPokemonsError
  extends Action<typeof PokemonsActionTypes.FETCH_POKEMONS_ERROR> {}

export interface IClearPokemonsAction
  extends Action<typeof PokemonsActionTypes.CLEAR_POKEMONS> {}

export interface IPokemonsState {
  readonly pokemons: IPokemon[];
  readonly isFetching: boolean;
  readonly totalCount: number;
  readonly currentPage: number;
}

export type IPokemonsActions =
  | IFetchPokemonsRequestAction
  | IFetchPokemonsSuccessAction
  | IFetchCaughtPokemonsSuccessAction
  | IFetchPokemonsError
  | IClearPokemonsAction;
