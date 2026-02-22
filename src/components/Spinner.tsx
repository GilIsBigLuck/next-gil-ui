/**
 * Spinner Component
 *
 * 스피너 로딩 컴포넌트
 */

type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
type SpinnerVariant = "primary" | "secondary" | "white" | "gray";

interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  className?: string;
  label?: string;
}

export function Spinner({
  size = "md",
  variant = "primary",
  className = "",
  label,
}: SpinnerProps) {
  const sizeClass = {
    xs: "w-3 h-3 border",
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-2",
    xl: "w-12 h-12 border-3",
  }[size];

  const variantClass = {
    primary: "border-primary-200 border-t-primary-900",
    secondary: "border-secondary-200 border-t-secondary-700",
    white: "border-white/30 border-t-white",
    gray: "border-gray-200 border-t-gray-600",
  }[variant];

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div
        className={`${sizeClass} ${variantClass} rounded-full animate-spin`}
        role="status"
        aria-label={label || "로딩 중"}
      />
      {label && <span className="text-sm text-gray-600">{label}</span>}
    </div>
  );
}

interface SpinnerOverlayProps {
  isVisible: boolean;
  label?: string;
  variant?: SpinnerVariant;
  blur?: boolean;
}

export function SpinnerOverlay({
  isVisible,
  label,
  variant = "primary",
  blur = false,
}: SpinnerOverlayProps) {
  if (!isVisible) return null;

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-white/80 z-10 ${
        blur ? "backdrop-blur-sm" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <Spinner size="lg" variant={variant} />
        {label && <span className="text-sm text-gray-600">{label}</span>}
      </div>
    </div>
  );
}

interface SpinnerButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  size?: SpinnerSize;
  className?: string;
}

export function SpinnerButton({
  isLoading,
  children,
  loadingText,
  size = "sm",
  className = "",
}: SpinnerButtonProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {isLoading ? (
        <>
          <Spinner size={size} variant="white" />
          {loadingText || children}
        </>
      ) : (
        children
      )}
    </span>
  );
}

export default Spinner;
