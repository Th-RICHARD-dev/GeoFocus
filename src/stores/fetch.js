import { reactive } from 'vue';
import apiClient from '@/services/api.js';

const fetch = reactive({
    countries: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],

    async fetchData() {
        try {
            const response = await apiClient.getAllCountries();

            if (Array.isArray(response.data)) {
                fetch.countries = response.data;
            } else {
                console.error('Unexpected API response:', response.data);
                fetch.countries = [];
            }
        } catch (error) {
            console.error('API call failed:', error);
            fetch.countries = [];
        }
    },
});

export default fetch;