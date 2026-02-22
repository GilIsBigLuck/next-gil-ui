/**
 * Breakpoint Tokens
 *
 * Mobile-first 반응형 디자인
 * Tailwind 기본값 사용
 */

export const screens = {
  sm: '640px',   // 모바일 가로
  md: '768px',   // 태블릿
  lg: '1024px',  // 작은 데스크탑
  xl: '1280px',  // 데스크탑
  '2xl': '1536px', // 큰 데스크탑
} as const;

// Container max-widths
export const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export type ScreenToken = typeof screens;
export type ScreenKey = keyof typeof screens;
