import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.tmdesignengineering.com',
  integrations: [sitemap()],
});
