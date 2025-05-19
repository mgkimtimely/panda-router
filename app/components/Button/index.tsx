import { button, type ButtonVariantProps } from "styled-system/recipes";

interface ButtonProps {
  visual?: ButtonVariantProps["visual"];
  size?: ButtonVariantProps["size"];
  shape?: ButtonVariantProps["shape"];
  children: React.ReactNode;
}
export function Button({ children, visual, size, shape }: ButtonProps) {
  return (
    <button className={button({ visual, size, shape })}>{children}</button>
  );
}
