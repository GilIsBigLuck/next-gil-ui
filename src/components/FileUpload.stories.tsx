import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Form/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {
    accept: {
      control: "text",
      description: "허용할 파일 형식",
    },
    multiple: {
      control: "boolean",
      description: "다중 파일 선택 허용",
    },
    maxSize: {
      control: "number",
      description: "최대 파일 크기 (bytes)",
    },
    maxFiles: {
      control: "number",
      description: "최대 파일 개수",
    },
    showPreview: {
      control: "boolean",
      description: "이미지 미리보기 표시",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    error: {
      control: "boolean",
      description: "에러 상태",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "프로필 사진",
  },
};

export const ImageOnly: Story = {
  args: {
    label: "이미지 업로드",
    accept: "image/*",
    showPreview: true,
  },
};

export const Multiple: Story = {
  args: {
    label: "파일 첨부",
    multiple: true,
    maxFiles: 5,
  },
};

export const WithSizeLimit: Story = {
  args: {
    label: "파일 업로드",
    maxSize: 5 * 1024 * 1024, // 5MB
    accept: "image/*,.pdf",
  },
};

export const DocumentUpload: Story = {
  args: {
    label: "문서 업로드",
    accept: ".pdf,.doc,.docx,.xls,.xlsx",
    multiple: true,
    maxFiles: 3,
    showPreview: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "업로드 불가",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: "필수 첨부",
    error: true,
    errorMessage: "파일을 첨부해주세요",
  },
};

export const ProfileUpload: Story = {
  args: {
    label: "프로필 이미지",
    accept: "image/*",
    maxSize: 2 * 1024 * 1024, // 2MB
    showPreview: true,
  },
  decorators: [
    (Story) => (
      <div className="max-w-md p-4 border border-gray-200 space-y-4">
        <h3 className="font-semibold text-gray-900">프로필 설정</h3>
        <Story />
        <p className="text-xs text-gray-500">
          권장 크기: 400x400px, 최대 2MB
        </p>
      </div>
    ),
  ],
};

export const ProductImages: Story = {
  args: {
    label: "상품 이미지",
    accept: "image/*",
    multiple: true,
    maxFiles: 5,
    maxSize: 10 * 1024 * 1024, // 10MB
    showPreview: true,
  },
  decorators: [
    (Story) => (
      <div className="max-w-lg p-4 border border-gray-200 space-y-4">
        <h3 className="font-semibold text-gray-900">상품 등록</h3>
        <Story />
        <ul className="text-xs text-gray-500 space-y-1">
          <li>• 최대 5장까지 업로드 가능</li>
          <li>• 첫 번째 이미지가 대표 이미지로 설정됩니다</li>
          <li>• 권장 크기: 1000x1000px</li>
        </ul>
      </div>
    ),
  ],
};
