/**
 * NumberInput Component
 *
 * 숫자 입력 컴포넌트 (증가/감소 버튼)
 * 접근성: 버튼 aria-label, 입력 aria-valuemin/max/now
 */

import { InputHTMLAttributes, forwardRef } from "react";

type InputSize = "sm" | "md" | "lg";

interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "size"> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  size?: InputSize;
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const sizeStyles: Record<InputSize, { input: string; button: string }> = {
  sm: { input: "px-3 py-1.5 text-sm", button: "w-8" },
  md: { input: "px-4 py-2 text-base", button: "w-10" },
  lg: { input: "px-4 py-3 text-lg", button: "w-12" },
};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      label,
      error = false,
      errorMessage,
      size = "md",
      className = "",
      id,
      disabled,
      value = 0,
      onChange,
      min,
      max,
      step = 1,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");

    const handleIncrement = () => {
      const newValue = (value || 0) + step;
      if (max !== undefined && newValue > max) return;
      onChange?.(newValue);
    };

    const handleDecrement = () => {
      const newValue = (value || 0) - step;
      if (min !== undefined && newValue < min) return;
      onChange?.(newValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(e.target.value) || 0;
      if (min !== undefined && newValue < min) return;
      if (max !== undefined && newValue > max) return;
      onChange?.(newValue);
    };

    const baseStyles =
      "w-full border-y border-l transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 focus:z-10 disabled:bg-gray-100 disabled:cursor-not-allowed text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

    const stateStyles = error
      ? "border-error-500 focus:ring-error-500 focus:border-error-500"
      : "border-gray-300 focus:ring-primary-900 focus:border-transparent";

    const classes = [baseStyles, stateStyles, sizeStyles[size].input, className]
      .filter(Boolean)
      .join(" ");

    const buttonBase = `flex items-center justify-center border border-gray-300 bg-gray-50 text-gray-600
      hover:bg-gray-100 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400
      transition-colors cursor-pointer ${sizeStyles[size].button}`;

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
        <div className="flex">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={disabled || (min !== undefined && value <= min)}
            aria-label="감소"
            className={`${buttonBase} border-r-0`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <input
            ref={ref}
            id={inputId}
            type="number"
            value={value}
            onChange={handleChange}
            className={classes}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            {...props}
          />
          <button
            type="button"
            onClick={handleIncrement}
            disabled={disabled || (max !== undefined && value >= max)}
            aria-label="증가"
            className={`${buttonBase} border-l-0`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
        {error && errorMessage && (
          <p className="text-sm text-error-500" role="alert">{errorMessage}</p>
        )}
      </div>
    );
  }
);

NumberInput.displayName = "NumberInput";

export default NumberInput;
