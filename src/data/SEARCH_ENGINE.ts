import type { SearchEngine } from '@/types/search'
import baidu_icon from '@/assets/svg/baidu_icon.svg'
import bing_icon from '@/assets/svg/bing_icon.svg'
import google_icon from '@/assets/svg/google_icon.svg'
import sougou_icon from '@/assets/svg/sougou_icon.svg'

export const SEARCH_ENGIN: SearchEngine[] = [
  {
    key: 'bing',
    name: '必应',
    searchUrl: 'https://www.bing.com/search?q={query}',
    homepage: 'https://www.bing.com',
    icon: bing_icon,
    color: '#008373',
  },
  {
    key: 'baidu',
    name: '百度',
    searchUrl: 'https://www.baidu.com/s?wd={query}',
    homepage: 'https://www.baidu.com',
    icon: baidu_icon,
    color: '#2932e1',
  },
  {
    key: 'google',
    name: '谷歌',
    searchUrl: 'https://www.google.com/search?q={query}',
    homepage: '../assets/svg/google_icon.svg',
    icon: google_icon,
    color: '#4285F4',
  },
  {
    key: 'sogou',
    name: '搜狗',
    searchUrl: 'https://www.sogou.com/web?query={query}',
    homepage: '../assets/svg/sogou_icon.svg',
    icon: sougou_icon,
    color: '#FF7F2B',
  },
]
