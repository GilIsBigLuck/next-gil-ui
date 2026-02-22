import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const U={sm:"px-3 py-1.5 text-sm pr-10",md:"px-4 py-2 text-base pr-10",lg:"px-4 py-3 text-lg pr-12"},r=h.forwardRef(({label:a,error:x=!1,errorMessage:g,size:$="md",className:G="",id:H,disabled:b,...J},t)=>{const u=h.useRef(null),f=H||(a==null?void 0:a.toLowerCase().replace(/\s/g,"-")),K=()=>{var s,y;!b&&u.current&&((y=(s=u.current).showPicker)==null||y.call(s))},Q=["w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer",x?"border-error-500 focus:ring-error-500 focus:border-error-500":"border-gray-300 focus:ring-primary-900 focus:border-transparent",U[$],G].filter(Boolean).join(" ");return e.jsxs("div",{className:"flex flex-col gap-1.5",children:[a&&e.jsx("label",{htmlFor:f,className:"text-sm font-medium text-gray-700",children:a}),e.jsxs("div",{className:"relative",onClick:K,children:[e.jsx("input",{ref:s=>{u.current=s,typeof t=="function"?t(s):t&&(t.current=s)},id:f,type:"date",className:`${Q} [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer`,disabled:b,...J}),e.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})})]}),x&&g&&e.jsx("p",{className:"text-sm text-error-500",children:g})]})});r.displayName="DateInput";try{r.displayName="DateInput",r.__docgenInfo={description:"",displayName:"DateInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const ae={title:"Form/DateInput",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"입력 필드 크기"},error:{control:"boolean",description:"에러 상태"},disabled:{control:"boolean",description:"비활성화 상태"}}},l={args:{}},o={args:{label:"예약 날짜"}},n={args:{label:"시작일",defaultValue:"2024-01-15"}},i={args:{label:"날짜",error:!0,errorMessage:"날짜를 선택해주세요"}},c={args:{label:"날짜",disabled:!0}},d={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(r,{size:"sm",label:"Small"}),e.jsx(r,{size:"md",label:"Medium"}),e.jsx(r,{size:"lg",label:"Large"})]})},p={render:()=>e.jsxs("div",{className:"flex gap-4 items-end max-w-lg",children:[e.jsx(r,{label:"시작일"}),e.jsx("span",{className:"text-gray-500 pb-2",children:"~"}),e.jsx(r,{label:"종료일"})]})},m={render:()=>e.jsxs("div",{className:"max-w-md p-6 border border-gray-200 space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"예약 정보"}),e.jsx(r,{label:"체크인"}),e.jsx(r,{label:"체크아웃"}),e.jsx("p",{className:"text-sm text-gray-500",children:"날짜를 클릭하여 선택하세요"})]})};var j,v,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {}
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var N,D,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "예약 날짜"
  }
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var S,I,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "시작일",
    defaultValue: "2024-01-15"
  }
}`,...(z=(I=n.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var _,R,V;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "날짜",
    error: true,
    errorMessage: "날짜를 선택해주세요"
  }
}`,...(V=(R=i.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var E,L,M;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "날짜",
    disabled: true
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var W,q,C;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <DateInput size="sm" label="Small" />
      <DateInput size="md" label="Medium" />
      <DateInput size="lg" label="Large" />
    </div>
}`,...(C=(q=d.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var F,A,B;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-end max-w-lg">
      <DateInput label="시작일" />
      <span className="text-gray-500 pb-2">~</span>
      <DateInput label="종료일" />
    </div>
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var O,P,T;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="max-w-md p-6 border border-gray-200 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">예약 정보</h3>
      <DateInput label="체크인" />
      <DateInput label="체크아웃" />
      <p className="text-sm text-gray-500">날짜를 클릭하여 선택하세요</p>
    </div>
}`,...(T=(P=m.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const se=["Default","WithLabel","WithDefaultValue","Error","Disabled","AllSizes","DateRange","ReservationForm"];export{d as AllSizes,p as DateRange,l as Default,c as Disabled,i as Error,m as ReservationForm,n as WithDefaultValue,o as WithLabel,se as __namedExportsOrder,ae as default};
