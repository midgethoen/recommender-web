import { CALL_API } from 'redux-api-middleware';
import { createAction } from 'redux-actions';
import { resolveTVDBHeaders, resolveTVDBUrl } from '../utils';
import qs from 'query-string'

export const REQUEST_SEARCH_SERIES = 'REQUEST_SEARCH_SERIES'
export const SUCCESS_SEARCH_SERIES = 'SUCCESS_SEARCH_SERIES'
export const FAILURE_SEARCH_SERIES = 'FAILURE_SEARCH_SERIES'

export function searchSeries(name) {
  return {
    [CALL_API]: {
      endpoint: resolveTVDBUrl(`/search/series?${qs.stringify({ name })}`),
      method: 'GET',
      headers: resolveTVDBHeaders({}),
      types: [
        REQUEST_SEARCH_SERIES,
        SUCCESS_SEARCH_SERIES,
        FAILURE_SEARCH_SERIES,
      ],
    },
  };
}

export const ADD_SERIES = 'ADD_SERIES'
export function addSeries(id) {
  return async function (dispatch) {
    let [info, artwork] = await Promise.all([
      fetch(
        resolveTVDBUrl(`/series/${id}`),
        { headers: resolveTVDBHeaders() }
      ).then(res => res.json()),
      fetch(
        resolveTVDBUrl(`/series/${id}/images/query?keyType=fanart`),
        { headers: resolveTVDBHeaders() }
      ).then(res => res.json())
    ])
    if (!info.data){return}
    info = info.data
    console.log({artwork});
    if (artwork.data) {
      for (let a of artwork.data) {
        if (!info.artwork || a.ratingsInfo.average > info.artwork.ratingsInfo.average){
          info.artwork = a
        }
      }
    }
    dispatch({ type: ADD_SERIES, payload: info })
  }
}
