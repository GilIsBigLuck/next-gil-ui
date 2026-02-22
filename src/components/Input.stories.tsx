import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    layout: {
      control: "select",
      options: ["column", "row"],
    },
    error: {
      control: "boolean",
    },
    success: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "입력해주세요",
  },
};

export const WithLabel: Story = {
  args: {
    label: "이메일",
    placeholder: "example@email.com",
  },
};

export const RowLayout: Story = {
  args: {
    label: "이메일",
    layout: "row",
    placeholder: "example@email.com",
  },
};

export const Error: Story = {
  args: {
    label: "이메일",
    error: true,
    errorMessage: "올바른 이메일 형식이 아닙니다",
    placeholder: "example@email.com",
  },
};

export const Success: Story = {
  args: {
    label: "이메일",
    success: true,
    successMessage: "사용 가능한 이메일입니다",
    placeholder: "example@email.com",
  },
};

export const Disabled: Story = {
  args: {
    label: "이메일",
    disabled: true,
    placeholder: "비활성화됨",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input placeholder="기본 상태" />
      <Input success successMessage="성공 상태" placeholder="성공" />
      <Input error errorMessage="에러 상태" placeholder="에러" />
      <Input disabled placeholder="비활성화" />
    </div>
  ),
};
