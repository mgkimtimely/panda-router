import { defineKeyframes } from "@pandacss/dev";

export const keyframeStyles = defineKeyframes({
  fadein: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  fadeout: {
    "0%": { opacity: "1" },
    "100%": { opacity: "0" },
  },
  slidein: {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0)" },
  },
  slideout: {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-100%)" },
  },
  slideup: {
    "0%": { transform: "translateY(100%)" },
    "100%": { transform: "translateY(0)" },
  },
  slidedown: {
    "0%": { transform: "translateY(0)" },
    "100%": { transform: "translateY(-100%)" },
  },
  slideleft: {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0)" },
  },
  slideright: {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(100%)" },
  },
  pingpong: {
    "0%": { transform: "translateX(0)" },
    "50%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0)" },
  },
});
