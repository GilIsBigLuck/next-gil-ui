import{j as e}from"./jsx-runtime-D_zvdyIk.js";function a({className:r="",width:s,height:t,variant:l="rectangular",animation:n="pulse"}){const C={text:"rounded-sm",circular:"rounded-full",rectangular:""}[l],c={pulse:"animate-pulse",wave:"animate-skeleton-wave",none:""}[n],be={width:s,height:t??(l==="text"?"1em":void 0)};return e.jsx("div",{className:`bg-gray-200 ${C} ${c} ${r}`,style:be})}function d({lines:r=3,className:s="",lastLineWidth:t="60%"}){return e.jsx("div",{className:`space-y-2 ${s}`,children:Array.from({length:r}).map((l,n)=>e.jsx(a,{variant:"text",height:16,width:n===r-1?t:"100%"},n))})}function i({size:r="md",className:s=""}){const t={sm:"w-8 h-8",md:"w-10 h-10",lg:"w-12 h-12",xl:"w-16 h-16"}[r];return e.jsx(a,{variant:"circular",className:`${t} ${s}`})}function _({hasImage:r=!0,lines:s=2,className:t=""}){return e.jsxs("div",{className:`border border-gray-200 p-4 ${t}`,children:[r&&e.jsx(a,{height:160,className:"mb-4"}),e.jsx(a,{variant:"text",height:20,width:"70%",className:"mb-2"}),e.jsx(d,{lines:s})]})}function A({rows:r=5,columns:s=4,className:t=""}){return e.jsxs("div",{className:`w-full ${t}`,children:[e.jsx("div",{className:"flex gap-4 py-3 px-4 bg-gray-50 border-y border-gray-200",children:Array.from({length:s}).map((l,n)=>e.jsx(a,{height:16,className:"flex-1"},n))}),Array.from({length:r}).map((l,n)=>e.jsx("div",{className:"flex gap-4 py-3 px-4 border-b border-gray-200",children:Array.from({length:s}).map((C,c)=>e.jsx(a,{height:16,className:"flex-1",width:c===0?"80%":void 0},c))},n))]})}function q({items:r=3,hasAvatar:s=!0,className:t=""}){return e.jsx("div",{className:`space-y-4 ${t}`,children:Array.from({length:r}).map((l,n)=>e.jsxs("div",{className:"flex gap-3",children:[s&&e.jsx(i,{}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(a,{variant:"text",height:16,width:"40%"}),e.jsx(a,{variant:"text",height:14,width:"80%"})]})]},n))})}try{a.displayName="Skeleton",a.__docgenInfo={description:"",displayName:"Skeleton",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"rectangular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"circular"'},{value:'"rectangular"'}]}},animation:{defaultValue:{value:"pulse"},description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"pulse"'},{value:'"wave"'}]}}}}}catch{}try{d.displayName="SkeletonText",d.__docgenInfo={description:"",displayName:"SkeletonText",props:{lines:{defaultValue:{value:"3"},description:"",name:"lines",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},lastLineWidth:{defaultValue:{value:"60%"},description:"",name:"lastLineWidth",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="SkeletonAvatar",i.__docgenInfo={description:"",displayName:"SkeletonAvatar",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{_.displayName="SkeletonCard",_.__docgenInfo={description:"",displayName:"SkeletonCard",props:{hasImage:{defaultValue:{value:"true"},description:"",name:"hasImage",required:!1,type:{name:"boolean"}},lines:{defaultValue:{value:"2"},description:"",name:"lines",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{A.displayName="SkeletonTable",A.__docgenInfo={description:"",displayName:"SkeletonTable",props:{rows:{defaultValue:{value:"5"},description:"",name:"rows",required:!1,type:{name:"number"}},columns:{defaultValue:{value:"4"},description:"",name:"columns",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{q.displayName="SkeletonList",q.__docgenInfo={description:"",displayName:"SkeletonList",props:{items:{defaultValue:{value:"3"},description:"",name:"items",required:!1,type:{name:"number"}},hasAvatar:{defaultValue:{value:"true"},description:"",name:"hasAvatar",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _e={title:"Feedback/Skeleton",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular"],description:"스켈레톤 형태"},animation:{control:"select",options:["pulse","wave","none"],description:"애니메이션 타입"},width:{control:"text",description:"너비"},height:{control:"text",description:"높이"}}},o={args:{width:200,height:20}},m={args:{variant:"text",width:"100%"}},h={args:{variant:"circular",width:48,height:48}},p={args:{variant:"rectangular",width:200,height:100}},u={render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(d,{lines:4})})},x={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(i,{size:"sm"}),e.jsx(i,{size:"md"}),e.jsx(i,{size:"lg"}),e.jsx(i,{size:"xl"})]})},g={render:()=>e.jsx("div",{className:"max-w-sm",children:e.jsx(_,{})})},v={render:()=>e.jsx("div",{className:"max-w-sm",children:e.jsx(_,{hasImage:!1,lines:3})})},N={render:()=>e.jsx(A,{rows:5,columns:4})},f={render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(q,{items:4})})},y={render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(q,{items:4,hasAvatar:!1})})},j={render:()=>e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:Array.from({length:4}).map((r,s)=>e.jsxs("div",{className:"border border-gray-200 p-4",children:[e.jsx(a,{height:180,className:"mb-3"}),e.jsx(a,{variant:"text",height:16,width:"80%",className:"mb-2"}),e.jsx(a,{variant:"text",height:14,width:"60%",className:"mb-3"}),e.jsx(a,{variant:"text",height:20,width:"40%"})]},s))})},w={render:()=>e.jsxs("div",{className:"max-w-sm p-4 border border-gray-200",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx(i,{size:"xl"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(a,{variant:"text",height:20,width:"60%",className:"mb-2"}),e.jsx(a,{variant:"text",height:14,width:"40%"})]})]}),e.jsx(d,{lines:3}),e.jsxs("div",{className:"flex gap-2 mt-4",children:[e.jsx(a,{height:36,className:"flex-1"}),e.jsx(a,{height:36,className:"flex-1"})]})]})},S={render:()=>e.jsx("div",{className:"max-w-2xl space-y-4",children:Array.from({length:3}).map((r,s)=>e.jsxs("div",{className:"flex gap-4 p-4 border border-gray-200",children:[e.jsx(a,{width:120,height:90,className:"flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(a,{variant:"text",height:18,width:"80%",className:"mb-2"}),e.jsx(a,{variant:"text",height:14,width:"100%",className:"mb-1"}),e.jsx(a,{variant:"text",height:14,width:"60%",className:"mb-3"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{variant:"text",height:12,width:60}),e.jsx(a,{variant:"text",height:12,width:80})]})]})]},s))})},b={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-4 gap-4",children:Array.from({length:4}).map((r,s)=>e.jsxs("div",{className:"p-4 border border-gray-200",children:[e.jsx(a,{variant:"text",height:14,width:"50%",className:"mb-2"}),e.jsx(a,{variant:"text",height:28,width:"70%",className:"mb-2"}),e.jsx(a,{variant:"text",height:12,width:"40%"})]},s))}),e.jsxs("div",{className:"p-4 border border-gray-200",children:[e.jsx(a,{variant:"text",height:20,width:150,className:"mb-4"}),e.jsx(a,{height:200})]}),e.jsx("div",{className:"border border-gray-200",children:e.jsx(A,{rows:5,columns:5})})]})},k={render:()=>e.jsx("div",{className:"max-w-lg space-y-4",children:Array.from({length:3}).map((r,s)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx(i,{size:"md"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(a,{variant:"text",height:14,width:80}),e.jsx(a,{variant:"text",height:12,width:60})]}),e.jsx(d,{lines:2})]})]},s))})};var T,V,z;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 20
  }
}`,...(z=(V=o.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var L,I,$;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "text",
    width: "100%"
  }
}`,...($=(I=m.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var W,D,P;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "circular",
    width: 48,
    height: 48
  }
}`,...(P=(D=h.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var R,B,E;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "rectangular",
    width: 200,
    height: 100
  }
}`,...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var U,F,O;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <SkeletonText lines={4} />
    </div>
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var G,H,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <SkeletonAvatar size="sm" />
      <SkeletonAvatar size="md" />
      <SkeletonAvatar size="lg" />
      <SkeletonAvatar size="xl" />
    </div>
}`,...(J=(H=x.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm">
      <SkeletonCard />
    </div>
}`,...(Q=(M=g.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm">
      <SkeletonCard hasImage={false} lines={3} />
    </div>
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <SkeletonTable rows={5} columns={4} />
}`,...(re=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,te,ne;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <SkeletonList items={4} />
    </div>
}`,...(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,le,de;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <SkeletonList items={4} hasAvatar={false} />
    </div>
}`,...(de=(le=y.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,oe,me;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({
      length: 4
    }).map((_, i) => <div key={i} className="border border-gray-200 p-4">
          <Skeleton height={180} className="mb-3" />
          <Skeleton variant="text" height={16} width="80%" className="mb-2" />
          <Skeleton variant="text" height={14} width="60%" className="mb-3" />
          <Skeleton variant="text" height={20} width="40%" />
        </div>)}
    </div>
}`,...(me=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:me.source}}};var he,pe,ue;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm p-4 border border-gray-200">
      <div className="flex items-center gap-4 mb-4">
        <SkeletonAvatar size="xl" />
        <div className="flex-1">
          <Skeleton variant="text" height={20} width="60%" className="mb-2" />
          <Skeleton variant="text" height={14} width="40%" />
        </div>
      </div>
      <SkeletonText lines={3} />
      <div className="flex gap-2 mt-4">
        <Skeleton height={36} className="flex-1" />
        <Skeleton height={36} className="flex-1" />
      </div>
    </div>
}`,...(ue=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var xe,ge,ve;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl space-y-4">
      {Array.from({
      length: 3
    }).map((_, i) => <div key={i} className="flex gap-4 p-4 border border-gray-200">
          <Skeleton width={120} height={90} className="flex-shrink-0" />
          <div className="flex-1">
            <Skeleton variant="text" height={18} width="80%" className="mb-2" />
            <Skeleton variant="text" height={14} width="100%" className="mb-1" />
            <Skeleton variant="text" height={14} width="60%" className="mb-3" />
            <div className="flex gap-4">
              <Skeleton variant="text" height={12} width={60} />
              <Skeleton variant="text" height={12} width={80} />
            </div>
          </div>
        </div>)}
    </div>
}`,...(ve=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var Ne,fe,ye;b.parameters={...b.parameters,docs:{...(Ne=b.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {Array.from({
        length: 4
      }).map((_, i) => <div key={i} className="p-4 border border-gray-200">
            <Skeleton variant="text" height={14} width="50%" className="mb-2" />
            <Skeleton variant="text" height={28} width="70%" className="mb-2" />
            <Skeleton variant="text" height={12} width="40%" />
          </div>)}
      </div>

      {/* Chart placeholder */}
      <div className="p-4 border border-gray-200">
        <Skeleton variant="text" height={20} width={150} className="mb-4" />
        <Skeleton height={200} />
      </div>

      {/* Table */}
      <div className="border border-gray-200">
        <SkeletonTable rows={5} columns={5} />
      </div>
    </div>
}`,...(ye=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var je,we,Se;k.parameters={...k.parameters,docs:{...(je=k.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg space-y-4">
      {Array.from({
      length: 3
    }).map((_, i) => <div key={i} className="flex gap-3">
          <SkeletonAvatar size="md" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Skeleton variant="text" height={14} width={80} />
              <Skeleton variant="text" height={12} width={60} />
            </div>
            <SkeletonText lines={2} />
          </div>
        </div>)}
    </div>
}`,...(Se=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};const Ae=["Default","Text","Circular","Rectangular","TextBlock","AvatarSizes","CardSkeleton","CardWithoutImage","TableSkeleton","ListSkeleton","ListWithoutAvatar","ProductCard","UserProfile","ArticleList","Dashboard","CommentList"];export{S as ArticleList,x as AvatarSizes,g as CardSkeleton,v as CardWithoutImage,h as Circular,k as CommentList,b as Dashboard,o as Default,f as ListSkeleton,y as ListWithoutAvatar,j as ProductCard,p as Rectangular,N as TableSkeleton,m as Text,u as TextBlock,w as UserProfile,Ae as __namedExportsOrder,_e as default};
