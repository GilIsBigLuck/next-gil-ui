import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Q}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const U={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-4 py-3 text-lg"},s=Q.forwardRef(({label:r,error:p=!1,errorMessage:i,success:g=!1,successMessage:x,size:C="md",layout:O="column",labelWidth:T="w-24",className:G="",id:H,...J},K)=>{const f=H||(r==null?void 0:r.toLowerCase().replace(/\s/g,"-")),P=["w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed",p?"border-error-500 focus:ring-error-500 focus:border-error-500":g?"border-success-500 focus:ring-success-500 focus:border-success-500":"border-gray-300 focus:ring-primary-900 focus:border-transparent",U[C],G].filter(Boolean).join(" "),m=O==="row";return e.jsxs("div",{className:`flex ${m?"flex-row items-center gap-3":"flex-col gap-1.5"}`,children:[r&&e.jsx("label",{htmlFor:f,className:`text-sm font-medium text-gray-700 ${m?`flex-shrink-0 ${T}`:""}`,children:r}),e.jsxs("div",{className:`${m?"flex-1":""} flex flex-col gap-1.5`,children:[e.jsx("input",{ref:K,id:f,className:P,...J}),p&&i&&e.jsx("p",{className:"text-sm text-error-500",children:i}),g&&x&&e.jsx("p",{className:"text-sm text-success-600",children:x})]})]})});s.displayName="Input";try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},success:{defaultValue:{value:"false"},description:"",name:"success",required:!1,type:{name:"boolean"}},successMessage:{defaultValue:null,description:"",name:"successMessage",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},layout:{defaultValue:{value:"column"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},labelWidth:{defaultValue:{value:"w-24"},description:"",name:"labelWidth",required:!1,type:{name:"string"}}}}}catch{}const re={title:"Form/Input",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},layout:{control:"select",options:["column","row"]},error:{control:"boolean"},success:{control:"boolean"},disabled:{control:"boolean"}}},a={args:{placeholder:"입력해주세요"}},l={args:{label:"이메일",placeholder:"example@email.com"}},o={args:{label:"이메일",layout:"row",placeholder:"example@email.com"}},c={args:{label:"이메일",error:!0,errorMessage:"올바른 이메일 형식이 아닙니다",placeholder:"example@email.com"}},t={args:{label:"이메일",success:!0,successMessage:"사용 가능한 이메일입니다",placeholder:"example@email.com"}},n={args:{label:"이메일",disabled:!0,placeholder:"비활성화됨"}},d={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(s,{size:"sm",placeholder:"Small"}),e.jsx(s,{size:"md",placeholder:"Medium"}),e.jsx(s,{size:"lg",placeholder:"Large"})]})},u={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(s,{placeholder:"기본 상태"}),e.jsx(s,{success:!0,successMessage:"성공 상태",placeholder:"성공"}),e.jsx(s,{error:!0,errorMessage:"에러 상태",placeholder:"에러"}),e.jsx(s,{disabled:!0,placeholder:"비활성화"})]})};var h,y,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: "입력해주세요"
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,v,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "이메일",
    placeholder: "example@email.com"
  }
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,I,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "이메일",
    layout: "row",
    placeholder: "example@email.com"
  }
}`,...(N=(I=o.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var z,M,_;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "이메일",
    error: true,
    errorMessage: "올바른 이메일 형식이 아닙니다",
    placeholder: "example@email.com"
  }
}`,...(_=(M=c.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var q,V,L;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "이메일",
    success: true,
    successMessage: "사용 가능한 이메일입니다",
    placeholder: "example@email.com"
  }
}`,...(L=(V=t.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var E,R,D;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "이메일",
    disabled: true,
    placeholder: "비활성화됨"
  }
}`,...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var W,$,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...(A=($=d.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var F,k,B;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Input placeholder="기본 상태" />
      <Input success successMessage="성공 상태" placeholder="성공" />
      <Input error errorMessage="에러 상태" placeholder="에러" />
      <Input disabled placeholder="비활성화" />
    </div>
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const ae=["Default","WithLabel","RowLayout","Error","Success","Disabled","AllSizes","States"];export{d as AllSizes,a as Default,n as Disabled,c as Error,o as RowLayout,u as States,t as Success,l as WithLabel,ae as __namedExportsOrder,re as default};
