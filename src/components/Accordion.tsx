/**
 * Accordion Component
 *
 * 아코디언 컴포넌트
 * 접근성: aria-expanded, aria-controls, aria-labelledby
 */

import { createContext, useContext, useState, ReactNode, useId } from "react";

interface AccordionContextType {
  openItems: string[];
  toggleItem: (id: string) => void;
  multiple: boolean;
  baseId: string;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

interface AccordionProps {
  children: ReactNode;
  defaultValue?: string[];
  multiple?: boolean;
  className?: string;
}

export function Accordion({
  children,
  defaultValue = [],
  multiple = false,
  className = "",
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultValue);
  const baseId = useId();

  const toggleItem = (id: string) => {
    if (multiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, multiple, baseId }}>
      <div className={`border border-gray-200 divide-y divide-gray-200 ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionItem({ value, children, className = "" }: AccordionItemProps) {
  return (
    <div className={className} data-accordion-item={value}>
      {children}
    </div>
  );
}

interface AccordionTriggerProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function AccordionTrigger({
  value,
  children,
  disabled = false,
  className = "",
}: AccordionTriggerProps) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within Accordion");

  const { openItems, toggleItem, baseId } = context;
  const isOpen = openItems.includes(value);

  const triggerId = `${baseId}-trigger-${value}`;
  const contentId = `${baseId}-content-${value}`;

  return (
    <h3>
      <button
        type="button"
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => !disabled && toggleItem(value)}
        disabled={disabled}
        className={`
          w-full flex items-center justify-between px-4 py-4
          text-left font-medium text-gray-900
          hover:bg-gray-50 transition-colors
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${className}
        `}
      >
        <span>{children}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
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
    </h3>
  );
}

interface AccordionContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionContent({ value, children, className = "" }: AccordionContentProps) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within Accordion");

  const { openItems, baseId } = context;
  const isOpen = openItems.includes(value);

  const triggerId = `${baseId}-trigger-${value}`;
  const contentId = `${baseId}-content-${value}`;

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      hidden={!isOpen}
      className={`
        overflow-hidden transition-all duration-200
        ${isOpen ? "max-h-96" : "max-h-0"}
      `}
    >
      <div className={`px-4 py-4 bg-gray-50 text-gray-600 ${className}`}>{children}</div>
    </div>
  );
}

export default Accordion;
