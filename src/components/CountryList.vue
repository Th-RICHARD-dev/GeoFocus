<script>
import fetch from '@/stores/fetch.js';

export default {
  props: {
    search: {
      type: String,
      required: true
    }
  },
  computed: {
    filteredCountries() {
      const searchTerm = this.search.toLowerCase();
      return fetch.countries
        .filter(country => country.codes?.alpha_3 && country.names?.translations?.fra?.common?.toLowerCase().includes(searchTerm))
        .sort((a, b) => a.names.translations.fra.common.localeCompare(b.names.translations.fra.common));
    }
  }
};
</script>

<template>
  <ul>
    <li v-for="(country, index) in filteredCountries" :key="index">
      <router-link v-if="country.codes?.alpha_3" :to="`/country/${country.codes?.alpha_3}`">
        {{ country.names?.translations?.fra?.common || country.names?.common }}
        <img :src="`https://flags.restcountries.com/v5/w320/${country.codes?.alpha_2?.toLowerCase()}.png`" :alt="country.codes?.alpha_3" />
      </router-link>
    </li>
  </ul>
</template>


<style scoped>
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
  color: var(--vt-c-white);
  background-color: var(--vt-c-black);
  border: 1px solid var(--vt-c-black-mute);
  box-shadow: 0 2.5px 0 var(--vt-c-black-mute);
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
  color: var(--vt-c-white);
  width: 100%;
}

li img {
  height: 15px;
  border-radius: 2.5px;
}
</style>
