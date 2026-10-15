import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// No Cloudflare plugin: wrangler.jsonc deploys dist/ plus src/worker.js
// itself. The plugin would build the worker into dist/ too, publishing its
// code as a public file and moving the site into dist/client.
export default defineConfig({ plugins: [react(), tailwindcss()] })
