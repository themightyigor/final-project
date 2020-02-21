import { Action } from 'redux';
import { IPokemon } from '../../types/models/pokemons';
import { PokemonActionTypes } from './actions';

export interface IFetchPokemonRequestAction
  extends Action<typeof PokemonActionTypes.FETCH_POKEMON_REQUEST> {}

export interface IFetchPokemonSuccessAction
  extends Action<typeof PokemonActionTypes.FETCH_POKEMON_SUCCESS> {
  readonly payload: IPokemon;
}

export interface IFetchPokemonErrorAction
  extends Action<typeof PokemonActionTypes.FETCH_POKEMON_ERROR> {}

export interface IPokemonState {
  readonly pokemon: IPokemon | null;
  readonly isFetching: boolean;
}

export type IPokemonActions =
  | IFetchPokemonRequestAction
  | IFetchPokemonSuccessAction
  | IFetchPokemonErrorAction;
