<!-- DraggableCards.vue -->
<template>
  <div class="quick-link">
    <draggable
      v-model="quickLinks"
      item-key="id"
      tag="div"
      :animation="200"
      class="grid"
      :style="'grid-template-columns: repeat(' + gridColumsValue + ', auto)'"
      @end="onDragEnd"
      :swap-threshold="1"
      :chosenClass="'chosen-card'"
      :ghost-class="'ghost-card'"
      :dragClass="'dragging-card'"
    >
      <template #item="{ element, index }">
        <LinkCard :quickLink="element"></LinkCard>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import type { QuickLink } from '@/types/search'
import { ref } from 'vue'
import LinkCard from './LinkCard.vue'
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
  {
    id: '6',
    userid: 'user789',
    title: 'YouTube',
    domain: 'youtube.com',
    icon: 'https://www.youtube.com/favicon.ico',
    url: 'https://www.youtube.com',
    creattime: '2023-10-06T08:00:00Z',
  },
  {
    id: '7',
    userid: 'user123',
    title: 'Twitter',
    domain: 'twitter.com',
    icon: 'https://twitter.com/favicon.ico',
    url: 'https://twitter.com',
    creattime: '2023-10-07T10:10:00Z',
  },
  {
    id: '8',
    userid: 'user456',
    title: 'Facebook',
    domain: 'facebook.com',
    icon: 'https://www.facebook.com/favicon.ico',
    url: 'https://www.facebook.com',
    creattime: '2023-10-08T13:25:00Z',
  },
  {
    id: '9',
    userid: 'user789',
    title: 'Instagram',
    domain: 'instagram.com',
    icon: 'https://www.instagram.com/favicon.ico',
    url: 'https://www.instagram.com',
    creattime: '2023-10-09T15:40:00Z',
  },
  {
    id: '10',
    userid: 'user123',
    title: 'LinkedIn',
    domain: 'linkedin.com',
    icon: 'https://www.linkedin.com/favicon.ico',
    url: 'https://www.linkedin.com',
    creattime: '2023-10-10T09:30:00Z',
  },
  {
    id: '11',
    userid: 'user456',
    title: 'Reddit',
    domain: 'reddit.com',
    icon: 'https://www.reddit.com/favicon.ico',
    url: 'https://www.reddit.com',
    creattime: '2023-10-11T11:50:00Z',
  },
  {
    id: '12',
    userid: 'user789',
    title: 'Netflix',
    domain: 'netflix.com',
    icon: 'https://www.netflix.com/favicon.ico',
    url: 'https://www.netflix.com',
    creattime: '2023-10-12T18:20:00Z',
  },
  {
    id: '13',
    userid: 'user123',
    title: 'Amazon',
    domain: 'amazon.com',
    icon: 'https://www.amazon.com/favicon.ico',
    url: 'https://www.amazon.com',
    creattime: '2023-10-13T14:05:00Z',
  },
  {
    id: '14',
    userid: 'user456',
    title: 'Apple',
    domain: 'apple.com',
    icon: 'https://www.apple.com/favicon.ico',
    url: 'https://www.apple.com',
    creattime: '2023-10-14T16:30:00Z',
  },
  {
    id: '15',
    userid: 'user789',
    title: 'Microsoft',
    domain: 'microsoft.com',
    icon: 'https://www.microsoft.com/favicon.ico',
    url: 'https://www.microsoft.com',
    creattime: '2023-10-15T09:10:00Z',
  },
  {
    id: '16',
    userid: 'user123',
    title: 'Wikipedia',
    domain: 'wikipedia.org',
    icon: 'https://www.wikipedia.org/favicon.ico',
    url: 'https://www.wikipedia.org',
    creattime: '2023-10-16T12:40:00Z',
  },
  {
    id: '17',
    userid: 'user456',
    title: 'Stack Overflow',
    domain: 'stackoverflow.com',
    icon: 'https://stackoverflow.com/favicon.ico',
    url: 'https://stackoverflow.com',
    creattime: '2023-10-17T14:15:00Z',
  },
  {
    id: '18',
    userid: 'user789',
    title: 'Discord',
    domain: 'discord.com',
    icon: 'https://discord.com/favicon.ico',
    url: 'https://discord.com',
    creattime: '2023-10-18T10:50:00Z',
  },
  {
    id: '19',
    userid: 'user123',
    title: 'Twitch',
    domain: 'twitch.tv',
    icon: 'https://www.twitch.tv/favicon.ico',
    url: 'https://www.twitch.tv',
    creattime: '2023-10-19T17:20:00Z',
  },
  {
    id: '20',
    userid: 'user456',
    title: 'Pinterest',
    domain: 'pinterest.com',
    icon: 'https://www.pinterest.com/favicon.ico',
    url: 'https://www.pinterest.com',
    creattime: '2023-10-20T13:35:00Z',
  },
])

const onDragEnd = () => {
  console.log('拖拽结束')
}

const gridColumsValue = ref<number>(5) // 每行显示的列数
</script>

<style scoped>
.quick-link {
  margin-top: 20px;
}

.grid {
  /* box-sizing: border-box; */
  display: grid;
  justify-content: space-between;
  row-gap: 10px;
  /* column-gap: 20px; */
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
