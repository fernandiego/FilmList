<template>
  <div class="search-bar">
    <input v-model="searchQuery" type="text" placeholder="Search for movies..." />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', // The text entered by the user
    };
  },
  watch: {
    searchQuery: function(newQuery) {
      this.$emit('search', newQuery); // Emit an event to trigger the search in GridFilmList
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
</style>