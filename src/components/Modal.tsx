/**
 * Modal Components
 *
 * Alert, Confirm, ImagePopup 모달 컴포넌트
 * 접근성: role="dialog", aria-modal, aria-labelledby, aria-describedby
 */

import { ReactNode, useEffect, useRef, useId } from "react";
import { createPortal } from "react-dom";

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
}

function ModalBase({ isOpen, onClose, children, ariaLabelledby, ariaDescribedby }: ModalBaseProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Store the current active element to restore focus later
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      // Focus the modal
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      // Restore focus to the previous element
      previousActiveElement.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modal.addEventListener("keydown", handleTabKey);
    return () => modal.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        tabIndex={-1}
        className="relative z-10 w-full max-w-md mx-4 bg-white shadow-xl outline-none"
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

/* Alert Modal */
interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  confirmText?: string;
}

export function Alert({
  isOpen,
  onClose,
  title = "알림",
  message,
  confirmText = "확인",
}: AlertProps) {
  const titleId = useId();
  const descId = useId();

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledby={titleId}
      ariaDescribedby={descId}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="닫기"
        className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="p-6 pt-8">
        <h2 id={titleId} className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p id={descId} className="text-gray-600">{message}</p>
      </div>
      <div className="px-6 py-4 flex justify-end">
        <button
          onClick={onClose}
          className="px-6 py-3 text-lg bg-primary-900 text-white font-medium transition-all duration-300 hover-prism cursor-pointer"
        >
          <span className="relative z-10">{confirmText}</span>
        </button>
      </div>
    </ModalBase>
  );
}

/* Confirm Modal */
interface ConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "danger";
}

export function Confirm({
  isOpen,
  onClose,
  onConfirm,
  title = "확인",
  message,
  confirmText = "확인",
  cancelText = "취소",
  variant = "default",
}: ConfirmProps) {
  const titleId = useId();
  const descId = useId();

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledby={titleId}
      ariaDescribedby={descId}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="닫기"
        className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="p-6 pt-8">
        <h2 id={titleId} className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p id={descId} className="text-gray-600">{message}</p>
      </div>
      <div className="px-6 py-4 flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-6 py-3 text-lg border border-gray-300 text-gray-700 font-medium transition-all duration-300 hover:bg-gray-100 cursor-pointer"
        >
          {cancelText}
        </button>
        <button
          onClick={handleConfirm}
          className={`px-6 py-3 text-lg font-medium transition-all duration-300 hover-prism cursor-pointer ${
            variant === "danger"
              ? "bg-error-600 text-white"
              : "bg-primary-900 text-white"
          }`}
        >
          <span className="relative z-10">{confirmText}</span>
        </button>
      </div>
    </ModalBase>
  );
}

/* Image Popup */
interface ImagePopupProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
}

export function ImagePopup({ isOpen, onClose, src, alt = "" }: ImagePopupProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
    } else {
      previousActiveElement.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={alt || "이미지 팝업"}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out outline-none"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="닫기"
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
}

export default { Alert, Confirm, ImagePopup };
