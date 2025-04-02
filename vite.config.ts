import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"  // Ensure Vite builds to 'dist/'
  },
  base: "/yoda-frontend/" // Set base to match GitHub Pages URL
})
