import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import List from '../pages/list';
import Pokedex from '../pages/pokedex';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* To build on GH-Pages */}
      <Route path="/pokedex-react/" component={Pokedex} />
      <Route path="/list/" component={List} />

      {/* To Dev */}
      <Route path="/" component={List} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
