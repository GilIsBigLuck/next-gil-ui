/**
 * Border Radius Tokens
 *
 * Solid 스타일 - 모든 요소에 각진 모서리 사용
 * 깔끔하고 모던한 디자인을 위해 radius 최소화
 */

export const borderRadius = {
  none: '0px',
  sm: '0px',
  DEFAULT: '0px',
  md: '0px',
  lg: '0px',
  xl: '0px',
  '2xl': '0px',
  '3xl': '0px',
  full: '0px',
} as const;

export type BorderRadiusToken = typeof borderRadius;
export type BorderRadiusKey = keyof typeof borderRadius;
