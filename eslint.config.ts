import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { resolve } from 'node:path'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

// 解析绝对路径
const projectRoot = resolve(__dirname)

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    // 添加 parserOptions 配置
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: projectRoot,
        project: ['./tsconfig.json'], // 确保路径正确
        extraFileExtensions: ['.vue'],
      },
    },
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  {
    ...vueTsConfigs.recommended,
    // 为 TypeScript 配置添加正确的 parserOptions
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: projectRoot,
        project: ['./tsconfig.json'],
      },
    },
  },
  skipFormatting,
)
