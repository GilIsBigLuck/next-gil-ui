import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const a=b.forwardRef(({label:n,description:s,size:r="md",className:t="",disabled:l,id:d,...W},O)=>{const f=d||(n==null?void 0:n.toLowerCase().replace(/\s/g,"-")),B={sm:"w-8 h-5",md:"w-10 h-6",lg:"w-12 h-7"}[r],G={sm:"w-3 h-3",md:"w-4 h-4",lg:"w-5 h-5"}[r],H={sm:"peer-checked:translate-x-3",md:"peer-checked:translate-x-4",lg:"peer-checked:translate-x-5"}[r];return e.jsxs("label",{htmlFor:f,className:`inline-flex items-start gap-2 cursor-pointer select-none ${l?"cursor-not-allowed opacity-50":""} ${t}`,children:[e.jsxs("div",{className:"relative flex-shrink-0",children:[e.jsx("input",{ref:O,id:f,type:"checkbox",disabled:l,className:"sr-only peer",...W}),e.jsx("div",{className:`
              ${B} bg-gray-300 rounded-full
              peer-checked:bg-primary-900
              peer-focus-visible:ring-2 peer-focus-visible:ring-primary-900 peer-focus-visible:ring-offset-2
              peer-disabled:bg-gray-200
              transition-colors
            `}),e.jsx("div",{className:`
              absolute top-1 left-1 ${G} bg-white rounded-full shadow
              ${H}
              transition-transform
            `})]}),(n||s)&&e.jsxs("div",{className:"flex flex-col gap-0.5 pt-0.5",children:[n&&e.jsx("span",{className:"text-sm font-medium text-gray-900 leading-5",children:n}),s&&e.jsx("span",{className:"text-sm text-gray-500 leading-5",children:s})]})]})});a.displayName="Toggle";try{a.displayName="Toggle",a.__docgenInfo={description:"",displayName:"Toggle",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const U={title:"Form/Toggle",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"토글 크기"},label:{control:"text",description:"레이블 텍스트"},description:{control:"text",description:"추가 설명"},disabled:{control:"boolean",description:"비활성화 상태"}}},o={args:{label:"알림 받기"}},c={args:{label:"활성화됨",defaultChecked:!0}},i={args:{label:"다크 모드",description:"어두운 테마로 변경합니다"}},m={args:{label:"비활성화된 토글",disabled:!0}},p={args:{label:"필수 설정 (변경 불가)",disabled:!0,defaultChecked:!0}},g={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]})},u={render:function(){const[s,r]=b.useState(!1);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{label:"알림 받기",checked:s,onChange:()=>r(!s)}),e.jsxs("p",{className:"text-sm text-gray-500",children:["알림 상태: ",s?"활성화":"비활성화"]})]})}},h={render:function(){const[s,r]=b.useState({notifications:!0,sound:!0,darkMode:!1,autoPlay:!1,newsletter:!0}),t=l=>{r(d=>({...d,[l]:!d[l]}))};return e.jsxs("div",{className:"max-w-md p-4 border border-gray-200 space-y-1",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-4",children:"설정"}),e.jsxs("div",{className:"divide-y divide-gray-100",children:[e.jsx("div",{className:"py-3",children:e.jsx(a,{label:"푸시 알림",description:"앱 알림을 받습니다",checked:s.notifications,onChange:()=>t("notifications")})}),e.jsx("div",{className:"py-3",children:e.jsx(a,{label:"알림음",description:"알림 시 소리가 납니다",checked:s.sound,onChange:()=>t("sound")})}),e.jsx("div",{className:"py-3",children:e.jsx(a,{label:"다크 모드",description:"어두운 테마를 사용합니다",checked:s.darkMode,onChange:()=>t("darkMode")})}),e.jsx("div",{className:"py-3",children:e.jsx(a,{label:"자동 재생",description:"영상을 자동으로 재생합니다",checked:s.autoPlay,onChange:()=>t("autoPlay")})}),e.jsx("div",{className:"py-3",children:e.jsx(a,{label:"뉴스레터 구독",description:"주간 뉴스레터를 받습니다",checked:s.newsletter,onChange:()=>t("newsletter")})})]})]})}};var x,y,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "알림 받기"
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var k,C,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "활성화됨",
    defaultChecked: true
  }
}`,...(N=(C=c.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var j,S,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "다크 모드",
    description: "어두운 테마로 변경합니다"
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,z,P;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "비활성화된 토글",
    disabled: true
  }
}`,...(P=(z=m.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var _,D,E;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "필수 설정 (변경 불가)",
    disabled: true,
    defaultChecked: true
  }
}`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var M,$,q;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Toggle size="sm" label="Small" defaultChecked />
      <Toggle size="md" label="Medium" defaultChecked />
      <Toggle size="lg" label="Large" defaultChecked />
    </div>
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var L,V,A;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function ControlledToggle() {
    const [enabled, setEnabled] = useState(false);
    return <div className="space-y-2">
        <Toggle label="알림 받기" checked={enabled} onChange={() => setEnabled(!enabled)} />
        <p className="text-sm text-gray-500">
          알림 상태: {enabled ? "활성화" : "비활성화"}
        </p>
      </div>;
  }
}`,...(A=(V=u.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var F,I,R;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function SettingsPanelExample() {
    const [settings, setSettings] = useState({
      notifications: true,
      sound: true,
      darkMode: false,
      autoPlay: false,
      newsletter: true
    });
    const handleChange = (key: keyof typeof settings) => {
      setSettings(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };
    return <div className="max-w-md p-4 border border-gray-200 space-y-1">
        <h3 className="font-semibold text-gray-900 mb-4">설정</h3>
        <div className="divide-y divide-gray-100">
          <div className="py-3">
            <Toggle label="푸시 알림" description="앱 알림을 받습니다" checked={settings.notifications} onChange={() => handleChange("notifications")} />
          </div>
          <div className="py-3">
            <Toggle label="알림음" description="알림 시 소리가 납니다" checked={settings.sound} onChange={() => handleChange("sound")} />
          </div>
          <div className="py-3">
            <Toggle label="다크 모드" description="어두운 테마를 사용합니다" checked={settings.darkMode} onChange={() => handleChange("darkMode")} />
          </div>
          <div className="py-3">
            <Toggle label="자동 재생" description="영상을 자동으로 재생합니다" checked={settings.autoPlay} onChange={() => handleChange("autoPlay")} />
          </div>
          <div className="py-3">
            <Toggle label="뉴스레터 구독" description="주간 뉴스레터를 받습니다" checked={settings.newsletter} onChange={() => handleChange("newsletter")} />
          </div>
        </div>
      </div>;
  }
}`,...(R=(I=h.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const X=["Default","Checked","WithDescription","Disabled","DisabledChecked","AllSizes","Controlled","SettingsPanel"];export{g as AllSizes,c as Checked,u as Controlled,o as Default,m as Disabled,p as DisabledChecked,h as SettingsPanel,i as WithDescription,X as __namedExportsOrder,U as default};
