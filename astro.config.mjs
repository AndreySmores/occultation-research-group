import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://occultationgroup.org', // TODO: Replace with your actual domain
  output: 'static',
  integrations: [mdx()],
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      cssCodeSplit: false
    }
  }
});


