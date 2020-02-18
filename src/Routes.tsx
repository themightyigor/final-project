import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  POKEMONS_INDEX_ROUTE,
  POKEMONS_VIEW_ROUTE,
  POKEMONS_CAUGHT_VIEW_ROUTE
} from './constants/routes';
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon';
import Caught from './pages/Caught';

import Header from './components/Header';
import { Layout } from 'antd';

const { Content } = Layout;

const Routes = () => (
  <Layout>
    <Header />
    <Content style={{ padding: '0 50px', marginTop: 32 }}>
      <Switch>
        <Route exact path={POKEMONS_INDEX_ROUTE} component={Pokemons} />
        <Route exact path={POKEMONS_VIEW_ROUTE} component={Pokemon} />
        <Route path={POKEMONS_CAUGHT_VIEW_ROUTE} component={Caught} />
      </Switch>
    </Content>
  </Layout>
);

export default Routes;
