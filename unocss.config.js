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
    shortcuts: [
        // Shortcuts globales pour le template
        ['flex-center', 'flex items-center justify-center'],
        ['flex-between', 'flex items-center justify-between'],
        ['text-gradient', 'bg-gradient-to-r bg-from-primary bg-to-secondary bg-clip-text text-transparent']
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: '#3b82f6',
                light: '#60a5fa',
                dark: '#2563eb'
            },
            secondary: {
                DEFAULT: '#8b5cf6',
                light: '#a78bfa',
                dark: '#7c3aed'
            },
            success: '#22c55e',
            warning: '#f59e0b',
            danger: '#ef4444'
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true
        }),
        presetTypography(),
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
