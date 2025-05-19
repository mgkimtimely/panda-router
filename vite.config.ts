// vite.config.ts
import pandacss from "@pandacss/dev/postcss";
import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// PostCSS 플러그인을 any[]로 명시적으로 캐스팅
export default defineConfig({
  css: {
    postcss: {
      plugins: [pandacss as any, autoprefixer as any],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
});
