import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react(), 
    'macros',
    {
      name: 'vite:import-analysis',
      enforce: 'pre',
      transform: (code) => code,
    },
  ],
  'fontawesome-svg-core': {
    'license': 'free',
  },
})
