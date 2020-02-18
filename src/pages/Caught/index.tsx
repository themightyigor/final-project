import React, { useEffect } from 'react';
import { PokemonList } from '../Pokemons/PokemonList';
import { useCaughtPokemonsList } from '../../store/pokemons/hooks';

const Caught = () => {
  const { fetchCaught, clear } = useCaughtPokemonsList();

  useEffect(() => {
    fetchCaught();

    return () => clear();
  }, []);

  return <PokemonList isScrollable={false} />;
};

export default Caught;
