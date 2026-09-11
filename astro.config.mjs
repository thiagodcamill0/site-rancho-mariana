import { defineConfig } from 'astro/config';

// Site estático — sem framework de UI. Ver DESIGN.md §13.1.
export default defineConfig({
  output: 'static',
  compressHTML: true,
});
