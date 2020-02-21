import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPokemons,
  isFetching,
  getTotalPages,
  getCurrentPage
} from './selectors';
import { fetchPokemons, fetchCaughtPokemons, clearPokemons } from './actions';
import { IPokemon } from '../../types/models/pokemons';
import { getCaughtPokemons } from '../caught/selectors';

interface IPokemonsHook {
  pokemons: IPokemon[];
  fetch: () => void;
  loading: boolean;
  clear: () => void;
  totalPages: number;
  currentPage: number;
}

interface ICaughtPokemonsListHook {
  fetchCaught: () => void;
  loading: boolean;
  clear: () => void;
}

export function usePokemons(): IPokemonsHook {
  const dispatch = useDispatch();
  const pokemons = useSelector(getPokemons);
  const loading = useSelector(isFetching);
  const totalPages = useSelector(getTotalPages);
  const currentPage = useSelector(getCurrentPage);

  const fetch = useCallback(() => {
    dispatch(fetchPokemons(currentPage));
  }, [dispatch, currentPage]);

  const clear = useCallback(() => {
    dispatch(clearPokemons());
  }, []);

  return {
    pokemons,
    fetch,
    loading,
    clear,
    totalPages,
    currentPage
  };
}

export function useCaughtPokemonsList(): ICaughtPokemonsListHook {
  const dispatch = useDispatch();
  const caught = useSelector(getCaughtPokemons);
  const loading = useSelector(isFetching);

  const { clear } = usePokemons();

  const fetchCaught = useCallback(() => {
    caught
      .map(caught => caught.id)
      .reverse()
      .forEach(id => {
        dispatch(fetchCaughtPokemons(id));
      });
  }, [dispatch]);

  return { fetchCaught, loading, clear };
}
