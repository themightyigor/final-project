import { Reducer } from 'redux';
import { ICaughtPokemonsState, ICaughtPokemonsActions } from './types';
import { CaughtPokemonsActionTypes } from './actions';

const initialState: ICaughtPokemonsState = {
  data: []
};

export const reducer: Reducer<ICaughtPokemonsState, ICaughtPokemonsActions> = (
  state: ICaughtPokemonsState = initialState,
  action: ICaughtPokemonsActions
): ICaughtPokemonsState => {
  switch (action.type) {
    case CaughtPokemonsActionTypes.CATCH_POKEMON:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};
