import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";function z({label:o,accept:m,multiple:D=!1,maxSize:u,maxFiles:L=10,disabled:n=!1,error:he=!1,errorMessage:ye,onChange:d,onError:f,className:be="",showPreview:ve=!0}){const[i,U]=x.useState([]),[W,P]=x.useState(!1),[we,V]=x.useState(null),_=x.useRef(null),B=e=>{if(e===0)return"0 Bytes";const a=1024,s=["Bytes","KB","MB","GB"],t=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,t)).toFixed(2))+" "+s[t]},$=x.useCallback(e=>{var t;let a=null;const s=[];for(const l of e){if(i.length+s.length>=L){a=`최대 ${L}개까지 업로드 가능합니다`;break}if(u&&l.size>u){a=`파일 크기는 ${B(u)} 이하여야 합니다`;continue}if(m){const g=m.split(",").map(p=>p.trim()),c=l.type,h="."+((t=l.name.split(".").pop())==null?void 0:t.toLowerCase());if(!g.some(p=>p.startsWith(".")?h===p.toLowerCase():p.endsWith("/*")?c.startsWith(p.replace("/*","/")):c===p)){a="지원하지 않는 파일 형식입니다";continue}}s.push(l)}return{valid:s,error:a}},[i.length,L,u,m]),R=x.useCallback(e=>{const a=Array.from(e),{valid:s,error:t}=$(a);if(t?(V(t),f==null||f(t)):V(null),s.length===0)return;const l=s.map(c=>{const h={file:c};return c.type.startsWith("image/")&&(h.preview=URL.createObjectURL(c)),h}),g=D?[...i,...l]:l;U(g),d==null||d(g.map(c=>c.file))},[i,D,d,f,$]),je=e=>{e.target.files&&R(e.target.files),e.target.value=""},Ne=e=>{e.preventDefault(),n||P(!0)},ke=e=>{e.preventDefault(),P(!1)},Se=e=>{e.preventDefault(),P(!1),!n&&e.dataTransfer.files&&R(e.dataTransfer.files)},E=()=>{var e;n||(e=_.current)==null||e.click()},Fe=e=>{const a=i[e];a.preview&&URL.revokeObjectURL(a.preview);const s=i.filter((t,l)=>l!==e);U(s),d==null||d(s.map(t=>t.file)),V(null)},Me=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),E())},q=he?ye:we;return r.jsxs("div",{className:`flex flex-col gap-2 ${be}`,children:[o&&r.jsx("label",{className:"text-sm font-medium text-gray-700",children:o}),r.jsxs("div",{role:"button",tabIndex:n?-1:0,onClick:E,onKeyDown:Me,onDragOver:Ne,onDragLeave:ke,onDrop:Se,"aria-label":o||"파일 업로드","aria-disabled":n,className:`
          relative border-2 border-dashed p-6 text-center transition-colors
          ${n?"bg-gray-100 cursor-not-allowed":"cursor-pointer hover:border-primary-400 hover:bg-primary-50"}
          ${W?"border-primary-500 bg-primary-50":""}
          ${q?"border-error-500":"border-gray-300"}
        `,children:[r.jsx("input",{ref:_,type:"file",accept:m,multiple:D,onChange:je,disabled:n,className:"hidden","aria-hidden":"true"}),r.jsxs("div",{className:"flex flex-col items-center gap-2",children:[r.jsx("svg",{className:`w-10 h-10 ${W?"text-primary-500":"text-gray-400"}`,fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"})}),r.jsxs("div",{className:"text-sm text-gray-600",children:[r.jsx("span",{className:"font-medium text-primary-900",children:"클릭"}),"하거나"," ",r.jsx("span",{className:"font-medium text-primary-900",children:"드래그"}),"하여 파일을 업로드하세요"]}),m&&r.jsx("p",{className:"text-xs text-gray-500",children:m.replace(/,/g,", ")}),u&&r.jsxs("p",{className:"text-xs text-gray-500",children:["최대 ",B(u)]})]})]}),q&&r.jsx("p",{className:"text-sm text-error-500",role:"alert",children:q}),i.length>0&&r.jsx("div",{className:"space-y-2",children:i.map((e,a)=>r.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 border border-gray-200",children:[ve&&e.preview?r.jsx("img",{src:e.preview,alt:e.file.name,className:"w-12 h-12 object-cover flex-shrink-0"}):r.jsx("div",{className:"w-12 h-12 bg-gray-200 flex items-center justify-center flex-shrink-0",children:r.jsx("svg",{className:"w-6 h-6 text-gray-500",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:e.file.name}),r.jsx("p",{className:"text-xs text-gray-500",children:B(e.file.size)})]}),r.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),Fe(a)},disabled:n,"aria-label":`${e.file.name} 삭제`,className:"p-1 text-gray-400 hover:text-error-500 transition-colors disabled:cursor-not-allowed",children:r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]},`${e.file.name}-${a}`))})]})}try{z.displayName="FileUpload",z.__docgenInfo={description:"",displayName:"FileUpload",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},maxFiles:{defaultValue:{value:"10"},description:"",name:"maxFiles",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((files: File[]) => void)"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((error: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},showPreview:{defaultValue:{value:"true"},description:"",name:"showPreview",required:!1,type:{name:"boolean"}}}}}catch{}const Be={title:"Form/FileUpload",component:z,tags:["autodocs"],argTypes:{accept:{control:"text",description:"허용할 파일 형식"},multiple:{control:"boolean",description:"다중 파일 선택 허용"},maxSize:{control:"number",description:"최대 파일 크기 (bytes)"},maxFiles:{control:"number",description:"최대 파일 개수"},showPreview:{control:"boolean",description:"이미지 미리보기 표시"},disabled:{control:"boolean",description:"비활성화 상태"},error:{control:"boolean",description:"에러 상태"}}},y={args:{}},b={args:{label:"프로필 사진"}},v={args:{label:"이미지 업로드",accept:"image/*",showPreview:!0}},w={args:{label:"파일 첨부",multiple:!0,maxFiles:5}},j={args:{label:"파일 업로드",maxSize:5*1024*1024,accept:"image/*,.pdf"}},N={args:{label:"문서 업로드",accept:".pdf,.doc,.docx,.xls,.xlsx",multiple:!0,maxFiles:3,showPreview:!1}},k={args:{label:"업로드 불가",disabled:!0}},S={args:{label:"필수 첨부",error:!0,errorMessage:"파일을 첨부해주세요"}},F={args:{label:"프로필 이미지",accept:"image/*",maxSize:2*1024*1024,showPreview:!0},decorators:[o=>r.jsxs("div",{className:"max-w-md p-4 border border-gray-200 space-y-4",children:[r.jsx("h3",{className:"font-semibold text-gray-900",children:"프로필 설정"}),r.jsx(o,{}),r.jsx("p",{className:"text-xs text-gray-500",children:"권장 크기: 400x400px, 최대 2MB"})]})]},M={args:{label:"상품 이미지",accept:"image/*",multiple:!0,maxFiles:5,maxSize:10*1024*1024,showPreview:!0},decorators:[o=>r.jsxs("div",{className:"max-w-lg p-4 border border-gray-200 space-y-4",children:[r.jsx("h3",{className:"font-semibold text-gray-900",children:"상품 등록"}),r.jsx(o,{}),r.jsxs("ul",{className:"text-xs text-gray-500 space-y-1",children:[r.jsx("li",{children:"• 최대 5장까지 업로드 가능"}),r.jsx("li",{children:"• 첫 번째 이미지가 대표 이미지로 설정됩니다"}),r.jsx("li",{children:"• 권장 크기: 1000x1000px"})]})]})]};var O,A,T;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {}
}`,...(T=(A=y.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var C,H,K;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "프로필 사진"
  }
}`,...(K=(H=b.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var I,G,J;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "이미지 업로드",
    accept: "image/*",
    showPreview: true
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: "파일 첨부",
    multiple: true,
    maxFiles: 5
  }
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: "파일 업로드",
    maxSize: 5 * 1024 * 1024,
    // 5MB
    accept: "image/*,.pdf"
  }
}`,...(re=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,te;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: "문서 업로드",
    accept: ".pdf,.doc,.docx,.xls,.xlsx",
    multiple: true,
    maxFiles: 3,
    showPreview: false
  }
}`,...(te=(se=N.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,oe,ne;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: "업로드 불가",
    disabled: true
  }
}`,...(ne=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,ce,de;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: "필수 첨부",
    error: true,
    errorMessage: "파일을 첨부해주세요"
  }
}`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,ue;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    label: "프로필 이미지",
    accept: "image/*",
    maxSize: 2 * 1024 * 1024,
    // 2MB
    showPreview: true
  },
  decorators: [Story => <div className="max-w-md p-4 border border-gray-200 space-y-4">
        <h3 className="font-semibold text-gray-900">프로필 설정</h3>
        <Story />
        <p className="text-xs text-gray-500">
          권장 크기: 400x400px, 최대 2MB
        </p>
      </div>]
}`,...(ue=(me=F.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var xe,fe,ge;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    label: "상품 이미지",
    accept: "image/*",
    multiple: true,
    maxFiles: 5,
    maxSize: 10 * 1024 * 1024,
    // 10MB
    showPreview: true
  },
  decorators: [Story => <div className="max-w-lg p-4 border border-gray-200 space-y-4">
        <h3 className="font-semibold text-gray-900">상품 등록</h3>
        <Story />
        <ul className="text-xs text-gray-500 space-y-1">
          <li>• 최대 5장까지 업로드 가능</li>
          <li>• 첫 번째 이미지가 대표 이미지로 설정됩니다</li>
          <li>• 권장 크기: 1000x1000px</li>
        </ul>
      </div>]
}`,...(ge=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};const qe=["Default","WithLabel","ImageOnly","Multiple","WithSizeLimit","DocumentUpload","Disabled","Error","ProfileUpload","ProductImages"];export{y as Default,k as Disabled,N as DocumentUpload,S as Error,v as ImageOnly,w as Multiple,M as ProductImages,F as ProfileUpload,b as WithLabel,j as WithSizeLimit,qe as __namedExportsOrder,Be as default};
