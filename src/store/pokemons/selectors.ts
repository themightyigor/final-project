import { IPokemon } from '../../types/models/pokemons';
import { StoreType } from '..';
import { PER_PAGE } from '../../constants/pokemons';

export const getPokemons = (store: StoreType): IPokemon[] => {
  return store.pokemons.pokemons;
};

export const isFetching = (store: StoreType): boolean => {
  return store.pokemons.isFetching;
};

export const getTotalPages = (store: StoreType): number => {
  return Math.ceil(store.pokemons.totalCount / PER_PAGE);
};

export const getCurrentPage = (store: StoreType): number => {
  return store.pokemons.currentPage;
};
