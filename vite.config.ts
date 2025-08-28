import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import SemiTheme from '@kousum/vite-plugin-semi-theme'
export default defineConfig({
    plugins: [
        UnoCSS(),
        vueJsx(),
        vue(),
        SemiTheme({
            theme: '@douyinfe/semi-theme-default',
            // include: path.join(__dirname, 'theme.scss')
            variables: `
              $font-family-regular: 'google Sans';
            `,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                preserveModules: true,
            }
        },
        minify: false
    },
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
                additionalData: `@use "scss:math";@import "./src/styles/variables.scss";`,
            },
        },
    },
    resolve: {
        alias: {
            '@': '/src',
            src: '/src',
        },
    },
})
