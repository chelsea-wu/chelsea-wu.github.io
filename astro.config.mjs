import { defineConfig } from "astro/config";
import "dotenv/config";

export default defineConfig({
  site: process.env.ASTRO_SITE,
  base: process.env.ASTRO_BASE,
});
