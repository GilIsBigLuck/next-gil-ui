/**
 * Badge Component
 *
 * 사용법 (React/Next.js):
 * <Badge>기본</Badge>
 * <Badge variant="success">성공</Badge>
 *
 * Angular에서 동일한 클래스 사용:
 * <span class="inline-flex items-center px-2.5 py-0.5 text-sm font-medium bg-success-500 text-white">
 */

import { HTMLAttributes, forwardRef } from "react";

type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-700",
  primary: "bg-primary-900 text-white",
  secondary: "bg-secondary-200 text-secondary-700",
  success: "bg-success-500 text-white",
  warning: "bg-warning-500 text-white",
  error: "bg-error-500 text-white",
  info: "bg-info-500 text-white",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-sm",
  lg: "px-3 py-1 text-base",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { variant = "default", size = "md", className = "", children, ...props },
    ref
  ) => {
    const baseStyles = "inline-flex items-center font-medium";

    const classes = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
