/**
 * useForm Hook
 *
 * 폼 상태 관리 및 검증 훅
 */

import { useState, useCallback, useMemo, ChangeEvent, FormEvent } from "react";
import { ValidationRules, validate } from "../utils/validation";

type FormValues = Record<string, string>;
type FormErrors = Record<string, string | null>;
type FormTouched = Record<string, boolean>;
type FieldRules = Record<string, ValidationRules>;

interface UseFormOptions<T extends FormValues> {
  initialValues: T;
  validationRules?: FieldRules;
  onSubmit?: (values: T) => void | Promise<void>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

interface FieldProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur: () => void;
  error: boolean;
  errorMessage: string | undefined;
}

interface UseFormReturn<T extends FormValues> {
  values: T;
  errors: FormErrors;
  touched: FormTouched;
  isValid: boolean;
  isSubmitting: boolean;
  isDirty: boolean;

  // 필드 핸들러
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (field: keyof T) => void;
  setFieldValue: (field: keyof T, value: string) => void;
  setFieldError: (field: keyof T, error: string | null) => void;
  setFieldTouched: (field: keyof T, touched?: boolean) => void;

  // 폼 핸들러
  handleSubmit: (e?: FormEvent) => Promise<void>;
  reset: () => void;
  validateForm: () => boolean;
  validateField: (field: keyof T) => string | null;

  // 필드 props 생성 헬퍼
  getFieldProps: (field: keyof T) => FieldProps;
  register: (field: keyof T) => FieldProps;
}

export function useForm<T extends FormValues>({
  initialValues,
  validationRules = {},
  onSubmit,
  validateOnChange = false,
  validateOnBlur = true,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 값이 초기값과 다른지 확인
  const isDirty = useMemo(() => {
    return Object.keys(values).some(
      (key) => values[key] !== initialValues[key]
    );
  }, [values, initialValues]);

  // 전체 폼이 유효한지 확인
  const isValid = useMemo(() => {
    return Object.keys(errors).every((key) => !errors[key]);
  }, [errors]);

  // 단일 필드 검증
  const validateField = useCallback(
    (field: keyof T): string | null => {
      const rules = validationRules[field as string];
      if (!rules) return null;
      return validate(values[field], rules, values as Record<string, unknown>);
    },
    [values, validationRules]
  );

  // 전체 폼 검증
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isFormValid = true;

    Object.keys(validationRules).forEach((field) => {
      const error = validate(
        values[field as keyof T],
        validationRules[field],
        values as Record<string, unknown>
      );
      newErrors[field] = error;
      if (error) isFormValid = false;
    });

    setErrors(newErrors);
    return isFormValid;
  }, [values, validationRules]);

  // 값 변경 핸들러
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));

      if (validateOnChange && validationRules[name]) {
        const error = validate(value, validationRules[name], values as Record<string, unknown>);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [validateOnChange, validationRules, values]
  );

  // 포커스 해제 핸들러
  const handleBlur = useCallback(
    (field: keyof T) => {
      setTouched((prev) => ({ ...prev, [field]: true }));

      if (validateOnBlur && validationRules[field as string]) {
        const error = validate(
          values[field],
          validationRules[field as string],
          values as Record<string, unknown>
        );
        setErrors((prev) => ({ ...prev, [field]: error }));
      }
    },
    [validateOnBlur, validationRules, values]
  );

  // 필드 값 직접 설정
  const setFieldValue = useCallback((field: keyof T, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  // 필드 에러 직접 설정
  const setFieldError = useCallback((field: keyof T, error: string | null) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  }, []);

  // 필드 touched 설정
  const setFieldTouched = useCallback((field: keyof T, isTouched = true) => {
    setTouched((prev) => ({ ...prev, [field]: isTouched }));
  }, []);

  // 폼 제출 핸들러
  const handleSubmit = useCallback(
    async (e?: FormEvent) => {
      e?.preventDefault();

      // 모든 필드를 touched로 설정
      const allTouched: FormTouched = {};
      Object.keys(values).forEach((key) => {
        allTouched[key] = true;
      });
      setTouched(allTouched);

      const isFormValid = validateForm();

      if (isFormValid && onSubmit) {
        setIsSubmitting(true);
        try {
          await onSubmit(values);
        } finally {
          setIsSubmitting(false);
        }
      }
    },
    [values, validateForm, onSubmit]
  );

  // 폼 리셋
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  // 필드 props 생성 헬퍼
  const getFieldProps = useCallback(
    (field: keyof T): FieldProps => ({
      value: values[field],
      onChange: handleChange,
      onBlur: () => handleBlur(field),
      error: touched[field as string] && !!errors[field as string],
      errorMessage: touched[field as string] ? errors[field as string] || undefined : undefined,
    }),
    [values, errors, touched, handleChange, handleBlur]
  );

  // register는 getFieldProps의 별칭 (react-hook-form 스타일)
  const register = getFieldProps;

  return {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    isDirty,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    handleSubmit,
    reset,
    validateForm,
    validateField,
    getFieldProps,
    register,
  };
}

export default useForm;
