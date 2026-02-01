import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [svgr(), react(), viteTsconfigPaths(), tailwindcss()],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        sanitizeFileName: true,
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('lightbox')) return 'lightbox';
          if (id.includes('react-icons')) return 'icons';
          if (/yup|formik/.test(id)) return 'form';
          if (/calendar|date-fns|chroma-js/.test(id)) return 'calendar';
          if (/react-router-dom|@remix-run|react-router/.test(id)) {
            return 'react-router';
          }
        },
      },
    },
  },
});
