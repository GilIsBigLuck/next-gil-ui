/**
 * Table Component
 *
 * 테이블 컴포넌트
 * 접근성: scope="col", aria-sort
 */

import { ReactNode, InputHTMLAttributes, useRef, useState, useEffect } from "react";

interface TableProps {
  children: ReactNode;
  className?: string;
}

export function Table({ children, className = "" }: TableProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const hasHorizontalScroll = el.scrollWidth > el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(hasHorizontalScroll && el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <div className="relative">
      {/* Left scroll indicator */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" aria-hidden="true" />
      )}

      {/* Right scroll indicator */}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 flex items-center justify-end pr-1" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400 animate-pulse">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      <div
        ref={scrollRef}
        className="w-full overflow-x-auto"
        onScroll={checkScroll}
      >
        <table className={`min-w-full text-sm ${className}`}>{children}</table>
      </div>
    </div>
  );
}

interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export function TableHeader({ children, className = "" }: TableHeaderProps) {
  return (
    <thead className={`bg-gray-50 border-y border-gray-200 ${className}`}>
      {children}
    </thead>
  );
}

interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

export function TableBody({ children, className = "" }: TableBodyProps) {
  return <tbody className={`divide-y divide-gray-200 ${className}`}>{children}</tbody>;
}

interface TableRowProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
}

export function TableRow({ children, className = "", onClick, selected }: TableRowProps) {
  return (
    <tr
      onClick={onClick}
      className={`
        ${onClick ? "cursor-pointer hover:bg-gray-50" : ""}
        ${selected ? "bg-primary-50" : ""}
        ${className}
      `}
    >
      {children}
    </tr>
  );
}

interface TableHeadProps {
  children?: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  hideOnMobile?: boolean;
}

export function TableHead({ children, className = "", align = "left", hideOnMobile = false }: TableHeadProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const responsiveClass = hideOnMobile ? "hidden md:table-cell" : "";

  return (
    <th
      scope="col"
      className={`px-4 py-3 font-semibold text-gray-700 whitespace-nowrap ${alignClass} ${responsiveClass} ${className}`}
    >
      {children}
    </th>
  );
}

export type SortDirection = "asc" | "desc" | null;

interface TableSortHeadProps {
  children?: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  sortDirection?: SortDirection;
  onSort?: () => void;
}

export function TableSortHead({
  children,
  className = "",
  align = "left",
  sortDirection,
  onSort,
}: TableSortHeadProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const justifyClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[align];

  const ariaSort = sortDirection === "asc" ? "ascending" : sortDirection === "desc" ? "descending" : undefined;

  return (
    <th
      scope="col"
      aria-sort={ariaSort}
      className={`px-4 py-3 font-semibold text-gray-700 ${alignClass} ${className}`}
    >
      <button
        type="button"
        onClick={onSort}
        className={`inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer ${justifyClass} w-full`}
      >
        <span>{children}</span>
        <span className="flex-shrink-0" aria-hidden="true">
          {sortDirection === "asc" ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary-900">
              <path d="M6 2L6 10M6 2L3 5M6 2L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          ) : sortDirection === "desc" ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary-900">
              <path d="M6 10L6 2M6 10L3 7M6 10L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-400">
              <path d="M4 4L6 2L8 4M4 8L6 10L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          )}
        </span>
      </button>
    </th>
  );
}

interface TableCellProps {
  children?: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  colSpan?: number;
  hideOnMobile?: boolean;
}

export function TableCell({ children, className = "", align = "left", colSpan, hideOnMobile = false }: TableCellProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const responsiveClass = hideOnMobile ? "hidden md:table-cell" : "";

  return (
    <td colSpan={colSpan} className={`px-4 py-3 text-gray-900 whitespace-nowrap ${alignClass} ${responsiveClass} ${className}`}>
      {children}
    </td>
  );
}

interface TableCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  indeterminate?: boolean;
}

export function TableCheckbox({ indeterminate, className = "", ...props }: TableCheckboxProps) {
  return (
    <input
      type="checkbox"
      ref={(el) => {
        if (el) {
          el.indeterminate = indeterminate ?? false;
        }
      }}
      className={`
        w-4 h-4 border-2 border-gray-300 bg-white flex-shrink-0
        checked:bg-primary-900 checked:border-primary-900
        focus:ring-2 focus:ring-primary-900 focus:ring-offset-2
        disabled:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed
        transition-colors cursor-pointer
        appearance-none
        checked:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2%206l3%203%205-6%22%2F%3E%3C%2Fsvg%3E')]
        checked:bg-center checked:bg-no-repeat checked:bg-[length:10px]
        indeterminate:bg-primary-900 indeterminate:border-primary-900
        indeterminate:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2%206h8%22%2F%3E%3C%2Fsvg%3E')]
        indeterminate:bg-center indeterminate:bg-no-repeat indeterminate:bg-[length:10px]
        ${className}
      `}
      {...props}
    />
  );
}

export default Table;
