import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : '/bgChanger-react-tailwind/',
  plugins: [react()],
})
