import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      manifest: {
        name: 'adminMsl',
        short_name: 'adminApp',
        description: 'MSL',
        icons: [
          // public 에 들어갈 icon
          // {
          //   src: 'icon-192x192.png',
          //   sizes: '192x192',
          //   type: 'image/png',
          // },
          // {
          //   src: 'icon-512x512.png',
          //   sizes: '512x512',
          //   type: 'image/png',
          // },
        ],
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
      },
      registerType: 'autoUpdate',
    })
  ],
  server: {
    port: 40083
  }
})
