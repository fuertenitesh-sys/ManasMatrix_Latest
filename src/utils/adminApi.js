const adminApiFetch = (url, options = {}) => fetch(url, {
  ...options,
  credentials: 'same-origin',
  cache: 'no-store'
});

export default adminApiFetch;
