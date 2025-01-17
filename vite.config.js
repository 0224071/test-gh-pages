import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import {resolve} from 'path'
// https://vitejs.dev/config/
console.log(process.env.NODE_ENV === 'production')
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  base: process.env.NODE_ENV === 'production' ? '/travelTaiwan/' : '',
  resolve: {
    alias: {
      // @ 替代为 src
      '@': resolve(__dirname, 'src'),
      // @component 替代为 src/component
      '@components': resolve(__dirname, 'src/components'),
    },
  },
})
