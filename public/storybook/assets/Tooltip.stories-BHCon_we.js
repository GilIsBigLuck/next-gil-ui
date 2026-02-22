import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-ZH-6pyQh.js";import{r as fe}from"./index-BP-xEy0R.js";import{B as o}from"./Button-0BhrvR8d.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVyBTwwr.js";function n({children:l,content:pe,position:R="top",delay:ue=0,className:he=""}){const[d,k]=a.useState(!1),[M,me]=a.useState({top:0,left:0}),B=a.useRef(null),T=a.useRef(null),N=a.useRef(void 0),S=a.useId(),ge=()=>{if(!B.current||!T.current)return;const t=B.current.getBoundingClientRect(),r=T.current.getBoundingClientRect(),p=8;let s=0,i=0;switch(R){case"top":s=t.top-r.height-p,i=t.left+(t.width-r.width)/2;break;case"bottom":s=t.bottom+p,i=t.left+(t.width-r.width)/2;break;case"left":s=t.top+(t.height-r.height)/2,i=t.left-r.width-p;break;case"right":s=t.top+(t.height-r.height)/2,i=t.right+p;break}const c=8;i<c&&(i=c),i+r.width>window.innerWidth-c&&(i=window.innerWidth-r.width-c),s<c&&(s=c),s+r.height>window.innerHeight-c&&(s=window.innerHeight-r.height-c),me({top:s,left:i})};a.useEffect(()=>{d&&ge()},[d,R]);const C=()=>{N.current=setTimeout(()=>{k(!0)},ue)},L=()=>{N.current&&clearTimeout(N.current),k(!1)},xe=a.isValidElement(l)?a.cloneElement(l,{"aria-describedby":d?S:void 0}):l;return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:B,onMouseEnter:C,onMouseLeave:L,onFocus:C,onBlur:L,className:he||"inline-block",children:xe}),d&&fe.createPortal(e.jsx("div",{ref:T,id:S,role:"tooltip",style:{top:M.top,left:M.left},className:`
              fixed z-50 px-3 py-2 text-sm text-white bg-gray-900 shadow-lg
              transition-opacity duration-150
              ${d?"opacity-100":"opacity-0"}
            `,children:pe}),document.body)]})}try{n.displayName="Tooltip",n.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},delay:{defaultValue:{value:"0"},description:"",name:"delay",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Te={title:"Data Display/Tooltip",component:n,tags:["autodocs"],argTypes:{position:{control:"select",options:["top","bottom","left","right"],description:"툴팁 위치"},delay:{control:"number",description:"표시 지연 시간 (ms)"}},decorators:[l=>e.jsx("div",{className:"p-16 flex items-center justify-center",children:e.jsx(l,{})})]},u={args:{content:"기본 툴팁입니다",children:e.jsx(o,{variant:"outline",children:"마우스를 올려보세요"})}},h={args:{content:"위쪽 툴팁",position:"top",children:e.jsx(o,{variant:"outline",children:"Top"})}},m={args:{content:"아래쪽 툴팁",position:"bottom",children:e.jsx(o,{variant:"outline",children:"Bottom"})}},g={args:{content:"왼쪽 툴팁",position:"left",children:e.jsx(o,{variant:"outline",children:"Left"})}},x={args:{content:"오른쪽 툴팁",position:"right",children:e.jsx(o,{variant:"outline",children:"Right"})}},f={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{content:"위쪽 툴팁",position:"top",children:e.jsx(o,{variant:"outline",children:"Top"})}),e.jsx(n,{content:"아래쪽 툴팁",position:"bottom",children:e.jsx(o,{variant:"outline",children:"Bottom"})}),e.jsx(n,{content:"왼쪽 툴팁",position:"left",children:e.jsx(o,{variant:"outline",children:"Left"})}),e.jsx(n,{content:"오른쪽 툴팁",position:"right",children:e.jsx(o,{variant:"outline",children:"Right"})})]})},v={args:{content:"500ms 후에 표시됩니다",delay:500,children:e.jsx(o,{variant:"outline",children:"Delayed Tooltip"})}},y={args:{content:"이것은 긴 내용의 툴팁입니다. 툴팁은 자동으로 줄바꿈됩니다. 필요한 경우 더 많은 정보를 제공할 수 있습니다.",children:e.jsx(o,{variant:"outline",children:"긴 내용"})}},j={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{content:"수정",children:e.jsx("button",{className:"p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded",children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"})]})})}),e.jsx(n,{content:"삭제",children:e.jsx("button",{className:"p-2 text-gray-600 hover:text-error-600 hover:bg-error-50 rounded",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"})})})}),e.jsx(n,{content:"공유",children:e.jsx("button",{className:"p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded",children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"18",cy:"5",r:"3"}),e.jsx("circle",{cx:"6",cy:"12",r:"3"}),e.jsx("circle",{cx:"18",cy:"19",r:"3"}),e.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),e.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})})})]})},b={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-700",children:"배송비"}),e.jsx(n,{content:"50,000원 이상 구매 시 무료배송",children:e.jsx("span",{className:"inline-flex items-center justify-center w-4 h-4 text-xs text-gray-500 bg-gray-200 rounded-full cursor-help",children:"?"})})]})},w={render:()=>e.jsx("div",{className:"max-w-sm space-y-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700",children:"비밀번호"}),e.jsx(n,{content:"영문 대/소문자, 숫자, 특수문자를 포함한 8자 이상",position:"right",children:e.jsx("span",{className:"inline-flex items-center justify-center w-4 h-4 text-xs text-gray-500 bg-gray-200 rounded-full cursor-help",children:"?"})})]}),e.jsx("input",{type:"password",className:"w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-900",placeholder:"비밀번호를 입력하세요"})]})})};var V,W,_;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    content: "기본 툴팁입니다",
    children: <Button variant="outline">마우스를 올려보세요</Button>
  }
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var D,E,H;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    content: "위쪽 툴팁",
    position: "top",
    children: <Button variant="outline">Top</Button>
  }
}`,...(H=(E=h.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var I,F,q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    content: "아래쪽 툴팁",
    position: "bottom",
    children: <Button variant="outline">Bottom</Button>
  }
}`,...(q=(F=m.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var P,z,A;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    content: "왼쪽 툴팁",
    position: "left",
    children: <Button variant="outline">Left</Button>
  }
}`,...(A=(z=g.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var O,$,G;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    content: "오른쪽 툴팁",
    position: "right",
    children: <Button variant="outline">Right</Button>
  }
}`,...(G=($=x.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Tooltip content="위쪽 툴팁" position="top">
        <Button variant="outline">Top</Button>
      </Tooltip>
      <Tooltip content="아래쪽 툴팁" position="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>
      <Tooltip content="왼쪽 툴팁" position="left">
        <Button variant="outline">Left</Button>
      </Tooltip>
      <Tooltip content="오른쪽 툴팁" position="right">
        <Button variant="outline">Right</Button>
      </Tooltip>
    </div>
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    content: "500ms 후에 표시됩니다",
    delay: 500,
    children: <Button variant="outline">Delayed Tooltip</Button>
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    content: "이것은 긴 내용의 툴팁입니다. 툴팁은 자동으로 줄바꿈됩니다. 필요한 경우 더 많은 정보를 제공할 수 있습니다.",
    children: <Button variant="outline">긴 내용</Button>
  }
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,re;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Tooltip content="수정">
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip content="삭제">
        <button className="p-2 text-gray-600 hover:text-error-600 hover:bg-error-50 rounded">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip content="공유">
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </button>
      </Tooltip>
    </div>
}`,...(re=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ie,ae;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <span className="text-sm text-gray-700">배송비</span>
      <Tooltip content="50,000원 이상 구매 시 무료배송">
        <span className="inline-flex items-center justify-center w-4 h-4 text-xs text-gray-500 bg-gray-200 rounded-full cursor-help">
          ?
        </span>
      </Tooltip>
    </div>
}`,...(ae=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var ce,le,de;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <label className="text-sm font-medium text-gray-700">비밀번호</label>
          <Tooltip content="영문 대/소문자, 숫자, 특수문자를 포함한 8자 이상" position="right">
            <span className="inline-flex items-center justify-center w-4 h-4 text-xs text-gray-500 bg-gray-200 rounded-full cursor-help">
              ?
            </span>
          </Tooltip>
        </div>
        <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-900" placeholder="비밀번호를 입력하세요" />
      </div>
    </div>
}`,...(de=(le=w.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};const Ne=["Default","Top","Bottom","Left","Right","AllPositions","WithDelay","LongContent","IconButton","InfoTooltip","FormFieldHelp"];export{f as AllPositions,m as Bottom,u as Default,w as FormFieldHelp,j as IconButton,b as InfoTooltip,g as Left,y as LongContent,x as Right,h as Top,v as WithDelay,Ne as __namedExportsOrder,Te as default};
