import { reactive } from 'vue';

const storedFavorites = localStorage.getItem('favorites');
const storedColor = localStorage.getItem('selectedColor');
const storedUsername = localStorage.getItem('selectedUsername');
const storedQuizScore = localStorage.getItem('quizScore');

const local = reactive({
    favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
    selectedColor: storedColor || '#00beff',
    selectedUsername: storedUsername || 'Geoffrey',
    quizScore: storedQuizScore ? parseInt(storedQuizScore) : 0,

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
    },

    updateQuizScore(newScore) {
        this.quizScore = newScore;
        localStorage.setItem('quizScore', this.quizScore);
    }
});

export default local;
