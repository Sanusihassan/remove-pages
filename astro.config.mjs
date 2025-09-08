import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const isProd = process.env.NODE_ENV === "production";
export default defineConfig({
    vite: {
        optimizeDeps: {
            include: ['react-dropzone'],
        },
        ssr: {
            noExternal: ['react-dropzone', 'react-icons']
        }
    },
    integrations: [react()],
    base: isProd ? "/template" : "/",
});
