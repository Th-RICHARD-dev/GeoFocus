<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    components: {
    RouterLink,
    RouterView
  },
}
</script>

<template>
  <main>
    <RouterLink to="/"><img src="/src/icon.png" alt="icon"><p>Entrer</p></RouterLink>
  </main>
</template>

<style scoped>
main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--vt-c-blue-mute);
  background-image: url('/map.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--vt-c-white);
  text-decoration: none;
}

a::after {
  content: '';
  width: 85%;
  height: 2.5px;
  background-color: var(--vt-c-white);
  border-radius: 7.5px;
  transform: translateY(-100%);
  animation: fade-in-out 2.5s infinite;
}

img {
  height: 8em;
}

p {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.6em;
}

@keyframes fade-in-out {
  0% {
    opacity: 100%;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
</style>