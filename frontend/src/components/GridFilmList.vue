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
        { image: 'image1.jpg', title: 'Movie 1' },
        { image: 'image1.jpg', title: 'Movie 1' },
        { image: 'image1.jpg', title: 'Movie 1' },
        { image: 'image1.jpg', title: 'Movie 1' },
        { image: 'image1.jpg', title: 'Movie 1' },
        { image: 'image1.jpg', title: 'Movie 1' },
        { image: 'image1.jpg', title: 'Movie 1' },
        { image: 'image1.jpg', title: 'Movie 1' },
        { image: 'image1.jpg', title: 'Movie 1' },
        { image: 'image1.jpg', title: 'Movie 1' },
        // Add more movie objects as needed
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
  grid-gap: 1px;
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
