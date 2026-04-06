import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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
  root: path.resolve(__dirname, 'web'),
  publicDir: path.resolve(__dirname, 'public'),
  base: githubPagesBase(),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss()],
})
