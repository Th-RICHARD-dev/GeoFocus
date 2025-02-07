import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://restcountries.com/v3.1/'
});

export default apiClient;