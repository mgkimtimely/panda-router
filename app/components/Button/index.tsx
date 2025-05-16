// ✅ 올바른 코드
import { css } from "styled-system/css";
import { button } from "styled-system/recipes";

interface ButtonProps {
  theme:
    | "primaryFilled"
    | "dangerFilled"
    | "primaryGhostFilled"
    | "dangerGhostFilled"
    | "whiteFilled"
    | "grayScaleFilled"
    | "grayScaleOutline"
    | "roundOutLine"
    | "textFilled";
  size: "large" | "medium" | "small";
  children: React.ReactNode;
}

export default function ButtonComponent({
  theme,
  size,
  children,
}: ButtonProps) {
  return (
    <>
      <button className={button({ theme: theme, size: size })}>
        <span className={css({ textStyle: "Title/32px/32px.700" })}>
          {children}
        </span>
      </button>
    </>
  );
}
