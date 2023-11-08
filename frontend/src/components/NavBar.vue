<template>
  <nav class="sidebar" :class="{ collapsed: isCollapsed }">
    <button @click="toggleCollapse">Toggle Sidebar</button>
    <div v-if="!isCollapsed">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to= "/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isCollapsed: false, // Initialize sidebar as not collapsed
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  top: 0;
  left: 0;
  height: 100%;
  padding: 20px;
  background-color: #333;
  transition: width 0.3s;
}

.collapsed {
  width: 0;
  overflow: hidden;
}

.sidebar button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
