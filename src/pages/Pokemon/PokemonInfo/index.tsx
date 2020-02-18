import React from 'react';
import { Descriptions, Badge } from 'antd';

export const PokemonInfo = ({ pokemon, isAdded, match }) => {
  return (
    <Descriptions title='Pokemon Info' layout='vertical' bordered>
      <Descriptions.Item label='Name'>{pokemon.name}</Descriptions.Item>
      <Descriptions.Item label='ID'>{pokemon.id}</Descriptions.Item>
      <Descriptions.Item label='Catch Date'>
        {match ? new Date(match.date).toLocaleString() : 'N/A'}
      </Descriptions.Item>
      <Descriptions.Item label='Status' span={3}>
        <Badge
          status={isAdded ? 'error' : 'default'}
          text={isAdded ? 'Catched' : 'Free'}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};
