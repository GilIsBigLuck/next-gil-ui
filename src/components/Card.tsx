/**
 * Card Component
 *
 * 사용법 (React/Next.js):
 * <Card>내용</Card>
 * <Card variant="outlined" padding="lg">내용</Card>
 *
 * Angular에서 동일한 클래스 사용:
 * <div class="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
 */

import { HTMLAttributes, forwardRef } from "react";

type CardVariant = "elevated" | "outlined" | "filled";
type CardPadding = "none" | "sm" | "md" | "lg";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
}

const variantStyles: Record<CardVariant, string> = {
  elevated: "bg-white border border-gray-200 shadow-sm",
  outlined: "bg-white border border-gray-300",
  filled: "bg-gray-50 border border-transparent",
};

const paddingStyles: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "elevated",
      padding = "md",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "";

    const classes = [
      baseStyles,
      variantStyles[variant],
      paddingStyles[padding],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
