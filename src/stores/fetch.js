import { reactive } from 'vue';
import apiClient from '@/services/api.js';

const fetch = reactive({
    countries: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    
    async fetchData() {
        try {
            // Use new API helper for all countries with all needed fields
            const fields = [
                'name', 'capital', 'region', 'flags', 'translations', 'cca3',
                'population', 'area', 'languages', 'borders'
            ];
            const response = await apiClient.getAllCountries(fields);
            fetch.countries = response.data;
        } catch (error) {
            console.error('API call failed:', error);
        }
    },
});

export default fetch;