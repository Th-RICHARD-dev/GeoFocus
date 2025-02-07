<script>
import fetch from '@/stores/fetch.js';
import local from '@/stores/local.js';

export default {
    props: ['countryCode'],
    computed: {
        countryDetails() {
            return fetch.countries.find(country => country.cca3 === this.countryCode) || null;
        },
        isFavorite() {
            return local.favorites.includes(this.countryCode);
        }
    },
    methods: {
        async storeCountryDetails() {
            local.setFavorite(this.countryDetails.cca3);
        },
        async removeCountryDetails() {
            local.removeFavorite(this.countryDetails.cca3);
        }
    }
};
</script>

<template>
    <div class="country-detail-container">
        <div v-if="countryDetails">
            <h1>{{ countryDetails.translations.fra.official }}</h1>
            <img :src="countryDetails.flags.png" :alt="countryDetails.translations.fra.common" />
            <p><strong>Capitale(s):</strong> {{ countryDetails.capital ? Object.values(countryDetails.capital).join(', ') : 'N/A' }}</p>
            <p><strong>Continent:</strong> {{ countryDetails.region }}</p>
            <p><strong>Population:</strong> {{ countryDetails.population }}</p>
            <p><strong>Superficie:</strong> {{ countryDetails.area }} km²</p>
            <p><strong>Langues:</strong> {{ countryDetails.languages ? Object.values(countryDetails.languages).join(', ') : 'N/A' }}</p>
            <p><strong>Frontière(s): </strong>
                <span v-if="countryDetails.borders">{{ countryDetails.borders.join(', ') }}</span>
                <span v-else>No borders</span>
            </p>
            <br>
            <div v-if="!isFavorite">
                <p class="add-favorite" @click="storeCountryDetails">Ajouter aux favoris
                    <font-awesome-icon :icon="['fas', 'heart']" class="fas" />
                </p>
            </div>
            <div v-else>
                <p class="remove-favorite" @click="removeCountryDetails">Retirer des favoris</p>
            </div>
        </div>
        <div v-else>
            <p>Chargement...</p>
        </div>
    </div>
</template>

<style scoped>
.country-detail-container {
    padding-bottom: 75px;
    color: var(--vt-c-white);
}

h1 {
    font-size: 2em;
    margin-bottom: 10px;
}

img {
    width: 100px;
    margin-bottom: 20px;
    border-radius: 7.5px;
}

p {
    font-size: 1.2em;
}

strong {
    font-weight: bold;
}

.add-favorite {
    text-decoration: underline;
    cursor: pointer;
}

.remove-favorite {
    text-decoration: underline;
    cursor: pointer;
}

.fas {
    font-size: 1rem;
}
</style>
