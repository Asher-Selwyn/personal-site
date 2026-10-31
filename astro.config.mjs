import { defineConfig } from "astro/config";

// Static HTML for Cloudflare Pages. `npm run build` writes to dist/.
export default defineConfig({
  output: "static",
});
