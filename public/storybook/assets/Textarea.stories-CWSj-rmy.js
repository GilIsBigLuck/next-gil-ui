import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as re}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const ae={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-4 py-3 text-lg"},se={none:"resize-none",vertical:"resize-y",horizontal:"resize-x",both:"resize"},r=re.forwardRef(({label:a,error:s=!1,errorMessage:g,success:b=!1,successMessage:f,size:H="md",layout:J="column",labelWidth:K="w-24",resize:P="vertical",className:Q="",id:U,rows:X=4,...Y},Z)=>{const l=U||(a==null?void 0:a.toLowerCase().replace(/\s/g,"-")),ee=["w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed",s?"border-error-500 focus:ring-error-500 focus:border-error-500":b?"border-success-500 focus:ring-success-500 focus:border-success-500":"border-gray-300 focus:ring-primary-900 focus:border-transparent",ae[H],se[P],Q].filter(Boolean).join(" "),x=J==="row";return e.jsxs("div",{className:`flex ${x?"flex-row items-start gap-3":"flex-col gap-1.5"}`,children:[a&&e.jsx("label",{htmlFor:l,className:`text-sm font-medium text-gray-700 ${x?`flex-shrink-0 ${K} pt-2`:""}`,children:a}),e.jsxs("div",{className:`${x?"flex-1":""} flex flex-col gap-1.5`,children:[e.jsx("textarea",{ref:Z,id:l,rows:X,className:ee,"aria-invalid":s||void 0,"aria-describedby":s&&g?`${l}-error`:void 0,...Y}),s&&g&&e.jsx("p",{id:`${l}-error`,className:"text-sm text-error-500",role:"alert",children:g}),b&&f&&e.jsx("p",{className:"text-sm text-success-600",children:f})]})]})});r.displayName="Textarea";try{r.displayName="Textarea",r.__docgenInfo={description:"",displayName:"Textarea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},success:{defaultValue:{value:"false"},description:"",name:"success",required:!1,type:{name:"boolean"}},successMessage:{defaultValue:null,description:"",name:"successMessage",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},layout:{defaultValue:{value:"column"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},labelWidth:{defaultValue:{value:"w-24"},description:"",name:"labelWidth",required:!1,type:{name:"string"}},resize:{defaultValue:{value:"vertical"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const de={title:"Form/Textarea",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"텍스트영역 크기"},layout:{control:"select",options:["column","row"],description:"레이블 배치 방향"},resize:{control:"select",options:["none","vertical","horizontal","both"],description:"리사이즈 방향"},error:{control:"boolean",description:"에러 상태"},success:{control:"boolean",description:"성공 상태"},disabled:{control:"boolean",description:"비활성화 상태"}}},o={args:{placeholder:"내용을 입력해주세요"}},t={args:{label:"설명",placeholder:"상세 내용을 입력하세요"}},c={args:{label:"메모",layout:"row",placeholder:"메모를 입력하세요"}},n={args:{label:"내용",error:!0,errorMessage:"필수 입력 항목입니다",placeholder:"내용을 입력하세요"}},d={args:{label:"내용",success:!0,successMessage:"입력이 완료되었습니다",placeholder:"내용을 입력하세요"}},i={args:{label:"비활성화",disabled:!0,placeholder:"수정할 수 없습니다"}},u={args:{label:"크기 고정",resize:"none",placeholder:"크기를 조절할 수 없습니다"}},p={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"})]})},m={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(r,{label:"기본",placeholder:"기본 상태"}),e.jsx(r,{label:"성공",success:!0,successMessage:"성공 상태입니다",placeholder:"성공"}),e.jsx(r,{label:"에러",error:!0,errorMessage:"에러 상태입니다",placeholder:"에러"}),e.jsx(r,{label:"비활성화",disabled:!0,placeholder:"비활성화"})]})};var h,y,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: "내용을 입력해주세요"
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var z,S,w;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "설명",
    placeholder: "상세 내용을 입력하세요"
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var j,N,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "메모",
    layout: "row",
    placeholder: "메모를 입력하세요"
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var M,_,q;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "내용",
    error: true,
    errorMessage: "필수 입력 항목입니다",
    placeholder: "내용을 입력하세요"
  }
}`,...(q=(_=n.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var V,L,R;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "내용",
    success: true,
    successMessage: "입력이 완료되었습니다",
    placeholder: "내용을 입력하세요"
  }
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var $,E,D;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: "비활성화",
    disabled: true,
    placeholder: "수정할 수 없습니다"
  }
}`,...(D=(E=i.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var W,A,F;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "크기 고정",
    resize: "none",
    placeholder: "크기를 조절할 수 없습니다"
  }
}`,...(F=(A=u.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var I,k,B;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium" />
      <Textarea size="lg" placeholder="Large" />
    </div>
}`,...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,O,G;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Textarea label="기본" placeholder="기본 상태" />
      <Textarea label="성공" success successMessage="성공 상태입니다" placeholder="성공" />
      <Textarea label="에러" error errorMessage="에러 상태입니다" placeholder="에러" />
      <Textarea label="비활성화" disabled placeholder="비활성화" />
    </div>
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const ie=["Default","WithLabel","RowLayout","Error","Success","Disabled","NoResize","AllSizes","States"];export{p as AllSizes,o as Default,i as Disabled,n as Error,u as NoResize,c as RowLayout,m as States,d as Success,t as WithLabel,ie as __namedExportsOrder,de as default};
