<template>
  <div class="flex-center container">Link</div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: 'icon',
  },
  title: {
    type: String,
    default: 'title',
  },
})
</script>

<style scoped>

.container {
}
</style>
