import {defineConfig} from 'vite'
import {createHtmlPlugin} from "vite-plugin-html";

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true
        })
    ],
    base: '/js-han/',
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                han: 'src/han.js',
            },
            output: {
                dir: 'docs',
                entryFileNames: '[name].min.js',
            }
        }
    }
})