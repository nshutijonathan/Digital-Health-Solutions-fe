import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Users from '../components/users/users.components';
import Landingpage from '../components/landingpage/landingpage';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/users/all' component={Users} />
      <Route exact path='' component={Landingpage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
