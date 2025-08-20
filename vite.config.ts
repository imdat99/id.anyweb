import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import nitro from '@hiogawa/vite-plugin-nitro'
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        UnoCSS(),
        vueJsx(),
        vue(),
        nitro({
            server: {
                environmentName: 'ssr',
            },
            config: {
                preset: 'node-server',
            },
        }),
    ],
    environments: {
        client: {
            build: {
                rolldownOptions: {
                    input: {
                        index: './src/main.ts',
                    },
                },
                outDir: 'dist/client',
                emptyOutDir: true,
            },
        },
        ssr: {
            build: {
                rolldownOptions: {
                    input: {
                        index: './src/entry.server.ts',
                    },
                },
                outDir: 'dist/server',
                emptyOutDir: true,
            },
        },
    },
    builder: {
      buildApp: async (builder) => {
        await builder.build(builder.environments.client)
        await builder.build(builder.environments.ssr)
      }
    }
})
