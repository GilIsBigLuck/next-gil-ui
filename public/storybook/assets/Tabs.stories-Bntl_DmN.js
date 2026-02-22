import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const R=n.createContext(null);function d({defaultValue:t,children:y,className:o="",variant:b="underline",size:u="md"}){const[T,m]=n.useState(t),[h,x]=n.useState([]),r=n.useRef(new Map),p=n.useId(),C=(i,j)=>{r.current.set(i,j)},f=i=>{r.current.delete(i)};return e.jsx(R.Provider,{value:{activeTab:T,setActiveTab:m,variant:b,size:u,baseId:p,registerTab:C,unregisterTab:f,tabValues:h,setTabValues:x},children:e.jsx("div",{className:o,children:y})})}function v({children:t,className:y="","aria-label":o}){const b=n.useContext(R);if(!b)throw new Error("TabsList must be used within Tabs");const{variant:u,size:T,activeTab:m,setActiveTab:h,tabValues:x}=b,r=n.useRef(null),[p,C]=n.useState({left:0,width:0});n.useEffect(()=>{const l=()=>{if(!r.current)return;const c=r.current.querySelector(`[data-tab-value="${m}"]`);if(c){const g=r.current.getBoundingClientRect(),N=c.getBoundingClientRect();C({left:N.left-g.left,width:N.width})}};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[m]);const f=l=>{var V;const c=x.indexOf(m);let g=c;switch(l.key){case"ArrowLeft":l.preventDefault(),g=c>0?c-1:x.length-1;break;case"ArrowRight":l.preventDefault(),g=c<x.length-1?c+1:0;break;case"Home":l.preventDefault(),g=0;break;case"End":l.preventDefault(),g=x.length-1;break;default:return}const N=x[g];h(N);const w=(V=r.current)==null?void 0:V.querySelector(`[data-tab-value="${N}"]`);w==null||w.focus()},i={underline:"border-b border-gray-200",button:"p-1 bg-gray-100"},j={md:"inline-flex",lg:"flex w-full"};return e.jsxs("div",{ref:r,role:"tablist","aria-label":o,onKeyDown:f,className:`relative ${j[T]} ${i[u]} ${y}`,children:[u==="underline"?e.jsx("span",{className:"absolute bottom-0 h-0.5 bg-primary-900 transition-all duration-300 ease-out",style:{left:p.left,width:p.width},"aria-hidden":"true"}):e.jsx("span",{className:"absolute top-1 bottom-1 bg-white shadow-sm transition-all duration-300 ease-out",style:{left:p.left,width:p.width},"aria-hidden":"true"}),t]})}function a({value:t,children:y,disabled:o=!1,className:b=""}){const u=n.useContext(R);if(!u)throw new Error("TabsTrigger must be used within Tabs");const{activeTab:T,setActiveTab:m,variant:h,size:x,baseId:r,registerTab:p,unregisterTab:C,setTabValues:f}=u,i=T===t,j=n.useRef(null),l=`${r}-tab-${t}`,c=`${r}-panel-${t}`;n.useEffect(()=>(j.current&&p(t,j.current),f(_=>_.includes(t)?_:[..._,t]),()=>{C(t),f(_=>_.filter(te=>te!==t))}),[t,p,C,f]);const g="relative z-10 font-medium transition-colors",N={md:"px-4 py-2 text-sm",lg:"flex-1 px-6 py-3 text-base text-center justify-center"},w={underline:`
      -mb-px
      ${i?"text-primary-900":"text-gray-500 hover:text-gray-700"}
    `,button:`
      ${i?"text-primary-900":"text-gray-500 hover:text-gray-700"}
    `},V=o?"opacity-50 cursor-not-allowed":"cursor-pointer";return e.jsx("button",{ref:j,type:"button",role:"tab",id:l,"aria-selected":i,"aria-controls":c,tabIndex:i?0:-1,"data-tab-value":t,onClick:()=>!o&&m(t),disabled:o,className:`${g} ${N[x]} ${w[h]} ${V} ${b}`,children:y})}function s({value:t,children:y,className:o=""}){const b=n.useContext(R);if(!b)throw new Error("TabsContent must be used within Tabs");const{activeTab:u,baseId:T}=b,m=`${T}-tab-${t}`,h=`${T}-panel-${t}`;return u!==t?null:e.jsx("div",{role:"tabpanel",id:h,"aria-labelledby":m,tabIndex:0,className:`py-4 ${o}`,children:y})}try{d.displayName="Tabs",d.__docgenInfo={description:"",displayName:"Tabs",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"underline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"underline"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'}]}}}}}catch{}try{v.displayName="TabsList",v.__docgenInfo={description:"",displayName:"TabsList",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}try{a.displayName="TabsTrigger",a.__docgenInfo={description:"",displayName:"TabsTrigger",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{s.displayName="TabsContent",s.__docgenInfo={description:"",displayName:"TabsContent",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ie={title:"Layout/Tabs",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["underline","button"],description:"탭 스타일"},size:{control:"select",options:["md","lg"],description:"탭 크기"}}},L={render:()=>e.jsxs(d,{defaultValue:"tab1",children:[e.jsxs(v,{children:[e.jsx(a,{value:"tab1",children:"탭 1"}),e.jsx(a,{value:"tab2",children:"탭 2"}),e.jsx(a,{value:"tab3",children:"탭 3"})]}),e.jsx(s,{value:"tab1",children:e.jsx("p",{className:"text-gray-600",children:"첫 번째 탭 내용입니다."})}),e.jsx(s,{value:"tab2",children:e.jsx("p",{className:"text-gray-600",children:"두 번째 탭 내용입니다."})}),e.jsx(s,{value:"tab3",children:e.jsx("p",{className:"text-gray-600",children:"세 번째 탭 내용입니다."})})]})},S={render:()=>e.jsxs(d,{defaultValue:"tab1",variant:"underline",children:[e.jsxs(v,{children:[e.jsx(a,{value:"tab1",children:"개요"}),e.jsx(a,{value:"tab2",children:"상세정보"}),e.jsx(a,{value:"tab3",children:"리뷰"})]}),e.jsx(s,{value:"tab1",children:e.jsx("p",{className:"text-gray-600",children:"개요 내용"})}),e.jsx(s,{value:"tab2",children:e.jsx("p",{className:"text-gray-600",children:"상세정보 내용"})}),e.jsx(s,{value:"tab3",children:e.jsx("p",{className:"text-gray-600",children:"리뷰 내용"})})]})},$={render:()=>e.jsxs(d,{defaultValue:"tab1",variant:"button",children:[e.jsxs(v,{children:[e.jsx(a,{value:"tab1",children:"전체"}),e.jsx(a,{value:"tab2",children:"진행중"}),e.jsx(a,{value:"tab3",children:"완료"})]}),e.jsx(s,{value:"tab1",children:e.jsx("p",{className:"text-gray-600",children:"전체 목록"})}),e.jsx(s,{value:"tab2",children:e.jsx("p",{className:"text-gray-600",children:"진행중인 항목"})}),e.jsx(s,{value:"tab3",children:e.jsx("p",{className:"text-gray-600",children:"완료된 항목"})})]})},I={render:()=>e.jsxs(d,{defaultValue:"tab1",size:"lg",children:[e.jsxs(v,{children:[e.jsx(a,{value:"tab1",children:"상품정보"}),e.jsx(a,{value:"tab2",children:"리뷰 (128)"}),e.jsx(a,{value:"tab3",children:"Q&A (24)"})]}),e.jsx(s,{value:"tab1",children:e.jsx("p",{className:"text-gray-600",children:"상품 정보가 표시됩니다."})}),e.jsx(s,{value:"tab2",children:e.jsx("p",{className:"text-gray-600",children:"리뷰 목록이 표시됩니다."})}),e.jsx(s,{value:"tab3",children:e.jsx("p",{className:"text-gray-600",children:"Q&A 목록이 표시됩니다."})})]})},q={render:()=>e.jsxs(d,{defaultValue:"tab1",children:[e.jsxs(v,{children:[e.jsx(a,{value:"tab1",children:"활성화"}),e.jsx(a,{value:"tab2",disabled:!0,children:"비활성화"}),e.jsx(a,{value:"tab3",children:"활성화"})]}),e.jsx(s,{value:"tab1",children:e.jsx("p",{className:"text-gray-600",children:"첫 번째 탭 내용"})}),e.jsx(s,{value:"tab2",children:e.jsx("p",{className:"text-gray-600",children:"두 번째 탭 내용 (접근 불가)"})}),e.jsx(s,{value:"tab3",children:e.jsx("p",{className:"text-gray-600",children:"세 번째 탭 내용"})})]})},z={render:()=>e.jsx("div",{className:"max-w-3xl",children:e.jsxs(d,{defaultValue:"info",size:"lg",children:[e.jsxs(v,{children:[e.jsx(a,{value:"info",children:"상품정보"}),e.jsx(a,{value:"reviews",children:"리뷰 (128)"}),e.jsx(a,{value:"qna",children:"Q&A (24)"}),e.jsx(a,{value:"delivery",children:"배송/반품"})]}),e.jsx(s,{value:"info",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"상품 상세 정보"}),e.jsx("div",{className:"aspect-video bg-gray-100 flex items-center justify-center text-gray-400",children:"상품 이미지"}),e.jsx("p",{className:"text-sm text-gray-600",children:"클래식한 라운드 프레임의 선글라스입니다. 자외선 차단 기능과 블루라이트 필터가 적용되어 있습니다."})]})}),e.jsx(s,{value:"reviews",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-3xl font-bold",children:"4.8"}),e.jsxs("div",{children:[e.jsx("div",{className:"flex text-yellow-400",children:"★★★★★"}),e.jsx("p",{className:"text-sm text-gray-500",children:"128개의 리뷰"})]})]}),e.jsx("div",{className:"border-t pt-4 space-y-4",children:e.jsxs("div",{className:"p-4 bg-gray-50",children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"font-medium",children:"김**"}),e.jsx("span",{className:"text-sm text-gray-500",children:"2024.01.15"})]}),e.jsx("div",{className:"text-yellow-400 text-sm mb-1",children:"★★★★★"}),e.jsx("p",{className:"text-sm text-gray-600",children:"가벼우면서도 고급스러워요!"})]})})]})}),e.jsx(s,{value:"qna",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{className:"px-4 py-2 text-sm bg-primary-900 text-white",children:"문의하기"}),e.jsx("div",{className:"border-t pt-4",children:e.jsxs("div",{className:"p-4 border-b",children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"font-medium",children:"Q. 도수 렌즈로 교체 가능한가요?"}),e.jsx("span",{className:"text-sm text-gray-500",children:"답변완료"})]}),e.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"A. 네, 가능합니다. 별도의 렌즈 교체 서비스를 이용해주세요."})]})})]})}),e.jsx(s,{value:"delivery",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"배송 안내"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 평일 오후 2시 이전 주문 시 당일 출고"}),e.jsx("li",{children:"• 배송비: 3,000원 (50,000원 이상 무료배송)"}),e.jsx("li",{children:"• 제주/도서산간 추가 배송비 발생"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"반품/교환 안내"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 수령 후 7일 이내 신청 가능"}),e.jsx("li",{children:"• 단순 변심 시 반품 배송비 고객 부담"}),e.jsx("li",{children:"• 상품 하자 시 무료 교환/반품"})]})]})]})})]})})},A={render:()=>e.jsx("div",{className:"max-w-md",children:e.jsxs(d,{defaultValue:"account",variant:"button",children:[e.jsxs(v,{children:[e.jsx(a,{value:"account",children:"계정"}),e.jsx(a,{value:"notification",children:"알림"}),e.jsx(a,{value:"privacy",children:"개인정보"})]}),e.jsx(s,{value:"account",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"이메일"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300",placeholder:"email@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"이름"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300",placeholder:"홍길동"})]})]})}),e.jsx(s,{value:"notification",children:e.jsx("p",{className:"text-gray-600",children:"알림 설정 내용"})}),e.jsx(s,{value:"privacy",children:e.jsx("p",{className:"text-gray-600",children:"개인정보 설정 내용"})})]})})};var E,k,D;L.parameters={...L.parameters,docs:{...(E=L.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
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
}`,...(D=(k=L.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var Q,P,B;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" variant="underline">
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
}`,...(B=(P=S.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var K,O,U;$.parameters={...$.parameters,docs:{...(K=$.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" variant="button">
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
}`,...(U=(O=$.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var W,H,M;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" size="lg">
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
}`,...(M=(H=I.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var F,G,J;q.parameters={...q.parameters,docs:{...(F=q.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
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
}`,...(J=(G=q.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Z;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="max-w-3xl">
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
}`,...(Z=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
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
              <input type="email" className="w-full px-3 py-2 border border-gray-300" placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300" placeholder="홍길동" />
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
}`,...(se=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const ce=["Default","Underline","Button","LargeSize","WithDisabled","ProductPage","Settings"];export{$ as Button,L as Default,I as LargeSize,z as ProductPage,A as Settings,S as Underline,q as WithDisabled,ce as __namedExportsOrder,ie as default};
