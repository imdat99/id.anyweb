import { defineConfig, presetWebFonts, presetWind4 } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
    presets: [
        presetWind4(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Google Sans',
                body: 'Google Sans',
            }
        }),
    ]
})