<script setup lang="ts">
import SearchInput from './components/SearchInput.vue'
import QuickLink from './components/QuickLink.vue'
import TestDraggable from './components/TestDraggable.vue'
</script>

<template>
  <div class="full-size flex-center search-background">
    <div class="search-container">
      <SearchInput />
      <QuickLink />
      <TestDraggable />
    </div>
  </div>
  <div class="tools-container"></div>
</template>

<style scoped>
.search-background {
  background-image: url('https://api.xsot.cn/bing?jump=true');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.search-container {
  max-width: 720px;
  width: 90%;
}

.tools-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 0, 0, 0.5);
}
</style>
