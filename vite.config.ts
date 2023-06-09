import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// also don't forget to `npm i -D @types/node`, so __dirname won't complain
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Simple_IG_Clone/',
  server: {
    port: 3001,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
