import React from 'react';
import './index.css';
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { PokemonListItem } from '../PokemonListItem';
import { usePokemons } from '../../../store/pokemons/hooks';

type PokemonListProps = {
  isScrollable: boolean;
};

export const PokemonList: React.FC<PokemonListProps> = ({ isScrollable }) => {
  const {
    fetch: fetchMore,
    pokemons: items,
    loading,
    currentPage,
    totalPages
  } = usePokemons();

  return (
    <>
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={() => fetchMore()}
        hasMore={!loading && currentPage <= totalPages && isScrollable}
      >
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4
          }}
          dataSource={items}
          renderItem={item => (
            <List.Item key={item.id}>
              <PokemonListItem {...item} />
            </List.Item>
          )}
        >
          {loading && (
            <div className='loading-container'>
              <Spin />
            </div>
          )}
        </List>
      </InfiniteScroll>
    </>
  );
};
