import { reactive } from 'vue';

const storedFavorites = localStorage.getItem('favorites');
const local = reactive({
    favorites: storedFavorites ? JSON.parse(storedFavorites) : [],

    setFavorite(country) {
        if (!this.favorites.includes(country)) {
            this.favorites.push(country);
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        }
    },

    removeFavorite(country) {
        this.favorites = this.favorites.filter(fav => fav !== country);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
});

export default local;
