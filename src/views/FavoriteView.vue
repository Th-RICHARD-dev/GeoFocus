<script>
import local from '@/stores/local.js';
import fetch from '@/stores/fetch.js';

export default {
    computed: {
        favoriteCountries() {
            return fetch.countries.filter(fav => local.favorites.includes(fav.cca3));
        }
    }
}
</script>
<template>
    <h3>Tout vos favoris</h3>
    <ul>
        <li v-for="(favorites, index) in favoriteCountries" :key="index">
            <router-link :to="`/country/${favorites.cca3}`">
                {{ favorites.translations.fra.common }}
                <img :src="favorites.flags.png" :alt="favorites.cca3" />
            </router-link>
        </li>
    </ul>
</template>

<style scoped>
h3 {
    color: var(--vt-c-black-mute);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 15px;
    color: var(--vt-c-black-mute);
}

ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 75px;
}

li {
    padding: 5px;
    color: var(--vt-c-black);
    font-weight: bold;
    background-color: var(--vt-c-blue);
    border: 1px solid var(--vt-c-blue-mute);
    box-shadow: 0 2.5px 0 var(--vt-c-blue-mute);
    border-radius: 7.5px;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    justify-content: left;
    align-items: center;
    transition: transform .5s ease;
}

li:active {
    transform: translateY(1.5px);
}

a {
    text-decoration: none;
    color: var(--vt-c-black);
    width: 100%;
}

li img {
    height: 15px;
    border-radius: 2.5px;
}
</style>