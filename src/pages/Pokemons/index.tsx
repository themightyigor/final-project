import React, { useEffect } from 'react';
import { PokemonList } from './PokemonList';
import { usePokemons } from '../../store/pokemons/hooks';

export const Pokemons: React.FC = (): JSX.Element => {
  const { fetch, clear } = usePokemons();

  useEffect(() => {
    fetch();

    return () => clear();
  }, []);

  return <PokemonList isScrollable={true} />;
};
