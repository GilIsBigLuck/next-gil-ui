/**
 * Pagination Component
 *
 * 페이지네이션 컴포넌트
 * 접근성: nav aria-label, aria-current="page"
 */

import { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = "",
}: PaginationProps) {
  const pages = useMemo(() => {
    const range = (start: number, end: number) => {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const totalPageNumbers = siblingCount * 2 + 5; // siblings + first + last + current + 2 dots

    if (totalPages <= totalPageNumbers) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 1;

    if (!showLeftDots && showRightDots) {
      const leftRange = range(1, 3 + siblingCount * 2);
      return [...leftRange, "...", totalPages];
    }

    if (showLeftDots && !showRightDots) {
      const rightRange = range(totalPages - (2 + siblingCount * 2), totalPages);
      return [1, "...", ...rightRange];
    }

    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [1, "...", ...middleRange, "...", totalPages];
  }, [currentPage, totalPages, siblingCount]);

  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="페이지 네비게이션"
      className={`flex items-center justify-center gap-1 ${className}`}
    >
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="이전 페이지"
        className="
          px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300
          disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
          transition-all duration-300
          hover:bg-gray-50
        "
      >
        이전
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`dots-${index}`}
              className="px-3 py-2 text-sm text-gray-500"
              aria-hidden="true"
            >
              ...
            </span>
          );
        }

        const pageNumber = page as number;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            aria-label={`${pageNumber} 페이지`}
            aria-current={isActive ? "page" : undefined}
            className={`
              px-3 py-2 text-sm font-medium border transition-all duration-300 cursor-pointer
              ${
                isActive
                  ? "bg-primary-900 text-white border-primary-900"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }
            `}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="다음 페이지"
        className="
          px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300
          disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
          transition-all duration-300
          hover:bg-gray-50
        "
      >
        다음
      </button>
    </nav>
  );
}

export default Pagination;
