import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";function r({currentPage:n,totalPages:e,onPageChange:t,siblingCount:s=1,className:c=""}){const l=i.useMemo(()=>{const o=(m,Y)=>Array.from({length:Y-m+1},(ae,Z)=>m+Z),d=s*2+5;if(e<=d)return o(1,e);const g=Math.max(n-s,1),u=Math.min(n+s,e),N=g>2,S=u<e-1;return!N&&S?[...o(1,3+s*2),"...",e]:N&&!S?[1,"...",...o(e-(2+s*2),e)]:[1,"...",...o(g,u),"...",e]},[n,e,s]);return e<=1?null:a.jsxs("nav",{"aria-label":"페이지 네비게이션",className:`flex items-center justify-center gap-1 ${c}`,children:[a.jsx("button",{onClick:()=>t(n-1),disabled:n===1,"aria-label":"이전 페이지",className:`
          px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300
          disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
          transition-all duration-300
          hover:bg-gray-50
        `,children:"이전"}),l.map((o,d)=>{if(o==="...")return a.jsx("span",{className:"px-3 py-2 text-sm text-gray-500","aria-hidden":"true",children:"..."},`dots-${d}`);const g=o,u=g===n;return a.jsx("button",{onClick:()=>t(g),"aria-label":`${g} 페이지`,"aria-current":u?"page":void 0,className:`
              px-3 py-2 text-sm font-medium border transition-all duration-300 cursor-pointer
              ${u?"bg-primary-900 text-white border-primary-900":"bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}
            `,children:g},g)}),a.jsx("button",{onClick:()=>t(n+1),disabled:n===e,"aria-label":"다음 페이지",className:`
          px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300
          disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
          transition-all duration-300
          hover:bg-gray-50
        `,children:"다음"})]})}try{r.displayName="Pagination",r.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},siblingCount:{defaultValue:{value:"1"},description:"",name:"siblingCount",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const se={title:"Data Display/Pagination",component:r,tags:["autodocs"],argTypes:{currentPage:{control:"number",description:"현재 페이지"},totalPages:{control:"number",description:"전체 페이지 수"},siblingCount:{control:"number",description:"현재 페이지 양옆에 보여줄 페이지 수"}}},p={render:function(){const[e,t]=i.useState(1);return a.jsx(r,{currentPage:e,totalPages:10,onPageChange:t})}},P={render:function(){const[e,t]=i.useState(1);return a.jsx(r,{currentPage:e,totalPages:5,onPageChange:t})}},x={render:function(){const[e,t]=i.useState(1);return a.jsx(r,{currentPage:e,totalPages:100,onPageChange:t})}},y={render:function(){const[e,t]=i.useState(5);return a.jsx(r,{currentPage:e,totalPages:10,onPageChange:t})}},h={render:function(){const[e,t]=i.useState(10);return a.jsx(r,{currentPage:e,totalPages:10,onPageChange:t})}},b={render:function(){const[e,t]=i.useState(10);return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"siblingCount=1 (기본)"}),a.jsx(r,{currentPage:e,totalPages:20,siblingCount:1,onPageChange:t})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"siblingCount=2"}),a.jsx(r,{currentPage:e,totalPages:20,siblingCount:2,onPageChange:t})]})]})}},f={render:()=>a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"text-sm text-gray-500",children:"페이지가 1개면 표시되지 않습니다"}),a.jsx(r,{currentPage:1,totalPages:1,onPageChange:()=>{}})]})},v={render:function(){const[e,t]=i.useState(1),s=5,c=23,l=Math.ceil(c/s),o=(e-1)*s+1,d=Math.min(e*s,c);return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"p-4 border border-gray-200 min-h-[200px] flex items-center justify-center text-gray-500",children:["테이블 영역 (페이지 ",e,")"]}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsxs("p",{className:"text-sm text-gray-500",children:[c,"개 중 ",o,"-",d," 표시"]}),a.jsx(r,{currentPage:e,totalPages:l,onPageChange:t})]})]})}},j={render:function(){const[e,t]=i.useState(1);return a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"grid grid-cols-4 gap-2",children:Array.from({length:8}).map((c,l)=>a.jsx("div",{className:"aspect-square bg-gray-200 flex items-center justify-center text-gray-500 text-sm",children:(e-1)*8+l+1},l))}),a.jsx(r,{currentPage:e,totalPages:8,onPageChange:t})]})}};var C,M,w;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function DefaultPagination() {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
  }
}`,...(w=(M=p.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var I,_,D;P.parameters={...P.parameters,docs:{...(I=P.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: function FewPagesPagination() {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />;
  }
}`,...(D=(_=P.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var R,q,E;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function ManyPagesPagination() {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={100} onPageChange={setPage} />;
  }
}`,...(E=(q=x.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var L,T,V;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function MiddlePagePagination() {
    const [page, setPage] = useState(5);
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
  }
}`,...(V=(T=y.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var k,A,F;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: function LastPagePagination() {
    const [page, setPage] = useState(10);
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
  }
}`,...(F=(A=h.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,W,$;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: function ExtendedSiblingsPagination() {
    const [page, setPage] = useState(10);
    return <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 mb-2">siblingCount=1 (기본)</p>
          <Pagination currentPage={page} totalPages={20} siblingCount={1} onPageChange={setPage} />
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">siblingCount=2</p>
          <Pagination currentPage={page} totalPages={20} siblingCount={2} onPageChange={setPage} />
        </div>
      </div>;
  }
}`,...($=(W=b.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var O,z,B;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <p className="text-sm text-gray-500">페이지가 1개면 표시되지 않습니다</p>
      <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
    </div>
}`,...(B=(z=f.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var H,J,K;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: function WithTablePagination() {
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 23;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (page - 1) * itemsPerPage + 1;
    const endItem = Math.min(page * itemsPerPage, totalItems);
    return <div className="space-y-4">
        <div className="p-4 border border-gray-200 min-h-[200px] flex items-center justify-center text-gray-500">
          테이블 영역 (페이지 {page})
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            {totalItems}개 중 {startItem}-{endItem} 표시
          </p>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      </div>;
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: function GalleryPagination() {
    const [page, setPage] = useState(1);
    const totalPages = 8;
    return <div className="space-y-4">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({
          length: 8
        }).map((_, i) => <div key={i} className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              {(page - 1) * 8 + i + 1}
            </div>)}
        </div>
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>;
  }
}`,...(X=(U=j.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const oe=["Default","FewPages","ManyPages","MiddlePage","LastPage","ExtendedSiblings","SinglePage","WithTable","Gallery"];export{p as Default,b as ExtendedSiblings,P as FewPages,j as Gallery,h as LastPage,x as ManyPages,y as MiddlePage,f as SinglePage,v as WithTable,oe as __namedExportsOrder,se as default};
