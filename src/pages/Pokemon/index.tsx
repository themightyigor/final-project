import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePokemon } from '../../store/pokemon/hooks';
import { useCaughtPokemon } from '../../store/caught/hooks';
import { PokemonInfo } from './PokemonInfo';

export const Pokemon: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const { fetch, pokemon, loading } = usePokemon();
  const { isCaught, match } = useCaughtPokemon(pokemon ? pokemon.id : 0);

  useEffect(() => {
    if (id) {
      fetch(parseInt(id));
    }
  }, []);

  const props = { pokemon, isCaught, match };

  return <>{pokemon && !loading && <PokemonInfo {...props} />}</>;
};
