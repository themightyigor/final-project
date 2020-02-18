import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon, isFetching } from './selectors';
import { fetchPokemon } from './actions';
import { IPokemon } from '../../types/models/pokemons';

interface IPokemonsHook {
  pokemon: IPokemon | null;
  fetch: (id: number) => void;
  loading: boolean;
}

export function usePokemon(): IPokemonsHook {
  const dispatch = useDispatch();
  const pokemon = useSelector(getPokemon);
  const loading = useSelector(isFetching);

  const fetch = useCallback(
    (id: number) => {
      dispatch(fetchPokemon(id));
    },
    [dispatch]
  );

  return { pokemon, fetch, loading };
}
