import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// import List from '../pages/list';
import Pokedex from '../pages/pokedex';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* To build on GH-Pages */}
      <Route path="/pokedex-react/" component={Pokedex} />

      {/* To Dev */}
      <Route path="/" component={Pokedex} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
