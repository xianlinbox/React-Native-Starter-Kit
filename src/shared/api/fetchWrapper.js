function wrappedFetch(url, headers, onSuccess, OnFailure) {
  return fetch(url, headers)
    .then(response => response.json())
    .then(json => onSuccess(json.response))
    .catch(error => {
      OnFailure(error)
    });
};

module.exports = {
  wrappedFetch
};