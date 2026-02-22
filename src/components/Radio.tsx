/**
 * Radio Component
 *
 * 라디오 버튼 컴포넌트
 */

import { InputHTMLAttributes, forwardRef } from "react";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, description, className = "", disabled, id, ...props }, ref) => {
    const inputId = id || `${props.name}-${props.value}`;

    return (
      <label
        htmlFor={inputId}
        className={`inline-flex items-center gap-2 cursor-pointer select-none ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        } ${className}`}
      >
        <input
          ref={ref}
          id={inputId}
          type="radio"
          disabled={disabled}
          className="
            w-5 h-5 border-2 border-gray-300 bg-white rounded-full flex-shrink-0
            checked:border-primary-900 checked:border-[6px]
            focus:ring-2 focus:ring-primary-900 focus:ring-offset-2
            disabled:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed
            transition-all cursor-pointer
            appearance-none
          "
          {...props}
        />
        {(label || description) && (
          <div className="flex flex-col">
            {label && <span className="text-sm font-medium text-gray-900">{label}</span>}
            {description && <span className="text-sm text-gray-500">{description}</span>}
          </div>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";

/* RadioGroup for convenience */
interface RadioGroupProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  options: { value: string; label: string; description?: string; disabled?: boolean }[];
  disabled?: boolean;
  className?: string;
}

export function RadioGroup({
  name,
  value,
  onChange,
  options,
  disabled,
  className = "",
}: RadioGroupProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          description={option.description}
          checked={value === option.value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled || option.disabled}
        />
      ))}
    </div>
  );
}

export default Radio;
