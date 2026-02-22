import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
  title: "Form/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "입력 필드 크기",
    },
    error: {
      control: "boolean",
      description: "에러 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    placeholder: "비밀번호를 입력하세요",
  },
};

export const WithLabel: Story = {
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력하세요",
  },
};

export const Error: Story = {
  args: {
    label: "비밀번호",
    error: true,
    errorMessage: "비밀번호는 8자 이상이어야 합니다",
    placeholder: "비밀번호를 입력하세요",
  },
};

export const Disabled: Story = {
  args: {
    label: "비밀번호",
    disabled: true,
    placeholder: "비활성화됨",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <PasswordInput size="sm" placeholder="Small" />
      <PasswordInput size="md" placeholder="Medium" />
      <PasswordInput size="lg" placeholder="Large" />
    </div>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <div className="space-y-4 max-w-md p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">로그인</h3>
      <PasswordInput label="현재 비밀번호" placeholder="현재 비밀번호" />
      <PasswordInput label="새 비밀번호" placeholder="새 비밀번호" />
      <PasswordInput
        label="새 비밀번호 확인"
        placeholder="새 비밀번호 확인"
        error
        errorMessage="비밀번호가 일치하지 않습니다"
      />
    </div>
  ),
};
