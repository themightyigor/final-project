import { Reducer } from 'redux';
import { IPokemonState, IPokemonActions } from './types';
import { PokemonActionTypes } from './actions';

const initialState: IPokemonState = {
  pokemon: null,
  isFetching: false
};

export const reducer: Reducer<IPokemonState, IPokemonActions> = (
  state: IPokemonState = initialState,
  action: IPokemonActions
): IPokemonState => {
  switch (action.type) {
    case PokemonActionTypes.FETCH_POKEMON_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case PokemonActionTypes.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokemon: action.payload
      };

    default:
      return state;
  }
};
