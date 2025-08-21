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
    ],
    theme: {
    colors: {
      border: 'hsl(214.3 31.8% 91.4%)',
      input: 'hsl(214.3 31.8% 91.4%)',
      ring: '#fa5437',
      background: 'oklch(0.98 0 0)',
      foreground: 'oklch(0.18 0 0)',
      primary: {
        DEFAULT: '#fa5437',
        foreground: 'hsl(210 40% 98%)',
      },
      secondary: {
        DEFAULT: 'hsl(210 40% 96%)',
        foreground: 'hsl(222.2 84% 4.9%)',
      },
      muted: {
        DEFAULT: 'hsl(210 40% 96%)',
        foreground: 'hsl(215.4 16.3% 46.9%)',
      },
      accent: {
        DEFAULT: 'hsl(210 40% 96%)',
        foreground: 'hsl(222.2 84% 4.9%)',
      },

      destructive: {
        DEFAULT: 'hsl(0 84.2% 60.2%)',
        foreground: 'hsl(210 40% 98%)',
      },
      card: {
        DEFAULT: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)',
      },
    },
    radius: {
      none: '0px',
      sm: '0.125rem', // 2px
      DEFAULT: '0rem', // 4px (áp dụng cho .rounded)
      md: '0.375rem', // 6px
      lg: '0.5rem', // 8px
      xl: '0.75rem', // 12px
      '2xl': '1rem', // 16px
      '3xl': '1.5rem', // 24px
      full: '9999px',
    },
    fontFamily: {
      mono: {
        name: 'Roboto',
        weights: ['100', '400', '500', '700'],
        italic: true,
      },
    },
  },
})