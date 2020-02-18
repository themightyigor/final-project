import { StoreType } from '..';
import { ICatchedPokemon } from '../../types/models/pokemons';

export const getCaughtPokemons = (store: StoreType): ICatchedPokemon[] => {
  return store.caught.data;
};
