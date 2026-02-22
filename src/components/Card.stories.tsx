import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Button } from "./Button";

const meta: Meta<typeof Card> = {
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outlined", "filled"],
      description: "카드 스타일",
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "내부 여백",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="font-semibold mb-2">카드 제목</h3>
        <p className="text-gray-600 text-sm">카드 내용이 들어갑니다.</p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: (
      <div>
        <h3 className="font-semibold mb-2">Elevated 카드</h3>
        <p className="text-gray-600 text-sm">그림자가 있는 기본 스타일입니다.</p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: (
      <div>
        <h3 className="font-semibold mb-2">Outlined 카드</h3>
        <p className="text-gray-600 text-sm">테두리만 있는 스타일입니다.</p>
      </div>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    children: (
      <div>
        <h3 className="font-semibold mb-2">Filled 카드</h3>
        <p className="text-gray-600 text-sm">배경색이 있는 스타일입니다.</p>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card variant="elevated">
        <h3 className="font-semibold mb-2">Elevated</h3>
        <p className="text-gray-600 text-sm">그림자가 있는 스타일</p>
      </Card>
      <Card variant="outlined">
        <h3 className="font-semibold mb-2">Outlined</h3>
        <p className="text-gray-600 text-sm">테두리 스타일</p>
      </Card>
      <Card variant="filled">
        <h3 className="font-semibold mb-2">Filled</h3>
        <p className="text-gray-600 text-sm">배경색 스타일</p>
      </Card>
    </div>
  ),
};

export const AllPaddings: Story = {
  render: () => (
    <div className="space-y-4">
      <Card padding="none" variant="outlined">
        <div className="p-2 bg-gray-100">padding="none"</div>
      </Card>
      <Card padding="sm" variant="outlined">
        <div>padding="sm"</div>
      </Card>
      <Card padding="md" variant="outlined">
        <div>padding="md"</div>
      </Card>
      <Card padding="lg" variant="outlined">
        <div>padding="lg"</div>
      </Card>
    </div>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card padding="none" className="max-w-sm overflow-hidden">
      <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900">클래식 라운드 선글라스</h3>
          <Badge variant="primary" size="sm">NEW</Badge>
        </div>
        <p className="text-sm text-gray-500 mb-3">빈티지한 감성의 라운드 프레임</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">129,000원</span>
          <Button size="sm">장바구니</Button>
        </div>
      </div>
    </Card>
  ),
};

export const StatCard: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <p className="text-sm text-gray-500 mb-1">총 매출</p>
        <p className="text-2xl font-bold text-gray-900">₩12.5M</p>
        <p className="text-sm text-success-600 mt-2">+12.5%</p>
      </Card>
      <Card>
        <p className="text-sm text-gray-500 mb-1">주문 수</p>
        <p className="text-2xl font-bold text-gray-900">1,234</p>
        <p className="text-sm text-success-600 mt-2">+8.2%</p>
      </Card>
      <Card>
        <p className="text-sm text-gray-500 mb-1">방문자</p>
        <p className="text-2xl font-bold text-gray-900">45.2K</p>
        <p className="text-sm text-error-600 mt-2">-2.4%</p>
      </Card>
      <Card>
        <p className="text-sm text-gray-500 mb-1">전환율</p>
        <p className="text-2xl font-bold text-gray-900">3.2%</p>
        <p className="text-sm text-success-600 mt-2">+0.5%</p>
      </Card>
    </div>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <Card className="max-w-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-900 font-bold text-xl">
          GS
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">홍길동</h3>
          <p className="text-sm text-gray-500">Frontend Developer</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        UI/UX에 관심이 많은 프론트엔드 개발자입니다.
        React, Next.js, TypeScript를 주로 사용합니다.
      </p>
      <div className="flex gap-2">
        <Button size="sm" variant="primary">팔로우</Button>
        <Button size="sm" variant="outline">메시지</Button>
      </div>
    </Card>
  ),
};
