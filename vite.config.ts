import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  mode: "development",
  alias: {
    "@": "/src/",
    "@components": "/src/components/",
    "@pages": "/src/pages/",
  },
});
