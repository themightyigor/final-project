import { ActionCreator } from 'redux';
import { ICaughtPokemonActions } from './types';

export enum CaughtPokemonActionTypes {
  CATCH_POKEMON = 'CATCH_POKEMON'
}

export const catchPokemon: ActionCreator<ICaughtPokemonActions> = (
  id: number
) => {
  return {
    type: CaughtPokemonActionTypes.CATCH_POKEMON,
    payload: {
      id: id,
      date: Date.now()
    }
  };
};
