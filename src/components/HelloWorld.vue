<script setup>
import { ref } from 'vue';
import ShortProfile from './ShortProfile.vue';

import { storeToRefs, mapActions } from 'pinia';
import { useViteStore } from './../store/useStore';

const globalState = useViteStore();
const { msg, count } = storeToRefs(globalState);
const { increaseCount } = globalState;
</script>

<template>
  <h1>{{ msg }} {{ count }}</h1>
  <button @click="increaseCount">Increase count</button>
  <div v-for="one in globalState.getDataService">
    <ShortProfile :name="one" />
  </div>
</template>
