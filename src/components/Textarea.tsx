/**
 * Textarea Component
 *
 * 여러 줄 텍스트 입력 컴포넌트
 * 접근성: label htmlFor 연결, 에러 role="alert"
 */

import { TextareaHTMLAttributes, forwardRef } from "react";

type TextareaSize = "sm" | "md" | "lg";
type TextareaLayout = "column" | "row";
type TextareaResize = "none" | "vertical" | "horizontal" | "both";

interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  successMessage?: string;
  size?: TextareaSize;
  layout?: TextareaLayout;
  labelWidth?: string;
  resize?: TextareaResize;
}

const sizeStyles: Record<TextareaSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const resizeStyles: Record<TextareaResize, string> = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
      resize = "vertical",
      className = "",
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s/g, "-");

    const baseStyles =
      "w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed";

    const stateStyles = error
      ? "border-error-500 focus:ring-error-500 focus:border-error-500"
      : success
      ? "border-success-500 focus:ring-success-500 focus:border-success-500"
      : "border-gray-300 focus:ring-primary-900 focus:border-transparent";

    const classes = [
      baseStyles,
      stateStyles,
      sizeStyles[size],
      resizeStyles[resize],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const isRow = layout === "row";

    return (
      <div className={`flex ${isRow ? "flex-row items-start gap-3" : "flex-col gap-1.5"}`}>
        {label && (
          <label
            htmlFor={textareaId}
            className={`text-sm font-medium text-gray-700 ${isRow ? `flex-shrink-0 ${labelWidth} pt-2` : ""}`}
          >
            {label}
          </label>
        )}
        <div className={`${isRow ? "flex-1" : ""} flex flex-col gap-1.5`}>
          <textarea
            ref={ref}
            id={textareaId}
            rows={rows}
            className={classes}
            aria-invalid={error || undefined}
            aria-describedby={error && errorMessage ? `${textareaId}-error` : undefined}
            {...props}
          />
          {error && errorMessage && (
            <p id={`${textareaId}-error`} className="text-sm text-error-500" role="alert">
              {errorMessage}
            </p>
          )}
          {success && successMessage && (
            <p className="text-sm text-success-600">{successMessage}</p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
