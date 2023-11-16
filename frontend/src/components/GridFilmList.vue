<template>
  <div class="image-grid">
    <div v-for="(movie, index) in filteredMovies" :key="index" class="image-item">
      <img :src="movie.image" :alt="movie.title + ' poster'" />
      <div class="movie-name">{{ movie.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allMovies: [
        { id: 1, image: 'image1.jpg', title: 'Movie 1' },
        { id: 2, image: 'image1.jpg', title: 'Movie 2' },
        { id: 3, image: 'image1.jpg', title: 'Movie 3' },
        { id: 4, image: 'image1.jpg', title: 'Movie 4' },
        { id: 5, image: 'image1.jpg', title: 'Movie 5' },
        { id: 6, image: 'image1.jpg', title: 'Movie 6' },
        { id: 7, image: 'image1.jpg', title: 'Movie 7' },
        { id: 8, image: 'image1.jpg', title: 'Movie 8' },
        { id: 9, image: 'image1.jpg', title: 'Movie 9' },
        { id: 10, image: 'image1.jpg', title: 'Movie 10' },
        { id: 11, image: 'image1.jpg', title: 'Movie 11' },
        { id: 12, image: 'image1.jpg', title: 'Movie 12' },
        { id: 13, image: 'image1.jpg', title: 'Movie 13' },
        { id: 14, image: 'image1.jpg', title: 'Movie 14' },
        { id: 15, image: 'image1.jpg', title: 'Movie 15' },
        { id: 16, image: 'image1.jpg', title: 'Movie 16' },
        { id: 17, image: 'image1.jpg', title: 'Movie 17' },
        { id: 18, image: 'image1.jpg', title: 'Movie 18' },
        { id: 19, image: 'image1.jpg', title: 'Movie 19' },
        { id: 20, image: 'image1.jpg', title: 'Movie 20' },
        { id: 21, image: 'image1.jpg', title: 'Movie 21' },
        { id: 22, image: 'image1.jpg', title: 'Movie 22' },
        { id: 23, image: 'image1.jpg', title: 'Movie 23' },
        { id: 24, image: 'image1.jpg', title: 'Movie 24' },
        { id: 25, image: 'image1.jpg', title: 'Movie 25' },
        { id: 26, image: 'image1.jpg', title: 'Movie 26' },
        { id: 27, image: 'image1.jpg', title: 'Movie 27' },
        { id: 28, image: 'image1.jpg', title: 'Movie 28' },
        { id: 29, image: 'image1.jpg', title: 'Movie 29' },
        { id: 30, image: 'image1.jpg', title: 'Movie 30' },
      ],
      filteredMovies: [],
    };
  },
  methods: {
    filterMovies(query) {
      if (query) {
        this.filteredMovies = this.allMovies.filter((movie) => {
          return movie.title.toLowerCase().includes(query.toLowerCase());
        });
      } else {
        // When no text is typed in the search bar, show all movies by default
        this.filteredMovies = this.allMovies;
      }
    },
  },
  created() {
    // Execute filterMovies method with an initial query before rendering
    this.filterMovies(''); // Replace with your initial query
  },
};
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  background-color: black;
}

.image-item {
  margin-bottom: 2px;
}

img {
  width: 100%;
  height: auto;
  max-width: 100%;
}

.movie-name {
  text-align: center;
  font-weight: bold;
  color: white;
}
</style>