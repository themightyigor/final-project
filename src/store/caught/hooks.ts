import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon } from './actions';
import { getCaughtPokemons } from './selectors';
import { ICatchedPokemon } from '../../types/models/pokemons';

interface ICaughtPokemonsHook {
  capture: (id: number) => void;
  isAdded: boolean;
}

interface ICaughtPokemonHook {
  isAdded: boolean;
  match: ICatchedPokemon;
}

export function useCaughtPokemons(id): ICaughtPokemonsHook {
  const dispatch = useDispatch();
  const captured = useSelector(getCaughtPokemons);

  const currentIndex = useMemo<number>(
    () => captured.map(capture => capture.id).indexOf(id),
    [id, captured]
  );

  const isAdded = useMemo<boolean>(() => currentIndex !== -1, [currentIndex]);

  const capture = useCallback(
    (id: number) => {
      dispatch(catchPokemon(id));
    },
    [dispatch]
  );

  return { capture, isAdded };
}

export function useCaughtPokemon(id): ICaughtPokemonHook {
  const captured = useSelector(getCaughtPokemons);

  const { isAdded } = useCaughtPokemons(id);

  const match = useMemo(() => captured.find(capture => capture.id === id), [
    id
  ]);

  return { isAdded, match };
}
