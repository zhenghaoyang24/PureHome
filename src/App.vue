<script setup lang="ts">
import SearchInput from './components/SearchInput.vue'
import QuickLink from './components/QuickLink.vue'
import { onMounted, ref } from 'vue'

// 本地默认图片路径
const localImageUrl = new URL('./assets/th.jpg', import.meta.url).href
const bingImageUrlRandom = 'https://api.xsot.cn/bing?jump=true' // 网络图片
const bingImageUrlDay = 'https://bing.img.run/uhd.php'
// 控制背景层状态
const backgroundLayers = ref({
  local: {
    backgroundImage: `url(${localImageUrl})`,
    opacity: 1,
    transition: 'opacity 0.8s ease-out',
  },
  network: {
    backgroundImage: 'none',
    opacity: 0,
    transition: 'opacity 1s ease-out',
  },
})

onMounted(() => {
  // 预加载网络图片
  const img = new Image()
  img.src = bingImageUrlRandom

  img.onload = () => {
    // 先设置网络图片URL但保持透明
    backgroundLayers.value.network.backgroundImage = `url(${bingImageUrlRandom})`

    // 确保浏览器渲染了新背景图后再开始淡入
    requestAnimationFrame(() => {
      // 淡入网络图片,覆盖本地图片
      backgroundLayers.value.network.opacity = 1

      // 淡出本地图片
      backgroundLayers.value.local.opacity = 0
    })
  }

  img.onerror = () => {
    console.error('Failed to load network background image')
    // 网络图片加载失败，保持本地图片
    backgroundLayers.value.local.opacity = 1
    backgroundLayers.value.network.opacity = 0
  }
})
</script>

<template>
  <div class="full-size flex-center search-background">
    <!-- 本地背景层（始终存在） -->
    <div class="bg-layer" :style="backgroundLayers.local"></div>

    <!-- 网络背景层（加载完成后渐显） -->
    <div class="bg-layer" :style="backgroundLayers.network"></div>

    <!-- 内容区域 -->
    <div class="search-container">
      <SearchInput />
      <QuickLink />
    </div>
  </div>
  <div class="tools-container"></div>
</template>

<style scoped>
.search-background {
  position: relative;
  background-color: #000; /* 黑色后备色，避免白屏 */
}

.bg-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: opacity 0.8s ease-out;
}

/* 本地背景层 - 始终显示但可被覆盖 */
.bg-layer:first-child {
  z-index: 1;
}

/* 网络背景层 - 初始透明，加载后覆盖本地层 */
.bg-layer:last-child {
  z-index: 2;
}

.search-container {
  max-width: 760px;
  width: 90%;
  position: relative;
  z-index: 10;
}

.tools-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 0, 0, 0.5);
}
</style>
