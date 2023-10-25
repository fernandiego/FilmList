<template>
  <div>
    <SearchBar @search="filterMovies" />
    <GridFilmList ref="gridFilmList" :filteredMovies="filteredMovies" />
  </div>
</template>


<script>
import GridFilmList from './components/GridFilmList.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  components: {
    GridFilmList,
    SearchBar
  },
  methods: {
    filterMovies(query) {
      this.$refs.gridFilmList.filterMovies(query);
    },
  },
};
</script>
