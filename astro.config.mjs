import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://pepefeliblu.github.io',
  base: '/pepefeliblu',
  compressHTML: true,

  vite: {
      build: {
          minify: true
      }
  },

  markdown: {
      rehypePlugins: [
          [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
      ]
  },

  integrations: [react()]
});