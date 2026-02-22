import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "error", "info"],
      description: "뱃지 스타일",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "뱃지 크기",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "Error",
    variant: "error",
  },
};

export const Info: Story = {
  args: {
    children: "Info",
    variant: "info",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm" variant="primary">Small</Badge>
      <Badge size="md" variant="primary">Medium</Badge>
      <Badge size="lg" variant="primary">Large</Badge>
    </div>
  ),
};

export const ProductStatus: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">클래식 라운드 선글라스</span>
        <Badge variant="success" size="sm">판매중</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">빈티지 메탈 프레임</span>
        <Badge variant="error" size="sm">품절</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">스포츠 고글</span>
        <Badge variant="warning" size="sm">재고 부족</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">신상품 안경</span>
        <Badge variant="primary" size="sm">NEW</Badge>
      </div>
    </div>
  ),
};

export const OrderStatus: Story = {
  render: () => (
    <div className="max-w-md space-y-3">
      <div className="flex justify-between items-center p-3 border border-gray-200">
        <span className="text-sm">주문 #12345</span>
        <Badge variant="info">결제 대기</Badge>
      </div>
      <div className="flex justify-between items-center p-3 border border-gray-200">
        <span className="text-sm">주문 #12344</span>
        <Badge variant="primary">배송 준비중</Badge>
      </div>
      <div className="flex justify-between items-center p-3 border border-gray-200">
        <span className="text-sm">주문 #12343</span>
        <Badge variant="secondary">배송중</Badge>
      </div>
      <div className="flex justify-between items-center p-3 border border-gray-200">
        <span className="text-sm">주문 #12342</span>
        <Badge variant="success">배송 완료</Badge>
      </div>
    </div>
  ),
};

export const NotificationBadges: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="relative">
        <button className="p-2 text-gray-600 hover:text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </button>
        <Badge variant="error" size="sm" className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-[10px]">
          3
        </Badge>
      </div>
      <div className="relative">
        <button className="p-2 text-gray-600 hover:text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </button>
        <Badge variant="primary" size="sm" className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-[10px]">
          12
        </Badge>
      </div>
    </div>
  ),
};
