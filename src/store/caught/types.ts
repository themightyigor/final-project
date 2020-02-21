import { Action } from 'redux';
import { CaughtPokemonsActionTypes } from './actions';
import { ICaughtPokemon } from '../../types/models/pokemons';

export interface ICatchPokemonAction
  extends Action<typeof CaughtPokemonsActionTypes.CATCH_POKEMON> {
  readonly payload: {
    id: number;
    date: number;
  };
}

export interface ICaughtPokemonsState {
  readonly data: ICaughtPokemon[];
}

export type ICaughtPokemonsActions = ICatchPokemonAction;
