import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Radio, RadioGroup } from "./Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Form/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "전체 비활성화",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const defaultOptions = [
  { value: "option1", label: "옵션 1" },
  { value: "option2", label: "옵션 2" },
  { value: "option3", label: "옵션 3" },
];

export const Default: Story = {
  args: {
    name: "default-radio",
    options: defaultOptions,
  },
};

export const WithDefaultValue: Story = {
  args: {
    name: "default-value-radio",
    options: defaultOptions,
    value: "option2",
  },
};

export const WithDescription: Story = {
  args: {
    name: "description-radio",
    options: [
      { value: "free", label: "무료 배송", description: "5-7일 소요" },
      { value: "standard", label: "일반 배송", description: "2-3일 소요 (+3,000원)" },
      { value: "express", label: "빠른 배송", description: "다음날 도착 (+5,000원)" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    name: "disabled-radio",
    options: defaultOptions,
    disabled: true,
    value: "option1",
  },
};

export const PartiallyDisabled: Story = {
  args: {
    name: "partial-disabled-radio",
    options: [
      { value: "available", label: "선택 가능" },
      { value: "soldout", label: "품절", disabled: true },
      { value: "preorder", label: "예약 주문" },
    ],
  },
};

export const Controlled: Story = {
  render: function ControlledRadio() {
    const [value, setValue] = useState("option1");
    return (
      <div className="space-y-4">
        <RadioGroup
          name="controlled-radio"
          value={value}
          onChange={setValue}
          options={defaultOptions}
        />
        <p className="text-sm text-gray-500">선택된 값: {value}</p>
      </div>
    );
  },
};

export const SingleRadio: Story = {
  render: () => (
    <div className="space-y-3">
      <Radio name="single" value="1" label="단일 라디오 버튼 1" />
      <Radio name="single" value="2" label="단일 라디오 버튼 2" />
      <Radio name="single" value="3" label="단일 라디오 버튼 3" description="설명 텍스트" />
    </div>
  ),
};

export const PaymentMethod: Story = {
  render: function PaymentMethodExample() {
    const [method, setMethod] = useState("card");
    return (
      <div className="max-w-md p-4 border border-gray-200 space-y-4">
        <h3 className="font-semibold text-gray-900">결제 수단 선택</h3>
        <RadioGroup
          name="payment"
          value={method}
          onChange={setMethod}
          options={[
            { value: "card", label: "신용/체크카드", description: "VISA, Mastercard, 국내 카드" },
            { value: "bank", label: "계좌이체", description: "실시간 계좌이체" },
            { value: "phone", label: "휴대폰 결제", description: "통신사 청구" },
            { value: "kakao", label: "카카오페이", description: "카카오페이로 간편결제" },
          ]}
        />
      </div>
    );
  },
};

export const SurveyQuestion: Story = {
  render: function SurveyQuestionExample() {
    const [answer, setAnswer] = useState("");
    return (
      <div className="max-w-lg p-4 border border-gray-200 space-y-4">
        <h3 className="font-semibold text-gray-900">
          Q. 우리 서비스를 얼마나 자주 이용하시나요?
        </h3>
        <RadioGroup
          name="frequency"
          value={answer}
          onChange={setAnswer}
          options={[
            { value: "daily", label: "매일" },
            { value: "weekly", label: "주 2-3회" },
            { value: "monthly", label: "월 2-3회" },
            { value: "rarely", label: "거의 사용하지 않음" },
          ]}
        />
      </div>
    );
  },
};
