import { defineConfig } from 'vite';

export default defineConfig({
    root: "public",
    resolve: {
        alias: {
            '@axios': 'axios/index.js',
        },
    }
});