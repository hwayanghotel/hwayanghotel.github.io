import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hwayanghotel.github.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  server: { port: 4321, host: '0.0.0.0' },
  preview: { port: 4321, host: '0.0.0.0' },
});
