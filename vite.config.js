import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { fileURLToPath, URL } from 'node:url'

// Preset recommandé pour UnoCSS
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    plugins: [
        vue(),
        UnoCSS({
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons({
                    scale: 1.2,
                    warn: true
                }),
                presetTypography({
                    cssExtend: {
                        'ul,ol': {
                            paddingLeft: '2rem'
                        }
                    }
                }),
                presetWebFonts({
                    fonts: {
                        sans: 'Inter',
                        serif: 'Playfair Display',
                        mono: 'Fira Code'
                    }
                })
            ],
            transformers: [
                transformerDirectives(),
                transformerVariantGroup()
            ]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
