export const GOTO_ROUTE = '@@navigator/GOTO_ROUTE';

export const ROUTE_IDS = {
  SEARCH: 'SEARCH',
  SEARCH_RESULTS: 'SEARCH_RESULTS',
  PROPERTY_DETAILS: 'PROPERTY_DETAILS'
};

export const ROUTES = {
  SEARCH: {
    index: 0,
    key: ROUTE_IDS.SEARCH
  },

  SEARCH_RESULTS: (properties) => ({
    index: 1,
    key: ROUTE_IDS.SEARCH_RESULTS,
    properties: properties
  }),

  PROPERTY_DETAILS: (property) => ({
    index: 2,
    key: ROUTE_IDS.PROPERTY_DETAILS,
    property: property
  })
};