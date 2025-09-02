import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// 全局样式
import '@/assets/css/main.css'

// 全局图标组件
import { Icon } from '@iconify/vue'

const app = createApp(App)

app.use(createPinia())

app.component('Icon', Icon)

app.mount('#app')
