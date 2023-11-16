<!-- MovieDetails.vue -->
<template>
  <div>
    <h2>{{ movie.title }} Details</h2>
    <img :src="movie.image" :alt="movie.title + ' poster'" />
    <p>{{ movie.description }}</p>
    <!-- Add other movie details as needed -->
  </div>
</template>

<script>
export default {
  props: ['movie'],
};
</script>

<style scoped>
/* Add styling for movie details if needed */
</style>