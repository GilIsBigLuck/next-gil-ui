import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Layout/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    multiple: {
      control: "boolean",
      description: "여러 항목 동시 열기 허용",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="item1">
        <AccordionTrigger value="item1">첫 번째 항목</AccordionTrigger>
        <AccordionContent value="item1">
          첫 번째 항목의 내용입니다. 아코디언을 클릭하면 내용이 펼쳐집니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger value="item2">두 번째 항목</AccordionTrigger>
        <AccordionContent value="item2">
          두 번째 항목의 내용입니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item3">
        <AccordionTrigger value="item3">세 번째 항목</AccordionTrigger>
        <AccordionContent value="item3">
          세 번째 항목의 내용입니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Accordion defaultValue={["item1"]}>
      <AccordionItem value="item1">
        <AccordionTrigger value="item1">기본으로 열린 항목</AccordionTrigger>
        <AccordionContent value="item1">
          이 항목은 기본으로 열려 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger value="item2">닫힌 항목</AccordionTrigger>
        <AccordionContent value="item2">
          이 항목은 클릭하면 열립니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion multiple>
      <AccordionItem value="item1">
        <AccordionTrigger value="item1">항목 1</AccordionTrigger>
        <AccordionContent value="item1">
          여러 항목을 동시에 열 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger value="item2">항목 2</AccordionTrigger>
        <AccordionContent value="item2">
          다른 항목을 열어도 이 항목은 닫히지 않습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item3">
        <AccordionTrigger value="item3">항목 3</AccordionTrigger>
        <AccordionContent value="item3">
          모든 항목을 동시에 열 수 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="item1">
        <AccordionTrigger value="item1">활성화된 항목</AccordionTrigger>
        <AccordionContent value="item1">
          이 항목은 클릭할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger value="item2" disabled>비활성화된 항목</AccordionTrigger>
        <AccordionContent value="item2">
          이 내용은 볼 수 없습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item3">
        <AccordionTrigger value="item3">활성화된 항목</AccordionTrigger>
        <AccordionContent value="item3">
          이 항목도 클릭할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div className="max-w-2xl">
      <h2 className="text-xl font-bold mb-4">자주 묻는 질문</h2>
      <Accordion>
        <AccordionItem value="faq1">
          <AccordionTrigger value="faq1">배송은 얼마나 걸리나요?</AccordionTrigger>
          <AccordionContent value="faq1">
            일반 배송은 결제 완료 후 2-3일 이내에 도착합니다.
            제주 및 도서산간 지역은 1-2일 추가 소요될 수 있습니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq2">
          <AccordionTrigger value="faq2">교환/환불 정책이 어떻게 되나요?</AccordionTrigger>
          <AccordionContent value="faq2">
            상품 수령 후 7일 이내에 교환/환불 신청이 가능합니다.
            단, 상품 개봉 및 사용 흔적이 있는 경우 교환/환불이 불가합니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq3">
          <AccordionTrigger value="faq3">적립금은 어떻게 사용하나요?</AccordionTrigger>
          <AccordionContent value="faq3">
            적립금은 결제 시 현금처럼 사용 가능합니다.
            최소 1,000원 이상부터 사용 가능하며, 적립금만으로 전액 결제도 가능합니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq4">
          <AccordionTrigger value="faq4">회원 등급 혜택은 무엇인가요?</AccordionTrigger>
          <AccordionContent value="faq4">
            <ul className="list-disc list-inside space-y-1">
              <li>일반: 구매금액의 1% 적립</li>
              <li>실버: 구매금액의 2% 적립 + 무료배송</li>
              <li>골드: 구매금액의 3% 적립 + 무료배송 + 생일 쿠폰</li>
              <li>VIP: 구매금액의 5% 적립 + 무료배송 + 생일 쿠폰 + 전용 고객센터</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const ProductDetails: Story = {
  render: () => (
    <div className="max-w-2xl">
      <Accordion multiple defaultValue={["details"]}>
        <AccordionItem value="details">
          <AccordionTrigger value="details">상품 상세 정보</AccordionTrigger>
          <AccordionContent value="details">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-500">소재</span>
              <span>스테인리스 스틸, 아세테이트</span>
              <span className="text-gray-500">렌즈</span>
              <span>폴리카보네이트 (UV400 차단)</span>
              <span className="text-gray-500">사이즈</span>
              <span>프레임 폭 140mm / 렌즈 50mm</span>
              <span className="text-gray-500">원산지</span>
              <span>이탈리아</span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping">
          <AccordionTrigger value="shipping">배송 안내</AccordionTrigger>
          <AccordionContent value="shipping">
            <p className="text-sm text-gray-600">
              오후 2시 이전 주문 시 당일 출고됩니다.
              배송비는 3,000원이며, 50,000원 이상 구매 시 무료배송됩니다.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="return">
          <AccordionTrigger value="return">교환/반품 안내</AccordionTrigger>
          <AccordionContent value="return">
            <p className="text-sm text-gray-600">
              상품 수령 후 7일 이내 교환/반품 가능합니다.
              단순 변심의 경우 반품 배송비는 고객 부담입니다.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
