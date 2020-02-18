import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple';
import { reducer as pokemons } from './pokemons/reducer';
import { reducer as pokemon } from './pokemon/reducer';
import { reducer as caught } from './caught/reducer';

export const reducer = combineReducers({
  pokemons,
  pokemon,
  caught
});

export const store = createStore(
  reducer,
  load({ states: ['caught'] }),
  composeWithDevTools(applyMiddleware(thunk, save({ states: ['caught'] })))
);

export type StoreType = ReturnType<typeof reducer>;
