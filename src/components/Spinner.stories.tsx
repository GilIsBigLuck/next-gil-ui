import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Spinner, SpinnerOverlay } from "./Spinner";
import { Button } from "./Button";
import { Card } from "./Card";

const meta: Meta<typeof Spinner> = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "스피너 크기",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "white", "gray"],
      description: "스피너 색상",
    },
    label: {
      control: "text",
      description: "로딩 텍스트",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "로딩 중...",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="gray" />
      <div className="p-4 bg-gray-900 rounded">
        <Spinner variant="white" />
      </div>
    </div>
  ),
};

export const Overlay: Story = {
  render: function OverlaySpinner() {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <div className="relative">
        <Card className="min-h-[200px]">
          <h3 className="font-semibold mb-2">카드 제목</h3>
          <p className="text-gray-600 text-sm mb-4">
            카드 내용입니다. 버튼을 클릭하면 로딩 오버레이가 표시됩니다.
          </p>
          <Button onClick={handleClick}>데이터 불러오기</Button>
        </Card>
        <SpinnerOverlay isVisible={isLoading} label="불러오는 중..." />
      </div>
    );
  },
};

export const OverlayWithBlur: Story = {
  render: function OverlayBlurSpinner() {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <div className="relative">
        <Card className="min-h-[200px]">
          <h3 className="font-semibold mb-2">카드 제목</h3>
          <p className="text-gray-600 text-sm mb-4">
            블러 효과가 적용된 오버레이입니다.
          </p>
          <Button onClick={handleClick}>불러오기</Button>
        </Card>
        <SpinnerOverlay isVisible={isLoading} blur />
      </div>
    );
  },
};

export const ButtonLoading: Story = {
  render: function ButtonLoadingSpinner() {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <div className="space-y-4">
        <Button onClick={handleClick} disabled={isLoading}>
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <Spinner size="sm" variant="white" />
              저장 중...
            </span>
          ) : (
            "저장하기"
          )}
        </Button>

        <Button variant="outline" onClick={handleClick} disabled={isLoading}>
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <Spinner size="sm" variant="primary" />
              처리 중...
            </span>
          ) : (
            "처리하기"
          )}
        </Button>
      </div>
    );
  },
};

export const PageLoading: Story = {
  render: () => (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
      <Spinner size="xl" />
      <p className="text-gray-500">페이지를 불러오는 중입니다...</p>
    </div>
  ),
};

export const InlineLoading: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Spinner size="sm" />
        <span className="text-sm text-gray-600">데이터를 불러오는 중...</span>
      </div>
      <div className="flex items-center gap-2">
        <Spinner size="sm" variant="secondary" />
        <span className="text-sm text-gray-600">파일을 업로드하는 중...</span>
      </div>
      <div className="flex items-center gap-2">
        <Spinner size="sm" variant="gray" />
        <span className="text-sm text-gray-600">검색 중...</span>
      </div>
    </div>
  ),
};

export const TableLoading: Story = {
  render: () => (
    <div className="relative border border-gray-200">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">상품명</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">카테고리</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">가격</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3} className="px-4 py-12">
              <div className="flex flex-col items-center justify-center gap-2">
                <Spinner />
                <span className="text-sm text-gray-500">데이터를 불러오는 중...</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};
