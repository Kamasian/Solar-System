import { defineConfig } from "vite"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: "build",
        minify: false,
        sourcemap: true,

    },
    resolve: {
        alias: {
            '/assets': path.resolve(__dirname, 'src/assets'),
            '@': path.resolve(__dirname, 'public'),
        },
    },
})