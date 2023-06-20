import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from "@vitejs/plugin-vue";
import laravel from 'laravel-vite-plugin';
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        splitVendorChunkPlugin(),
    ],
    resolve: {
        alias:{
            '@': fileURLToPath(new URL('resources/js', import.meta.url))
        }
    }
});
