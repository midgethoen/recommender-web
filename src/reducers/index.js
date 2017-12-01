import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import * as R from 'ramda';

import series from './series'

export default combineReducers({
  routing,
  series,
});
