<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <div class="card">
    <p>I am {{ name }}.</p>
    <router-link :to="name">Learn more about me</router-link>
  </div>
</template>
