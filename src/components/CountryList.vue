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
        .filter(country => country.translations.fra.common.toLowerCase().includes(searchTerm))
        .sort((a, b) => a.translations.fra.common.localeCompare(b.translations.fra.common));
    }
  }
};
</script>

<template>
  <ul>
    <li v-for="(country, index) in filteredCountries" :key="index">
      <router-link :to="`/country/${country.cca3}`">
        {{ country.translations.fra.common }}
        <img :src="country.flags.png" :alt="country.cca3" />
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
