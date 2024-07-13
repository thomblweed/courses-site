const TailwindConfig = require('../../libs/ui-kit/util/src/tailwind/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...TailwindConfig,
  content: [...TailwindConfig.content, './src/**/*.{js,jsx,ts,tsx}'],
};
