import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "./Button";

const meta: Meta<typeof Tooltip> = {
  title: "Data Display/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "툴팁 위치",
    },
    delay: {
      control: "number",
      description: "표시 지연 시간 (ms)",
    },
  },
  decorators: [
    (Story) => (
      <div className="p-16 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "기본 툴팁입니다",
    children: <Button variant="outline">마우스를 올려보세요</Button>,
  },
};

export const Top: Story = {
  args: {
    content: "위쪽 툴팁",
    position: "top",
    children: <Button variant="outline">Top</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: "아래쪽 툴팁",
    position: "bottom",
    children: <Button variant="outline">Bottom</Button>,
  },
};

export const Left: Story = {
  args: {
    content: "왼쪽 툴팁",
    position: "left",
    children: <Button variant="outline">Left</Button>,
  },
};

export const Right: Story = {
  args: {
    content: "오른쪽 툴팁",
    position: "right",
    children: <Button variant="outline">Right</Button>,
  },
};

export const AllPositions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip content="위쪽 툴팁" position="top">
        <Button variant="outline">Top</Button>
      </Tooltip>
      <Tooltip content="아래쪽 툴팁" position="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>
      <Tooltip content="왼쪽 툴팁" position="left">
        <Button variant="outline">Left</Button>
      </Tooltip>
      <Tooltip content="오른쪽 툴팁" position="right">
        <Button variant="outline">Right</Button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  args: {
    content: "500ms 후에 표시됩니다",
    delay: 500,
    children: <Button variant="outline">Delayed Tooltip</Button>,
  },
};

export const LongContent: Story = {
  args: {
    content: "이것은 긴 내용의 툴팁입니다. 툴팁은 자동으로 줄바꿈됩니다. 필요한 경우 더 많은 정보를 제공할 수 있습니다.",
    children: <Button variant="outline">긴 내용</Button>,
  },
};

export const IconButton: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tooltip content="수정">
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip content="삭제">
        <button className="p-2 text-gray-600 hover:text-error-600 hover:bg-error-50 rounded">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip content="공유">
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </button>
      </Tooltip>
    </div>
  ),
};

export const InfoTooltip: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-700">배송비</span>
      <Tooltip content="50,000원 이상 구매 시 무료배송">
        <span className="inline-flex items-center justify-center w-4 h-4 text-xs text-gray-500 bg-gray-200 rounded-full cursor-help">
          ?
        </span>
      </Tooltip>
    </div>
  ),
};

export const FormFieldHelp: Story = {
  render: () => (
    <div className="max-w-sm space-y-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <label className="text-sm font-medium text-gray-700">비밀번호</label>
          <Tooltip
            content="영문 대/소문자, 숫자, 특수문자를 포함한 8자 이상"
            position="right"
          >
            <span className="inline-flex items-center justify-center w-4 h-4 text-xs text-gray-500 bg-gray-200 rounded-full cursor-help">
              ?
            </span>
          </Tooltip>
        </div>
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-900"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
    </div>
  ),
};
