<template>
  <div
    class="display-grid quick-link-container"
    :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }"
  >
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
    <span>1</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref<number>(10)
</script>

<style scoped>
.quick-link-container {
  margin-top: 20px;
  width: 100%;
}
</style>
