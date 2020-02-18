import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePokemon } from '../../store/pokemon/hooks';
import { useCaughtPokemon } from '../../store/caught/hooks';
import { PokemonInfo } from './PokemonInfo';

const Pokemon: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const { fetch, pokemon, loading } = usePokemon();
  const { isAdded, match } = useCaughtPokemon(
    pokemon ? pokemon.id : 'undefined'
  );

  console.log(id);
  useEffect(() => {
    if (id) {
      fetch(parseInt(id));
    }
  }, []);

  const props = { pokemon, isAdded, match };

  return (
    <>
      {pokemon && !loading && (
        <>
          <img
            style={{
              display: 'block',
              width: '70%',
              maxWidth: '240px',
              margin: '0 auto'
            }}
            alt='example'
            src={`/images/${pokemon.id}.png`}
          />
          <PokemonInfo {...props} />
        </>
      )}
    </>
  );
};

export default Pokemon;
