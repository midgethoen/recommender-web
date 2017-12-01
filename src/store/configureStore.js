import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
// import { persistState } from 'redux-devtools';
import persistState from 'redux-localstorage';
import { pick } from 'ramda';

import {
} from '../middleware';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  let composeEnhancers;

  if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  } else {
    composeEnhancers = compose;
  }

  const router = routerMiddleware(browserHistory);
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        apiMiddleware,
        router
      ),
      // the logged-in user is persisted in local-storage
      persistState()
    )
  );

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
