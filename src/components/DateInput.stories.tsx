import type { Meta, StoryObj } from "@storybook/react";
import { DateInput } from "./DateInput";

const meta: Meta<typeof DateInput> = {
  title: "Form/DateInput",
  component: DateInput,
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
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "예약 날짜",
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "시작일",
    defaultValue: "2024-01-15",
  },
};

export const Error: Story = {
  args: {
    label: "날짜",
    error: true,
    errorMessage: "날짜를 선택해주세요",
  },
};

export const Disabled: Story = {
  args: {
    label: "날짜",
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <DateInput size="sm" label="Small" />
      <DateInput size="md" label="Medium" />
      <DateInput size="lg" label="Large" />
    </div>
  ),
};

export const DateRange: Story = {
  render: () => (
    <div className="flex gap-4 items-end max-w-lg">
      <DateInput label="시작일" />
      <span className="text-gray-500 pb-2">~</span>
      <DateInput label="종료일" />
    </div>
  ),
};

export const ReservationForm: Story = {
  render: () => (
    <div className="max-w-md p-6 border border-gray-200 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">예약 정보</h3>
      <DateInput label="체크인" />
      <DateInput label="체크아웃" />
      <p className="text-sm text-gray-500">날짜를 클릭하여 선택하세요</p>
    </div>
  ),
};
