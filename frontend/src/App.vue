<template>
  <div class="container">
    <div class="column1">

    <NavBar :expanded="navbarExpanded"></NavBar>
    </div>
    <div class="column2">
      <div class="row1">
      <SearchBar @search="filterMovies" />
      </div>
      <div class="row2">
      <GridFilmList ref="gridFilmList" :filteredMovies="filteredMovies" />
      </div>
    </div>
  </div>
</template>

<script>
import GridFilmList from './components/GridFilmList.vue';
import SearchBar from './components/SearchBar.vue';
import NavBar from "./components/NavBar.vue";

export default {
   data() {
    return {
      navbarExpanded: false,
    };
  },
  components: {
    NavBar,
    GridFilmList,
    SearchBar
  },
  methods: {
     toggleNavbar() {
      this.navbarExpanded = !this.navbarExpanded;
    },
    filterMovies(query) {
      this.$refs.gridFilmList.filterMovies(query);
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 10fr; /* Two columns with a 1:2 ratio */
  gap: 10px; /* Gap between columns */
  height: 100vh;
  border: 1px solid red;
}

.column1 {
  grid-row: span 1; /* Column 1 spans 1 row */
  background-color: #333; /* Background color */
  color: #fff; /* Text color */
  border: 1px solid red;
}

.column2 {
  display: grid;
  grid-template-rows: 1fr 12fr; /* Two rows with equal height */
  gap: 5px; /* Gap between rows */
  background-color: #000000; /* Background color for column 2 */
  padding: 5px;
  border: 1px solid red;
}

.row1 {
  background-color: #000000; /* Background color for Row 1 */
  border: 1px solid red;
  height: fit-content;
  overflow: hidden;

}

.row2 {
  background-color: #000000; /* Background color for Row 2 */
  height: fit-content;
  border: 1px solid red;
}

</style>

