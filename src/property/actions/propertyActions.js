import {SEARCH, SAVE_PROPERTIES, CHECK_PROPERTY_DETAILS} from './propertyActionTypes'

export function search(criteria) {
  return { type: SEARCH, payload: criteria }
}

export function saveProperties(properties) {
  return { type: SAVE_PROPERTIES, payload: properties }
}

export function checkPropertyDetails(property) {
  return { type: CHECK_PROPERTY_DETAILS, payload: property }
}
