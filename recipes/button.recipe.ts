import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    display: "flex",
  },
  variants: {
    theme: {
      primaryFilled: {
        bg: "figma.Primary/Primary500",
      },
      dangerFilled: {
        bg: "figma.Red/Red500",
      },
      primaryGhostFilled: {
        bg: "figma.Primary/Primary50",
      },
      dangerGhostFilled: {
        bg: "figma.Red/Red50",
      },
      whiteFilled: {
        bg: "figma.Grayscale/White",
      },
      grayScaleFilled: {
        bg: "figma.Grayscale/Gray50",
      },
      grayScaleOutline: {
        bg: "figma.Grayscale/White",
        border: "1px solid",
        borderColor: "figma.Grayscale/Gray200",
      },
      roundOutLine: {
        bg: "figma.Grayscale/White",
        border: "1px solid",
        borderColor: "figma.Grayscale/Gray100",
      },
      textFilled: {
        bg: "figma.Grayscale/White",
      },
    },
    size: {
      large: {
        padding: "12px 26px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        textStyle: "title-60px-700",
      },
      medium: {
        padding: "10px 24px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      },
      small: {
        padding: "8px 16px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "6px",
      },
    },
  },
  defaultVariants: {
    theme: "dangerFilled",
    size: "medium",
  },
});
