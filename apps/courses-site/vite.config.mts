/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/courses-site',
  plugins: [react(), nxViteTsPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['specs/**/*.{test,spec}.{ts,tsx}'],
    setupFiles: './tests/setup.ts',
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/courses-site',
      provider: 'v8',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
