import { StoreType } from '..';
import { IPokemon } from '../../types/models/pokemons';

export const getPokemon = (store: StoreType): IPokemon | null => {
  return store.pokemon.pokemon;
};

export const isFetching = (store: StoreType): boolean => {
  return store.pokemon.isFetching;
};
