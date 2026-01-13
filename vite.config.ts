import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import {wayfinder} from "@laravel/vite-plugin-wayfinder";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        wayfinder({
            formVariants: true
        }),
        react(),
        tailwindcss()
    ],
});
