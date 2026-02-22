/**
 * Validation Utilities
 *
 * 폼 검증 규칙 및 유틸리티
 */

export type ValidationRule<T = string> = {
  validate: (value: T, formValues?: Record<string, unknown>) => boolean;
  message: string;
};

export type ValidationRules<T = string> = ValidationRule<T>[];

// 기본 검증 규칙 생성 함수들

/** 필수 입력 */
export const required = (message = "필수 입력입니다"): ValidationRule => ({
  validate: (value) => value !== undefined && value !== null && value.toString().trim() !== "",
  message,
});

/** 이메일 형식 */
export const email = (message = "올바른 이메일 형식이 아닙니다"): ValidationRule => ({
  validate: (value) => {
    if (!value) return true; // 빈 값은 required에서 처리
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },
  message,
});

/** 최소 길이 */
export const minLength = (min: number, message?: string): ValidationRule => ({
  validate: (value) => {
    if (!value) return true;
    return value.length >= min;
  },
  message: message || `최소 ${min}자 이상 입력해주세요`,
});

/** 최대 길이 */
export const maxLength = (max: number, message?: string): ValidationRule => ({
  validate: (value) => {
    if (!value) return true;
    return value.length <= max;
  },
  message: message || `최대 ${max}자까지 입력 가능합니다`,
});

/** 정규식 패턴 */
export const pattern = (regex: RegExp, message = "올바른 형식이 아닙니다"): ValidationRule => ({
  validate: (value) => {
    if (!value) return true;
    return regex.test(value);
  },
  message,
});

/** 숫자만 */
export const numeric = (message = "숫자만 입력 가능합니다"): ValidationRule => ({
  validate: (value) => {
    if (!value) return true;
    return /^\d+$/.test(value);
  },
  message,
});

/** 최소값 (숫자) */
export const min = (minValue: number, message?: string): ValidationRule => ({
  validate: (value) => {
    if (!value) return true;
    const num = parseFloat(value);
    return !isNaN(num) && num >= minValue;
  },
  message: message || `${minValue} 이상이어야 합니다`,
});

/** 최대값 (숫자) */
export const max = (maxValue: number, message?: string): ValidationRule => ({
  validate: (value) => {
    if (!value) return true;
    const num = parseFloat(value);
    return !isNaN(num) && num <= maxValue;
  },
  message: message || `${maxValue} 이하여야 합니다`,
});

/** 비밀번호 형식 (영문, 숫자, 특수문자 조합) */
export const password = (message = "영문, 숫자, 특수문자를 포함해야 합니다"): ValidationRule => ({
  validate: (value) => {
    if (!value) return true;
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    return hasLetter && hasNumber && hasSpecial;
  },
  message,
});

/** 비밀번호 확인 (다른 필드와 일치) */
export const matches = (fieldName: string, message = "값이 일치하지 않습니다"): ValidationRule => ({
  validate: (value, formValues) => {
    if (!value || !formValues) return true;
    return value === formValues[fieldName];
  },
  message,
});

/** 휴대폰 번호 (한국) */
export const phone = (message = "올바른 휴대폰 번호 형식이 아닙니다"): ValidationRule => ({
  validate: (value) => {
    if (!value) return true;
    // 010-1234-5678, 01012345678 등 허용
    const cleaned = value.replace(/-/g, "");
    return /^01[016789]\d{7,8}$/.test(cleaned);
  },
  message,
});

/** 커스텀 검증 */
export const custom = <T = string>(
  validateFn: (value: T, formValues?: Record<string, unknown>) => boolean,
  message: string
): ValidationRule<T> => ({
  validate: validateFn,
  message,
});

// 검증 실행 함수

export function validate<T = string>(
  value: T,
  rules: ValidationRules<T>,
  formValues?: Record<string, unknown>
): string | null {
  for (const rule of rules) {
    if (!rule.validate(value, formValues)) {
      return rule.message;
    }
  }
  return null;
}

export function validateField(
  value: string,
  rules: ValidationRules,
  formValues?: Record<string, unknown>
): { isValid: boolean; error: string | null } {
  const error = validate(value, rules, formValues);
  return {
    isValid: error === null,
    error,
  };
}
