import { reactive } from 'vue';
import apiClient from '@/services/api.js';

const fetch = reactive({
    countries: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    
    async fetchData() {
        try {
            const response = await apiClient.get('/all');
            fetch.countries = response.data;
        } catch (error) {
            console.error('API call failed:', error);
        }
    },
});

export default fetch;