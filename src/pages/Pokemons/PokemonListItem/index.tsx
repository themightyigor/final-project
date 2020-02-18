import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { CatchButton } from '../CatchButton';
import { IPokemon } from '../../../types/models/pokemons';

type IPokemonListItemProps = IPokemon;

const { Meta } = Card;

export const PokemonListItem: React.FC<IPokemonListItemProps> = ({
  id,
  name
}) => {
  console.log('render');

  return (
    <Card
      hoverable
      extra={<CatchButton id={id} />}
      cover={
        <Link to={`/pokemons/${id}`}>
          <img
            style={{
              display: 'block',
              width: '70%',
              maxWidth: '240px',
              margin: '0 auto'
            }}
            alt='example'
            src={`/images/${id}.png`}
          />
        </Link>
      }
    >
      <Meta title={name} />
    </Card>
  );
};
