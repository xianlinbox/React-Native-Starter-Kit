import {GOTO_ROUTE, ROUTES} from './navigationConstants';

export function goToSearchResults({properties}) {
  return {
    type: GOTO_ROUTE,
    payload: ROUTES.SEARCH_RESULTS(properties)
  };
}
export function goToPropertyDetails(property) {
  return {
    type: GOTO_ROUTE,
    payload: ROUTES.PROPERTY_DETAILS(property)
  };
}
export function onNavigate(payload) {
  return {
    type: GOTO_ROUTE,
    ...payload
  };
}