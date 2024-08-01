const TailwindConfig = require('../../libs/ui-kit/util/src/tailwind/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...TailwindConfig,
  content: [...TailwindConfig.content, './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    ...TailwindConfig.theme,
    extend: {
      ...TailwindConfig.theme.extend,
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
};
