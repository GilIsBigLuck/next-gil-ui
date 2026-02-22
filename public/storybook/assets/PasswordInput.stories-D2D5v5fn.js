import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const B={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-4 py-3 text-lg"},r=g.forwardRef(({label:s,error:i=!1,errorMessage:p,size:q="md",className:A="",id:C,disabled:m,...D},F)=>{const[a,V]=g.useState(!1),u=C||(s==null?void 0:s.toLowerCase().replace(/\s/g,"-")),W=["w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed pr-10",i?"border-error-500 focus:ring-error-500 focus:border-error-500":"border-gray-300 focus:ring-primary-900 focus:border-transparent",B[q],A].filter(Boolean).join(" ");return e.jsxs("div",{className:"flex flex-col gap-1.5",children:[s&&e.jsx("label",{htmlFor:u,className:"text-sm font-medium text-gray-700",children:s}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:F,id:u,type:a?"text":"password",className:W,disabled:m,...D}),e.jsx("button",{type:"button",onClick:()=>V(!a),disabled:m,"aria-label":a?"비밀번호 숨기기":"비밀번호 표시","aria-pressed":a,className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:cursor-not-allowed transition-colors cursor-pointer",children:a?e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]}),i&&p&&e.jsx("p",{className:"text-sm text-error-500",role:"alert",children:p})]})});r.displayName="PasswordInput";try{r.displayName="PasswordInput",r.__docgenInfo={description:"",displayName:"PasswordInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const J={title:"Form/PasswordInput",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"입력 필드 크기"},error:{control:"boolean",description:"에러 상태"},disabled:{control:"boolean",description:"비활성화 상태"}}},o={args:{placeholder:"비밀번호를 입력하세요"}},t={args:{label:"비밀번호",placeholder:"비밀번호를 입력하세요"}},l={args:{label:"비밀번호",error:!0,errorMessage:"비밀번호는 8자 이상이어야 합니다",placeholder:"비밀번호를 입력하세요"}},n={args:{label:"비밀번호",disabled:!0,placeholder:"비활성화됨"}},d={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"})]})},c={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md p-6 border border-gray-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"로그인"}),e.jsx(r,{label:"현재 비밀번호",placeholder:"현재 비밀번호"}),e.jsx(r,{label:"새 비밀번호",placeholder:"새 비밀번호"}),e.jsx(r,{label:"새 비밀번호 확인",placeholder:"새 비밀번호 확인",error:!0,errorMessage:"비밀번호가 일치하지 않습니다"})]})};var x,h,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "비밀번호를 입력하세요"
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,f,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력하세요"
  }
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var j,v,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "비밀번호",
    error: true,
    errorMessage: "비밀번호는 8자 이상이어야 합니다",
    placeholder: "비밀번호를 입력하세요"
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var N,z,I;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "비밀번호",
    disabled: true,
    placeholder: "비활성화됨"
  }
}`,...(I=(z=n.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var P,M,_;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <PasswordInput size="sm" placeholder="Small" />
      <PasswordInput size="md" placeholder="Medium" />
      <PasswordInput size="lg" placeholder="Large" />
    </div>
}`,...(_=(M=d.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var L,k,E;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">로그인</h3>
      <PasswordInput label="현재 비밀번호" placeholder="현재 비밀번호" />
      <PasswordInput label="새 비밀번호" placeholder="새 비밀번호" />
      <PasswordInput label="새 비밀번호 확인" placeholder="새 비밀번호 확인" error errorMessage="비밀번호가 일치하지 않습니다" />
    </div>
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const K=["Default","WithLabel","Error","Disabled","AllSizes","LoginForm"];export{d as AllSizes,o as Default,n as Disabled,l as Error,c as LoginForm,t as WithLabel,K as __namedExportsOrder,J as default};
