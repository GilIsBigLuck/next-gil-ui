import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-ZH-6pyQh.js";import{B as y}from"./Button-0BhrvR8d.js";import{C as X}from"./Card-BLXgVW9J.js";import"./_commonjsHelpers-CqkleIqs.js";function a({size:t="md",variant:s="primary",className:n="",label:r}){const f={xs:"w-3 h-3 border",sm:"w-4 h-4 border-2",md:"w-6 h-6 border-2",lg:"w-8 h-8 border-2",xl:"w-12 h-12 border-3"}[t],Y={primary:"border-primary-200 border-t-primary-900",secondary:"border-secondary-200 border-t-secondary-700",white:"border-white/30 border-t-white",gray:"border-gray-200 border-t-gray-600"}[s];return e.jsxs("div",{className:`inline-flex items-center gap-2 ${n}`,children:[e.jsx("div",{className:`${f} ${Y} rounded-full animate-spin`,role:"status","aria-label":r||"로딩 중"}),r&&e.jsx("span",{className:"text-sm text-gray-600",children:r})]})}function v({isVisible:t,label:s,variant:n="primary",blur:r=!1}){return t?e.jsx("div",{className:`absolute inset-0 flex items-center justify-center bg-white/80 z-10 ${r?"backdrop-blur-sm":""}`,children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(a,{size:"lg",variant:n}),s&&e.jsx("span",{className:"text-sm text-gray-600",children:s})]})}):null}function N({isLoading:t,children:s,loadingText:n,size:r="sm",className:f=""}){return e.jsx("span",{className:`inline-flex items-center gap-2 ${f}`,children:t?e.jsxs(e.Fragment,{children:[e.jsx(a,{size:r,variant:"white"}),n||s]}):s})}try{a.displayName="Spinner",a.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"white"'},{value:'"gray"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="SpinnerOverlay",v.__docgenInfo={description:"",displayName:"SpinnerOverlay",props:{isVisible:{defaultValue:null,description:"",name:"isVisible",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"white"'},{value:'"gray"'}]}},blur:{defaultValue:{value:"false"},description:"",name:"blur",required:!1,type:{name:"boolean"}}}}}catch{}try{N.displayName="SpinnerButton",N.__docgenInfo={description:"",displayName:"SpinnerButton",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const re={title:"Feedback/Spinner",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"스피너 크기"},variant:{control:"select",options:["primary","secondary","white","gray"],description:"스피너 색상"},label:{control:"text",description:"로딩 텍스트"}}},i={args:{}},l={args:{label:"로딩 중..."}},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"xs"}),e.jsx(a,{size:"sm"}),e.jsx(a,{size:"md"}),e.jsx(a,{size:"lg"}),e.jsx(a,{size:"xl"})]})},d={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{variant:"primary"}),e.jsx(a,{variant:"secondary"}),e.jsx(a,{variant:"gray"}),e.jsx("div",{className:"p-4 bg-gray-900 rounded",children:e.jsx(a,{variant:"white"})})]})},o={render:function(){const[s,n]=h.useState(!1),r=()=>{n(!0),setTimeout(()=>n(!1),2e3)};return e.jsxs("div",{className:"relative",children:[e.jsxs(X,{className:"min-h-[200px]",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"카드 제목"}),e.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"카드 내용입니다. 버튼을 클릭하면 로딩 오버레이가 표시됩니다."}),e.jsx(y,{onClick:r,children:"데이터 불러오기"})]}),e.jsx(v,{isVisible:s,label:"불러오는 중..."})]})}},m={render:function(){const[s,n]=h.useState(!1),r=()=>{n(!0),setTimeout(()=>n(!1),2e3)};return e.jsxs("div",{className:"relative",children:[e.jsxs(X,{className:"min-h-[200px]",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"카드 제목"}),e.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"블러 효과가 적용된 오버레이입니다."}),e.jsx(y,{onClick:r,children:"불러오기"})]}),e.jsx(v,{isVisible:s,blur:!0})]})}},p={render:function(){const[s,n]=h.useState(!1),r=()=>{n(!0),setTimeout(()=>n(!1),2e3)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(y,{onClick:r,disabled:s,children:s?e.jsxs("span",{className:"inline-flex items-center gap-2",children:[e.jsx(a,{size:"sm",variant:"white"}),"저장 중..."]}):"저장하기"}),e.jsx(y,{variant:"outline",onClick:r,disabled:s,children:s?e.jsxs("span",{className:"inline-flex items-center gap-2",children:[e.jsx(a,{size:"sm",variant:"primary"}),"처리 중..."]}):"처리하기"})]})}},u={render:()=>e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[300px] gap-4",children:[e.jsx(a,{size:"xl"}),e.jsx("p",{className:"text-gray-500",children:"페이지를 불러오는 중입니다..."})]})},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"sm"}),e.jsx("span",{className:"text-sm text-gray-600",children:"데이터를 불러오는 중..."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"sm",variant:"secondary"}),e.jsx("span",{className:"text-sm text-gray-600",children:"파일을 업로드하는 중..."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"sm",variant:"gray"}),e.jsx("span",{className:"text-sm text-gray-600",children:"검색 중..."})]})]})},g={render:()=>e.jsx("div",{className:"relative border border-gray-200",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-sm font-semibold text-gray-700",children:"상품명"}),e.jsx("th",{className:"px-4 py-3 text-left text-sm font-semibold text-gray-700",children:"카테고리"}),e.jsx("th",{className:"px-4 py-3 text-right text-sm font-semibold text-gray-700",children:"가격"})]})}),e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:3,className:"px-4 py-12",children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-2",children:[e.jsx(a,{}),e.jsx("span",{className:"text-sm text-gray-500",children:"데이터를 불러오는 중..."})]})})})})]})})};var b,j,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {}
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var L,z,C;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "로딩 중..."
  }
}`,...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var _,B,k;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
}`,...(k=(B=c.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var V,w,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="gray" />
      <div className="p-4 bg-gray-900 rounded">
        <Spinner variant="white" />
      </div>
    </div>
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var O,q,T;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: function OverlaySpinner() {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };
    return <div className="relative">
        <Card className="min-h-[200px]">
          <h3 className="font-semibold mb-2">카드 제목</h3>
          <p className="text-gray-600 text-sm mb-4">
            카드 내용입니다. 버튼을 클릭하면 로딩 오버레이가 표시됩니다.
          </p>
          <Button onClick={handleClick}>데이터 불러오기</Button>
        </Card>
        <SpinnerOverlay isVisible={isLoading} label="불러오는 중..." />
      </div>;
  }
}`,...(T=(q=o.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var $,A,W;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function OverlayBlurSpinner() {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };
    return <div className="relative">
        <Card className="min-h-[200px]">
          <h3 className="font-semibold mb-2">카드 제목</h3>
          <p className="text-gray-600 text-sm mb-4">
            블러 효과가 적용된 오버레이입니다.
          </p>
          <Button onClick={handleClick}>불러오기</Button>
        </Card>
        <SpinnerOverlay isVisible={isLoading} blur />
      </div>;
  }
}`,...(W=(A=m.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var E,D,F;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function ButtonLoadingSpinner() {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };
    return <div className="space-y-4">
        <Button onClick={handleClick} disabled={isLoading}>
          {isLoading ? <span className="inline-flex items-center gap-2">
              <Spinner size="sm" variant="white" />
              저장 중...
            </span> : "저장하기"}
        </Button>

        <Button variant="outline" onClick={handleClick} disabled={isLoading}>
          {isLoading ? <span className="inline-flex items-center gap-2">
              <Spinner size="sm" variant="primary" />
              처리 중...
            </span> : "처리하기"}
        </Button>
      </div>;
  }
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var P,R,G;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
      <Spinner size="xl" />
      <p className="text-gray-500">페이지를 불러오는 중입니다...</p>
    </div>
}`,...(G=(R=u.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var H,J,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
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
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="relative border border-gray-200">
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
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const te=["Default","WithLabel","AllSizes","AllVariants","Overlay","OverlayWithBlur","ButtonLoading","PageLoading","InlineLoading","TableLoading"];export{c as AllSizes,d as AllVariants,p as ButtonLoading,i as Default,x as InlineLoading,o as Overlay,m as OverlayWithBlur,u as PageLoading,g as TableLoading,l as WithLabel,te as __namedExportsOrder,re as default};
