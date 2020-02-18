import { Action } from 'redux';
import { IPokemon } from '../../types/models/pokemons';
import { PokemonActionTypes } from './actions';

export interface IFetchPokemonsSuccessAction
  extends Action<typeof PokemonActionTypes.FETCH_POKEMON_SUCCESS> {
  readonly payload: IPokemon;
}

export interface IFetchPokemonsRequestAction
  extends Action<typeof PokemonActionTypes.FETCH_POKEMON_REQUEST> {}

export interface IPokemonState {
  readonly pokemon: IPokemon | null;
  readonly isFetching: boolean;
}

export type IPokemonActions =
  | IFetchPokemonsRequestAction
  | IFetchPokemonsSuccessAction;
