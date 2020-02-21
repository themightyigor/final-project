import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon } from './actions';
import { getCaughtPokemons } from './selectors';
import { ICaughtPokemon } from '../../types/models/pokemons';

interface ICaughtPokemonsHook {
  capture: (id: number) => void;
  isCaught: boolean;
}

interface ICaughtPokemonHook {
  isCaught: boolean;
  match: ICaughtPokemon | undefined;
}

export function useCaughtPokemons(id: number): ICaughtPokemonsHook {
  const dispatch = useDispatch();
  const caught = useSelector(getCaughtPokemons);

  const currentIndex = useMemo<number>(
    () => caught.map(c => c.id).indexOf(id),
    [id, caught]
  );

  const isCaught = useMemo<boolean>(() => currentIndex !== -1, [currentIndex]);

  const capture = useCallback(
    (id: number) => {
      dispatch(catchPokemon(id));
    },
    [dispatch]
  );

  return { capture, isCaught };
}

export function useCaughtPokemon(id: number): ICaughtPokemonHook {
  const caught = useSelector(getCaughtPokemons);

  const { isCaught } = useCaughtPokemons(id);

  const match = useMemo(() => caught.find(c => c.id === id), [id]);

  return { isCaught, match };
}
