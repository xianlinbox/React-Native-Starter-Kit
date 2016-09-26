function wrappedFetch(url, headers) {
  return fetch(url, headers)
    .then(response => {
      return response.json();
    });
};

module.exports = {
  wrappedFetch
};