/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 22/08/2026 - 15:25:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
})
