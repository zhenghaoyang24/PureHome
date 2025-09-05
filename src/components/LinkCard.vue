<!-- QuickLink.vue -->
<template>
  <div class="card">
    <div class="flex-center shadow card-img" @click="openLink">
      <!-- 图标 -->
      <img
        v-if="showIcon && quickLink.icon"
        :src="quickLink.icon"
        :alt="quickLink.title"
        class="icon"
        @error="useFallbackIcon"
        loading="lazy"
      />
    </div>
    <div class="flex-center text-shadow card-title">
      <text>{{ quickLink.title }}</text>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QuickLink } from '@/types/search'
import { ref } from 'vue'

// 定义接收的 props
const props = defineProps<{
  quickLink: QuickLink
}>()

// 是否显示图标（可配置）
const showIcon = ref(true)

// 图标加载失败时使用默认图标
const useFallbackIcon = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '@/assets/svg/site_icon.svg' // 可替换为你的默认图标
}

// 点击跳转链接
const openLink = () => {
  window.open(props.quickLink.url, '_blank', 'noopener')
}
</script>

<style scoped>
.card {
  max-width: 48px;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: fit-content; */
}
.card-img {
  /* aspect-ratio: 1/1; */
  width: 48px;
  height: 48px;
  background-color: var(--background-alt);
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  gap: 6px;
  overflow: hidden;
}

.icon {
  padding: 0;
  margin: 0;
  width: 60%;
  height: 60%;
  border-radius: 6px;
  object-fit: contain;
}

.card-title {
  width: 130%;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  > text {
    max-width: 100%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: start;
    text-shadow: 2px 2px 5px var(--shadow-color);
    color: var(--text-inverse);
    font-size: 12px;
  }
}

/* 悬停晃动动画 */
.shake-subtle {
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
</style>
