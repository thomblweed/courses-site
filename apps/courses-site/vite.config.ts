/// <reference types='vitest' />
import path from 'path';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { ViteUserConfig } from 'vitest/config';

const config: ViteUserConfig = {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/courses-site',
  plugins: [react(), nxViteTsPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['./**/*.{test,spec}.{ts,tsx}'],
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
};

export default defineConfig(config);
