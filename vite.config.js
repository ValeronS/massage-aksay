import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
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
            "primary-color": "#EB0A1E",
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
            customColorBg: "#F6F6F6",
            customColorSuccess: "#1B8512",
            borderColor: "#E4E4E7",

            break_xxl: "1370px",
            break_xl: "1024px",
            break_lg: "865px",
            break_md: "460px",
            break_sm: "450px",
          },
        },
    },
  },
})
