import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Router from '../router';

import Country from '../views/country';
import State from '../views/state';
import NotFound from '../ui/notFound';

export class Navigation extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={`${Router.WebRoutes.country}`} exact component={Country} />
        <Route path={`${Router.WebRoutes.state}`} exact={true} component={State} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(Navigation);
