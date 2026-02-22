import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-ZH-6pyQh.js";import{r as X}from"./index-BP-xEy0R.js";import{B as d}from"./Button-0BhrvR8d.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVyBTwwr.js";function Y({isOpen:n,onClose:t,children:s,ariaLabelledby:c,ariaDescribedby:a}){const l=r.useRef(null),o=r.useRef(null);return r.useEffect(()=>{var i,u;return n?(o.current=document.activeElement,document.body.style.overflow="hidden",(i=l.current)==null||i.focus()):(document.body.style.overflow="",(u=o.current)==null||u.focus()),()=>{document.body.style.overflow=""}},[n]),r.useEffect(()=>{const i=u=>{u.key==="Escape"&&t()};return n&&window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[n,t]),r.useEffect(()=>{if(!n||!l.current)return;const i=l.current,u=i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),m=u[0],f=u[u.length-1],O=x=>{x.key==="Tab"&&(x.shiftKey?document.activeElement===m&&(x.preventDefault(),f==null||f.focus()):document.activeElement===f&&(x.preventDefault(),m==null||m.focus()))};return i.addEventListener("keydown",O),()=>i.removeEventListener("keydown",O)},[n]),n?X.createPortal(e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[e.jsx("div",{className:"absolute inset-0 bg-black/50 transition-opacity",onClick:t,"aria-hidden":"true"}),e.jsx("div",{ref:l,role:"dialog","aria-modal":"true","aria-labelledby":c,"aria-describedby":a,tabIndex:-1,className:"relative z-10 w-full max-w-md mx-4 bg-white shadow-xl outline-none",children:s})]}),document.body):null}function g({isOpen:n,onClose:t,title:s="알림",message:c,confirmText:a="확인"}){const l=r.useId(),o=r.useId();return e.jsxs(Y,{isOpen:n,onClose:t,ariaLabelledby:l,ariaDescribedby:o,children:[e.jsx("button",{onClick:t,"aria-label":"닫기",className:"absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),e.jsxs("div",{className:"p-6 pt-8",children:[e.jsx("h2",{id:l,className:"text-xl font-bold text-gray-900 mb-2",children:s}),e.jsx("p",{id:o,className:"text-gray-600",children:c})]}),e.jsx("div",{className:"px-6 py-4 flex justify-end",children:e.jsx("button",{onClick:t,className:"px-6 py-3 text-lg bg-primary-900 text-white font-medium transition-all duration-300 hover-prism cursor-pointer",children:e.jsx("span",{className:"relative z-10",children:a})})})]})}function p({isOpen:n,onClose:t,onConfirm:s,title:c="확인",message:a,confirmText:l="확인",cancelText:o="취소",variant:i="default"}){const u=r.useId(),m=r.useId(),f=()=>{s(),t()};return e.jsxs(Y,{isOpen:n,onClose:t,ariaLabelledby:u,ariaDescribedby:m,children:[e.jsx("button",{onClick:t,"aria-label":"닫기",className:"absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),e.jsxs("div",{className:"p-6 pt-8",children:[e.jsx("h2",{id:u,className:"text-xl font-bold text-gray-900 mb-2",children:c}),e.jsx("p",{id:m,className:"text-gray-600",children:a})]}),e.jsxs("div",{className:"px-6 py-4 flex justify-end gap-3",children:[e.jsx("button",{onClick:t,className:"px-6 py-3 text-lg border border-gray-300 text-gray-700 font-medium transition-all duration-300 hover:bg-gray-100 cursor-pointer",children:o}),e.jsx("button",{onClick:f,className:`px-6 py-3 text-lg font-medium transition-all duration-300 hover-prism cursor-pointer ${i==="danger"?"bg-error-600 text-white":"bg-primary-900 text-white"}`,children:e.jsx("span",{className:"relative z-10",children:l})})]})]})}function h({isOpen:n,onClose:t,src:s,alt:c=""}){const a=r.useRef(null),l=r.useRef(null);return r.useEffect(()=>{var o,i;n?(l.current=document.activeElement,(o=a.current)==null||o.focus()):(i=l.current)==null||i.focus()},[n]),r.useEffect(()=>{const o=i=>{i.key==="Escape"&&t()};return n&&window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[n,t]),n?X.createPortal(e.jsxs("div",{ref:a,role:"dialog","aria-modal":"true","aria-label":c||"이미지 팝업",tabIndex:-1,className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out outline-none",onClick:t,children:[e.jsx("button",{onClick:t,"aria-label":"닫기",className:"absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),e.jsx("img",{src:s,alt:c,className:"max-w-[90vw] max-h-[90vh] object-contain",onClick:o=>o.stopPropagation()})]}),document.body):null}try{g.displayName="Alert",g.__docgenInfo={description:"",displayName:"Alert",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:{value:"알림"},description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},confirmText:{defaultValue:{value:"확인"},description:"",name:"confirmText",required:!1,type:{name:"string"}}}}}catch{}try{p.displayName="Confirm",p.__docgenInfo={description:"",displayName:"Confirm",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},title:{defaultValue:{value:"확인"},description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},confirmText:{defaultValue:{value:"확인"},description:"",name:"confirmText",required:!1,type:{name:"string"}},cancelText:{defaultValue:{value:"취소"},description:"",name:"cancelText",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"danger"'}]}}}}}catch{}try{h.displayName="ImagePopup",h.__docgenInfo={description:"",displayName:"ImagePopup",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}}}}}catch{}const oe={title:"Feedback/Modal",tags:["autodocs"]},C={render:function(){const[t,s]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(d,{onClick:()=>s(!0),children:"Alert 열기"}),e.jsx(g,{isOpen:t,onClose:()=>s(!1),title:"알림",message:"작업이 완료되었습니다."})]})}},y={render:function(){const[t,s]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(d,{onClick:()=>s(!0),children:"커스텀 Alert"}),e.jsx(g,{isOpen:t,onClose:()=>s(!1),title:"저장 완료",message:"변경사항이 저장되었습니다.",confirmText:"확인했습니다"})]})}},v={render:function(){const[t,s]=r.useState(!1),[c,a]=r.useState(null);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(d,{onClick:()=>s(!0),children:"Confirm 열기"}),c&&e.jsxs("p",{className:"text-sm text-gray-500",children:["결과: ",c]}),e.jsx(p,{isOpen:t,onClose:()=>{s(!1),a("취소됨")},onConfirm:()=>{a("확인됨")},title:"확인",message:"이 작업을 진행하시겠습니까?"})]})}},b={render:function(){const[t,s]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(d,{variant:"danger",onClick:()=>s(!0),children:"삭제하기"}),e.jsx(p,{isOpen:t,onClose:()=>s(!1),onConfirm:()=>s(!1),title:"삭제 확인",message:"정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.",variant:"danger",confirmText:"삭제",cancelText:"취소"})]})}},j={render:function(){const[t,s]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(d,{onClick:()=>s(!0),children:"로그아웃"}),e.jsx(p,{isOpen:t,onClose:()=>s(!1),onConfirm:()=>s(!1),title:"로그아웃",message:"정말 로그아웃 하시겠습니까?",confirmText:"로그아웃",cancelText:"머무르기"})]})}},w={render:function(){const[t,s]=r.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>s(!0),className:"cursor-zoom-in",children:e.jsx("img",{src:"https://picsum.photos/200/150",alt:"썸네일",className:"w-48 h-36 object-cover border border-gray-200"})}),e.jsx(h,{isOpen:t,onClose:()=>s(!1),src:"https://picsum.photos/800/600",alt:"확대 이미지"})]})}},S={render:function(){const[t,s]=r.useState(null),c=["https://picsum.photos/seed/1/800/600","https://picsum.photos/seed/2/800/600","https://picsum.photos/seed/3/800/600","https://picsum.photos/seed/4/800/600"];return e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-cols-4 gap-2",children:c.map((a,l)=>e.jsx("button",{onClick:()=>s(a),className:"cursor-zoom-in",children:e.jsx("img",{src:a,alt:`이미지 ${l+1}`,className:"w-full aspect-square object-cover border border-gray-200"})},l))}),t&&e.jsx(h,{isOpen:!!t,onClose:()=>s(null),src:t,alt:"확대 이미지"})]})}},I={render:function(){const[t,s]=r.useState(!1),[c,a]=r.useState(!1),[l,o]=r.useState(!1),[i,u]=r.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(d,{onClick:()=>s(!0),children:"Alert"}),e.jsx(d,{variant:"outline",onClick:()=>a(!0),children:"Confirm"}),e.jsx(d,{variant:"danger",onClick:()=>o(!0),children:"Danger Confirm"}),e.jsx(d,{variant:"secondary",onClick:()=>u(!0),children:"Image Popup"})]}),e.jsx(g,{isOpen:t,onClose:()=>s(!1),title:"알림",message:"작업이 완료되었습니다."}),e.jsx(p,{isOpen:c,onClose:()=>a(!1),onConfirm:()=>a(!1),title:"확인",message:"이 작업을 진행하시겠습니까?"}),e.jsx(p,{isOpen:l,onClose:()=>o(!1),onConfirm:()=>o(!1),title:"삭제 확인",message:"정말 삭제하시겠습니까?",variant:"danger"}),e.jsx(h,{isOpen:i,onClose:()=>u(!1),src:"https://picsum.photos/800/600",alt:"샘플 이미지"})]})}};var k,N,A;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: function AlertModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Alert 열기</Button>
        <Alert isOpen={isOpen} onClose={() => setIsOpen(false)} title="알림" message="작업이 완료되었습니다." />
      </div>;
  }
}`,...(A=(N=C.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var B,T,_;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: function AlertCustomTextStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>커스텀 Alert</Button>
        <Alert isOpen={isOpen} onClose={() => setIsOpen(false)} title="저장 완료" message="변경사항이 저장되었습니다." confirmText="확인했습니다" />
      </div>;
  }
}`,...(_=(T=y.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var E,M,D;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function ConfirmModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    return <div className="space-y-2">
        <Button onClick={() => setIsOpen(true)}>Confirm 열기</Button>
        {result && <p className="text-sm text-gray-500">결과: {result}</p>}
        <Confirm isOpen={isOpen} onClose={() => {
        setIsOpen(false);
        setResult("취소됨");
      }} onConfirm={() => {
        setResult("확인됨");
      }} title="확인" message="이 작업을 진행하시겠습니까?" />
      </div>;
  }
}`,...(D=(M=v.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var q,V,P;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: function ConfirmDangerStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button variant="danger" onClick={() => setIsOpen(true)}>삭제하기</Button>
        <Confirm isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} title="삭제 확인" message="정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다." variant="danger" confirmText="삭제" cancelText="취소" />
      </div>;
  }
}`,...(P=(V=b.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var L,R,z;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function ConfirmCustomTextStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>로그아웃</Button>
        <Confirm isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} title="로그아웃" message="정말 로그아웃 하시겠습니까?" confirmText="로그아웃" cancelText="머무르기" />
      </div>;
  }
}`,...(z=(R=j.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var G,W,$;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: function ImagePopupModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <button onClick={() => setIsOpen(true)} className="cursor-zoom-in">
          <img src="https://picsum.photos/200/150" alt="썸네일" className="w-48 h-36 object-cover border border-gray-200" />
        </button>
        <ImagePopup isOpen={isOpen} onClose={() => setIsOpen(false)} src="https://picsum.photos/800/600" alt="확대 이미지" />
      </div>;
  }
}`,...($=(W=w.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var K,F,H;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: function GalleryStory() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const images = ["https://picsum.photos/seed/1/800/600", "https://picsum.photos/seed/2/800/600", "https://picsum.photos/seed/3/800/600", "https://picsum.photos/seed/4/800/600"];
    return <div>
        <div className="grid grid-cols-4 gap-2">
          {images.map((src, index) => <button key={index} onClick={() => setSelectedImage(src)} className="cursor-zoom-in">
              <img src={src} alt={\`이미지 \${index + 1}\`} className="w-full aspect-square object-cover border border-gray-200" />
            </button>)}
        </div>
        {selectedImage && <ImagePopup isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} src={selectedImage} alt="확대 이미지" />}
      </div>;
  }
}`,...(H=(F=S.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,Q,U;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: function AllModalsStory() {
    const [showAlert, setShowAlert] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showDangerConfirm, setShowDangerConfirm] = useState(false);
    const [showImage, setShowImage] = useState(false);
    return <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setShowAlert(true)}>Alert</Button>
          <Button variant="outline" onClick={() => setShowConfirm(true)}>Confirm</Button>
          <Button variant="danger" onClick={() => setShowDangerConfirm(true)}>Danger Confirm</Button>
          <Button variant="secondary" onClick={() => setShowImage(true)}>Image Popup</Button>
        </div>

        <Alert isOpen={showAlert} onClose={() => setShowAlert(false)} title="알림" message="작업이 완료되었습니다." />

        <Confirm isOpen={showConfirm} onClose={() => setShowConfirm(false)} onConfirm={() => setShowConfirm(false)} title="확인" message="이 작업을 진행하시겠습니까?" />

        <Confirm isOpen={showDangerConfirm} onClose={() => setShowDangerConfirm(false)} onConfirm={() => setShowDangerConfirm(false)} title="삭제 확인" message="정말 삭제하시겠습니까?" variant="danger" />

        <ImagePopup isOpen={showImage} onClose={() => setShowImage(false)} src="https://picsum.photos/800/600" alt="샘플 이미지" />
      </div>;
  }
}`,...(U=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ae=["AlertModal","AlertCustomText","ConfirmModal","ConfirmDanger","ConfirmCustomText","ImagePopupModal","Gallery","AllModals"];export{y as AlertCustomText,C as AlertModal,I as AllModals,j as ConfirmCustomText,b as ConfirmDanger,v as ConfirmModal,S as Gallery,w as ImagePopupModal,ae as __namedExportsOrder,oe as default};
