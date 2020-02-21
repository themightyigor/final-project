import React from 'react';
import './index.css';
import { Descriptions, Badge } from 'antd';
import { IPokemon, ICaughtPokemon } from '../../../types/models/pokemons';
import {
  capitalizeFirst,
  formatDate,
  onImageError
} from '../../../helpers/utils';

type PokemonInfoProps = {
  pokemon: IPokemon;
  isCaught: boolean;
  match: ICaughtPokemon | undefined;
};

export const PokemonInfo: React.FC<PokemonInfoProps> = ({
  pokemon,
  isCaught,
  match
}) => {
  const { name, id } = pokemon;

  return (
    <>
      <img
        className='pokemon-image'
        alt='example'
        src={`/images/${id}.png`}
        onError={e => onImageError(e)}
      />
      <Descriptions title='Pokemon Info' layout='vertical' bordered>
        <Descriptions.Item label='Name'>
          {capitalizeFirst(name)}
        </Descriptions.Item>
        <Descriptions.Item label='ID'>{id}</Descriptions.Item>
        <Descriptions.Item label='Catch Date'>
          {match ? formatDate(match.date) : 'N/A'}
        </Descriptions.Item>
        <Descriptions.Item label='Status' span={3}>
          <Badge
            status={isCaught ? 'error' : 'default'}
            text={isCaught ? 'Caught' : 'Free'}
          />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
