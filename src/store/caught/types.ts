import { Action } from 'redux';
import { CaughtPokemonActionTypes } from './actions';
import { ICatchedPokemon } from '../../types/models/pokemons';

export interface ICatchPokemonAction
  extends Action<typeof CaughtPokemonActionTypes.CATCH_POKEMON> {
  readonly payload: {
    id: number;
    date: number;
  };
}

export interface ICaughtPokemonState {
  readonly data: ICatchedPokemon[];
}

export type ICaughtPokemonActions = ICatchPokemonAction;
