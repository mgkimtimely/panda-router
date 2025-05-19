import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    display: "flex",
  },
  variants: {
    visual: {
      primaryFilled: {
        bg: "figma.Primary500",
      },
      dangerFilled: {
        bg: "figma.Red500",
      },
      primaryGhostFilled: {
        bg: "figma.Primary50",
      },
      dangerGhostFilled: {
        bg: "figma.Red50",
      },
      whiteFilled: {
        bg: "figma.White",
      },
      grayScaleFilled: {
        bg: "figma.Gray50",
      },
      grayScaleOutline: {
        bg: "figma.White",
        border: "1px solid",
        borderColor: "figma.Gray200",
      },
      roundOutLine: {
        bg: "figma.White",
        border: "1px solid",
        borderColor: "figma.Gray100",
      },
      textFilled: {
        bg: "figma.White",
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
        borderRadius: "16px",
      },
      medium: {
        padding: "10px 24px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        borderRadius: "12px",
      },
      small: {
        padding: "8px 16px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "6px",
        borderRadius: "8px",
      },
    },
  },
  defaultVariants: {
    visual: "primaryFilled",
    size: "medium",
  },
});
