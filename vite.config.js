import {defineConfig} from 'vite'
import {createHtmlPlugin} from "vite-plugin-html";

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true
        })
    ],
    base: '/js_han/',
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
            },
            output: {
                dir: 'docs',
                entryFileNames: '[name].min.js',
            }
        }
    }
})