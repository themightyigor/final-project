import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { IPokemon } from '../../../types/models/pokemons';
import { CatchButton } from '../CatchButton';
import { capitalizeFirst, onImageError } from '../../../helpers/utils';

type IPokemonListItemProps = IPokemon;

const { Meta } = Card;

export const PokemonListItem: React.FC<IPokemonListItemProps> = ({
  id,
  name
}) => {
  return (
    <Card
      hoverable
      extra={<CatchButton id={id} />}
      cover={
        <Link to={`/pokemons/${id}`}>
          <img
            className='pokemon-image'
            src={`/images/${id}.png`}
            onError={e => onImageError(e)}
          />
        </Link>
      }
    >
      <Meta title={capitalizeFirst(name)} />
    </Card>
  );
};
