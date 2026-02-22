/**
 * Select Component
 *
 * 드롭다운 선택 컴포넌트
 * 접근성: role="combobox/listbox/option", aria-expanded, aria-haspopup, aria-activedescendant
 */

import { forwardRef, useState, useRef, useEffect, useId } from "react";

type SelectSize = "sm" | "md" | "lg";
type SelectLayout = "column" | "row";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  size?: SelectSize;
  layout?: SelectLayout;
  labelWidth?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  successMessage?: string;
  className?: string;
}

const sizeStyles: Record<SelectSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = "선택하세요",
      label,
      size = "md",
      layout = "column",
      labelWidth = "w-24",
      disabled = false,
      error = false,
      errorMessage,
      success = false,
      successMessage,
      className = "",
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const baseId = useId();

    const buttonId = `${baseId}-button`;
    const listboxId = `${baseId}-listbox`;
    const labelId = label ? `${baseId}-label` : undefined;

    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }, []);

    // Reset highlighted index when opening
    useEffect(() => {
      if (isOpen) {
        const selectedIndex = options.findIndex((opt) => opt.value === value);
        setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
      }
    }, [isOpen, options, value]);

    const handleSelect = (option: SelectOption) => {
      if (option.disabled) return;
      onChange?.(option.value);
      setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          if (isOpen && highlightedIndex >= 0) {
            const option = options[highlightedIndex];
            if (!option.disabled) handleSelect(option);
          } else {
            setIsOpen(true);
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setHighlightedIndex((prev) => {
              const next = prev + 1;
              return next >= options.length ? 0 : next;
            });
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (isOpen) {
            setHighlightedIndex((prev) => {
              const next = prev - 1;
              return next < 0 ? options.length - 1 : next;
            });
          }
          break;
        case "Home":
          if (isOpen) {
            e.preventDefault();
            setHighlightedIndex(0);
          }
          break;
        case "End":
          if (isOpen) {
            e.preventDefault();
            setHighlightedIndex(options.length - 1);
          }
          break;
      }
    };

    const isRow = layout === "row";
    const getOptionId = (index: number) => `${baseId}-option-${index}`;

    return (
      <div ref={ref} className={`flex ${isRow ? "flex-row items-center gap-3" : "flex-col gap-1.5"} ${className}`}>
        {label && (
          <label
            id={labelId}
            className={`text-sm font-medium text-gray-700 ${isRow ? `flex-shrink-0 ${labelWidth}` : ""}`}
          >
            {label}
          </label>
        )}
        <div ref={containerRef} className={`relative ${isRow ? "flex-1" : ""}`}>
          <button
            type="button"
            id={buttonId}
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            aria-labelledby={labelId ? `${labelId} ${buttonId}` : undefined}
            aria-activedescendant={isOpen && highlightedIndex >= 0 ? getOptionId(highlightedIndex) : undefined}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className={`
              w-full flex items-center justify-between
              border bg-white cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent
              disabled:bg-gray-100 disabled:cursor-not-allowed
              transition-colors
              ${sizeStyles[size]}
              ${error ? "border-error-500" : success ? "border-success-500" : "border-gray-300"}
              ${isOpen ? "ring-2 ring-primary-900 border-transparent" : ""}
            `}
          >
            <span className={selectedOption ? "text-gray-900" : "text-gray-400"}>
              {selectedOption?.label || placeholder}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <ul
              id={listboxId}
              role="listbox"
              aria-labelledby={labelId}
              className="absolute z-50 w-full mt-1 bg-white border border-gray-200 shadow-lg max-h-60 overflow-auto"
            >
              {options.map((option, index) => (
                <li
                  key={option.value}
                  id={getOptionId(index)}
                  role="option"
                  aria-selected={option.value === value}
                  aria-disabled={option.disabled}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  className={`
                    w-full px-4 py-2 text-left transition-colors
                    ${option.disabled ? "text-gray-300 cursor-not-allowed" : "text-gray-900 cursor-pointer"}
                    ${option.value === value ? "bg-primary-50 text-primary-900 font-medium" : ""}
                    ${highlightedIndex === index && !option.disabled ? "bg-gray-100" : ""}
                    ${!option.disabled && option.value !== value ? "hover:bg-gray-100" : ""}
                  `}
                >
                  <span className="flex items-center justify-between">
                    {option.label}
                    {option.value === value && (
                      <svg
                        className="w-5 h-5 text-primary-900"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {error && errorMessage && (
          <p className="text-sm text-error-500" role="alert">{errorMessage}</p>
        )}
        {success && successMessage && (
          <p className="text-sm text-success-600">{successMessage}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
