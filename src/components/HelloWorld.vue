<script setup>
import { ref } from 'vue';
import ShortProfile from './ShortProfile.vue';

const count = ref(0);
defineProps({
  msg: Number,
  name: String,
});

const data = ['kelvin', 'sola', 'Adewale'];
</script>

<template>
  <h1>{{ msg }}</h1>
  <div v-for="one in data">
    <ShortProfile :name="one" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
