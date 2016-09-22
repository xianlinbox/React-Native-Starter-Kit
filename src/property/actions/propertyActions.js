import {SEARCH, CHECK_PROPERTY_DETAILS} from './propertyActionTypes'

export function search(criteria) {
  return { type: SEARCH, payload: criteria }
}

export function checkPropertyDetails(property) {
  return { type: CHECK_PROPERTY_DETAILS, payload: property }
}
