import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-ZH-6pyQh.js";import{B as ae}from"./Badge-HjyZT8Jo.js";import"./_commonjsHelpers-CqkleIqs.js";function T({children:a,className:l=""}){const r=h.useRef(null),[t,d]=h.useState(!1),[o,p]=h.useState(!1),n=()=>{const u=r.current;if(!u)return;const g=u.scrollWidth>u.clientWidth;d(u.scrollLeft>0),p(g&&u.scrollLeft<u.scrollWidth-u.clientWidth-1)};return h.useEffect(()=>(n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),e.jsxs("div",{className:"relative",children:[t&&e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10","aria-hidden":"true"}),o&&e.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 flex items-center justify-end pr-1","aria-hidden":"true",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"text-gray-400 animate-pulse",children:e.jsx("path",{d:"M6 4L10 8L6 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("div",{ref:r,className:"w-full overflow-x-auto",onScroll:n,children:e.jsx("table",{className:`min-w-full text-sm ${l}`,children:a})})]})}function y({children:a,className:l=""}){return e.jsx("thead",{className:`bg-gray-50 border-y border-gray-200 ${l}`,children:a})}function x({children:a,className:l=""}){return e.jsx("tbody",{className:`divide-y divide-gray-200 ${l}`,children:a})}function b({children:a,className:l="",onClick:r,selected:t}){return e.jsx("tr",{onClick:r,className:`
        ${r?"cursor-pointer hover:bg-gray-50":""}
        ${t?"bg-primary-50":""}
        ${l}
      `,children:a})}function i({children:a,className:l="",align:r="left",hideOnMobile:t=!1}){const d={left:"text-left",center:"text-center",right:"text-right"}[r],o=t?"hidden md:table-cell":"";return e.jsx("th",{scope:"col",className:`px-4 py-3 font-semibold text-gray-700 whitespace-nowrap ${d} ${o} ${l}`,children:a})}function w({children:a,className:l="",align:r="left",sortDirection:t,onSort:d}){const o={left:"text-left",center:"text-center",right:"text-right"}[r],p={left:"justify-start",center:"justify-center",right:"justify-end"}[r],n=t==="asc"?"ascending":t==="desc"?"descending":void 0;return e.jsx("th",{scope:"col","aria-sort":n,className:`px-4 py-3 font-semibold text-gray-700 ${o} ${l}`,children:e.jsxs("button",{type:"button",onClick:d,className:`inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer ${p} w-full`,children:[e.jsx("span",{children:a}),e.jsx("span",{className:"flex-shrink-0","aria-hidden":"true",children:t==="asc"?e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:"text-primary-900",children:e.jsx("path",{d:"M6 2L6 10M6 2L3 5M6 2L9 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square"})}):t==="desc"?e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:"text-primary-900",children:e.jsx("path",{d:"M6 10L6 2M6 10L3 7M6 10L9 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square"})}):e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:"text-gray-400",children:e.jsx("path",{d:"M4 4L6 2L8 4M4 8L6 10L8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square"})})})]})})}function s({children:a,className:l="",align:r="left",colSpan:t,hideOnMobile:d=!1}){const o={left:"text-left",center:"text-center",right:"text-right"}[r],p=d?"hidden md:table-cell":"";return e.jsx("td",{colSpan:t,className:`px-4 py-3 text-gray-900 whitespace-nowrap ${o} ${p} ${l}`,children:a})}function C({indeterminate:a,className:l="",...r}){return e.jsx("input",{type:"checkbox",ref:t=>{t&&(t.indeterminate=a??!1)},className:`
        w-4 h-4 border-2 border-gray-300 bg-white flex-shrink-0
        checked:bg-primary-900 checked:border-primary-900
        focus:ring-2 focus:ring-primary-900 focus:ring-offset-2
        disabled:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed
        transition-colors cursor-pointer
        appearance-none
        checked:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2%206l3%203%205-6%22%2F%3E%3C%2Fsvg%3E')]
        checked:bg-center checked:bg-no-repeat checked:bg-[length:10px]
        indeterminate:bg-primary-900 indeterminate:border-primary-900
        indeterminate:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2%206h8%22%2F%3E%3C%2Fsvg%3E')]
        indeterminate:bg-center indeterminate:bg-no-repeat indeterminate:bg-[length:10px]
        ${l}
      `,...r})}try{T.displayName="Table",T.__docgenInfo={description:"",displayName:"Table",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="TableHeader",y.__docgenInfo={description:"",displayName:"TableHeader",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{x.displayName="TableBody",x.__docgenInfo={description:"",displayName:"TableBody",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{b.displayName="TableRow",b.__docgenInfo={description:"",displayName:"TableRow",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}try{i.displayName="TableHead",i.__docgenInfo={description:"",displayName:"TableHead",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},hideOnMobile:{defaultValue:{value:"false"},description:"",name:"hideOnMobile",required:!1,type:{name:"boolean"}}}}}catch{}try{w.displayName="TableSortHead",w.__docgenInfo={description:"",displayName:"TableSortHead",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},sortDirection:{defaultValue:null,description:"",name:"sortDirection",required:!1,type:{name:"SortDirection"}},onSort:{defaultValue:null,description:"",name:"onSort",required:!1,type:{name:"(() => void)"}}}}}catch{}try{s.displayName="TableCell",s.__docgenInfo={description:"",displayName:"TableCell",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:"number"}},hideOnMobile:{defaultValue:{value:"false"},description:"",name:"hideOnMobile",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="TableCheckbox",C.__docgenInfo={description:"",displayName:"TableCheckbox",props:{indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}}}}}catch{}const ie={title:"Data Display/Table",component:T,tags:["autodocs"]},m=[{id:"1",name:"클래식 라운드 선글라스",category:"선글라스",price:129e3,status:"판매중"},{id:"2",name:"블루라이트 차단 안경",category:"안경",price:89e3,status:"판매중"},{id:"3",name:"빈티지 메탈 프레임",category:"안경테",price:159e3,status:"품절"},{id:"4",name:"스포츠 고글",category:"고글",price:199e3,status:"판매중"}],D={render:()=>e.jsxs(T,{children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(i,{children:"상품명"}),e.jsx(i,{children:"카테고리"}),e.jsx(i,{align:"right",children:"가격"})]})}),e.jsx(x,{children:m.map(a=>e.jsxs(b,{children:[e.jsx(s,{children:a.name}),e.jsx(s,{children:a.category}),e.jsxs(s,{align:"right",children:[a.price.toLocaleString(),"원"]})]},a.id))})]})},R={render:function(){const[l,r]=h.useState([]),t=l.length===m.length,d=l.length>0&&l.length<m.length,o=()=>{r(t?[]:m.map(n=>n.id))},p=n=>{r(u=>u.includes(n)?u.filter(g=>g!==n):[...u,n])};return e.jsxs("div",{className:"space-y-2",children:[e.jsxs(T,{children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(i,{className:"w-12",children:e.jsx(C,{checked:t,indeterminate:d,onChange:o})}),e.jsx(i,{children:"상품명"}),e.jsx(i,{children:"카테고리"}),e.jsx(i,{align:"right",children:"가격"})]})}),e.jsx(x,{children:m.map(n=>e.jsxs(b,{selected:l.includes(n.id),children:[e.jsx(s,{children:e.jsx(C,{checked:l.includes(n.id),onChange:()=>p(n.id)})}),e.jsx(s,{children:n.name}),e.jsx(s,{children:n.category}),e.jsxs(s,{align:"right",children:[n.price.toLocaleString(),"원"]})]},n.id))})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:[l.length,"개 선택됨"]})]})}},H={render:function(){const[l,r]=h.useState(null),[t,d]=h.useState(null),o=n=>{l===n?t==="asc"?d("desc"):t==="desc"?(d(null),r(null)):d("asc"):(r(n),d("asc"))},p=[...m].sort((n,u)=>{if(!l||!t)return 0;const g=n[l],f=u[l];return typeof g=="string"&&typeof f=="string"?t==="asc"?g.localeCompare(f):f.localeCompare(g):typeof g=="number"&&typeof f=="number"?t==="asc"?g-f:f-g:0});return e.jsxs(T,{children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(w,{sortDirection:l==="name"?t:null,onSort:()=>o("name"),children:"상품명"}),e.jsx(i,{children:"카테고리"}),e.jsx(w,{align:"right",sortDirection:l==="price"?t:null,onSort:()=>o("price"),children:"가격"})]})}),e.jsx(x,{children:p.map(n=>e.jsxs(b,{children:[e.jsx(s,{children:n.name}),e.jsx(s,{children:n.category}),e.jsxs(s,{align:"right",children:[n.price.toLocaleString(),"원"]})]},n.id))})]})}},_={render:()=>e.jsxs(T,{children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(i,{children:"상품명"}),e.jsx(i,{children:"카테고리"}),e.jsx(i,{align:"right",children:"가격"}),e.jsx(i,{align:"center",children:"상태"})]})}),e.jsx(x,{children:m.map(a=>e.jsxs(b,{children:[e.jsx(s,{children:a.name}),e.jsx(s,{children:a.category}),e.jsxs(s,{align:"right",children:[a.price.toLocaleString(),"원"]}),e.jsx(s,{align:"center",children:e.jsx(ae,{variant:a.status==="판매중"?"success":"error",size:"sm",children:a.status})})]},a.id))})]})},k={render:function(){const l=r=>{alert(`Row ${r} clicked`)};return e.jsxs(T,{children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(i,{children:"상품명"}),e.jsx(i,{children:"카테고리"}),e.jsx(i,{align:"right",children:"가격"})]})}),e.jsx(x,{children:m.map(r=>e.jsxs(b,{onClick:()=>l(r.id),children:[e.jsx(s,{children:r.name}),e.jsx(s,{children:r.category}),e.jsxs(s,{align:"right",children:[r.price.toLocaleString(),"원"]})]},r.id))})]})}},N={render:()=>e.jsxs(T,{children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(i,{children:"상품명"}),e.jsx(i,{children:"카테고리"}),e.jsx(i,{align:"right",children:"가격"})]})}),e.jsx(x,{children:e.jsx(b,{children:e.jsx(s,{colSpan:3,className:"text-center py-8 text-gray-500",children:"데이터가 없습니다"})})})]})},V={render:function(){const[l,r]=h.useState([]),[t,d]=h.useState(null),[o,p]=h.useState(null),n=l.length===m.length,u=l.length>0&&l.length<m.length,g=()=>{r(n?[]:m.map(c=>c.id))},f=c=>{r(v=>v.includes(c)?v.filter(S=>S!==c):[...v,c])},L=c=>{t===c?o==="asc"?p("desc"):o==="desc"?(p(null),d(null)):p("asc"):(d(c),p("asc"))},le=[...m].sort((c,v)=>{if(!t||!o)return 0;const S=c[t],j=v[t];return typeof S=="string"&&typeof j=="string"?o==="asc"?S.localeCompare(j):j.localeCompare(S):typeof S=="number"&&typeof j=="number"?o==="asc"?S-j:j-S:0});return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("p",{className:"text-sm text-gray-500",children:["총 ",m.length,"개 | ",l.length,"개 선택됨"]})}),e.jsxs(T,{children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(i,{className:"w-12",children:e.jsx(C,{checked:n,indeterminate:u,onChange:g})}),e.jsx(w,{sortDirection:t==="name"?o:null,onSort:()=>L("name"),children:"상품명"}),e.jsx(i,{children:"카테고리"}),e.jsx(w,{align:"right",sortDirection:t==="price"?o:null,onSort:()=>L("price"),children:"가격"}),e.jsx(i,{align:"center",children:"상태"})]})}),e.jsx(x,{children:le.map(c=>e.jsxs(b,{selected:l.includes(c.id),children:[e.jsx(s,{children:e.jsx(C,{checked:l.includes(c.id),onChange:()=>f(c.id)})}),e.jsx(s,{children:c.name}),e.jsx(s,{children:c.category}),e.jsxs(s,{align:"right",children:[c.price.toLocaleString(),"원"]}),e.jsx(s,{align:"center",children:e.jsx(ae,{variant:c.status==="판매중"?"success":"error",size:"sm",children:c.status})})]},c.id))})]})]})}};var B,K,q;D.parameters={...D.parameters,docs:{...(B=D.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>상품명</TableHead>
          <TableHead>카테고리</TableHead>
          <TableHead align="right">가격</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map(item => <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(q=(K=D.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var F,W,$;R.parameters={...R.parameters,docs:{...(F=R.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function WithSelectionTable() {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const isAllSelected = selectedRows.length === sampleData.length;
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < sampleData.length;
    const toggleSelectAll = () => {
      setSelectedRows(isAllSelected ? [] : sampleData.map(d => d.id));
    };
    const toggleSelectRow = (id: string) => {
      setSelectedRows(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };
    return <div className="space-y-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <TableCheckbox checked={isAllSelected} indeterminate={isIndeterminate} onChange={toggleSelectAll} />
              </TableHead>
              <TableHead>상품명</TableHead>
              <TableHead>카테고리</TableHead>
              <TableHead align="right">가격</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map(item => <TableRow key={item.id} selected={selectedRows.includes(item.id)}>
                <TableCell>
                  <TableCheckbox checked={selectedRows.includes(item.id)} onChange={() => toggleSelectRow(item.id)} />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
        <p className="text-sm text-gray-500">
          {selectedRows.length}개 선택됨
        </p>
      </div>;
  }
}`,...($=(W=R.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var A,M,E;H.parameters={...H.parameters,docs:{...(A=H.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: function WithSortingTable() {
    const [sortKey, setSortKey] = useState<"name" | "price" | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);
    const handleSort = (key: "name" | "price") => {
      if (sortKey === key) {
        if (sortDirection === "asc") setSortDirection("desc");else if (sortDirection === "desc") {
          setSortDirection(null);
          setSortKey(null);
        } else setSortDirection("asc");
      } else {
        setSortKey(key);
        setSortDirection("asc");
      }
    };
    const sortedData = [...sampleData].sort((a, b) => {
      if (!sortKey || !sortDirection) return 0;
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
    return <Table>
        <TableHeader>
          <TableRow>
            <TableSortHead sortDirection={sortKey === "name" ? sortDirection : null} onSort={() => handleSort("name")}>
              상품명
            </TableSortHead>
            <TableHead>카테고리</TableHead>
            <TableSortHead align="right" sortDirection={sortKey === "price" ? sortDirection : null} onSort={() => handleSort("price")}>
              가격
            </TableSortHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map(item => <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...(E=(M=H.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var I,z,O;_.parameters={..._.parameters,docs:{...(I=_.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>상품명</TableHead>
          <TableHead>카테고리</TableHead>
          <TableHead align="right">가격</TableHead>
          <TableHead align="center">상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map(item => <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
            <TableCell align="center">
              <Badge variant={item.status === "판매중" ? "success" : "error"} size="sm">
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(O=(z=_.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var G,J,P;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: function ClickableRowsTable() {
    const handleRowClick = (id: string) => {
      alert(\`Row \${id} clicked\`);
    };
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>상품명</TableHead>
            <TableHead>카테고리</TableHead>
            <TableHead align="right">가격</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map(item => <TableRow key={item.id} onClick={() => handleRowClick(item.id)}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...(P=(J=k.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var Q,U,X;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>상품명</TableHead>
          <TableHead>카테고리</TableHead>
          <TableHead align="right">가격</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="text-center py-8 text-gray-500">
            데이터가 없습니다
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(X=(U=N.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: function FullFeatureTable() {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [sortKey, setSortKey] = useState<"name" | "price" | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);
    const isAllSelected = selectedRows.length === sampleData.length;
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < sampleData.length;
    const toggleSelectAll = () => {
      setSelectedRows(isAllSelected ? [] : sampleData.map(d => d.id));
    };
    const toggleSelectRow = (id: string) => {
      setSelectedRows(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };
    const handleSort = (key: "name" | "price") => {
      if (sortKey === key) {
        if (sortDirection === "asc") setSortDirection("desc");else if (sortDirection === "desc") {
          setSortDirection(null);
          setSortKey(null);
        } else setSortDirection("asc");
      } else {
        setSortKey(key);
        setSortDirection("asc");
      }
    };
    const sortedData = [...sampleData].sort((a, b) => {
      if (!sortKey || !sortDirection) return 0;
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
    return <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            총 {sampleData.length}개 | {selectedRows.length}개 선택됨
          </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <TableCheckbox checked={isAllSelected} indeterminate={isIndeterminate} onChange={toggleSelectAll} />
              </TableHead>
              <TableSortHead sortDirection={sortKey === "name" ? sortDirection : null} onSort={() => handleSort("name")}>
                상품명
              </TableSortHead>
              <TableHead>카테고리</TableHead>
              <TableSortHead align="right" sortDirection={sortKey === "price" ? sortDirection : null} onSort={() => handleSort("price")}>
                가격
              </TableSortHead>
              <TableHead align="center">상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map(item => <TableRow key={item.id} selected={selectedRows.includes(item.id)}>
                <TableCell>
                  <TableCheckbox checked={selectedRows.includes(item.id)} onChange={() => toggleSelectRow(item.id)} />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
                <TableCell align="center">
                  <Badge variant={item.status === "판매중" ? "success" : "error"} size="sm">
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>;
  }
}`,...(ee=(Z=V.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const oe=["Default","WithSelection","WithSorting","WithStatus","ClickableRows","Empty","FullFeature"];export{k as ClickableRows,D as Default,N as Empty,V as FullFeature,R as WithSelection,H as WithSorting,_ as WithStatus,oe as __namedExportsOrder,ie as default};
