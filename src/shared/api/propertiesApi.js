'use strict';

function findProperties(query, success, fail) {
  fetch(query)
    .then(response => response.json())
    .then(json => success(json.response))
    .catch(error => fail(error));
}

module.exports = {
  findProperties
};