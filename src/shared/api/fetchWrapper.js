function wrappedFetch(url, headers) {
  return fetch(url, headers)
    .then(response => response.json());
}

module.exports = {
  wrappedFetch,
};
