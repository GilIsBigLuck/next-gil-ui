import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toast } from "./Toast";
import { Button } from "./Button";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "error", "info"],
      description: "토스트 스타일",
    },
    position: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left", "top-center", "bottom-center"],
      description: "토스트 위치",
    },
    duration: {
      control: "number",
      description: "표시 시간 (ms)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: function DefaultToast() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Toast 표시</Button>
        <Toast
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          message="기본 토스트 메시지입니다."
        />
      </div>
    );
  },
};

export const Success: Story = {
  render: function SuccessToast() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Success Toast</Button>
        <Toast
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          message="저장되었습니다."
          variant="success"
        />
      </div>
    );
  },
};

export const Warning: Story = {
  render: function WarningToast() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Warning Toast</Button>
        <Toast
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          message="주의가 필요합니다."
          variant="warning"
        />
      </div>
    );
  },
};

export const Error: Story = {
  render: function ErrorToast() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Error Toast</Button>
        <Toast
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          message="오류가 발생했습니다."
          variant="error"
        />
      </div>
    );
  },
};

export const Info: Story = {
  render: function InfoToast() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Info Toast</Button>
        <Toast
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          message="새로운 업데이트가 있습니다."
          variant="info"
        />
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: function AllVariantsToast() {
    const [activeToast, setActiveToast] = useState<string | null>(null);
    const variants = ["default", "success", "warning", "error", "info"] as const;

    return (
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {variants.map((variant) => (
            <Button
              key={variant}
              variant="outline"
              onClick={() => setActiveToast(variant)}
            >
              {variant}
            </Button>
          ))}
        </div>
        {variants.map((variant) => (
          <Toast
            key={variant}
            isOpen={activeToast === variant}
            onClose={() => setActiveToast(null)}
            message={`${variant} 토스트 메시지입니다.`}
            variant={variant}
          />
        ))}
      </div>
    );
  },
};

export const Positions: Story = {
  render: function PositionsToast() {
    const [activePosition, setActivePosition] = useState<string | null>(null);
    const positions = [
      "top-left",
      "top-center",
      "top-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
    ] as const;

    return (
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-2 max-w-md">
          {positions.map((position) => (
            <Button
              key={position}
              variant="outline"
              size="sm"
              onClick={() => setActivePosition(position)}
            >
              {position}
            </Button>
          ))}
        </div>
        {positions.map((position) => (
          <Toast
            key={position}
            isOpen={activePosition === position}
            onClose={() => setActivePosition(null)}
            message={`${position} 위치`}
            position={position}
            variant="info"
          />
        ))}
      </div>
    );
  },
};

export const CustomDuration: Story = {
  render: function CustomDurationToast() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>5초 토스트</Button>
        <Toast
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          message="이 토스트는 5초 후에 사라집니다."
          duration={5000}
          variant="info"
        />
      </div>
    );
  },
};

export const ActionExample: Story = {
  render: function ActionExampleToast() {
    const [showSaveToast, setShowSaveToast] = useState(false);
    const [showDeleteToast, setShowDeleteToast] = useState(false);
    const [showCopyToast, setShowCopyToast] = useState(false);

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setShowSaveToast(true)}>저장</Button>
          <Button variant="danger" onClick={() => setShowDeleteToast(true)}>삭제</Button>
          <Button variant="outline" onClick={() => setShowCopyToast(true)}>복사</Button>
        </div>

        <Toast
          isOpen={showSaveToast}
          onClose={() => setShowSaveToast(false)}
          message="변경사항이 저장되었습니다."
          variant="success"
        />

        <Toast
          isOpen={showDeleteToast}
          onClose={() => setShowDeleteToast(false)}
          message="항목이 삭제되었습니다."
          variant="error"
        />

        <Toast
          isOpen={showCopyToast}
          onClose={() => setShowCopyToast(false)}
          message="클립보드에 복사되었습니다."
          variant="info"
          duration={1500}
        />
      </div>
    );
  },
};
