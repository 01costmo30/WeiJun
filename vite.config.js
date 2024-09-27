import { fileURLToPath, URL } from 'node:url'
import fs from 'fs/promises'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// module.exports = {
// publicPath: ''
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'generate-404-page',
      apply: 'build',
      async transformIndexHtml(html) {
        fs.appendFile('./dist/404.html', html);
        return html;
      },
    }
  ],
  base: '/WeiJun/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
