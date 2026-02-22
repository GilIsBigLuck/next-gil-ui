/**
 * Toggle Component
 *
 * 토글 스위치 컴포넌트
 */

import { InputHTMLAttributes, forwardRef } from "react";

type ToggleSize = "sm" | "md" | "lg";

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  description?: string;
  size?: ToggleSize;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, description, size = "md", className = "", disabled, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");

    const trackSize = {
      sm: "w-8 h-5",
      md: "w-10 h-6",
      lg: "w-12 h-7",
    }[size];

    const thumbSize = {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    }[size];

    const thumbTranslate = {
      sm: "peer-checked:translate-x-3",
      md: "peer-checked:translate-x-4",
      lg: "peer-checked:translate-x-5",
    }[size];

    return (
      <label
        htmlFor={inputId}
        className={`inline-flex items-start gap-2 cursor-pointer select-none ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        } ${className}`}
      >
        <div className="relative flex-shrink-0">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          {/* Track */}
          <div
            className={`
              ${trackSize} bg-gray-300 rounded-full
              peer-checked:bg-primary-900
              peer-focus-visible:ring-2 peer-focus-visible:ring-primary-900 peer-focus-visible:ring-offset-2
              peer-disabled:bg-gray-200
              transition-colors
            `}
          />
          {/* Thumb */}
          <div
            className={`
              absolute top-1 left-1 ${thumbSize} bg-white rounded-full shadow
              ${thumbTranslate}
              transition-transform
            `}
          />
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-0.5 pt-0.5">
            {label && <span className="text-sm font-medium text-gray-900 leading-5">{label}</span>}
            {description && <span className="text-sm text-gray-500 leading-5">{description}</span>}
          </div>
        )}
      </label>
    );
  }
);

Toggle.displayName = "Toggle";

export default Toggle;
