
import * as _ from 'lodash';
import {wrappedFetch as fetch} from './fetchWrapper';

function urlForQueryAndPage(request, pageNumber) {
  let data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber,
  };
  data = _.merge({}, data, request);

  const querystring = Object.keys(data)
    .map(key => `${key}=${encodeURIComponent(data[key])}`)
    .join('&');

  return `http://api.nestoria.co.uk/api?${querystring}`;
}

function findProperties(request, onSuccess, onFailure) {
  const url = urlForQueryAndPage(request, 1);
  return Promise.resolve()
    .then(() => fetch(url, undefined))
    .then(json => onSuccess(json.response))
    .catch(error => onFailure(error));
}

module.exports = {
  findProperties,
};
