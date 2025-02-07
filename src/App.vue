<script> 
import { RouterLink, RouterView } from 'vue-router';
import store from './stores/fetch';

export default {
  components: {
    RouterLink,
    RouterView
  },
  computed: {
    hideNav() {
      return this.$route.path === "/start";
    }
  },
  async mounted() {
    this.$router.push('/start');
    await store.fetchData();
  },
};
</script>

<template>
  <div class="router-wrapper">
    <RouterView />
  </div>

  <nav v-if="!hideNav">
    <RouterLink to="/"><div class="nav-links"><font-awesome-icon :icon="['fas', 'house']" class="fas"/><span>Accueuil</span></div></RouterLink>
    <RouterLink to="/quiz"><div class="nav-links"><font-awesome-icon :icon="['fas', 'lightbulb']" class="fas"/><span>Quiz</span></div></RouterLink>
    <RouterLink to="/favorites"><div class="nav-links"><font-awesome-icon :icon="['fas', 'heart']" class="fas"/><span>Favoris</span></div></RouterLink>
    <RouterLink to="/account"><div class="nav-links"><font-awesome-icon :icon="['fas', 'user']" class="fas"/><span>Compte</span></div></RouterLink>
  </nav>
</template>


<style scoped>
nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--vt-c-black);
  border-top: 1px solid var(--vt-c-black-mute);
}

a {
  text-decoration: none;
}

.fas {
  font-size: 20px;
  color: var(--vt-c-blue);
  text-decoration: none;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.nav-links span {
  color: var(--vt-c-blue);
  font-size: 0.65rem;
}

.router-wrapper {
  width: 100%;
  height: 100vh;
  padding: 75px 15px;
}
</style>