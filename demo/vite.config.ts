import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: '.',
    base: './',
    server: {
        // honor the harness-assigned port when present
        port: Number(process.env.PORT) || 5173,
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            'sunrise-sunset-js': resolve(__dirname, '../src/index.ts'),
        },
    },
});
