<template>
  <nav class="sidebar">
    <div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
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
