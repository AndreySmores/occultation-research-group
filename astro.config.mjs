import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://occultationgroup.org', // TODO: Replace with your actual domain
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      cssCodeSplit: false
    }
  }
});


