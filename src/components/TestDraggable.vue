<!-- DraggableCards.vue -->
<template>
  <div class="grid-layout">
    <draggable
      v-model="cards"
      item-key="id"
      tag="div"
      :animation="200"
      class="grid"
      @end="onDragEnd"
      :chosenClass="'chosen-card'"
    >
      <template #item="{ element }">
        <div class="card" :style="{ backgroundColor: element.color }">
          {{ element.label }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

// 定义卡片类型
interface Card {
  id: number
  label: string
  color: string
}

const cards = ref<Card[]>([
  { id: 1, label: '卡片 1', color: '#ff9aa2' },
  { id: 2, label: '卡片 2', color: '#ffb7b2' },
  { id: 3, label: '卡片 3', color: '#ffdac1' },
  { id: 4, label: '卡片 4', color: '#fce38a' },
  { id: 5, label: '卡片 5', color: '#e2f0cb' },
  { id: 6, label: '卡片 6', color: '#b8e0d2' },
  { id: 7, label: '卡片 7', color: '#95b8d1' },
  { id: 8, label: '卡片 8', color: '#b5cae9' },
  { id: 9, label: '卡片 9', color: '#d4c6eb' },
  { id: 10, label: '卡片 10', color: '#f0c9c9' },
])

const onDragEnd = () => {
  console.log('拖拽结束')
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

.card {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  color: #333;
  cursor: grab;
  user-select: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* 被选中的项（未拖动时） */
.chosen-card {
  border: 2px dashed #000;
}
</style>
