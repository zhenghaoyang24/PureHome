// src/types/global.d.ts
import Icon from '@iconify/vue'

// 声明全局组件
declare module 'vue' {
  interface GlobalComponents {
    Icon: typeof Icon
  }
}

// 声明全局变量
declare const __APP_VERSION__: string
