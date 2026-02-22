import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Layout/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["underline", "button"],
      description: "탭 스타일",
    },
    size: {
      control: "select",
      options: ["md", "lg"],
      description: "탭 크기",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">탭 1</TabsTrigger>
        <TabsTrigger value="tab2">탭 2</TabsTrigger>
        <TabsTrigger value="tab3">탭 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-gray-600">첫 번째 탭 내용입니다.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-gray-600">두 번째 탭 내용입니다.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-gray-600">세 번째 탭 내용입니다.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="tab1" variant="underline">
      <TabsList>
        <TabsTrigger value="tab1">개요</TabsTrigger>
        <TabsTrigger value="tab2">상세정보</TabsTrigger>
        <TabsTrigger value="tab3">리뷰</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-gray-600">개요 내용</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-gray-600">상세정보 내용</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-gray-600">리뷰 내용</p>
      </TabsContent>
    </Tabs>
  ),
};

export const Button: Story = {
  render: () => (
    <Tabs defaultValue="tab1" variant="button">
      <TabsList>
        <TabsTrigger value="tab1">전체</TabsTrigger>
        <TabsTrigger value="tab2">진행중</TabsTrigger>
        <TabsTrigger value="tab3">완료</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-gray-600">전체 목록</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-gray-600">진행중인 항목</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-gray-600">완료된 항목</p>
      </TabsContent>
    </Tabs>
  ),
};

export const LargeSize: Story = {
  render: () => (
    <Tabs defaultValue="tab1" size="lg">
      <TabsList>
        <TabsTrigger value="tab1">상품정보</TabsTrigger>
        <TabsTrigger value="tab2">리뷰 (128)</TabsTrigger>
        <TabsTrigger value="tab3">Q&A (24)</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-gray-600">상품 정보가 표시됩니다.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-gray-600">리뷰 목록이 표시됩니다.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-gray-600">Q&A 목록이 표시됩니다.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">활성화</TabsTrigger>
        <TabsTrigger value="tab2" disabled>비활성화</TabsTrigger>
        <TabsTrigger value="tab3">활성화</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-gray-600">첫 번째 탭 내용</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-gray-600">두 번째 탭 내용 (접근 불가)</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-gray-600">세 번째 탭 내용</p>
      </TabsContent>
    </Tabs>
  ),
};

export const ProductPage: Story = {
  render: () => (
    <div className="max-w-3xl">
      <Tabs defaultValue="info" size="lg">
        <TabsList>
          <TabsTrigger value="info">상품정보</TabsTrigger>
          <TabsTrigger value="reviews">리뷰 (128)</TabsTrigger>
          <TabsTrigger value="qna">Q&A (24)</TabsTrigger>
          <TabsTrigger value="delivery">배송/반품</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <div className="space-y-4">
            <h3 className="font-semibold">상품 상세 정보</h3>
            <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400">
              상품 이미지
            </div>
            <p className="text-sm text-gray-600">
              클래식한 라운드 프레임의 선글라스입니다.
              자외선 차단 기능과 블루라이트 필터가 적용되어 있습니다.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">4.8</span>
              <div>
                <div className="flex text-yellow-400">★★★★★</div>
                <p className="text-sm text-gray-500">128개의 리뷰</p>
              </div>
            </div>
            <div className="border-t pt-4 space-y-4">
              <div className="p-4 bg-gray-50">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">김**</span>
                  <span className="text-sm text-gray-500">2024.01.15</span>
                </div>
                <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
                <p className="text-sm text-gray-600">가벼우면서도 고급스러워요!</p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="qna">
          <div className="space-y-4">
            <button className="px-4 py-2 text-sm bg-primary-900 text-white">
              문의하기
            </button>
            <div className="border-t pt-4">
              <div className="p-4 border-b">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Q. 도수 렌즈로 교체 가능한가요?</span>
                  <span className="text-sm text-gray-500">답변완료</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  A. 네, 가능합니다. 별도의 렌즈 교체 서비스를 이용해주세요.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="delivery">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">배송 안내</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 평일 오후 2시 이전 주문 시 당일 출고</li>
                <li>• 배송비: 3,000원 (50,000원 이상 무료배송)</li>
                <li>• 제주/도서산간 추가 배송비 발생</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">반품/교환 안내</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 수령 후 7일 이내 신청 가능</li>
                <li>• 단순 변심 시 반품 배송비 고객 부담</li>
                <li>• 상품 하자 시 무료 교환/반품</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const Settings: Story = {
  render: () => (
    <div className="max-w-md">
      <Tabs defaultValue="account" variant="button">
        <TabsList>
          <TabsTrigger value="account">계정</TabsTrigger>
          <TabsTrigger value="notification">알림</TabsTrigger>
          <TabsTrigger value="privacy">개인정보</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300"
                placeholder="홍길동"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="notification">
          <p className="text-gray-600">알림 설정 내용</p>
        </TabsContent>
        <TabsContent value="privacy">
          <p className="text-gray-600">개인정보 설정 내용</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
