<script>
import store from '@/stores/fetch.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    filteredCountries() {
      return store.countries.sort(() => 0.5 - Math.random()).slice(0, 10);
    }
  }
};
</script>

<template>
  <h3>Découvrir des pays :</h3>
  <swiper :slides-per-view="1.5" :space-between="10" class="swiper">
    <swiper-slide v-for="(country, index) in filteredCountries" :key="index" class="swiper-slide">
      <router-link :to="`/country/${country.cca3}`">
        <div class="pres">
          <p>{{ country.translations.fra.common }}</p>
          <img :src="country.flags.png" :alt="country.cca3" />
        </div>
        <p class="more">En savoir plus →</p>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
h3 {
  font-size: 0.9rem;
  color: var(--vt-c-blue);
  margin: 15px 0;
}
.swiper {
  padding: 0;
  margin-bottom: 15px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 7.5px;
}

.swiper-slide {
  color: var(--vt-c-white);
  background-color: var(--vt-c-black-mute);
  border-radius: 7.5px;
  cursor: pointer;
  padding: 5px 10px;
  height: 100px;
}

.pres {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
}

a {
  color: var(--vt-c-white);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.more {
  text-decoration: underline;
}

img {
  height: 1em;
  border-radius: 2.5px;
}
</style>