import { reactive } from 'vue';

const storedFavorites = localStorage.getItem('favorites');
const storedColor = localStorage.getItem('selectedColor');
const storedUsername = localStorage.getItem('selectedUsername');
const local = reactive({
    favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
    selectedColor: storedColor || '#00beff',
    selectedUsername: storedUsername || 'Geoffrey',

    setFavorite(country) {
        if (!this.favorites.includes(country)) {
            this.favorites.push(country);
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        }
    },

    removeFavorite(country) {
        this.favorites = this.favorites.filter(fav => fav !== country);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },

    setColor(color) {
        this.selectedColor = color;
        localStorage.setItem('selectedColor', color);
    },

    setUsername(username) {
        this.selectedUsername = username;
        localStorage.setItem('selectedUsername', username);
    }
});

export default local;
