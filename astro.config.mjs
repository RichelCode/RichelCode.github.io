// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // For a `<username>.github.io` repository, the site is served from the root
  // of the domain, so `site` is the bare domain and NO `base` path is needed.
  // (A `base` is only required for project repos like `<username>.github.io/<project>`.)
  site: 'https://richelcode.github.io',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), react()],
});