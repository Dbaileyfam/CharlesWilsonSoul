import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function githubPagesBase(): string {
  if (process.env.GITHUB_PAGES !== 'true') return '/'
  const raw = process.env.GITHUB_PAGES_BASE?.trim()
  if (raw) {
    const withSlash = raw.startsWith('/') ? raw : `/${raw}`
    return withSlash.endsWith('/') ? withSlash : `${withSlash}/`
  }
  return '/CharlesWilsonSoul/'
}

// https://vite.dev/config/
export default defineConfig({
  base: githubPagesBase(),
  plugins: [react(), tailwindcss()],
})
