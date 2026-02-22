import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "텍스트영역 크기",
    },
    layout: {
      control: "select",
      options: ["column", "row"],
      description: "레이블 배치 방향",
    },
    resize: {
      control: "select",
      options: ["none", "vertical", "horizontal", "both"],
      description: "리사이즈 방향",
    },
    error: {
      control: "boolean",
      description: "에러 상태",
    },
    success: {
      control: "boolean",
      description: "성공 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "내용을 입력해주세요",
  },
};

export const WithLabel: Story = {
  args: {
    label: "설명",
    placeholder: "상세 내용을 입력하세요",
  },
};

export const RowLayout: Story = {
  args: {
    label: "메모",
    layout: "row",
    placeholder: "메모를 입력하세요",
  },
};

export const Error: Story = {
  args: {
    label: "내용",
    error: true,
    errorMessage: "필수 입력 항목입니다",
    placeholder: "내용을 입력하세요",
  },
};

export const Success: Story = {
  args: {
    label: "내용",
    success: true,
    successMessage: "입력이 완료되었습니다",
    placeholder: "내용을 입력하세요",
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화",
    disabled: true,
    placeholder: "수정할 수 없습니다",
  },
};

export const NoResize: Story = {
  args: {
    label: "크기 고정",
    resize: "none",
    placeholder: "크기를 조절할 수 없습니다",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium" />
      <Textarea size="lg" placeholder="Large" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Textarea label="기본" placeholder="기본 상태" />
      <Textarea label="성공" success successMessage="성공 상태입니다" placeholder="성공" />
      <Textarea label="에러" error errorMessage="에러 상태입니다" placeholder="에러" />
      <Textarea label="비활성화" disabled placeholder="비활성화" />
    </div>
  ),
};
