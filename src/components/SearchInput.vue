<template>
  <div class="display-flex align-center search-box">
    <!-- 左侧下拉框 -->
    <div class="custom-select">
      <!-- 选中项显示（可点击） -->
      <div class="flex-center selected-item" @click="toggleDropdown">
        <img :src="currentEngine.icon" alt="currentEngine.name" />
        <Icon icon="weui:arrow-filled" color="var(--text-color)" />
      </div>

      <!-- 下拉列表 -->
      <ul v-show="isDropdownOpen" class="options">
        <li
          v-for="engine in searchEngineList"
          :key="engine.key"
          @click="selectEngine(engine)"
          :class="{ active: engine.key === currentEngine.key }"
        >
          <img :src="engine.icon" alt="engine.name" />
          <span>{{ engine.name }}</span>
        </li>
      </ul>
    </div>
    <!-- 输入框 -->
    <input class="input" type="text" maxlength="140" placeholder="Search..." />
    <!-- 按钮 -->
    <button class="flex-center search-btn">
      <Icon icon="mynaui:search-dot" color="var(--text-inverse)" class="icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { SEARCH_ENGIN } from '@/data/SEARCH_ENGINE'
import type { SearchEngine } from '@/types/search'
import { ref } from 'vue'
const searchEngineList = ref<SearchEngine[]>(SEARCH_ENGIN) // 搜索引擎数据
const currentEngine = ref<SearchEngine>(searchEngineList.value[0]) // 当前搜索引擎

// 下拉框
const isDropdownOpen = ref<boolean>(false)
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
const selectEngine = (engine: SearchEngine) => {
  currentEngine.value = engine
  isDropdownOpen.value = false
}

// 点击外部关闭下拉框
window.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  if (!target.closest('.custom-select')) {
    isDropdownOpen.value = false
  }
})

function emit(arg0: string, engine: SearchEngine) {
  throw new Error('Function not implemented.')
}
</script>

<style scoped>
.search-box {
  box-sizing: border-box;
  width: 100%;
  gap: 8px;
  border-radius: var(--border-radius-full);
  padding: var(--space-1);
  background-color: var(--background);
}
.search-btn {
  width: 36px;
  height: 36px;
  background-color: var(--primary);
  border-radius: var(--border-radius-full);
}
.input {
  flex: 1;
  height: 36px;
  border-radius: var(--border-radius-full);
  border: 1px solid #ffffff;
  font-size: var(--font-size-base);
  &:focus {
    border: 1px solid var(--primary);
  }
}
/* 下拉框 */
.custom-select {
  position: relative;
}
.options {
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius);
  margin: 0;
  background-color: var(--card-bg);
  width: 100px;
  padding: var(--space-1);
  position: absolute;
  & > li {
    font-size: var(--font-size-base);
    display: flex;
    align-items: center;
  }
  & img {
    width: 20px;
    height: 20px;
  }
}

.selected-item {
  width: 36px;
  height: 36px;
  & > img {
    width: 20px;
    height: 20px;
  }
}

.icon {
  width: 28px;
  height: 28px;
}
</style>
