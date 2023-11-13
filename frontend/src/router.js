// router.js
import { createRouter, createWebHistory } from 'vue-router';
import GridFilmList from './components/GridFilmList.vue';
import MovieDetails from './components/MovieDetails.vue';

const routes = [
  { path: '/', component: GridFilmList },
  { path: '/movie/:id', name: 'movie-details', component: MovieDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
