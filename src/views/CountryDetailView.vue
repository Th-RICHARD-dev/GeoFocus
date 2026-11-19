<script>
import fetch from '@/stores/fetch.js';
import local from '@/stores/local.js';

export default {
    props: ['countryCode'],
    computed: {
        countryDetails() {
            return fetch.countries.find(country => country.codes.alpha_3 === this.countryCode) || null;
        },
        isFavorite() {
            return local.favorites.includes(this.countryCode);
        }
    },
    methods: {
        async storeCountryDetails() {
            local.setFavorite(this.countryDetails.codes.alpha_3);
        },
        async removeCountryDetails() {
            local.removeFavorite(this.countryDetails.codes.alpha_3);
        }
    }
};
</script>

<template>
    <div class="country-detail-container">
        <div v-if="countryDetails">
            <h1><strong> {{ countryDetails.names?.translations?.fra?.common || countryDetails.names?.common }} </strong></h1>
            <img :src="`https://flags.restcountries.com/v5/w320/${countryDetails.codes?.alpha_2?.toLowerCase()}.png`" :alt="countryDetails.codes?.alpha_3" />
            <p><strong>Capitale(s) :</strong> {{ countryDetails?.capitals?.length ? countryDetails.capitals.map(c => c.name).join(', ') : 'N/A' }}</p>
            <p><strong>Continent :</strong> {{ countryDetails.region }}</p>
            <p><strong>Population :</strong> {{ countryDetails.population?.toLocaleString('fr-FR') }}</p>
            <p><strong>Superficie :</strong> {{ countryDetails.area?.kilometers?.toLocaleString('fr-FR') }} km²</p>
            <p><strong>Langues :</strong> {{ countryDetails?.languages?.map(l => new Intl.DisplayNames(['fr'], { type: 'language' }).of(l.bcp47 || l.iso639_1)).map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(', ') || 'N/A' }}</p>
            <p><strong>Frontière(s) : </strong>
                <span v-if="countryDetails.borders"> {{ countryDetails.borders.join(', ') }}</span>
                <span v-else> Pas de frontières</span>
            </p>
            <br>
            <div v-if="!isFavorite">
                <p :style="{ '--flag-bg': countryDetails?.flag?.colors?.prominent || 'transparent' }" class="favorite add-favorite" @click="storeCountryDetails">Ajouter aux favoris
                    <font-awesome-icon :icon="['fas', 'heart']" class="fas" />
                </p>
            </div>
            <div v-else>
                <p :style="{ '--flag-bg': countryDetails?.flag?.colors?.prominent || 'transparent' }" class="favorite remove-favorite" @click="removeCountryDetails">Retirer des favoris
                    <font-awesome-icon icon="fa-solid fa-heart-crack" class="fas" />
                </p>
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
    text-align: center;
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

.favorite {
    --bg: var(--flag-bg, transparent);
    background-color: var(--bg);
    padding: 15px 20px;
    border-radius: 20px;
    color: var(--vt-c-white);
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
    border-bottom: 8px solid var(--vt-c-white);
    border-bottom-color: color-mix(in srgb, var(--bg) 70%, black);
}

.fas {
    font-size: 1rem;
}

@supports (color: contrast-color(white)) {
    .favorite {
        color: contrast-color(var(--bg));
    }
}
</style>
