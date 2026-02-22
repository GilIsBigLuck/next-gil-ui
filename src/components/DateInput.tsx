/**
 * DateInput Component
 *
 * 날짜 입력 컴포넌트
 */

import { InputHTMLAttributes, forwardRef, useRef } from "react";

type InputSize = "sm" | "md" | "lg";

interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  size?: InputSize;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "px-3 py-1.5 text-sm pr-10",
  md: "px-4 py-2 text-base pr-10",
  lg: "px-4 py-3 text-lg pr-12",
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      label,
      error = false,
      errorMessage,
      size = "md",
      className = "",
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");

    const handleClick = () => {
      if (!disabled && inputRef.current) {
        inputRef.current.showPicker?.();
      }
    };

    const baseStyles =
      "w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer";

    const stateStyles = error
      ? "border-error-500 focus:ring-error-500 focus:border-error-500"
      : "border-gray-300 focus:ring-primary-900 focus:border-transparent";

    const classes = [baseStyles, stateStyles, sizeStyles[size], className]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative" onClick={handleClick}>
          <input
            ref={(node) => {
              (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            id={inputId}
            type="date"
            className={`${classes} [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
            disabled={disabled}
            {...props}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
        </div>
        {error && errorMessage && (
          <p className="text-sm text-error-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);

DateInput.displayName = "DateInput";

export default DateInput;
