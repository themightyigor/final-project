import { ActionCreator } from 'redux';
import { ICaughtPokemonsActions } from './types';

export enum CaughtPokemonsActionTypes {
  CATCH_POKEMON = 'CATCH_POKEMON'
}

export const catchPokemon: ActionCreator<ICaughtPokemonsActions> = (
  id: number
) => {
  return {
    type: CaughtPokemonsActionTypes.CATCH_POKEMON,
    payload: {
      id,
      date: Date.now()
    }
  };
};
