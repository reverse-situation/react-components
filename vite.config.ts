import { defineConfig } from 'vite'
import { join } from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: join(__dirname, './src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    outDir: join(__dirname, './dist'),
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@myComponents': join(__dirname, './src/component'),
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
