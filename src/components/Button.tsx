/**
 * Button Component
 *
 * 사용법 (React/Next.js):
 * <Button variant="primary" size="md">버튼</Button>
 *
 * Angular에서 동일한 클래스 사용:
 * <button class="bg-primary-900 text-white px-4 py-2 font-medium hover-prism">
 */

import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";
type ButtonRounded = "none" | "pill";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  rounded?: ButtonRounded;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-900 text-white",
  secondary: "bg-secondary-700 text-white",
  outline: "border border-primary-900 text-primary-900",
  ghost: "text-gray-700",
  danger: "bg-error-600 text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      rounded = "none",
      className = "",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium hover-prism focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const roundedStyles = rounded === "pill" ? "rounded-full" : "";

    const classes = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      roundedStyles,
      fullWidth ? "w-full" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
