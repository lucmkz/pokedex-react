import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// import List from '../pages/list';
import Pokedex from '../pages/pokedex';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/list" component={List} /> */}
      <Route path="/" component={Pokedex} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
