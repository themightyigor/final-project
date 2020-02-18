import { Reducer } from 'redux';
import { ICaughtPokemonState, ICaughtPokemonActions } from './types';
import { CaughtPokemonActionTypes } from './actions';
import { ICatchedPokemon } from '../../types/models/pokemons';

const initialState: ICaughtPokemonState = {
  data: []
};

export const reducer: Reducer<ICaughtPokemonState, ICaughtPokemonActions> = (
  state: ICaughtPokemonState = initialState,
  action: ICaughtPokemonActions
): ICaughtPokemonState => {
  switch (action.type) {
    case CaughtPokemonActionTypes.CATCH_POKEMON:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};
