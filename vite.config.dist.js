import {defineConfig} from 'vite'
import {viteStaticCopy} from 'vite-plugin-static-copy'
import {createHtmlPlugin} from "vite-plugin-html";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'src/han.js',
            },
            output: {
                dir: 'dist',
                entryFileNames: '[name].min.js'
            }
        },
    }
})