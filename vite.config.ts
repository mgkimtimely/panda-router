import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import pandacss from "@pandacss/dev/postcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [pandacss as any, autoprefixer as any],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
});
