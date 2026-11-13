import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.restcountries.com/countries/v5',
  headers: {'Authorization': `Bearer ${import.meta.env.VITE_REST_COUNTRIES_KEY}`}
});

async function getAllCountries() {
  const [page1, page2, page3] = await Promise.all([
    apiClient.get('', { params: { limit: 100, offset: 0 } }),
    apiClient.get('', { params: { limit: 100, offset: 100 } }),
    apiClient.get('', { params: { limit: 100, offset: 200 } })
  ]);

  return {
    data: [
      ...(page1.data?.data?.objects || []),
      ...(page2.data?.data?.objects || []),
      ...(page3.data?.data?.objects || [])
    ]
  };
}

async function getCountryByCode(code) {
  const response = await apiClient.get(`/codes.alpha_3/${code}`);
  return {
    ...response,
    data: response.data?.data?.objects || []
  };
}

async function getCountryByName(name) {
  const response = await apiClient.get('/name', { params: { q: name } });
  return {
    ...response,
    data: response.data?.data?.objects || []
  };
}

export default {
  getAllCountries,
  getCountryByCode,
  getCountryByName
};