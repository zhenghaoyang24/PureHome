<template>
  <div class="display-flex align-center shadow-lg select-none search-box">
    <!-- 下拉列表 -->
    <ul v-show="isDropdownOpen" class="shadow options">
      <li v-for="engine in searchEngineList" :key="engine.key" @click="selectEngine(engine)">
        <img :src="engine.icon" alt="engine.name" />
        <span>{{ engine.name }}</span>
      </li>
    </ul>
    <!-- 选中项显示（可点击） -->
    <div class="flex-center input-btn custom-select" @click="toggleDropdown">
      <img :src="currentEngine.icon" alt="currentEngine.name" />
      <Icon icon="weui:arrow-outlined" class="custom-select-icon" />
    </div>
    <!-- 输入框 -->
    <input class="input" type="text" maxlength="140" autocomplete="off" placeholder="Search..." />
    <!-- 按钮 -->
    <a class="flex-center input-btn search-btn" title="搜索">
      <img src="../assets//svg//search_icon.svg" alt="搜索" />
    </a>
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
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border-radius: var(--border-radius-full);
  background-color: var(--background);
  @media (max-width: var(--breakpoint-mobile-max)) {
    padding: var(--space-1);
  }
}

.search-btn {
  transition: var(--transition-fast);
  border-top-right-radius: var(--border-radius-full);
  border-bottom-right-radius: var(--border-radius-full);
  padding: var(--space-2) var(--space-3);
  &:hover {
    background-color: var(--primary-light);
  }
}

.custom-select {
  border-top-left-radius: var(--border-radius-full);
  border-bottom-left-radius: var(--border-radius-full);
  padding: var(--space-2) var(--space-3);
  & > img {
    margin-right: var(--space-1);
  }
}

.input-btn {
  width: fit-content;
  height: 36px;
  cursor: pointer;
  & > img {
    width: 26px;
    height: 26px;
  }
}

.input {
  flex: 1;
  height: 36px;
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  @media (max-width: var(--breakpoint-mobile-max)) {
    padding: 0 var(--space-1);
  }
}
.options {
  z-index: 99;
  cursor: pointer;
  border-radius: var(--border-radius);
  margin: 0;
  background-color: var(--card-bg);
  width: 100px;
  padding: var(--space-1);
  position: absolute;
  top: 48px;
  & > li {
    padding: var(--space-1);
    font-size: var(--font-size-base);
    display: flex;
    align-items: center;
    &:hover {
      background-color: var(--primary-light);
    }
  }
  & img {
    width: 22px;
    height: 22px;
  }
}

.icon {
  width: 28px;
  height: 28px;
}
</style>
