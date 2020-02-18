import React from 'react';
import { List, Spin } from 'antd';
import { usePokemons } from '../../../store/pokemons/hooks';
import InfiniteScroll from 'react-infinite-scroller';
import { PokemonListItem } from '../PokemonListItem';

type PokemonListProps = {
  isScrollable: boolean;
};

export const PokemonList: React.FC<PokemonListProps> = props => {
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
        hasMore={!loading && currentPage <= totalPages && props.isScrollable}
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
            <div
              style={{
                position: 'absolute',
                bottom: '40px',
                width: '100%',
                textAlign: 'center'
              }}
              className='demo-loading-container'
            >
              <Spin />
            </div>
          )}
        </List>
      </InfiniteScroll>
    </>
  );
};
