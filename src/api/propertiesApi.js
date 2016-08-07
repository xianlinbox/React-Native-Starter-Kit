'use strict';

function findProperties(query) {
  fetch(query)
    .then(response => response.json())
    .then(json => this._handleResponse(json.response))
    .catch(error =>
      this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
      }));
}

module.exports = {
  findProperties
};