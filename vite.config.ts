import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
   resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }]
   },
   plugins: [react(), reactRefresh()],
   base: '/superensino-challenge/'
})
