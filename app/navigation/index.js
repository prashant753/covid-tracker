import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Router from '../router';

import Country from '../views/country';
import NotFound from '../views/notFound';

export class Navigation extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={`${Router.WebRoutes.country}`} exact component={Country} />
        {/* <Route path={`${WebRoutes.state}`} exact={true} component={State} /> */}
        <Route path="*" exact component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(Navigation);
