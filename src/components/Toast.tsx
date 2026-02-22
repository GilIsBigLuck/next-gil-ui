/**
 * Toast Component
 *
 * 알림 토스트 메시지
 * 접근성: role="alert", aria-live="polite"
 */

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ToastVariant = "default" | "success" | "warning" | "error" | "info";
type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";

interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  variant?: ToastVariant;
  duration?: number;
  position?: ToastPosition;
}

const positionStyles: Record<ToastPosition, string> = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-8 left-1/2 -translate-x-1/2",
};

const variantStyles: Record<ToastVariant, string> = {
  default: "bg-gray-900 text-white",
  success: "bg-success-500 text-white",
  warning: "bg-warning-500 text-white",
  error: "bg-error-500 text-white",
  info: "bg-info-500 text-white",
};

const variantIcons: Record<ToastVariant, React.ReactNode> = {
  default: null,
  success: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 9v4M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  ),
  info: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
};

export function Toast({
  isOpen,
  onClose,
  message,
  variant = "default",
  duration = 3000,
  position = "bottom-center",
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 200);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      className={`fixed z-50 ${positionStyles[position]} transition-all duration-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div
        className={`flex items-center gap-3 px-4 py-3 shadow-lg min-w-[280px] max-w-md ${variantStyles[variant]}`}
      >
        {variantIcons[variant] && (
          <span className="flex-shrink-0" aria-hidden="true">{variantIcons[variant]}</span>
        )}
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 200);
          }}
          aria-label="닫기"
          className="flex-shrink-0 p-1 hover:bg-white/20 transition-colors cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  );
}

export default Toast;
