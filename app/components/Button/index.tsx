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
    | "roundOutLine";
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
      <button className={button({ theme, size })}>
        <span className={css({ textStyle: "title-60px-700" })}>{children}</span>
      </button>
    </>
  );
}
