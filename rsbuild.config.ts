// rsbuild.config.ts
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginVueJsx } from "@rsbuild/plugin-vue-jsx";
import { UnoCSSRspackPlugin } from '@unocss/webpack/rspack';
import { SemiRspackPlugin } from '@douyinfe/semi-rspack-plugin';
export default {
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginVue(),
    pluginVueJsx(),
    
  ],
  tools: {
    rspack: {
      plugins: [UnoCSSRspackPlugin(), 
        // new SemiRspackPlugin({
        //     cssLayer:true
        // })
      ],
    },
  },
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.ts',
    },
  },
  server: {
    port: 3001,
    open: false,
  },
    output: {
    legalComments: 'none',
    cleanDistPath: true,
    sourceMap: false,
    filename: {
      js: '[contenthash:4].js',
    },
  },
};