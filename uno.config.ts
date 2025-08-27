import {
    defineConfig,
    presetWebFonts,
    presetWind4,
    transformerVariantGroup,
    transformerCompileClass,
} from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    presets: [
        presetWind4(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: [
                    {
                        name: 'Google Sans',
                        weights: ['400', '500', '700'],
                        italic: true,
                    },
                ],

                body: 'Google Sans',
            },
        }),
    ],
    transformers: [
        transformerVariantGroup(),
        transformerCompileClass({
            classPrefix: 'xemdi_',
        }),
    ],
    theme: {
        colors: {
            border: 'hsl(214.3 31.8% 91.4%)',
            input: 'hsl(214.3 31.8% 91.4%)',
            ring: 'oklch(0.6276 0.2076 264.51)',
            background: 'oklch(0.98 0 0)',
            foreground: 'oklch(0.18 0 0)',
            primary: {
                DEFAULT: 'oklch(0.6276 0.2076 264.51)',
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
    },
    shortcuts: [
        {
            focus_inp:
                'outline-none ring-1 ring-primary shadow-[0_0_0_0.25rem] shadow-primary/10',
            form_input:
                '!p-0 [&_.semi-input-wrapper]:border-gray-300 [&_.semi-input-wrapper]:focus-within:border-[var(--semi-color-focus-border)]',
        },
    ],
    preflights: [
    {
      getCSS: (context) => {
        return `
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        html, body {
            --semi-border-radius-small: 6px!important;
            --semi-color-nav-bg: #F8FAFD!important;
        }
      `;
      },
    },
  ],
})
