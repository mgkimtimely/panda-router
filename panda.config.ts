import { defineConfig } from "@pandacss/dev";
import { buttonRecipe } from "styled-system/recipes/buttons";
import { color } from "styled-system/tokens/color";
import { shadow } from "styled-system/tokens/shadow";
import { textStyles } from "styled-system/tokens/typography";

export default defineConfig({
  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    // 👇🏻 Define your tokens here
    extend: {
      textStyles,
      tokens: {
        colors: {
          color,
          shadow,
        },
      },
      recipes: {
        button: buttonRecipe,
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
