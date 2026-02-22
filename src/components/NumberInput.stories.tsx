import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NumberInput } from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "Form/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "입력 필드 크기",
    },
    min: {
      control: "number",
      description: "최소값",
    },
    max: {
      control: "number",
      description: "최대값",
    },
    step: {
      control: "number",
      description: "증감 단위",
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
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  render: function DefaultNumberInput() {
    const [value, setValue] = useState(0);
    return <NumberInput value={value} onChange={setValue} />;
  },
};

export const WithLabel: Story = {
  render: function WithLabelNumberInput() {
    const [value, setValue] = useState(1);
    return <NumberInput label="수량" value={value} onChange={setValue} />;
  },
};

export const WithMinMax: Story = {
  render: function WithMinMaxNumberInput() {
    const [value, setValue] = useState(5);
    return (
      <div className="space-y-2">
        <NumberInput label="수량 (1-10)" value={value} onChange={setValue} min={1} max={10} />
        <p className="text-sm text-gray-500">최소 1, 최대 10까지 설정 가능</p>
      </div>
    );
  },
};

export const CustomStep: Story = {
  render: function CustomStepNumberInput() {
    const [value, setValue] = useState(100);
    return (
      <div className="space-y-2">
        <NumberInput label="가격" value={value} onChange={setValue} step={100} min={0} />
        <p className="text-sm text-gray-500">100원 단위로 조절</p>
      </div>
    );
  },
};

export const Error: Story = {
  render: function ErrorNumberInput() {
    const [value, setValue] = useState(0);
    return (
      <NumberInput
        label="수량"
        value={value}
        onChange={setValue}
        error
        errorMessage="1개 이상 선택해주세요"
      />
    );
  },
};

export const Disabled: Story = {
  render: function DisabledNumberInput() {
    const [value, setValue] = useState(5);
    return <NumberInput label="수량" value={value} onChange={setValue} disabled />;
  },
};

export const AllSizes: Story = {
  render: function AllSizesNumberInput() {
    const [sm, setSm] = useState(1);
    const [md, setMd] = useState(2);
    const [lg, setLg] = useState(3);
    return (
      <div className="space-y-4">
        <NumberInput size="sm" label="Small" value={sm} onChange={setSm} />
        <NumberInput size="md" label="Medium" value={md} onChange={setMd} />
        <NumberInput size="lg" label="Large" value={lg} onChange={setLg} />
      </div>
    );
  },
};

export const CartQuantity: Story = {
  render: function CartQuantityExample() {
    const [quantity, setQuantity] = useState(1);
    const price = 129000;
    return (
      <div className="max-w-sm p-4 border border-gray-200 space-y-4">
        <h3 className="font-semibold text-gray-900">클래식 라운드 선글라스</h3>
        <NumberInput label="수량" value={quantity} onChange={setQuantity} min={1} max={99} />
        <div className="flex justify-between pt-2 border-t">
          <span className="text-gray-600">총 금액</span>
          <span className="font-bold text-lg">{(price * quantity).toLocaleString()}원</span>
        </div>
      </div>
    );
  },
};
