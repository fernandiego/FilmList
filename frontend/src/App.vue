<template>
  <div class="container">
<!--    <div class="column1">-->
<!--      <NavBar></NavBar>-->
<!--    </div>-->
    <div class="column2">
      <div class="row1">
        <SearchBar @search="filterMovies"/>
      </div>
      <div class="row2">
        <GridFilmList ref="gridFilmList" :filteredMovies="filteredMovies"/>
      </div>
    </div>
  </div>
</template>

<script>
import GridFilmList from './components/GridFilmList.vue';
import SearchBar from './components/SearchBar.vue';
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
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

<style scoped>
.container {
  display: grid;
  //grid-template-columns: 1fr 10fr; /* Two columns with a 1:2 ratio */
  gap: 10px; /* Gap between columns */
  height: 100vh;
//border: 1px solid red;
}

.row1 {
  background-color: #000000; /* Background color for Row 1 */
//border: 1px solid red; height: fit-content;
  overflow: hidden;

}

.row2 {
  background-color: #000000; /* Background color for Row 2 */
  height: fit-content;
//border: 1px solid red;
}

</style>

