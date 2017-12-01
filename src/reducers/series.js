import { handleActions } from 'redux-actions';
import {ADD_SERIES} from '../actions';

export default handleActions({
  [ADD_SERIES]: (state, {payload}) => ([
    ...state,
    payload
  ]),
}, [])
