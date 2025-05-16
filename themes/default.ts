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
        "Grayscale/White": { value: "#ffffff" },
        "Grayscale/Gray50": { value: "#f7f8f9" },
        "Grayscale/Gray100": { value: "#e8ebed" },
        "Grayscale/Gray200": { value: "#c9cdd2" },
        "Grayscale/Gray300": { value: "#9ea4aa" },
        "Grayscale/Gray400": { value: "#72787f" },
        "Grayscale/Gray500": { value: "#4d5053" },
        "Grayscale/Gray600": { value: "#3d4043" },
        "Grayscale/Black": { value: "#1b1d1f" },
        "Primary/Primary50": { value: "#f8f5ff" },
        "Primary/Primary100": { value: "#e2d6ff" },
        "Primary/Primary200": { value: "#c8acff" },
        "Primary/Primary500": { value: "#894fff" },
        "Primary/Primary600": { value: "#6d35de" },
        "Primary/Primary700": { value: "#5221b5" },
        "Red/Red50": { value: "#fef3f2" },
        "Red/Red100": { value: "#ffeaea" },
        "Red/Red200": { value: "#ffdddd" },
        "Red/Red500": { value: "#e02d3c" },
        "Red/Red600": { value: "#b91c1c" },
        "Red/Red700": { value: "#981b25" },
        "Green/Green50": { value: "#f5fbf8" },
        "Green/Green100": { value: "#e9fdf0" },
        "Green/Green200": { value: "#b1f3c8" },
        "Green/Green500": { value: "#08875d" },
        "Green/Green600": { value: "#04724d" },
        "Green/Green700": { value: "#066042" },
        "Yellow/Yellow50": { value: "#fffaeb" },
        "Yellow/Yellow100": { value: "#fff5d7" },
        "Yellow/Yellow200": { value: "#fedf89" },
        "Yellow/Yellow500": { value: "#b25e09" },
        "Yellow/Yellow600": { value: "#96530f" },
        "Yellow/Yellow700": { value: "#80460d" },
        "Blue/Blue50": { value: "#f7faff" },
        "Blue/Blue100": { value: "#edf3ff" },
        "Blue/Blue200": { value: "#b8cfff" },
        "Blue/Blue500": { value: "#2f6fed" },
        "UI/color/primary": { value: "#6750a3" },
      },
    },
  },
};
