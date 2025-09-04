<!-- DraggableCards.vue -->
<template>
  <div class="quick-link">
    <draggable
      v-model="quickLinks"
      item-key="id"
      tag="div"
      :animation="100"
      class="grid"
      :style="'grid-template-columns: repeat(' + gridColumsValue + ', 1fr)'"
      @end="onDragEnd"
      :swap-threshold="1"
      :chosenClass="'chosen-card'"
      :ghost-class="'ghost-card'"
      :dragClass="'dragging-card'"
    >
      <template #item="{ element, index }">
        <div class="shadow-sm card">
          {{ element.title }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import type { QuickLink } from '@/types/search'
import { ref } from 'vue'
import draggable from 'vuedraggable'

// QuickLink 数组
const quickLinks = ref<QuickLink[]>([
  {
    id: '1',
    userid: 'user123',
    title: 'Google',
    domain: 'google.com',
    icon: 'https://www.google.com/favicon.ico',
    url: 'https://www.google.com',
    creattime: '2023-10-01T10:00:00Z',
  },
  {
    id: '2',
    userid: 'user456',
    title: 'GitHub',
    domain: 'github.com',
    icon: 'https://github.com/favicon.ico',
    url: 'https://github.com',
    creattime: '2023-10-02T14:30:00Z',
  },
  {
    id: '3',
    userid: 'user789',
    title: 'Baidu',
    domain: 'baidu.com',
    icon: 'https://www.baidu.com/favicon.ico',
    url: 'https://www.baidu.com',
    creattime: '2023-10-03T09:15:00Z',
  },
  {
    id: '4',
    userid: 'user123',
    title: 'Taobao',
    domain: 'taobao.com',
    icon: 'https://www.taobao.com/favicon.ico',
    url: 'https://www.taobao.com',
    creattime: '2023-10-04T16:45:00Z',
  },
  {
    id: '5',
    userid: 'user456',
    title: 'Zhihu',
    domain: 'zhihu.com',
    icon: 'https://www.zhihu.com/favicon.ico',
    url: 'https://www.zhihu.com',
    creattime: '2023-10-05T11:20:00Z',
  },
])

const onDragEnd = () => {
  console.log('拖拽结束')
}

const gridColumsValue = ref<number>(10) // 每行显示的列数
</script>

<style scoped>
.quick-link {
  padding-top: 20px;
}

.grid {
  display: grid;
  gap: 12px;
}

.card {
  aspect-ratio: 1/1;
  background-color: white;
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

/* 正要拖动的元素，拖动前*/
.chosen-card {
  opacity: 1;
  /* border: 1px red solid; */
  /* background-color: rgb(255, 0, 234); */
}

/* 拖动的元素原位置 */
.ghost-card {
  visibility: hidden;
}

/* 正在拖动的元素 */
.dragging-card {
  opacity: 1 !important;
}

.shake-animation {
  animation: subtle-shake 0.8s ease-in-out infinite;
}

@keyframes subtle-shake {
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(2px, -1px);
  }
  40% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-2px, -1px);
  }
  80% {
    transform: translate(1px, 1px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.shake-subtle {
  animation: subtle-shake 0.8s ease-in-out infinite;
}
</style>
