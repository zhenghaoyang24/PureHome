// types/searchEngine.ts 或 src/types/index.ts

/**
 * 搜索引擎配置类型
 */
export interface SearchEngine {
  /** 唯一标识符，如 'baidu' */
  key: string

  /** 显示名称，如 '百度' */
  name: string

  /** 搜索 URL 模板，关键词用 `{query}` 占位 */
  searchUrl: string

  /** 官网首页链接 */
  homepage: string

  /** Iconify 图标名称或路径，如 'simple-icons:baidu' */
  icon: string

  /** 品牌主色，用于 UI 样式 */
  color: string
}
