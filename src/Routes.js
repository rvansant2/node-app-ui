import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Pages/Components
 */
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const Routes = () => {
  return (
    <Switch>
      {/* Defaut Home Route */}
      <Route exact path="/" component={Home} />
      {/* Defaut Login/SignUp Routes */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
