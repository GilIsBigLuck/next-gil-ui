import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "체크박스 레이블",
    },
    description: {
      control: "text",
      description: "추가 설명",
    },
    checked: {
      control: "boolean",
      description: "체크 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "동의합니다",
  },
};

export const Checked: Story = {
  args: {
    label: "선택됨",
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: "마케팅 정보 수신 동의",
    description: "이메일, SMS를 통해 할인 및 이벤트 정보를 받습니다",
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화된 옵션",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "필수 동의 (변경 불가)",
    disabled: true,
    defaultChecked: true,
  },
};

export const Controlled: Story = {
  render: function ControlledCheckbox() {
    const [checked, setChecked] = useState(false);
    return (
      <div className="space-y-2">
        <Checkbox
          label="알림 받기"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <p className="text-sm text-gray-500">상태: {checked ? "활성화" : "비활성화"}</p>
      </div>
    );
  },
};

export const CheckboxGroup: Story = {
  render: function CheckboxGroupExample() {
    const [selected, setSelected] = useState<string[]>(["email"]);

    const handleChange = (value: string) => {
      setSelected((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    };

    return (
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-700">알림 수신 방법</p>
        <div className="space-y-3">
          <Checkbox
            label="이메일"
            checked={selected.includes("email")}
            onChange={() => handleChange("email")}
          />
          <Checkbox
            label="SMS"
            checked={selected.includes("sms")}
            onChange={() => handleChange("sms")}
          />
          <Checkbox
            label="푸시 알림"
            checked={selected.includes("push")}
            onChange={() => handleChange("push")}
          />
        </div>
        <p className="text-sm text-gray-500">선택된 항목: {selected.join(", ") || "없음"}</p>
      </div>
    );
  },
};

export const TermsAgreement: Story = {
  render: function TermsAgreementExample() {
    const [allAgreed, setAllAgreed] = useState(false);
    const [terms, setTerms] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [marketing, setMarketing] = useState(false);

    const handleAllChange = () => {
      const newValue = !allAgreed;
      setAllAgreed(newValue);
      setTerms(newValue);
      setPrivacy(newValue);
      setMarketing(newValue);
    };

    return (
      <div className="max-w-md p-4 border border-gray-200 space-y-4">
        <Checkbox
          label="전체 동의"
          description="아래 모든 항목에 동의합니다"
          checked={allAgreed}
          onChange={handleAllChange}
        />
        <div className="border-t pt-4 pl-4 space-y-3">
          <Checkbox
            label="이용약관 동의 (필수)"
            checked={terms}
            onChange={() => setTerms(!terms)}
          />
          <Checkbox
            label="개인정보 처리방침 동의 (필수)"
            checked={privacy}
            onChange={() => setPrivacy(!privacy)}
          />
          <Checkbox
            label="마케팅 정보 수신 동의 (선택)"
            checked={marketing}
            onChange={() => setMarketing(!marketing)}
          />
        </div>
      </div>
    );
  },
};
