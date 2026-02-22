import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const C=x.createContext(null);function a({children:c,defaultValue:s=[],multiple:o=!1,className:u=""}){const[m,l]=x.useState(s),p=x.useId(),g=t=>{l(o?d=>d.includes(t)?d.filter(y=>y!==t):[...d,t]:d=>d.includes(t)?[]:[t])};return e.jsx(C.Provider,{value:{openItems:m,toggleItem:g,multiple:o,baseId:p},children:e.jsx("div",{className:`border border-gray-200 divide-y divide-gray-200 ${u}`,children:c})})}function n({value:c,children:s,className:o=""}){return e.jsx("div",{className:o,"data-accordion-item":c,children:s})}function r({value:c,children:s,disabled:o=!1,className:u=""}){const m=x.useContext(C);if(!m)throw new Error("AccordionTrigger must be used within Accordion");const{openItems:l,toggleItem:p,baseId:g}=m,t=l.includes(c),d=`${g}-trigger-${c}`,y=`${g}-content-${c}`;return e.jsx("h3",{children:e.jsxs("button",{type:"button",id:d,"aria-expanded":t,"aria-controls":y,onClick:()=>!o&&p(c),disabled:o,className:`
          w-full flex items-center justify-between px-4 py-4
          text-left font-medium text-gray-900
          hover:bg-gray-50 transition-colors
          ${o?"opacity-50 cursor-not-allowed":"cursor-pointer"}
          ${u}
        `,children:[e.jsx("span",{children:s}),e.jsx("svg",{className:`w-5 h-5 text-gray-500 transition-transform duration-200 ${t?"rotate-180":""}`,fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M19 9l-7 7-7-7"})})]})})}function i({value:c,children:s,className:o=""}){const u=x.useContext(C);if(!u)throw new Error("AccordionContent must be used within Accordion");const{openItems:m,baseId:l}=u,p=m.includes(c),g=`${l}-trigger-${c}`,t=`${l}-content-${c}`;return e.jsx("div",{id:t,role:"region","aria-labelledby":g,hidden:!p,className:`
        overflow-hidden transition-all duration-200
        ${p?"max-h-96":"max-h-0"}
      `,children:e.jsx("div",{className:`px-4 py-4 bg-gray-50 text-gray-600 ${o}`,children:s})})}try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{defaultValue:{defaultValue:{value:"[]"},description:"",name:"defaultValue",required:!1,type:{name:"string[]"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{n.displayName="AccordionItem",n.__docgenInfo={description:"",displayName:"AccordionItem",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{r.displayName="AccordionTrigger",r.__docgenInfo={description:"",displayName:"AccordionTrigger",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="AccordionContent",i.__docgenInfo={description:"",displayName:"AccordionContent",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const R={title:"Layout/Accordion",component:a,tags:["autodocs"],argTypes:{multiple:{control:"boolean",description:"여러 항목 동시 열기 허용"}}},A={render:()=>e.jsxs(a,{children:[e.jsxs(n,{value:"item1",children:[e.jsx(r,{value:"item1",children:"첫 번째 항목"}),e.jsx(i,{value:"item1",children:"첫 번째 항목의 내용입니다. 아코디언을 클릭하면 내용이 펼쳐집니다."})]}),e.jsxs(n,{value:"item2",children:[e.jsx(r,{value:"item2",children:"두 번째 항목"}),e.jsx(i,{value:"item2",children:"두 번째 항목의 내용입니다."})]}),e.jsxs(n,{value:"item3",children:[e.jsx(r,{value:"item3",children:"세 번째 항목"}),e.jsx(i,{value:"item3",children:"세 번째 항목의 내용입니다."})]})]})},v={render:()=>e.jsxs(a,{defaultValue:["item1"],children:[e.jsxs(n,{value:"item1",children:[e.jsx(r,{value:"item1",children:"기본으로 열린 항목"}),e.jsx(i,{value:"item1",children:"이 항목은 기본으로 열려 있습니다."})]}),e.jsxs(n,{value:"item2",children:[e.jsx(r,{value:"item2",children:"닫힌 항목"}),e.jsx(i,{value:"item2",children:"이 항목은 클릭하면 열립니다."})]})]})},h={render:()=>e.jsxs(a,{multiple:!0,children:[e.jsxs(n,{value:"item1",children:[e.jsx(r,{value:"item1",children:"항목 1"}),e.jsx(i,{value:"item1",children:"여러 항목을 동시에 열 수 있습니다."})]}),e.jsxs(n,{value:"item2",children:[e.jsx(r,{value:"item2",children:"항목 2"}),e.jsx(i,{value:"item2",children:"다른 항목을 열어도 이 항목은 닫히지 않습니다."})]}),e.jsxs(n,{value:"item3",children:[e.jsx(r,{value:"item3",children:"항목 3"}),e.jsx(i,{value:"item3",children:"모든 항목을 동시에 열 수 있습니다."})]})]})},j={render:()=>e.jsxs(a,{children:[e.jsxs(n,{value:"item1",children:[e.jsx(r,{value:"item1",children:"활성화된 항목"}),e.jsx(i,{value:"item1",children:"이 항목은 클릭할 수 있습니다."})]}),e.jsxs(n,{value:"item2",children:[e.jsx(r,{value:"item2",disabled:!0,children:"비활성화된 항목"}),e.jsx(i,{value:"item2",children:"이 내용은 볼 수 없습니다."})]}),e.jsxs(n,{value:"item3",children:[e.jsx(r,{value:"item3",children:"활성화된 항목"}),e.jsx(i,{value:"item3",children:"이 항목도 클릭할 수 있습니다."})]})]})},f={render:()=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"자주 묻는 질문"}),e.jsxs(a,{children:[e.jsxs(n,{value:"faq1",children:[e.jsx(r,{value:"faq1",children:"배송은 얼마나 걸리나요?"}),e.jsx(i,{value:"faq1",children:"일반 배송은 결제 완료 후 2-3일 이내에 도착합니다. 제주 및 도서산간 지역은 1-2일 추가 소요될 수 있습니다."})]}),e.jsxs(n,{value:"faq2",children:[e.jsx(r,{value:"faq2",children:"교환/환불 정책이 어떻게 되나요?"}),e.jsx(i,{value:"faq2",children:"상품 수령 후 7일 이내에 교환/환불 신청이 가능합니다. 단, 상품 개봉 및 사용 흔적이 있는 경우 교환/환불이 불가합니다."})]}),e.jsxs(n,{value:"faq3",children:[e.jsx(r,{value:"faq3",children:"적립금은 어떻게 사용하나요?"}),e.jsx(i,{value:"faq3",children:"적립금은 결제 시 현금처럼 사용 가능합니다. 최소 1,000원 이상부터 사용 가능하며, 적립금만으로 전액 결제도 가능합니다."})]}),e.jsxs(n,{value:"faq4",children:[e.jsx(r,{value:"faq4",children:"회원 등급 혜택은 무엇인가요?"}),e.jsx(i,{value:"faq4",children:e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"일반: 구매금액의 1% 적립"}),e.jsx("li",{children:"실버: 구매금액의 2% 적립 + 무료배송"}),e.jsx("li",{children:"골드: 구매금액의 3% 적립 + 무료배송 + 생일 쿠폰"}),e.jsx("li",{children:"VIP: 구매금액의 5% 적립 + 무료배송 + 생일 쿠폰 + 전용 고객센터"})]})})]})]})]})},I={render:()=>e.jsx("div",{className:"max-w-2xl",children:e.jsxs(a,{multiple:!0,defaultValue:["details"],children:[e.jsxs(n,{value:"details",children:[e.jsx(r,{value:"details",children:"상품 상세 정보"}),e.jsx(i,{value:"details",children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsx("span",{className:"text-gray-500",children:"소재"}),e.jsx("span",{children:"스테인리스 스틸, 아세테이트"}),e.jsx("span",{className:"text-gray-500",children:"렌즈"}),e.jsx("span",{children:"폴리카보네이트 (UV400 차단)"}),e.jsx("span",{className:"text-gray-500",children:"사이즈"}),e.jsx("span",{children:"프레임 폭 140mm / 렌즈 50mm"}),e.jsx("span",{className:"text-gray-500",children:"원산지"}),e.jsx("span",{children:"이탈리아"})]})})]}),e.jsxs(n,{value:"shipping",children:[e.jsx(r,{value:"shipping",children:"배송 안내"}),e.jsx(i,{value:"shipping",children:e.jsx("p",{className:"text-sm text-gray-600",children:"오후 2시 이전 주문 시 당일 출고됩니다. 배송비는 3,000원이며, 50,000원 이상 구매 시 무료배송됩니다."})})]}),e.jsxs(n,{value:"return",children:[e.jsx(r,{value:"return",children:"교환/반품 안내"}),e.jsx(i,{value:"return",children:e.jsx("p",{className:"text-sm text-gray-600",children:"상품 수령 후 7일 이내 교환/반품 가능합니다. 단순 변심의 경우 반품 배송비는 고객 부담입니다."})})]})]})})};var N,T,q;A.parameters={...A.parameters,docs:{...(N=A.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Accordion>
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
}`,...(q=(T=A.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var _,b,V;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Accordion defaultValue={["item1"]}>
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
}`,...(V=(b=v.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var w,$,D;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Accordion multiple>
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
}`,...(D=($=h.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var S,O,E;j.parameters={...j.parameters,docs:{...(S=j.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Accordion>
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
}`,...(E=(O=j.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var P,k,M;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">
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
}`,...(M=(k=f.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var W,F,Q;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">
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
}`,...(Q=(F=I.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};const z=["Default","DefaultOpen","Multiple","WithDisabled","FAQ","ProductDetails"];export{A as Default,v as DefaultOpen,f as FAQ,h as Multiple,I as ProductDetails,j as WithDisabled,z as __namedExportsOrder,R as default};
