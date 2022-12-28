import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
          modifyVars: {
            "primary-color": "#F2F2F2",
            "border-color-base": "#E0E0E0",
            "border-color-validate": "#F5C6CB",
            "bg-color-validate": "#F9E4E6",
            "color-validate": "#721C24",
            "border-radius-base": "2px",
            "color-bg-light-success": "#9ED799",
          },
          globalVars: {
            placeholdersColor: "#B4B4B4",
            white: "#fff",
            black: "#000000",
            text2: "#58595B",
            text1: "#000000",
            customColorBgLight: "#F6F6F6",
            customColorSuccess: "#1B8512",
            borderColor: "#E4E4E7",

            break_xxl: "1200px",
            break_xl: "1024px",
            break_lg: "768px",
            break_md: "480px",
            break_sm: "320px",
          },
        },
    },
  },
})
