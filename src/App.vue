<script setup lang="ts">
import SearchInput from './components/SearchInput.vue'
</script>

<template>
  <div class="search-container"></div>
  <div class="tools-container"></div>
</template>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('https://api.xsot.cn/bing?jump=true');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.tools-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rgba(243, 0, 0, 0.5);
}
</style>
