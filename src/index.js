import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './Root';

// data store
import store from './store';

// history
const history = syncHistoryWithStore(browserHistory, store);

const rootNode = document.querySelector('#root');

ReactDOM.render(
  <Root store={store} history={history} />,
  rootNode
);
