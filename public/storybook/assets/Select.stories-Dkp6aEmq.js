import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const ye={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-4 py-3 text-lg"},i=n.forwardRef(({options:l,value:t,onChange:p,placeholder:pe="선택하세요",label:D,size:me="md",layout:be="column",labelWidth:fe="w-24",disabled:k=!1,error:q=!1,errorMessage:z,success:C=!1,successMessage:I,className:ge=""},ve)=>{const[r,c]=n.useState(!1),[m,d]=n.useState(-1),V=n.useRef(null),b=n.useId(),L=`${b}-button`,M=`${b}-listbox`,f=D?`${b}-label`:void 0,g=l.find(e=>e.value===t);n.useEffect(()=>{const e=o=>{V.current&&!V.current.contains(o.target)&&c(!1)},s=o=>{o.key==="Escape"&&c(!1)};return document.addEventListener("mousedown",e),document.addEventListener("keydown",s),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",s)}},[]),n.useEffect(()=>{if(r){const e=l.findIndex(s=>s.value===t);d(e>=0?e:0)}},[r,l,t]);const _=e=>{e.disabled||(p==null||p(e.value),c(!1))},xe=e=>{if(!k)switch(e.key){case"Enter":case" ":if(e.preventDefault(),r&&m>=0){const s=l[m];s.disabled||_(s)}else c(!0);break;case"ArrowDown":e.preventDefault(),r?d(s=>{const o=s+1;return o>=l.length?0:o}):c(!0);break;case"ArrowUp":e.preventDefault(),r&&d(s=>{const o=s-1;return o<0?l.length-1:o});break;case"Home":r&&(e.preventDefault(),d(0));break;case"End":r&&(e.preventDefault(),d(l.length-1));break}},E=be==="row",W=e=>`${b}-option-${e}`;return a.jsxs("div",{ref:ve,className:`flex ${E?"flex-row items-center gap-3":"flex-col gap-1.5"} ${ge}`,children:[D&&a.jsx("label",{id:f,className:`text-sm font-medium text-gray-700 ${E?`flex-shrink-0 ${fe}`:""}`,children:D}),a.jsxs("div",{ref:V,className:`relative ${E?"flex-1":""}`,children:[a.jsxs("button",{type:"button",id:L,role:"combobox","aria-haspopup":"listbox","aria-expanded":r,"aria-controls":M,"aria-labelledby":f?`${f} ${L}`:void 0,"aria-activedescendant":r&&m>=0?W(m):void 0,onClick:()=>!k&&c(!r),onKeyDown:xe,disabled:k,className:`
              w-full flex items-center justify-between
              border bg-white cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent
              disabled:bg-gray-100 disabled:cursor-not-allowed
              transition-colors
              ${ye[me]}
              ${q?"border-error-500":C?"border-success-500":"border-gray-300"}
              ${r?"ring-2 ring-primary-900 border-transparent":""}
            `,children:[a.jsx("span",{className:g?"text-gray-900":"text-gray-400",children:(g==null?void 0:g.label)||pe}),a.jsx("svg",{className:`w-5 h-5 text-gray-400 transition-transform duration-200 ${r?"rotate-180":""}`,fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24","aria-hidden":"true",children:a.jsx("path",{d:"M19 9l-7 7-7-7"})})]}),r&&a.jsx("ul",{id:M,role:"listbox","aria-labelledby":f,className:"absolute z-50 w-full mt-1 bg-white border border-gray-200 shadow-lg max-h-60 overflow-auto",children:l.map((e,s)=>a.jsx("li",{id:W(s),role:"option","aria-selected":e.value===t,"aria-disabled":e.disabled,onClick:()=>_(e),onMouseEnter:()=>d(s),className:`
                    w-full px-4 py-2 text-left transition-colors
                    ${e.disabled?"text-gray-300 cursor-not-allowed":"text-gray-900 cursor-pointer"}
                    ${e.value===t?"bg-primary-50 text-primary-900 font-medium":""}
                    ${m===s&&!e.disabled?"bg-gray-100":""}
                    ${!e.disabled&&e.value!==t?"hover:bg-gray-100":""}
                  `,children:a.jsxs("span",{className:"flex items-center justify-between",children:[e.label,e.value===t&&a.jsx("svg",{className:"w-5 h-5 text-primary-900",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24","aria-hidden":"true",children:a.jsx("path",{d:"M5 13l4 4L19 7"})})]})},e.value))})]}),q&&z&&a.jsx("p",{className:"text-sm text-error-500",role:"alert",children:z}),C&&I&&a.jsx("p",{className:"text-sm text-success-600",children:I})]})});i.displayName="Select";try{i.displayName="Select",i.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},placeholder:{defaultValue:{value:"선택하세요"},description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},layout:{defaultValue:{value:"column"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},labelWidth:{defaultValue:{value:"w-24"},description:"",name:"labelWidth",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},success:{defaultValue:{value:"false"},description:"",name:"success",required:!1,type:{name:"boolean"}},successMessage:{defaultValue:null,description:"",name:"successMessage",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const je={title:"Form/Select",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"셀렉트 크기"},layout:{control:"select",options:["column","row"],description:"레이블 배치 방향"},error:{control:"boolean",description:"에러 상태"},success:{control:"boolean",description:"성공 상태"},disabled:{control:"boolean",description:"비활성화 상태"}}},u=[{value:"",label:"선택하세요"},{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"}],O=[{value:"",label:"전체 카테고리"},{value:"sunglasses",label:"선글라스"},{value:"glasses",label:"안경"},{value:"frames",label:"안경테"},{value:"goggles",label:"고글"}],v={args:{options:u,placeholder:"선택하세요"}},x={args:{label:"카테고리",options:O,placeholder:"카테고리를 선택하세요"}},y={args:{label:"카테고리",layout:"row",options:O,placeholder:"선택하세요"}},h={args:{label:"상품 선택",options:[{value:"",label:"선택하세요"},{value:"available",label:"재고 있음"},{value:"soldout",label:"품절 (선택 불가)",disabled:!0},{value:"preorder",label:"예약 주문"}]}},w={args:{label:"필수 선택",options:u,error:!0,errorMessage:"필수 선택 항목입니다"}},S={args:{label:"카테고리",options:O,value:"glasses",success:!0,successMessage:"선택이 완료되었습니다"}},j={args:{label:"비활성화",options:u,disabled:!0}},N={render:()=>a.jsxs("div",{className:"space-y-4 max-w-md",children:[a.jsx(i,{size:"sm",options:u,placeholder:"Small"}),a.jsx(i,{size:"md",options:u,placeholder:"Medium"}),a.jsx(i,{size:"lg",options:u,placeholder:"Large"})]})},$={render:function(){const[t,p]=n.useState("");return a.jsxs("div",{className:"max-w-md space-y-4",children:[a.jsx(i,{label:"카테고리",options:O,value:t,onChange:p}),a.jsxs("p",{className:"text-sm text-gray-500",children:["선택된 값: ",t||"없음"]})]})}};var R,A,B;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    placeholder: "선택하세요"
  }
}`,...(B=(A=v.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var H,K,F;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: "카테고리",
    options: categoryOptions,
    placeholder: "카테고리를 선택하세요"
  }
}`,...(F=(K=x.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};var T,U,G;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "카테고리",
    layout: "row",
    options: categoryOptions,
    placeholder: "선택하세요"
  }
}`,...(G=(U=y.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,P,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: "상품 선택",
    options: [{
      value: "",
      label: "선택하세요"
    }, {
      value: "available",
      label: "재고 있음"
    }, {
      value: "soldout",
      label: "품절 (선택 불가)",
      disabled: true
    }, {
      value: "preorder",
      label: "예약 주문"
    }]
  }
}`,...(Q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Y,Z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: "필수 선택",
    options: defaultOptions,
    error: true,
    errorMessage: "필수 선택 항목입니다"
  }
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: "카테고리",
    options: categoryOptions,
    value: "glasses",
    success: true,
    successMessage: "선택이 완료되었습니다"
  }
}`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,le,te;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: "비활성화",
    options: defaultOptions,
    disabled: true
  }
}`,...(te=(le=j.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var oe,ne,ie;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Select size="sm" options={defaultOptions} placeholder="Small" />
      <Select size="md" options={defaultOptions} placeholder="Medium" />
      <Select size="lg" options={defaultOptions} placeholder="Large" />
    </div>
}`,...(ie=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,de,ue;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: function ControlledSelect() {
    const [value, setValue] = useState("");
    return <div className="max-w-md space-y-4">
        <Select label="카테고리" options={categoryOptions} value={value} onChange={setValue} />
        <p className="text-sm text-gray-500">선택된 값: {value || "없음"}</p>
      </div>;
  }
}`,...(ue=(de=$.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Ne=["Default","WithLabel","RowLayout","WithDisabledOption","Error","Success","Disabled","AllSizes","Controlled"];export{N as AllSizes,$ as Controlled,v as Default,j as Disabled,w as Error,y as RowLayout,S as Success,h as WithDisabledOption,x as WithLabel,Ne as __namedExportsOrder,je as default};
