/**
 * Skeleton Component
 *
 * 스켈레톤 로딩 컴포넌트
 */

import { ReactNode } from "react";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: "text" | "circular" | "rectangular";
  animation?: "pulse" | "wave" | "none";
}

export function Skeleton({
  className = "",
  width,
  height,
  variant = "rectangular",
  animation = "pulse",
}: SkeletonProps) {
  const variantClass = {
    text: "rounded-sm",
    circular: "rounded-full",
    rectangular: "",
  }[variant];

  const animationClass = {
    pulse: "animate-pulse",
    wave: "animate-skeleton-wave",
    none: "",
  }[animation];

  const style: React.CSSProperties = {
    width: width,
    height: height ?? (variant === "text" ? "1em" : undefined),
  };

  return (
    <div
      className={`bg-gray-200 ${variantClass} ${animationClass} ${className}`}
      style={style}
    />
  );
}

interface SkeletonTextProps {
  lines?: number;
  className?: string;
  lastLineWidth?: string;
}

export function SkeletonText({
  lines = 3,
  className = "",
  lastLineWidth = "60%",
}: SkeletonTextProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          height={16}
          width={i === lines - 1 ? lastLineWidth : "100%"}
        />
      ))}
    </div>
  );
}

interface SkeletonAvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function SkeletonAvatar({ size = "md", className = "" }: SkeletonAvatarProps) {
  const sizeClass = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }[size];

  return <Skeleton variant="circular" className={`${sizeClass} ${className}`} />;
}

interface SkeletonCardProps {
  hasImage?: boolean;
  lines?: number;
  className?: string;
}

export function SkeletonCard({
  hasImage = true,
  lines = 2,
  className = "",
}: SkeletonCardProps) {
  return (
    <div className={`border border-gray-200 p-4 ${className}`}>
      {hasImage && <Skeleton height={160} className="mb-4" />}
      <Skeleton variant="text" height={20} width="70%" className="mb-2" />
      <SkeletonText lines={lines} />
    </div>
  );
}

interface SkeletonTableProps {
  rows?: number;
  columns?: number;
  className?: string;
}

export function SkeletonTable({
  rows = 5,
  columns = 4,
  className = "",
}: SkeletonTableProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div className="flex gap-4 py-3 px-4 bg-gray-50 border-y border-gray-200">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} height={16} className="flex-1" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-4 py-3 px-4 border-b border-gray-200"
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              height={16}
              className="flex-1"
              width={colIndex === 0 ? "80%" : undefined}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

interface SkeletonListProps {
  items?: number;
  hasAvatar?: boolean;
  className?: string;
}

export function SkeletonList({
  items = 3,
  hasAvatar = true,
  className = "",
}: SkeletonListProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex gap-3">
          {hasAvatar && <SkeletonAvatar />}
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" height={16} width="40%" />
            <Skeleton variant="text" height={14} width="80%" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
