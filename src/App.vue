<script setup>
import { useRoute } from 'vue-router';
const notHomePath = Object.keys(useRoute().params).length == 0 ? false : true;
</script>

<template>
  <div class="nav">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <div v-if="this.$route.params.name">
      <router-link to="/">Go back</router-link>
    </div>
  </div>
  <router-view />
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
div {
  color: red;
}
</style>
