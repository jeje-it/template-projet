import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
    plugins: [vue(), UnoCSS()],
    test: {
        globals: true,
        environment: 'happy-dom',
        root: './src',
        include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html']
        }
    }
})
