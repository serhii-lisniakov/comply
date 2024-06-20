import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from "vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), commonjs()],
  optimizeDeps: {
    include: ["xml2js", "glob", "fs-extra", "graceful-fs"]
  }
})
