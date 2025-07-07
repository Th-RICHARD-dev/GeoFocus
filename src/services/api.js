import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

function buildFields(fields) {
  return fields && fields.length ? `?fields=${fields.join(',')}` : '';
}

function get(endpoint, fields = []) {
  const url = `${BASE_URL}${endpoint}${buildFields(fields)}`;
  return axios.get(url);
}

function getAllCountries(fields = []) {
  return get('all', fields);
}

function getCountryByCode(code, fields = []) {
  return get(`alpha/${code}`, fields);
}

function getCountryByName(name, fields = []) {
  return get(`name/${name}`, fields);
}

export default {
  get,
  getAllCountries,
  getCountryByCode,
  getCountryByName
};