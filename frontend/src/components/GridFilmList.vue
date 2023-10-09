<template>
  <div class="image-grid">
    <div v-for="(image, index) in images" :key="index" class="image-item">
      <img :src="`${image}`" alt="Film poster"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        // Add more image filenames as needed
      ],
    };
  },
};
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1px; /* 1px space between images */
  background-color: black;
}

.image-item {
  margin-bottom: 2px; /* 2px space for the next line */
}

img {
  width: 100%;
  height: auto;
  max-width: 100%;
}
</style>
