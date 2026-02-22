import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const a=o.forwardRef(({label:r,description:s,className:l="",disabled:n,id:t,...c},d)=>{const i=t||(r==null?void 0:r.toLowerCase().replace(/\s/g,"-"));return e.jsxs("label",{htmlFor:i,className:`inline-flex items-start gap-2 cursor-pointer select-none ${n?"cursor-not-allowed opacity-50":""} ${l}`,children:[e.jsx("input",{ref:d,id:i,type:"checkbox",disabled:n,className:`
            w-5 h-5 border-2 border-gray-300 bg-white flex-shrink-0
            checked:bg-primary-900 checked:border-primary-900
            focus:ring-2 focus:ring-primary-900 focus:ring-offset-2
            disabled:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed
            transition-colors cursor-pointer
            appearance-none
            checked:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2%206l3%203%205-6%22%2F%3E%3C%2Fsvg%3E')]
            checked:bg-center checked:bg-no-repeat checked:bg-[length:12px]
          `,...c}),(r||s)&&e.jsxs("div",{className:"flex flex-col gap-0.5",children:[r&&e.jsx("span",{className:"text-sm font-medium text-gray-900 leading-5",children:r}),s&&e.jsx("span",{className:"text-sm text-gray-500 leading-5",children:s})]})]})});a.displayName="Checkbox";try{a.displayName="Checkbox",a.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}const Q={title:"Form/Checkbox",component:a,tags:["autodocs"],argTypes:{label:{control:"text",description:"체크박스 레이블"},description:{control:"text",description:"추가 설명"},checked:{control:"boolean",description:"체크 상태"},disabled:{control:"boolean",description:"비활성화 상태"}}},p={args:{label:"동의합니다"}},h={args:{label:"선택됨",defaultChecked:!0}},u={args:{label:"마케팅 정보 수신 동의",description:"이메일, SMS를 통해 할인 및 이벤트 정보를 받습니다"}},g={args:{label:"비활성화된 옵션",disabled:!0}},x={args:{label:"필수 동의 (변경 불가)",disabled:!0,defaultChecked:!0}},b={render:function(){const[s,l]=o.useState(!1);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{label:"알림 받기",checked:s,onChange:()=>l(!s)}),e.jsxs("p",{className:"text-sm text-gray-500",children:["상태: ",s?"활성화":"비활성화"]})]})}},k={render:function(){const[s,l]=o.useState(["email"]),n=t=>{l(c=>c.includes(t)?c.filter(d=>d!==t):[...c,t])};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700",children:"알림 수신 방법"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"이메일",checked:s.includes("email"),onChange:()=>n("email")}),e.jsx(a,{label:"SMS",checked:s.includes("sms"),onChange:()=>n("sms")}),e.jsx(a,{label:"푸시 알림",checked:s.includes("push"),onChange:()=>n("push")})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["선택된 항목: ",s.join(", ")||"없음"]})]})}},C={render:function(){const[s,l]=o.useState(!1),[n,t]=o.useState(!1),[c,d]=o.useState(!1),[i,f]=o.useState(!1),z=()=>{const m=!s;l(m),t(m),d(m),f(m)};return e.jsxs("div",{className:"max-w-md p-4 border border-gray-200 space-y-4",children:[e.jsx(a,{label:"전체 동의",description:"아래 모든 항목에 동의합니다",checked:s,onChange:z}),e.jsxs("div",{className:"border-t pt-4 pl-4 space-y-3",children:[e.jsx(a,{label:"이용약관 동의 (필수)",checked:n,onChange:()=>t(!n)}),e.jsx(a,{label:"개인정보 처리방침 동의 (필수)",checked:c,onChange:()=>d(!c)}),e.jsx(a,{label:"마케팅 정보 수신 동의 (선택)",checked:i,onChange:()=>f(!i)})]})]})}};var y,v,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "동의합니다"
  }
}`,...(S=(v=p.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,N,w;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "선택됨",
    defaultChecked: true
  }
}`,...(w=(N=h.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var A,D,E;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "마케팅 정보 수신 동의",
    description: "이메일, SMS를 통해 할인 및 이벤트 정보를 받습니다"
  }
}`,...(E=(D=u.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var _,M,T;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "비활성화된 옵션",
    disabled: true
  }
}`,...(T=(M=g.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var F,V,G;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "필수 동의 (변경 불가)",
    disabled: true,
    defaultChecked: true
  }
}`,...(G=(V=x.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var P,q,I;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function ControlledCheckbox() {
    const [checked, setChecked] = useState(false);
    return <div className="space-y-2">
        <Checkbox label="알림 받기" checked={checked} onChange={() => setChecked(!checked)} />
        <p className="text-sm text-gray-500">상태: {checked ? "활성화" : "비활성화"}</p>
      </div>;
  }
}`,...(I=(q=b.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var R,W,$;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function CheckboxGroupExample() {
    const [selected, setSelected] = useState<string[]>(["email"]);
    const handleChange = (value: string) => {
      setSelected(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    };
    return <div className="space-y-4">
        <p className="text-sm font-medium text-gray-700">알림 수신 방법</p>
        <div className="space-y-3">
          <Checkbox label="이메일" checked={selected.includes("email")} onChange={() => handleChange("email")} />
          <Checkbox label="SMS" checked={selected.includes("sms")} onChange={() => handleChange("sms")} />
          <Checkbox label="푸시 알림" checked={selected.includes("push")} onChange={() => handleChange("push")} />
        </div>
        <p className="text-sm text-gray-500">선택된 항목: {selected.join(", ") || "없음"}</p>
      </div>;
  }
}`,...($=(W=k.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var B,L,O;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: function TermsAgreementExample() {
    const [allAgreed, setAllAgreed] = useState(false);
    const [terms, setTerms] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const handleAllChange = () => {
      const newValue = !allAgreed;
      setAllAgreed(newValue);
      setTerms(newValue);
      setPrivacy(newValue);
      setMarketing(newValue);
    };
    return <div className="max-w-md p-4 border border-gray-200 space-y-4">
        <Checkbox label="전체 동의" description="아래 모든 항목에 동의합니다" checked={allAgreed} onChange={handleAllChange} />
        <div className="border-t pt-4 pl-4 space-y-3">
          <Checkbox label="이용약관 동의 (필수)" checked={terms} onChange={() => setTerms(!terms)} />
          <Checkbox label="개인정보 처리방침 동의 (필수)" checked={privacy} onChange={() => setPrivacy(!privacy)} />
          <Checkbox label="마케팅 정보 수신 동의 (선택)" checked={marketing} onChange={() => setMarketing(!marketing)} />
        </div>
      </div>;
  }
}`,...(O=(L=C.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const U=["Default","Checked","WithDescription","Disabled","DisabledChecked","Controlled","CheckboxGroup","TermsAgreement"];export{k as CheckboxGroup,h as Checked,b as Controlled,p as Default,g as Disabled,x as DisabledChecked,C as TermsAgreement,u as WithDescription,U as __namedExportsOrder,Q as default};
