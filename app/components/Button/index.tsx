import { button, type ButtonVariantProps } from "styled-system/recipes";

interface ButtonProps {
  visual?: ButtonVariantProps["visual"];
  size?: ButtonVariantProps["size"];
  children: React.ReactNode;
}
export function Button({ children, visual, size }: ButtonProps) {
  return <button className={button({ visual, size })}>{children}</button>;
}
