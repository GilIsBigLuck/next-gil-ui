/**
 * FileUpload Component
 *
 * 파일 업로드 컴포넌트 (드래그앤드롭 지원)
 * 접근성: aria-label, role="button"
 */

import { useState, useRef, useCallback, ChangeEvent, DragEvent } from "react";

interface FileUploadProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // bytes
  maxFiles?: number;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  onChange?: (files: File[]) => void;
  onError?: (error: string) => void;
  className?: string;
  showPreview?: boolean;
}

interface FileWithPreview {
  file: File;
  preview?: string;
}

export function FileUpload({
  label,
  accept,
  multiple = false,
  maxSize,
  maxFiles = 10,
  disabled = false,
  error = false,
  errorMessage,
  onChange,
  onError,
  className = "",
  showPreview = true,
}: FileUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [internalError, setInternalError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const validateFiles = useCallback(
    (fileList: File[]): { valid: File[]; error: string | null } => {
      let error: string | null = null;
      const valid: File[] = [];

      for (const file of fileList) {
        // Check max files
        if (files.length + valid.length >= maxFiles) {
          error = `최대 ${maxFiles}개까지 업로드 가능합니다`;
          break;
        }

        // Check file size
        if (maxSize && file.size > maxSize) {
          error = `파일 크기는 ${formatFileSize(maxSize)} 이하여야 합니다`;
          continue;
        }

        // Check file type
        if (accept) {
          const acceptedTypes = accept.split(",").map((t) => t.trim());
          const fileType = file.type;
          const fileExt = "." + file.name.split(".").pop()?.toLowerCase();

          const isAccepted = acceptedTypes.some((type) => {
            if (type.startsWith(".")) {
              return fileExt === type.toLowerCase();
            }
            if (type.endsWith("/*")) {
              return fileType.startsWith(type.replace("/*", "/"));
            }
            return fileType === type;
          });

          if (!isAccepted) {
            error = "지원하지 않는 파일 형식입니다";
            continue;
          }
        }

        valid.push(file);
      }

      return { valid, error };
    },
    [files.length, maxFiles, maxSize, accept]
  );

  const processFiles = useCallback(
    (fileList: FileList | File[]) => {
      const fileArray = Array.from(fileList);
      const { valid, error } = validateFiles(fileArray);

      if (error) {
        setInternalError(error);
        onError?.(error);
      } else {
        setInternalError(null);
      }

      if (valid.length === 0) return;

      const newFiles: FileWithPreview[] = valid.map((file) => {
        const fileWithPreview: FileWithPreview = { file };

        // Generate preview for images
        if (file.type.startsWith("image/")) {
          fileWithPreview.preview = URL.createObjectURL(file);
        }

        return fileWithPreview;
      });

      const updatedFiles = multiple ? [...files, ...newFiles] : newFiles;
      setFiles(updatedFiles);
      onChange?.(updatedFiles.map((f) => f.file));
    },
    [files, multiple, onChange, onError, validateFiles]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(e.target.files);
    }
    // Reset input value to allow selecting the same file again
    e.target.value = "";
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (disabled) return;

    if (e.dataTransfer.files) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleClick = () => {
    if (!disabled) {
      inputRef.current?.click();
    }
  };

  const handleRemove = (index: number) => {
    const fileToRemove = files[index];
    if (fileToRemove.preview) {
      URL.revokeObjectURL(fileToRemove.preview);
    }

    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange?.(updatedFiles.map((f) => f.file));
    setInternalError(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  const displayError = error ? errorMessage : internalError;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      {/* Drop Zone */}
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        aria-label={label || "파일 업로드"}
        aria-disabled={disabled}
        className={`
          relative border-2 border-dashed p-6 text-center transition-colors
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "cursor-pointer hover:border-primary-400 hover:bg-primary-50"}
          ${isDragging ? "border-primary-500 bg-primary-50" : ""}
          ${displayError ? "border-error-500" : "border-gray-300"}
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          disabled={disabled}
          className="hidden"
          aria-hidden="true"
        />

        <div className="flex flex-col items-center gap-2">
          <svg
            className={`w-10 h-10 ${isDragging ? "text-primary-500" : "text-gray-400"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          <div className="text-sm text-gray-600">
            <span className="font-medium text-primary-900">클릭</span>하거나{" "}
            <span className="font-medium text-primary-900">드래그</span>하여
            파일을 업로드하세요
          </div>
          {accept && (
            <p className="text-xs text-gray-500">
              {accept.replace(/,/g, ", ")}
            </p>
          )}
          {maxSize && (
            <p className="text-xs text-gray-500">
              최대 {formatFileSize(maxSize)}
            </p>
          )}
        </div>
      </div>

      {/* Error Message */}
      {displayError && (
        <p className="text-sm text-error-500" role="alert">
          {displayError}
        </p>
      )}

      {/* File List / Preview */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((fileItem, index) => (
            <div
              key={`${fileItem.file.name}-${index}`}
              className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200"
            >
              {/* Preview */}
              {showPreview && fileItem.preview ? (
                <img
                  src={fileItem.preview}
                  alt={fileItem.file.name}
                  className="w-12 h-12 object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
              )}

              {/* File Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {fileItem.file.name}
                </p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(fileItem.file.size)}
                </p>
              </div>

              {/* Remove Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(index);
                }}
                disabled={disabled}
                aria-label={`${fileItem.file.name} 삭제`}
                className="p-1 text-gray-400 hover:text-error-500 transition-colors disabled:cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
