import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    server: {
      port: 3000,
    },
    preview: {
      port: 8080,
    },
    plugins: [react(), VitePWA(), viteCompression()],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/FM_space-tourism-website/";
  }

  return config;
});
