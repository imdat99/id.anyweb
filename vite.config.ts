import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { webToNodeHandler } from "@hiogawa/utils-node";
// import { pathToFileURL } from 'url'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
// https://vite.dev/config/
// import path from "node:path";
export default defineConfig({
  plugins: [
    UnoCSS(),
    vueJsx(),
    vue(),
    vitePluginForArco({
      style: "css"
    }),
    {
      name: "preview-middleware",
      async configureServer(server) {
        (globalThis as any).__vite_server__ = server;
        return () => {
          server.middlewares.use(async (req, res, next) => {
            const module = await server.ssrLoadModule("./src/entry.server.ts");
            req.url = req.originalUrl; // Ensure the URL is set correctly
            webToNodeHandler(module.default)(req, res, next);
          });
        };
      },
    //   async configurePreviewServer(server) {
    //     const mod = await import(
    //       pathToFileURL(path.resolve("./dist/server/index.cjs")).pathname
    //     );
    //     return () => {
    //       server.middlewares.use(async (req, res, next) => {
    //         req.url = req.originalUrl; // Ensure the URL is set correctly
    //         webToNodeHandler(mod.default.default)(req, res, next);
    //       });
    //     };
    //   },
    },
  ],

//   environments: {
//     client: {
//       build: {
//         rolldownOptions: {
//           input: {
//             index: "./src/entry.client.ts",
//           },
//         },
//         outDir: "dist/client",
//         manifest: true,
//         emptyOutDir: true,
//       },
//     },
//     ssr: {
//       build: {
//         rolldownOptions: {
//           input: {
//             index: "./src/entry.server.ts",
//           },
//           output: {
//             format: "cjs",
//           },
//         },
//         outDir: "dist/server",
//         emptyOutDir: true,
//       },
//     },
//   },
//   builder: {
//     buildApp: async (builder) => {
//       await builder.build(builder.environments.client);
//       await builder.build(builder.environments.ssr);
//     },
//   },
});
