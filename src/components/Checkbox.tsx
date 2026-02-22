/**
 * Checkbox Component
 *
 * 체크박스 컴포넌트
 */

import { InputHTMLAttributes, forwardRef } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, className = "", disabled, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");

    return (
      <label
        htmlFor={inputId}
        className={`inline-flex items-start gap-2 cursor-pointer select-none ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        } ${className}`}
      >
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          disabled={disabled}
          className="
            w-5 h-5 border-2 border-gray-300 bg-white flex-shrink-0
            checked:bg-primary-900 checked:border-primary-900
            focus:ring-2 focus:ring-primary-900 focus:ring-offset-2
            disabled:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed
            transition-colors cursor-pointer
            appearance-none
            checked:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2%206l3%203%205-6%22%2F%3E%3C%2Fsvg%3E')]
            checked:bg-center checked:bg-no-repeat checked:bg-[length:12px]
          "
          {...props}
        />
        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && <span className="text-sm font-medium text-gray-900 leading-5">{label}</span>}
            {description && <span className="text-sm text-gray-500 leading-5">{description}</span>}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
