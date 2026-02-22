/**
 * Typography Tokens
 *
 * Font Family: 시스템 폰트 + Pretendard
 * Font Size: rem 기반 스케일
 * Font Weight: 일반적인 웨이트
 * Line Height: 가독성 최적화
 * Letter Spacing: 자간
 */

export const fontFamily = {
  sans: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  mono: [
    'JetBrains Mono',
    'Fira Code',
    'Consolas',
    'Monaco',
    'monospace',
  ],
} as const;

export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],        // 12px
  sm: ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
  base: ['1rem', { lineHeight: '1.5rem' }],       // 16px
  lg: ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
  xl: ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
  '5xl': ['3rem', { lineHeight: '1' }],           // 48px
  '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
} as const;

export const fontWeight = {
  thin: '100',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

export const lineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

export type FontFamilyToken = typeof fontFamily;
export type FontSizeToken = typeof fontSize;
export type FontWeightToken = typeof fontWeight;
