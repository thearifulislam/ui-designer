import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Optionally add a dev-inspection plugin (can remove if not needed)
import Inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // You can use vite-plugin-inspect for runtime inspection in dev mode
    mode === "development" && Inspect(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
