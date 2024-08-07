import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig } from 'vite';


export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/ui-kit/util',

  plugins: [nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    globals: true,
    cache: { dir: '../../../node_modules/.vitest/libs/ui-kit/util' },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../../coverage/libs/ui-kit/util',
      provider: 'v8',
    },
  },
});
