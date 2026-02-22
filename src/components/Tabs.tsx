/**
 * Tabs Component
 *
 * 탭 컴포넌트
 * - variant="underline": 밑줄 스타일 (기본)
 * - variant="button": 버튼 스타일
 * - size="md": 기본 사이즈
 * - size="lg": 큰 사이즈 (전체 너비, 중앙 정렬)
 *
 * 접근성: role="tablist/tab/tabpanel", aria-selected, aria-controls, 키보드 네비게이션
 */

import { createContext, useContext, useState, useRef, useEffect, ReactNode, useId, KeyboardEvent } from "react";

type TabsVariant = "underline" | "button";
type TabsSize = "md" | "lg";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
  variant: TabsVariant;
  size: TabsSize;
  baseId: string;
  registerTab: (value: string, element: HTMLButtonElement) => void;
  unregisterTab: (value: string) => void;
  tabValues: string[];
  setTabValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const TabsContext = createContext<TabsContextType | null>(null);

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  className?: string;
  variant?: TabsVariant;
  size?: TabsSize;
}

export function Tabs({ defaultValue, children, className = "", variant = "underline", size = "md" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const [tabValues, setTabValues] = useState<string[]>([]);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const baseId = useId();

  const registerTab = (value: string, element: HTMLButtonElement) => {
    tabRefs.current.set(value, element);
  };

  const unregisterTab = (value: string) => {
    tabRefs.current.delete(value);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, variant, size, baseId, registerTab, unregisterTab, tabValues, setTabValues }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}

export function TabsList({ children, className = "", "aria-label": ariaLabel }: TabsListProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsList must be used within Tabs");

  const { variant, size, activeTab, setActiveTab, tabValues } = context;
  const listRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateIndicator = () => {
      if (!listRef.current) return;
      const activeButton = listRef.current.querySelector(`[data-tab-value="${activeTab}"]`) as HTMLButtonElement;
      if (activeButton) {
        const listRect = listRef.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        setIndicatorStyle({
          left: buttonRect.left - listRect.left,
          width: buttonRect.width,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = tabValues.indexOf(activeTab);
    let newIndex = currentIndex;

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabValues.length - 1;
        break;
      case "ArrowRight":
        e.preventDefault();
        newIndex = currentIndex < tabValues.length - 1 ? currentIndex + 1 : 0;
        break;
      case "Home":
        e.preventDefault();
        newIndex = 0;
        break;
      case "End":
        e.preventDefault();
        newIndex = tabValues.length - 1;
        break;
      default:
        return;
    }

    const newTab = tabValues[newIndex];
    setActiveTab(newTab);
    // Focus the new tab button
    const newButton = listRef.current?.querySelector(`[data-tab-value="${newTab}"]`) as HTMLButtonElement;
    newButton?.focus();
  };

  const variantStyles = {
    underline: "border-b border-gray-200",
    button: "p-1 bg-gray-100",
  };

  const sizeStyles = {
    md: "inline-flex",
    lg: "flex w-full",
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      className={`relative ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {/* Animated Indicator */}
      {variant === "underline" ? (
        <span
          className="absolute bottom-0 h-0.5 bg-primary-900 transition-all duration-300 ease-out"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          aria-hidden="true"
        />
      ) : (
        <span
          className="absolute top-1 bottom-1 bg-white shadow-sm transition-all duration-300 ease-out"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function TabsTrigger({ value, children, disabled = false, className = "" }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");

  const { activeTab, setActiveTab, variant, size, baseId, registerTab, unregisterTab, setTabValues } = context;
  const isActive = activeTab === value;
  const buttonRef = useRef<HTMLButtonElement>(null);

  const tabId = `${baseId}-tab-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  useEffect(() => {
    if (buttonRef.current) {
      registerTab(value, buttonRef.current);
    }
    setTabValues(prev => prev.includes(value) ? prev : [...prev, value]);
    return () => {
      unregisterTab(value);
      setTabValues(prev => prev.filter(v => v !== value));
    };
  }, [value, registerTab, unregisterTab, setTabValues]);

  const baseStyles = "relative z-10 font-medium transition-colors";

  const sizeStyles = {
    md: "px-4 py-2 text-sm",
    lg: "flex-1 px-6 py-3 text-base text-center justify-center",
  };

  const variantStyles = {
    underline: `
      -mb-px
      ${isActive
        ? "text-primary-900"
        : "text-gray-500 hover:text-gray-700"
      }
    `,
    button: `
      ${isActive
        ? "text-primary-900"
        : "text-gray-500 hover:text-gray-700"
      }
    `,
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      ref={buttonRef}
      type="button"
      role="tab"
      id={tabId}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      data-tab-value={value}
      onClick={() => !disabled && setActiveTab(value)}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabsContent({ value, children, className = "" }: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs");

  const { activeTab, baseId } = context;

  const tabId = `${baseId}-tab-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  if (activeTab !== value) return null;

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      tabIndex={0}
      className={`py-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default Tabs;
