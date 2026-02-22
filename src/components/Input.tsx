/**
 * Input Component
 *
 * 사용법 (React/Next.js):
 * <Input placeholder="이메일" />
 * <Input error errorMessage="필수 입력입니다" />
 *
 * Angular에서 동일한 클래스 사용:
 * <input class="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary-900 focus:border-transparent" />
 */

import { InputHTMLAttributes, forwardRef } from "react";

type InputSize = "sm" | "md" | "lg";
type InputLayout = "column" | "row";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  successMessage?: string;
  size?: InputSize;
  layout?: InputLayout;
  labelWidth?: string;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error = false,
      errorMessage,
      success = false,
      successMessage,
      size = "md",
      layout = "column",
      labelWidth = "w-24",
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");

    const baseStyles =
      "w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed";

    const stateStyles = error
      ? "border-error-500 focus:ring-error-500 focus:border-error-500"
      : success
      ? "border-success-500 focus:ring-success-500 focus:border-success-500"
      : "border-gray-300 focus:ring-primary-900 focus:border-transparent";

    const classes = [baseStyles, stateStyles, sizeStyles[size], className]
      .filter(Boolean)
      .join(" ");

    const isRow = layout === "row";

    return (
      <div className={`flex ${isRow ? "flex-row items-center gap-3" : "flex-col gap-1.5"}`}>
        {label && (
          <label
            htmlFor={inputId}
            className={`text-sm font-medium text-gray-700 ${isRow ? `flex-shrink-0 ${labelWidth}` : ""}`}
          >
            {label}
          </label>
        )}
        <div className={`${isRow ? "flex-1" : ""} flex flex-col gap-1.5`}>
          <input ref={ref} id={inputId} className={classes} {...props} />
          {error && errorMessage && (
            <p className="text-sm text-error-500">{errorMessage}</p>
          )}
          {success && successMessage && (
            <p className="text-sm text-success-600">{successMessage}</p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
