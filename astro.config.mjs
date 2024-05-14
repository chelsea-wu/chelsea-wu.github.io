import { defineConfig } from "astro/config";
const production = import.meta.env.PROD;

export default defineConfig({
  site: production ? "https://chelsea-wu.github.io" : undefined,
  base: production ? "/new-website" : undefined,
});
