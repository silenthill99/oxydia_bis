import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        cors: {
            origin: ['http://oxydia.test', 'http://localhost'],  // Ajoute les origines autorisées
            methods: ['GET', 'POST', 'PUT', 'DELETE'], // Les méthodes HTTP autorisées
        },
    },
});
