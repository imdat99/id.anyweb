import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [UnoCSS(), vueJsx(), vue()],
    resolve: {
        alias: {
            '@': '/src',
            'src': '/src',
        },
    },
})
