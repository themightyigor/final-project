import { StoreType } from '..';
import { ICaughtPokemon } from '../../types/models/pokemons';

export const getCaughtPokemons = (store: StoreType): ICaughtPokemon[] => {
  return store.caught.data;
};
