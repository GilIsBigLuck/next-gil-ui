/**
 * Shadow Tokens
 *
 * 컴포넌트별 권장 사용:
 * - sm: 버튼 호버, 작은 요소
 * - DEFAULT: 카드, 드롭다운
 * - md: 모달, 팝오버
 * - lg: 다이얼로그
 * - xl: 전체 화면 모달
 */

export const boxShadow = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Focus ring shadow (접근성)
export const focusRing = {
  DEFAULT: '0 0 0 2px var(--color-primary-500)',
  offset: '0 0 0 2px #fff, 0 0 0 4px var(--color-primary-500)',
  error: '0 0 0 2px var(--color-error-500)',
} as const;

export type BoxShadowToken = typeof boxShadow;
export type BoxShadowKey = keyof typeof boxShadow;
