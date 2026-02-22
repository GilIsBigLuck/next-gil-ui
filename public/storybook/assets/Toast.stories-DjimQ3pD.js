import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-ZH-6pyQh.js";import{r as U}from"./index-BP-xEy0R.js";import{B as l}from"./Button-0BhrvR8d.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVyBTwwr.js";const X={"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4","top-center":"top-4 left-1/2 -translate-x-1/2","bottom-center":"bottom-8 left-1/2 -translate-x-1/2"},Y={default:"bg-gray-900 text-white",success:"bg-success-500 text-white",warning:"bg-warning-500 text-white",error:"bg-error-500 text-white",info:"bg-info-500 text-white"},O={default:null,success:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})}),warning:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 9v4M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),error:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M15 9l-6 6M9 9l6 6"})]}),info:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4M12 8h.01"})]})};function o({isOpen:a,onClose:n,message:t,variant:i="default",duration:s=3e3,position:T="bottom-center"}){const[c,C]=r.useState(!1);return r.useEffect(()=>{if(a){C(!0);const Q=setTimeout(()=>{C(!1),setTimeout(n,200)},s);return()=>clearTimeout(Q)}},[a,s,n]),a?U.createPortal(e.jsx("div",{role:"alert","aria-live":"polite","aria-atomic":"true",className:`fixed z-50 ${X[T]} transition-all duration-200 ${c?"opacity-100 translate-y-0":"opacity-0 translate-y-2"}`,children:e.jsxs("div",{className:`flex items-center gap-3 px-4 py-3 shadow-lg min-w-[280px] max-w-md ${Y[i]}`,children:[O[i]&&e.jsx("span",{className:"flex-shrink-0","aria-hidden":"true",children:O[i]}),e.jsx("p",{className:"flex-1 text-sm font-medium",children:t}),e.jsx("button",{onClick:()=>{C(!1),setTimeout(n,200)},"aria-label":"닫기",className:"flex-shrink-0 p-1 hover:bg-white/20 transition-colors cursor-pointer",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]})}),document.body):null}try{o.displayName="Toast",o.__docgenInfo={description:"",displayName:"Toast",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},duration:{defaultValue:{value:"3000"},description:"",name:"duration",required:!1,type:{name:"number"}},position:{defaultValue:{value:"bottom-center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-center"'},{value:'"bottom-center"'}]}}}}}catch{}const ae={title:"Feedback/Toast",component:o,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error","info"],description:"토스트 스타일"},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"],description:"토스트 위치"},duration:{control:"number",description:"표시 시간 (ms)"}}},u={render:function(){const[n,t]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{onClick:()=>t(!0),children:"Toast 표시"}),e.jsx(o,{isOpen:n,onClose:()=>t(!1),message:"기본 토스트 메시지입니다."})]})}},p={render:function(){const[n,t]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{onClick:()=>t(!0),children:"Success Toast"}),e.jsx(o,{isOpen:n,onClose:()=>t(!1),message:"저장되었습니다.",variant:"success"})]})}},d={render:function(){const[n,t]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{onClick:()=>t(!0),children:"Warning Toast"}),e.jsx(o,{isOpen:n,onClose:()=>t(!1),message:"주의가 필요합니다.",variant:"warning"})]})}},m={render:function(){const[n,t]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{onClick:()=>t(!0),children:"Error Toast"}),e.jsx(o,{isOpen:n,onClose:()=>t(!1),message:"오류가 발생했습니다.",variant:"error"})]})}},f={render:function(){const[n,t]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{onClick:()=>t(!0),children:"Info Toast"}),e.jsx(o,{isOpen:n,onClose:()=>t(!1),message:"새로운 업데이트가 있습니다.",variant:"info"})]})}},v={render:function(){const[n,t]=r.useState(null),i=["default","success","warning","error","info"];return e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:i.map(s=>e.jsx(l,{variant:"outline",onClick:()=>t(s),children:s},s))}),i.map(s=>e.jsx(o,{isOpen:n===s,onClose:()=>t(null),message:`${s} 토스트 메시지입니다.`,variant:s},s))]})}},h={render:function(){const[n,t]=r.useState(null),i=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"];return e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"grid grid-cols-3 gap-2 max-w-md",children:i.map(s=>e.jsx(l,{variant:"outline",size:"sm",onClick:()=>t(s),children:s},s))}),i.map(s=>e.jsx(o,{isOpen:n===s,onClose:()=>t(null),message:`${s} 위치`,position:s,variant:"info"},s))]})}},g={render:function(){const[n,t]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{onClick:()=>t(!0),children:"5초 토스트"}),e.jsx(o,{isOpen:n,onClose:()=>t(!1),message:"이 토스트는 5초 후에 사라집니다.",duration:5e3,variant:"info"})]})}},x={render:function(){const[n,t]=r.useState(!1),[i,s]=r.useState(!1),[T,c]=r.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(l,{onClick:()=>t(!0),children:"저장"}),e.jsx(l,{variant:"danger",onClick:()=>s(!0),children:"삭제"}),e.jsx(l,{variant:"outline",onClick:()=>c(!0),children:"복사"})]}),e.jsx(o,{isOpen:n,onClose:()=>t(!1),message:"변경사항이 저장되었습니다.",variant:"success"}),e.jsx(o,{isOpen:i,onClose:()=>s(!1),message:"항목이 삭제되었습니다.",variant:"error"}),e.jsx(o,{isOpen:T,onClose:()=>c(!1),message:"클립보드에 복사되었습니다.",variant:"info",duration:1500})]})}};var S,j,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function DefaultToast() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Toast 표시</Button>
        <Toast isOpen={isOpen} onClose={() => setIsOpen(false)} message="기본 토스트 메시지입니다." />
      </div>;
  }
}`,...(w=(j=u.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,y,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: function SuccessToast() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Success Toast</Button>
        <Toast isOpen={isOpen} onClose={() => setIsOpen(false)} message="저장되었습니다." variant="success" />
      </div>;
  }
}`,...(b=(y=p.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var I,B,N;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: function WarningToast() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Warning Toast</Button>
        <Toast isOpen={isOpen} onClose={() => setIsOpen(false)} message="주의가 필요합니다." variant="warning" />
      </div>;
  }
}`,...(N=(B=d.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var A,D,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: function ErrorToast() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Error Toast</Button>
        <Toast isOpen={isOpen} onClose={() => setIsOpen(false)} message="오류가 발생했습니다." variant="error" />
      </div>;
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var P,V,W;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function InfoToast() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Info Toast</Button>
        <Toast isOpen={isOpen} onClose={() => setIsOpen(false)} message="새로운 업데이트가 있습니다." variant="info" />
      </div>;
  }
}`,...(W=(V=f.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var M,_,$;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: function AllVariantsToast() {
    const [activeToast, setActiveToast] = useState<string | null>(null);
    const variants = ["default", "success", "warning", "error", "info"] as const;
    return <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {variants.map(variant => <Button key={variant} variant="outline" onClick={() => setActiveToast(variant)}>
              {variant}
            </Button>)}
        </div>
        {variants.map(variant => <Toast key={variant} isOpen={activeToast === variant} onClose={() => setActiveToast(null)} message={\`\${variant} 토스트 메시지입니다.\`} variant={variant} />)}
      </div>;
  }
}`,...($=(_=v.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var q,z,L;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: function PositionsToast() {
    const [activePosition, setActivePosition] = useState<string | null>(null);
    const positions = ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const;
    return <div className="space-y-2">
        <div className="grid grid-cols-3 gap-2 max-w-md">
          {positions.map(position => <Button key={position} variant="outline" size="sm" onClick={() => setActivePosition(position)}>
              {position}
            </Button>)}
        </div>
        {positions.map(position => <Toast key={position} isOpen={activePosition === position} onClose={() => setActivePosition(null)} message={\`\${position} 위치\`} position={position} variant="info" />)}
      </div>;
  }
}`,...(L=(z=h.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var F,R,G;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function CustomDurationToast() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>5초 토스트</Button>
        <Toast isOpen={isOpen} onClose={() => setIsOpen(false)} message="이 토스트는 5초 후에 사라집니다." duration={5000} variant="info" />
      </div>;
  }
}`,...(G=(R=g.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var H,J,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: function ActionExampleToast() {
    const [showSaveToast, setShowSaveToast] = useState(false);
    const [showDeleteToast, setShowDeleteToast] = useState(false);
    const [showCopyToast, setShowCopyToast] = useState(false);
    return <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setShowSaveToast(true)}>저장</Button>
          <Button variant="danger" onClick={() => setShowDeleteToast(true)}>삭제</Button>
          <Button variant="outline" onClick={() => setShowCopyToast(true)}>복사</Button>
        </div>

        <Toast isOpen={showSaveToast} onClose={() => setShowSaveToast(false)} message="변경사항이 저장되었습니다." variant="success" />

        <Toast isOpen={showDeleteToast} onClose={() => setShowDeleteToast(false)} message="항목이 삭제되었습니다." variant="error" />

        <Toast isOpen={showCopyToast} onClose={() => setShowCopyToast(false)} message="클립보드에 복사되었습니다." variant="info" duration={1500} />
      </div>;
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const re=["Default","Success","Warning","Error","Info","AllVariants","Positions","CustomDuration","ActionExample"];export{x as ActionExample,v as AllVariants,g as CustomDuration,u as Default,m as Error,f as Info,h as Positions,p as Success,d as Warning,re as __namedExportsOrder,ae as default};
