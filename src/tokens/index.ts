/**
 * Rainbow Spino Design System
 *
 * 모든 디자인 토큰의 중앙 집중식 export
 */

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './radius';
export * from './shadows';
export * from './breakpoints';

// 통합 토큰 객체
import { colors } from './colors';
import { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } from './typography';
import { spacing } from './spacing';
import { borderRadius } from './radius';
import { boxShadow, focusRing } from './shadows';
import { screens, container } from './breakpoints';

export const tokens = {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  spacing,
  borderRadius,
  boxShadow,
  focusRing,
  screens,
  container,
} as const;

export type DesignTokens = typeof tokens;
