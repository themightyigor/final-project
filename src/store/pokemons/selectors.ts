import { StoreType } from '..';
import { IPokemon } from '../../types/models/pokemons';
import { PER_PAGE } from '../../constants/pokemons';

export const getPokemons = (store: StoreType): IPokemon[] => {
  return store.pokemons.pokemons;
};

export const isFetching = (state: any): boolean => {
  return state.pokemons.isFetching;
};

export const getTotalPages = (state: any): number => {
  return Math.ceil(state.pokemons.totalCount / PER_PAGE);
};

export const getCurrentPage = (state: any): number => {
  return state.pokemons.currentPage;
};
