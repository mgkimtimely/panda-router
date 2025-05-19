import { shadowStyles } from "./shadow";
import { textStyles } from "./textStyles";

export const defaultTheme = {
  // 타이포그래피 설정
  textStyles: textStyles,
  shadowStyles: shadowStyles,
  // 색상 설정
  tokens: {
    colors: {
      figma: {
        White: { value: "#ffffff" },
        Gray50: { value: "#f7f8f9" },
        Gray100: { value: "#e8ebed" },
        Gray200: { value: "#c9cdd2" },
        Gray300: { value: "#9ea4aa" },
        Gray400: { value: "#72787f" },
        Gray500: { value: "#4d5053" },
        Gray600: { value: "#3d4043" },
        Black: { value: "#1b1d1f" },
        Primary50: { value: "#f8f5ff" },
        Primary100: { value: "#e2d6ff" },
        Primary200: { value: "#c8acff" },
        Primary500: { value: "#894fff" },
        Primary600: { value: "#6d35de" },
        Primary700: { value: "#5221b5" },
        Red50: { value: "#fef3f2" },
        Red100: { value: "#ffeaea" },
        Red200: { value: "#ffdddd" },
        Red500: { value: "#e02d3c" },
        Red600: { value: "#b91c1c" },
        Red700: { value: "#981b25" },
        Green50: { value: "#f5fbf8" },
        Green100: { value: "#e9fdf0" },
        Green200: { value: "#b1f3c8" },
        Green500: { value: "#08875d" },
        Green600: { value: "#04724d" },
        Green700: { value: "#066042" },
        Yellow50: { value: "#fffaeb" },
        Yellow100: { value: "#fff5d7" },
        Yellow200: { value: "#fedf89" },
        Yellow500: { value: "#b25e09" },
        Yellow600: { value: "#96530f" },
        Yellow700: { value: "#80460d" },
        Blue50: { value: "#f7faff" },
        Blue100: { value: "#edf3ff" },
        Blue200: { value: "#b8cfff" },
        Blue500: { value: "#2f6fed" },
        primary: { value: "#6750a3" },
      },
    },
  },
};
