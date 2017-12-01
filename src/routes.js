import React from 'react';
import { Route, Redirect } from 'react-router';

import Watch from './components/Watch'
import Device from './components/Device'
export default (
  <Route>
    <Route path='/' component={Watch} />
    <Route path='/device' component={Device} />
    <Route path='/done' component={Watch} />
    <Route path='/outbox' component={Watch} />
    <Route path='/inbox' component={Watch} />
    <Route path='/settings' component={Watch} />
    <Redirect from='*' to='/' />
  </Route>
);
