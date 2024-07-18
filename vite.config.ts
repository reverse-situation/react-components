import { defineConfig } from 'vite'
import { join } from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: join(__dirname, './src/index.ts'),
      name: 'test',
      fileName: 'index',
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@myComponents': join(__dirname, './components'),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
      },
    },
  },
})
