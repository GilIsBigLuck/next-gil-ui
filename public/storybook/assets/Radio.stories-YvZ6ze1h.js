import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const l=x.forwardRef(({label:r,description:a,className:n="",disabled:i,id:N,...t},s)=>{const d=N||`${t.name}-${t.value}`;return e.jsxs("label",{htmlFor:d,className:`inline-flex items-center gap-2 cursor-pointer select-none ${i?"cursor-not-allowed opacity-50":""} ${n}`,children:[e.jsx("input",{ref:s,id:d,type:"radio",disabled:i,className:`
            w-5 h-5 border-2 border-gray-300 bg-white rounded-full flex-shrink-0
            checked:border-primary-900 checked:border-[6px]
            focus:ring-2 focus:ring-primary-900 focus:ring-offset-2
            disabled:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed
            transition-all cursor-pointer
            appearance-none
          `,...t}),(r||a)&&e.jsxs("div",{className:"flex flex-col",children:[r&&e.jsx("span",{className:"text-sm font-medium text-gray-900",children:r}),a&&e.jsx("span",{className:"text-sm text-gray-500",children:a})]})]})});l.displayName="Radio";function o({name:r,value:a,onChange:n,options:i,disabled:N,className:t=""}){return e.jsx("div",{className:`flex flex-col gap-3 ${t}`,children:i.map(s=>e.jsx(l,{name:r,value:s.value,label:s.label,description:s.description,checked:a===s.value,onChange:d=>n==null?void 0:n(d.target.value),disabled:N||s.disabled},s.value))})}try{o.displayName="RadioGroup",o.__docgenInfo={description:"",displayName:"RadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string; label: string; description?: string | undefined; disabled?: boolean | undefined; }[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="Radio",l.__docgenInfo={description:"",displayName:"Radio",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}const Y={title:"Form/Radio",component:o,tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"전체 비활성화"}}},h=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"}],c={args:{name:"default-radio",options:h}},u={args:{name:"default-value-radio",options:h,value:"option2"}},p={args:{name:"description-radio",options:[{value:"free",label:"무료 배송",description:"5-7일 소요"},{value:"standard",label:"일반 배송",description:"2-3일 소요 (+3,000원)"},{value:"express",label:"빠른 배송",description:"다음날 도착 (+5,000원)"}]}},m={args:{name:"disabled-radio",options:h,disabled:!0,value:"option1"}},b={args:{name:"partial-disabled-radio",options:[{value:"available",label:"선택 가능"},{value:"soldout",label:"품절",disabled:!0},{value:"preorder",label:"예약 주문"}]}},v={render:function(){const[a,n]=x.useState("option1");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{name:"controlled-radio",value:a,onChange:n,options:h}),e.jsxs("p",{className:"text-sm text-gray-500",children:["선택된 값: ",a]})]})}},g={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(l,{name:"single",value:"1",label:"단일 라디오 버튼 1"}),e.jsx(l,{name:"single",value:"2",label:"단일 라디오 버튼 2"}),e.jsx(l,{name:"single",value:"3",label:"단일 라디오 버튼 3",description:"설명 텍스트"})]})},y={render:function(){const[a,n]=x.useState("card");return e.jsxs("div",{className:"max-w-md p-4 border border-gray-200 space-y-4",children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:"결제 수단 선택"}),e.jsx(o,{name:"payment",value:a,onChange:n,options:[{value:"card",label:"신용/체크카드",description:"VISA, Mastercard, 국내 카드"},{value:"bank",label:"계좌이체",description:"실시간 계좌이체"},{value:"phone",label:"휴대폰 결제",description:"통신사 청구"},{value:"kakao",label:"카카오페이",description:"카카오페이로 간편결제"}]})]})}},f={render:function(){const[a,n]=x.useState("");return e.jsxs("div",{className:"max-w-lg p-4 border border-gray-200 space-y-4",children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:"Q. 우리 서비스를 얼마나 자주 이용하시나요?"}),e.jsx(o,{name:"frequency",value:a,onChange:n,options:[{value:"daily",label:"매일"},{value:"weekly",label:"주 2-3회"},{value:"monthly",label:"월 2-3회"},{value:"rarely",label:"거의 사용하지 않음"}]})]})}};var S,j,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: "default-radio",
    options: defaultOptions
  }
}`,...(R=(j=c.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var _,w,V;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: "default-value-radio",
    options: defaultOptions,
    value: "option2"
  }
}`,...(V=(w=u.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var k,q,D;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: "description-radio",
    options: [{
      value: "free",
      label: "무료 배송",
      description: "5-7일 소요"
    }, {
      value: "standard",
      label: "일반 배송",
      description: "2-3일 소요 (+3,000원)"
    }, {
      value: "express",
      label: "빠른 배송",
      description: "다음날 도착 (+5,000원)"
    }]
  }
}`,...(D=(q=p.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var C,M,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: "disabled-radio",
    options: defaultOptions,
    disabled: true,
    value: "option1"
  }
}`,...(E=(M=m.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var G,O,P;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    name: "partial-disabled-radio",
    options: [{
      value: "available",
      label: "선택 가능"
    }, {
      value: "soldout",
      label: "품절",
      disabled: true
    }, {
      value: "preorder",
      label: "예약 주문"
    }]
  }
}`,...(P=(O=b.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var Q,A,I;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: function ControlledRadio() {
    const [value, setValue] = useState("option1");
    return <div className="space-y-4">
        <RadioGroup name="controlled-radio" value={value} onChange={setValue} options={defaultOptions} />
        <p className="text-sm text-gray-500">선택된 값: {value}</p>
      </div>;
  }
}`,...(I=(A=v.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var $,W,F;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Radio name="single" value="1" label="단일 라디오 버튼 1" />
      <Radio name="single" value="2" label="단일 라디오 버튼 2" />
      <Radio name="single" value="3" label="단일 라디오 버튼 3" description="설명 텍스트" />
    </div>
}`,...(F=(W=g.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var T,z,B;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function PaymentMethodExample() {
    const [method, setMethod] = useState("card");
    return <div className="max-w-md p-4 border border-gray-200 space-y-4">
        <h3 className="font-semibold text-gray-900">결제 수단 선택</h3>
        <RadioGroup name="payment" value={method} onChange={setMethod} options={[{
        value: "card",
        label: "신용/체크카드",
        description: "VISA, Mastercard, 국내 카드"
      }, {
        value: "bank",
        label: "계좌이체",
        description: "실시간 계좌이체"
      }, {
        value: "phone",
        label: "휴대폰 결제",
        description: "통신사 청구"
      }, {
        value: "kakao",
        label: "카카오페이",
        description: "카카오페이로 간편결제"
      }]} />
      </div>;
  }
}`,...(B=(z=y.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var H,J,K;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: function SurveyQuestionExample() {
    const [answer, setAnswer] = useState("");
    return <div className="max-w-lg p-4 border border-gray-200 space-y-4">
        <h3 className="font-semibold text-gray-900">
          Q. 우리 서비스를 얼마나 자주 이용하시나요?
        </h3>
        <RadioGroup name="frequency" value={answer} onChange={setAnswer} options={[{
        value: "daily",
        label: "매일"
      }, {
        value: "weekly",
        label: "주 2-3회"
      }, {
        value: "monthly",
        label: "월 2-3회"
      }, {
        value: "rarely",
        label: "거의 사용하지 않음"
      }]} />
      </div>;
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Z=["Default","WithDefaultValue","WithDescription","Disabled","PartiallyDisabled","Controlled","SingleRadio","PaymentMethod","SurveyQuestion"];export{v as Controlled,c as Default,m as Disabled,b as PartiallyDisabled,y as PaymentMethod,g as SingleRadio,f as SurveyQuestion,u as WithDefaultValue,p as WithDescription,Z as __namedExportsOrder,Y as default};
