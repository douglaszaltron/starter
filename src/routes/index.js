import React from 'react';
import { Switch } from 'react-router';

import SignIn from '../screens/common/SignIn';
import SignUp from '../screens/common/SignUp';
import DashboardField from '../screens/modules/field/Dashboard';
import DashboardSales from '../screens/modules/sales/Dashboard';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signIn" exact component={SignIn} />
      <Route path="/SignUp" exact component={SignUp} />
      <Route path="/field/dashboard" component={DashboardField} isPrivate />
      <Route path="/sales/dashboard" component={DashboardSales} isPrivate />
    </Switch>
  );
}
