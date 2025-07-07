import { reactive } from 'vue';
import apiClient from '@/services/api.js';

const store = reactive({
    countries: [],
    async fetchData() {
        try {
            const response = await apiClient.get('all');
            store.countries = response.data;
        } catch (error) {
            console.error('API call failed:', error);
        }
    }
});

export default store;