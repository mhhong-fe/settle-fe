import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        UnoCSS(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ['vue', 'vue/macros', 'vue-router', 'pinia'],
            dts: true,
            vueTemplate: true,
            // 这些目录下的文件会被自动导入
            dirs: ['./src/composables/**', './src/api/**', './src/utils/**', './src/enums/**'],
            // 解决eslint冲突
            eslintrc: {
                enabled: true,
            },
        }),
        Components({
            resolvers: [ElementPlusResolver()],
            dts: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''), // 可选: 修改路径
            },
        },
    },
});
