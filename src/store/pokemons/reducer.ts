import { Reducer } from 'redux';
import { IPokemonsState, IPokemonsActions } from './types';
import { PokemonsActionTypes } from './actions';

const initialState: IPokemonsState = {
  pokemons: [],
  isFetching: false,
  totalCount: 0,
  currentPage: 1
};

export const reducer: Reducer<IPokemonsState, IPokemonsActions> = (
  state: IPokemonsState = initialState,
  action: IPokemonsActions
): IPokemonsState => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case PokemonsActionTypes.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokemons: [...state.pokemons, ...action.payload.data],
        totalCount: action.payload.totalCount,
        currentPage: state.currentPage + 1
      };
    case PokemonsActionTypes.FETCH_CAUGHT_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokemons: [...state.pokemons, action.payload]
      };
    case PokemonsActionTypes.CLEAR_POKEMONS:
      return { ...initialState };

    default:
      return state;
  }
};
