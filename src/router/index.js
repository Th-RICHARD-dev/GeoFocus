import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import QuizView from '@/views/QuizView.vue';
import FavoriteView from '@/views/FavoriteView.vue';
import AccountView from '@/views/AccountView.vue';
import CountryDetailView from '@/views/CountryDetailView.vue';
import StartView from '@/views/StartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/start',
      name: 'start',
      component: StartView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'GeoFocus - Accueil'
      }
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView,
      meta: {
        title: 'GeoFocus - Quiz'
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoriteView,
      meta: {
        title: 'GeoFocus - Favoris'
      }
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
      meta: {
        title: 'GeoFocus - Compte'
      }
    },
    {
      path: '/country/:countryCode',
      name: 'country',
      component: CountryDetailView,
      props: true,
      meta: {
        title: 'GeoFocus - Détails'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'GeoFocus';
  next();
});

export default router;