import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves from /<repo>/; Vercel and local dev use "/".
export default defineConfig({
  base: process.env.GH_PAGES ? "/tracy-maliaka-portfolio/" : "/",
  plugins: [react()],
});
