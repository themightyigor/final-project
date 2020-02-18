import axios from '../utilities/axios';
import { PER_PAGE } from '../constants/pokemons';

export const getPokemons = (page: number) =>
  axios({
    url: `/pokemons?_page=${page}&_limit=${PER_PAGE}`,
    method: 'GET'
  });

export const getPokemon = (id: number) =>
  axios({
    url: `/pokemons/${id}`,
    method: 'GET'
  });
