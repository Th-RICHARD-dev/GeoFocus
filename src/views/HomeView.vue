<script>
import SearchBar from '@/components/SearchBar.vue';
import DiscoveryCountryList from '@/components/DiscoveryCountryList.vue';
import CountryList from '@/components/CountryList.vue';
import QuizRedirect from '@/components/QuizRedirect.vue';

export default {
  props: {
    search: String
  },
  components: {
    SearchBar,
    DiscoveryCountryList,
    CountryList,
    QuizRedirect
  },
  data() {
    return {
      more: false,
      search: ''
    };
  },
  methods: {
    toggleMore() {
      this.more = !this.more;
    }
  }
};
</script>

<template>
  <div class="searchbar-container">
    <SearchBar v-model="search" />
  </div>
  <RouterLink to="/quiz" class="router-link">
    <QuizRedirect />
  </RouterLink>
  <DiscoveryCountryList />
  <div class="see-more" @click="toggleMore()" v-html="more ? 'Voir tout...' : 'Voir moins...'"></div>
  <CountryList :search="search" :class="{ active: !more }" class="list" />
</template>

<style scoped>
.searchbar-container {
  position: fixed;
  top: 10px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.router-link {
  text-decoration: none;
}

.see-more {
  cursor: pointer;
  height: auto;
  color: var(--vt-c-black-mute);
  display: flex;
  flex-direction: row;
  gap: 10px;
  white-space: nowrap;
  margin: 5px 0;
}

.see-more::before {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  border-radius: 2.5px;
  background-color: var(--vt-c-black-mute);
  margin: 10px 0;
}

.see-more::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  border-radius: 2.5px;
  background-color: var(--vt-c-black-mute);
  margin: 10px 0;
}

.list {
  display: none;
}

.list.active {
  display: flex;
}
</style>