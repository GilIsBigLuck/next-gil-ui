import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Form/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "토글 크기",
    },
    label: {
      control: "text",
      description: "레이블 텍스트",
    },
    description: {
      control: "text",
      description: "추가 설명",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    label: "알림 받기",
  },
};

export const Checked: Story = {
  args: {
    label: "활성화됨",
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: "다크 모드",
    description: "어두운 테마로 변경합니다",
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화된 토글",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "필수 설정 (변경 불가)",
    disabled: true,
    defaultChecked: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Toggle size="sm" label="Small" defaultChecked />
      <Toggle size="md" label="Medium" defaultChecked />
      <Toggle size="lg" label="Large" defaultChecked />
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledToggle() {
    const [enabled, setEnabled] = useState(false);
    return (
      <div className="space-y-2">
        <Toggle
          label="알림 받기"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        <p className="text-sm text-gray-500">
          알림 상태: {enabled ? "활성화" : "비활성화"}
        </p>
      </div>
    );
  },
};

export const SettingsPanel: Story = {
  render: function SettingsPanelExample() {
    const [settings, setSettings] = useState({
      notifications: true,
      sound: true,
      darkMode: false,
      autoPlay: false,
      newsletter: true,
    });

    const handleChange = (key: keyof typeof settings) => {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div className="max-w-md p-4 border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 mb-4">설정</h3>
        <div className="divide-y divide-gray-100">
          <div className="py-3">
            <Toggle
              label="푸시 알림"
              description="앱 알림을 받습니다"
              checked={settings.notifications}
              onChange={() => handleChange("notifications")}
            />
          </div>
          <div className="py-3">
            <Toggle
              label="알림음"
              description="알림 시 소리가 납니다"
              checked={settings.sound}
              onChange={() => handleChange("sound")}
            />
          </div>
          <div className="py-3">
            <Toggle
              label="다크 모드"
              description="어두운 테마를 사용합니다"
              checked={settings.darkMode}
              onChange={() => handleChange("darkMode")}
            />
          </div>
          <div className="py-3">
            <Toggle
              label="자동 재생"
              description="영상을 자동으로 재생합니다"
              checked={settings.autoPlay}
              onChange={() => handleChange("autoPlay")}
            />
          </div>
          <div className="py-3">
            <Toggle
              label="뉴스레터 구독"
              description="주간 뉴스레터를 받습니다"
              checked={settings.newsletter}
              onChange={() => handleChange("newsletter")}
            />
          </div>
        </div>
      </div>
    );
  },
};
