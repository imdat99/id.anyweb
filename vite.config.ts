import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import SemiTheme from "@kousum/vite-plugin-semi-theme";
export default defineConfig({
    plugins: [UnoCSS(), vueJsx(), vue(), SemiTheme({
        theme: "@douyinfe/semi-theme-default",
        // include: path.join(__dirname, 'theme.scss')
        variables: `$font-family-regular: 'google Sans';`,
    })],
    css: {
    preprocessorOptions: {
      scss: {
        // Đây chính là chỗ disable warning từ dependencies
        quietDeps: true,
      },
    },
  },
    resolve: {
        alias: {
            '@': '/src',
            'src': '/src',
        },
    },
})
