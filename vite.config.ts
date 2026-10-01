import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Link-preview crawlers (WhatsApp etc.) need absolute image URLs.
// Uses SITE_URL if set, otherwise the production domain Vercel exposes at build time.
function siteUrl(): string {
  const explicit = process.env.SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
  return vercel ? `https://${vercel}` : ''
}

function injectSiteUrl(): Plugin {
  return {
    name: 'inject-site-url',
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl()),
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), injectSiteUrl()],
})
