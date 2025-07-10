import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/project-promo-51-module-3-team-3/",
  plugins: [react()],
  server: {
    open: "/",
    watch: {
      usePolling: true
    }
  }
});


