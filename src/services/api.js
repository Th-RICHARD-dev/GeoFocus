import axios from 'axios';

const BASE_URL = '/api/countries';

function buildParams(fields = []) {
  const params = new URLSearchParams();

  if (fields && fields.length) {
    params.set('fields', fields.join(','));
  }

  return params.toString();
}

function get(endpoint, fields = []) {
  const params = new URLSearchParams();

  params.set('endpoint', endpoint);

  if (fields && fields.length) {
    params.set('fields', fields.join(','));
  }

  return axios.get(`${BASE_URL}?${params.toString()}`);
}

function getAllCountries(fields = []) {
  return get('all', fields);
}

function getCountryByCode(code, fields = []) {
  return get(`alpha/${code}`, fields);
}

function getCountryByName(name, fields = []) {
  return get(`name/${encodeURIComponent(name)}`, fields);
}

export default {
  get,
  getAllCountries,
  getCountryByCode,
  getCountryByName
};