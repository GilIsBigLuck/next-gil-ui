import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "셀렉트 크기",
    },
    layout: {
      control: "select",
      options: ["column", "row"],
      description: "레이블 배치 방향",
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
type Story = StoryObj<typeof Select>;

const defaultOptions = [
  { value: "", label: "선택하세요" },
  { value: "option1", label: "옵션 1" },
  { value: "option2", label: "옵션 2" },
  { value: "option3", label: "옵션 3" },
];

const categoryOptions = [
  { value: "", label: "전체 카테고리" },
  { value: "sunglasses", label: "선글라스" },
  { value: "glasses", label: "안경" },
  { value: "frames", label: "안경테" },
  { value: "goggles", label: "고글" },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: "선택하세요",
  },
};

export const WithLabel: Story = {
  args: {
    label: "카테고리",
    options: categoryOptions,
    placeholder: "카테고리를 선택하세요",
  },
};

export const RowLayout: Story = {
  args: {
    label: "카테고리",
    layout: "row",
    options: categoryOptions,
    placeholder: "선택하세요",
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: "상품 선택",
    options: [
      { value: "", label: "선택하세요" },
      { value: "available", label: "재고 있음" },
      { value: "soldout", label: "품절 (선택 불가)", disabled: true },
      { value: "preorder", label: "예약 주문" },
    ],
  },
};

export const Error: Story = {
  args: {
    label: "필수 선택",
    options: defaultOptions,
    error: true,
    errorMessage: "필수 선택 항목입니다",
  },
};

export const Success: Story = {
  args: {
    label: "카테고리",
    options: categoryOptions,
    value: "glasses",
    success: true,
    successMessage: "선택이 완료되었습니다",
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화",
    options: defaultOptions,
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Select size="sm" options={defaultOptions} placeholder="Small" />
      <Select size="md" options={defaultOptions} placeholder="Medium" />
      <Select size="lg" options={defaultOptions} placeholder="Large" />
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledSelect() {
    const [value, setValue] = useState("");
    return (
      <div className="max-w-md space-y-4">
        <Select
          label="카테고리"
          options={categoryOptions}
          value={value}
          onChange={setValue}
        />
        <p className="text-sm text-gray-500">선택된 값: {value || "없음"}</p>
      </div>
    );
  },
};
