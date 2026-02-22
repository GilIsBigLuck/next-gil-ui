import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const w={sm:{input:"px-3 py-1.5 text-sm",button:"w-8"},md:{input:"px-4 py-2 text-base",button:"w-10"},lg:{input:"px-4 py-3 text-lg",button:"w-12"}},s=n.forwardRef(({label:a,error:t=!1,errorMessage:r,size:c="md",className:h="",id:S,disabled:d,value:m=0,onChange:u,min:o,max:l,step:j=1,...Y},Z)=>{const V=S||(a==null?void 0:a.toLowerCase().replace(/\s/g,"-")),ee=()=>{const i=(m||0)+j;l!==void 0&&i>l||u==null||u(i)},te=()=>{const i=(m||0)-j;o!==void 0&&i<o||u==null||u(i)},re=i=>{const I=parseFloat(i.target.value)||0;o!==void 0&&I<o||l!==void 0&&I>l||u==null||u(I)},ae=["w-full border-y border-l transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 focus:z-10 disabled:bg-gray-100 disabled:cursor-not-allowed text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",t?"border-error-500 focus:ring-error-500 focus:border-error-500":"border-gray-300 focus:ring-primary-900 focus:border-transparent",w[c].input,h].filter(Boolean).join(" "),C=`flex items-center justify-center border border-gray-300 bg-gray-50 text-gray-600
      hover:bg-gray-100 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400
      transition-colors cursor-pointer ${w[c].button}`;return e.jsxs("div",{className:"flex flex-col gap-1.5",children:[a&&e.jsx("label",{htmlFor:V,className:"text-sm font-medium text-gray-700",children:a}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",onClick:te,disabled:d||o!==void 0&&m<=o,"aria-label":"감소",className:`${C} border-r-0`,children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),e.jsx("input",{ref:Z,id:V,type:"number",value:m,onChange:re,className:ae,disabled:d,min:o,max:l,step:j,...Y}),e.jsx("button",{type:"button",onClick:ee,disabled:d||l!==void 0&&m>=l,"aria-label":"증가",className:`${C} border-l-0`,children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]}),t&&r&&e.jsx("p",{className:"text-sm text-error-500",role:"alert",children:r})]})});s.displayName="NumberInput";try{s.displayName="NumberInput",s.__docgenInfo={description:"",displayName:"NumberInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}}}}}catch{}const ie={title:"Form/NumberInput",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"입력 필드 크기"},min:{control:"number",description:"최소값"},max:{control:"number",description:"최대값"},step:{control:"number",description:"증감 단위"},error:{control:"boolean",description:"에러 상태"},disabled:{control:"boolean",description:"비활성화 상태"}}},p={render:function(){const[t,r]=n.useState(0);return e.jsx(s,{value:t,onChange:r})}},b={render:function(){const[t,r]=n.useState(1);return e.jsx(s,{label:"수량",value:t,onChange:r})}},x={render:function(){const[t,r]=n.useState(5);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{label:"수량 (1-10)",value:t,onChange:r,min:1,max:10}),e.jsx("p",{className:"text-sm text-gray-500",children:"최소 1, 최대 10까지 설정 가능"})]})}},f={render:function(){const[t,r]=n.useState(100);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{label:"가격",value:t,onChange:r,step:100,min:0}),e.jsx("p",{className:"text-sm text-gray-500",children:"100원 단위로 조절"})]})}},g={render:function(){const[t,r]=n.useState(0);return e.jsx(s,{label:"수량",value:t,onChange:r,error:!0,errorMessage:"1개 이상 선택해주세요"})}},y={render:function(){const[t,r]=n.useState(5);return e.jsx(s,{label:"수량",value:t,onChange:r,disabled:!0})}},v={render:function(){const[t,r]=n.useState(1),[c,h]=n.useState(2),[S,d]=n.useState(3);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{size:"sm",label:"Small",value:t,onChange:r}),e.jsx(s,{size:"md",label:"Medium",value:c,onChange:h}),e.jsx(s,{size:"lg",label:"Large",value:S,onChange:d})]})}},N={render:function(){const[t,r]=n.useState(1);return e.jsxs("div",{className:"max-w-sm p-4 border border-gray-200 space-y-4",children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:"클래식 라운드 선글라스"}),e.jsx(s,{label:"수량",value:t,onChange:r,min:1,max:99}),e.jsxs("div",{className:"flex justify-between pt-2 border-t",children:[e.jsx("span",{className:"text-gray-600",children:"총 금액"}),e.jsxs("span",{className:"font-bold text-lg",children:[(129e3*t).toLocaleString(),"원"]})]})]})}};var M,z,q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: function DefaultNumberInput() {
    const [value, setValue] = useState(0);
    return <NumberInput value={value} onChange={setValue} />;
  }
}`,...(q=(z=p.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var L,W,_;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function WithLabelNumberInput() {
    const [value, setValue] = useState(1);
    return <NumberInput label="수량" value={value} onChange={setValue} />;
  }
}`,...(_=(W=b.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var D,E,k;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: function WithMinMaxNumberInput() {
    const [value, setValue] = useState(5);
    return <div className="space-y-2">
        <NumberInput label="수량 (1-10)" value={value} onChange={setValue} min={1} max={10} />
        <p className="text-sm text-gray-500">최소 1, 최대 10까지 설정 가능</p>
      </div>;
  }
}`,...(k=(E=x.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var Q,A,B;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: function CustomStepNumberInput() {
    const [value, setValue] = useState(100);
    return <div className="space-y-2">
        <NumberInput label="가격" value={value} onChange={setValue} step={100} min={0} />
        <p className="text-sm text-gray-500">100원 단위로 조절</p>
      </div>;
  }
}`,...(B=(A=f.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var F,$,R;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function ErrorNumberInput() {
    const [value, setValue] = useState(0);
    return <NumberInput label="수량" value={value} onChange={setValue} error errorMessage="1개 이상 선택해주세요" />;
  }
}`,...(R=($=g.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var O,T,G;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: function DisabledNumberInput() {
    const [value, setValue] = useState(5);
    return <NumberInput label="수량" value={value} onChange={setValue} disabled />;
  }
}`,...(G=(T=y.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var H,J,K;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: function AllSizesNumberInput() {
    const [sm, setSm] = useState(1);
    const [md, setMd] = useState(2);
    const [lg, setLg] = useState(3);
    return <div className="space-y-4">
        <NumberInput size="sm" label="Small" value={sm} onChange={setSm} />
        <NumberInput size="md" label="Medium" value={md} onChange={setMd} />
        <NumberInput size="lg" label="Large" value={lg} onChange={setLg} />
      </div>;
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,U,X;N.parameters={...N.parameters,docs:{...(P=N.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function CartQuantityExample() {
    const [quantity, setQuantity] = useState(1);
    const price = 129000;
    return <div className="max-w-sm p-4 border border-gray-200 space-y-4">
        <h3 className="font-semibold text-gray-900">클래식 라운드 선글라스</h3>
        <NumberInput label="수량" value={quantity} onChange={setQuantity} min={1} max={99} />
        <div className="flex justify-between pt-2 border-t">
          <span className="text-gray-600">총 금액</span>
          <span className="font-bold text-lg">{(price * quantity).toLocaleString()}원</span>
        </div>
      </div>;
  }
}`,...(X=(U=N.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ce=["Default","WithLabel","WithMinMax","CustomStep","Error","Disabled","AllSizes","CartQuantity"];export{v as AllSizes,N as CartQuantity,f as CustomStep,p as Default,y as Disabled,g as Error,b as WithLabel,x as WithMinMax,ce as __namedExportsOrder,ie as default};
