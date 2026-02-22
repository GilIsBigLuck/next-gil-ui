(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Accordion Component
 *
 * 아코디언 컴포넌트
 * 접근성: aria-expanded, aria-controls, aria-labelledby
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
const AccordionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function Accordion({ children, defaultValue = [], multiple = false, className = "" }) {
    _s();
    const [openItems, setOpenItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    const baseId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const toggleItem = (id)=>{
        if (multiple) {
            setOpenItems((prev)=>prev.includes(id) ? prev.filter((item)=>item !== id) : [
                    ...prev,
                    id
                ]);
        } else {
            setOpenItems((prev)=>prev.includes(id) ? [] : [
                    id
                ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContext.Provider, {
        value: {
            openItems,
            toggleItem,
            multiple,
            baseId
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `border border-gray-200 divide-y divide-gray-200 ${className}`,
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Accordion, "4DFkiEoN/4XLQfwgm9owlVVGNoE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Accordion;
function AccordionItem({ value, children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        "data-accordion-item": value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c1 = AccordionItem;
function AccordionTrigger({ value, children, disabled = false, className = "" }) {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AccordionContext);
    if (!context) throw new Error("AccordionTrigger must be used within Accordion");
    const { openItems, toggleItem, baseId } = context;
    const isOpen = openItems.includes(value);
    const triggerId = `${baseId}-trigger-${value}`;
    const contentId = `${baseId}-content-${value}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            id: triggerId,
            "aria-expanded": isOpen,
            "aria-controls": contentId,
            onClick: ()=>!disabled && toggleItem(value),
            disabled: disabled,
            className: `
          w-full flex items-center justify-between px-4 py-4
          text-left font-medium text-gray-900
          hover:bg-gray-50 transition-colors
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${className}
        `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: `w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M19 9l-7 7-7-7"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s1(AccordionTrigger, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c2 = AccordionTrigger;
function AccordionContent({ value, children, className = "" }) {
    _s2();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AccordionContext);
    if (!context) throw new Error("AccordionContent must be used within Accordion");
    const { openItems, baseId } = context;
    const isOpen = openItems.includes(value);
    const triggerId = `${baseId}-trigger-${value}`;
    const contentId = `${baseId}-content-${value}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: contentId,
        role: "region",
        "aria-labelledby": triggerId,
        hidden: !isOpen,
        className: `
        overflow-hidden transition-all duration-200
        ${isOpen ? "max-h-96" : "max-h-0"}
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `px-4 py-4 bg-gray-50 text-gray-600 ${className}`,
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s2(AccordionContent, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c3 = AccordionContent;
const __TURBOPACK__default__export__ = Accordion;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Accordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger");
__turbopack_context__.k.register(_c3, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Badge Component
 *
 * 사용법 (React/Next.js):
 * <Badge>기본</Badge>
 * <Badge variant="success">성공</Badge>
 *
 * Angular에서 동일한 클래스 사용:
 * <span class="inline-flex items-center px-2.5 py-0.5 text-sm font-medium bg-success-500 text-white">
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const variantStyles = {
    default: "bg-gray-100 text-gray-700",
    primary: "bg-primary-900 text-white",
    secondary: "bg-secondary-200 text-secondary-700",
    success: "bg-success-500 text-white",
    warning: "bg-warning-500 text-white",
    error: "bg-error-500 text-white",
    info: "bg-info-500 text-white"
};
const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-base"
};
const Badge = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ variant = "default", size = "md", className = "", children, ...props }, ref)=>{
    const baseStyles = "inline-flex items-center font-medium";
    const classes = [
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: classes,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Badge.tsx",
        lineNumber: 62,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Badge;
Badge.displayName = "Badge";
const __TURBOPACK__default__export__ = Badge;
var _c, _c1;
__turbopack_context__.k.register(_c, "Badge$forwardRef");
__turbopack_context__.k.register(_c1, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Button Component
 *
 * 사용법 (React/Next.js):
 * <Button variant="primary" size="md">버튼</Button>
 *
 * Angular에서 동일한 클래스 사용:
 * <button class="bg-primary-900 text-white px-4 py-2 font-medium hover-prism">
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const variantStyles = {
    primary: "bg-primary-900 text-white",
    secondary: "bg-secondary-700 text-white",
    outline: "border border-primary-900 text-primary-900",
    ghost: "text-gray-700",
    danger: "bg-error-600 text-white"
};
const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ variant = "primary", size = "md", fullWidth = false, rounded = "none", className = "", disabled, children, ...props }, ref)=>{
    const baseStyles = "inline-flex items-center justify-center font-medium hover-prism focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
    const roundedStyles = rounded === "pill" ? "rounded-full" : "";
    const classes = [
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        roundedStyles,
        fullWidth ? "w-full" : "",
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: classes,
        disabled: disabled,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 flex items-center justify-center gap-2",
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Button.tsx",
            lineNumber: 70,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Button.tsx",
        lineNumber: 69,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
const __TURBOPACK__default__export__ = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Card Component
 *
 * 사용법 (React/Next.js):
 * <Card>내용</Card>
 * <Card variant="outlined" padding="lg">내용</Card>
 *
 * Angular에서 동일한 클래스 사용:
 * <div class="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const variantStyles = {
    elevated: "bg-white border border-gray-200 shadow-sm",
    outlined: "bg-white border border-gray-300",
    filled: "bg-gray-50 border border-transparent"
};
const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
};
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ variant = "elevated", padding = "md", className = "", children, ...props }, ref)=>{
    const baseStyles = "";
    const classes = [
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: classes,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Card.tsx",
        lineNumber: 58,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Card;
Card.displayName = "Card";
const __TURBOPACK__default__export__ = Card;
var _c, _c1;
__turbopack_context__.k.register(_c, "Card$forwardRef");
__turbopack_context__.k.register(_c1, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Checkbox Component
 *
 * 체크박스 컴포넌트
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Checkbox = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, description, className = "", disabled, id, ...props }, ref)=>{
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        htmlFor: inputId,
        className: `inline-flex items-start gap-2 cursor-pointer select-none ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                id: inputId,
                type: "checkbox",
                disabled: disabled,
                className: " w-5 h-5 border-2 border-gray-300 bg-white flex-shrink-0 checked:bg-primary-900 checked:border-primary-900 focus:ring-2 focus:ring-primary-900 focus:ring-offset-2 disabled:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed transition-colors cursor-pointer appearance-none checked:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2%206l3%203%205-6%22%2F%3E%3C%2Fsvg%3E')] checked:bg-center checked:bg-no-repeat checked:bg-[length:12px] ",
                ...props
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Checkbox.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            (label || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-0.5",
                children: [
                    label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-gray-900 leading-5",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Checkbox.tsx",
                        lineNumber: 44,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500 leading-5",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Checkbox.tsx",
                        lineNumber: 45,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Checkbox.tsx",
                lineNumber: 43,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Checkbox.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Checkbox;
Checkbox.displayName = "Checkbox";
const __TURBOPACK__default__export__ = Checkbox;
var _c, _c1;
__turbopack_context__.k.register(_c, "Checkbox$forwardRef");
__turbopack_context__.k.register(_c1, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DateInput",
    ()=>DateInput,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * DateInput Component
 *
 * 날짜 입력 컴포넌트
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const sizeStyles = {
    sm: "px-3 py-1.5 text-sm pr-10",
    md: "px-4 py-2 text-base pr-10",
    lg: "px-4 py-3 text-lg pr-12"
};
const DateInput = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ label, error = false, errorMessage, size = "md", className = "", id, disabled, ...props }, ref)=>{
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");
    const handleClick = ()=>{
        if (!disabled && inputRef.current) {
            inputRef.current.showPicker?.();
        }
    };
    const baseStyles = "w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer";
    const stateStyles = error ? "border-error-500 focus:ring-error-500 focus:border-error-500" : "border-gray-300 focus:ring-primary-900 focus:border-transparent";
    const classes = [
        baseStyles,
        stateStyles,
        sizeStyles[size],
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1.5",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: "text-sm font-medium text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx",
                lineNumber: 61,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                onClick: handleClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: (node)=>{
                            inputRef.current = node;
                            if (typeof ref === "function") {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                        },
                        id: inputId,
                        type: "date",
                        className: `${classes} [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer`,
                        disabled: disabled,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "3",
                                    y: "4",
                                    width: "18",
                                    height: "18",
                                    rx: "2",
                                    ry: "2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "16",
                                    y1: "2",
                                    x2: "16",
                                    y2: "6"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "8",
                                    y1: "2",
                                    x2: "8",
                                    y2: "6"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "10",
                                    x2: "21",
                                    y2: "10"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-error-500",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx",
                lineNumber: 94,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx",
        lineNumber: 59,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "iD9XNNsNOlNDckBemnvlLS+aHYk=")), "iD9XNNsNOlNDckBemnvlLS+aHYk=");
_c1 = DateInput;
DateInput.displayName = "DateInput";
const __TURBOPACK__default__export__ = DateInput;
var _c, _c1;
__turbopack_context__.k.register(_c, "DateInput$forwardRef");
__turbopack_context__.k.register(_c1, "DateInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileUpload",
    ()=>FileUpload,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * FileUpload Component
 *
 * 파일 업로드 컴포넌트 (드래그앤드롭 지원)
 * 접근성: aria-label, role="button"
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function FileUpload({ label, accept, multiple = false, maxSize, maxFiles = 10, disabled = false, error = false, errorMessage, onChange, onError, className = "", showPreview = true }) {
    _s();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [internalError, setInternalError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const formatFileSize = (bytes)=>{
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = [
            "Bytes",
            "KB",
            "MB",
            "GB"
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    const validateFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUpload.useCallback[validateFiles]": (fileList)=>{
            let error = null;
            const valid = [];
            for (const file of fileList){
                // Check max files
                if (files.length + valid.length >= maxFiles) {
                    error = `최대 ${maxFiles}개까지 업로드 가능합니다`;
                    break;
                }
                // Check file size
                if (maxSize && file.size > maxSize) {
                    error = `파일 크기는 ${formatFileSize(maxSize)} 이하여야 합니다`;
                    continue;
                }
                // Check file type
                if (accept) {
                    const acceptedTypes = accept.split(",").map({
                        "FileUpload.useCallback[validateFiles].acceptedTypes": (t)=>t.trim()
                    }["FileUpload.useCallback[validateFiles].acceptedTypes"]);
                    const fileType = file.type;
                    const fileExt = "." + file.name.split(".").pop()?.toLowerCase();
                    const isAccepted = acceptedTypes.some({
                        "FileUpload.useCallback[validateFiles].isAccepted": (type)=>{
                            if (type.startsWith(".")) {
                                return fileExt === type.toLowerCase();
                            }
                            if (type.endsWith("/*")) {
                                return fileType.startsWith(type.replace("/*", "/"));
                            }
                            return fileType === type;
                        }
                    }["FileUpload.useCallback[validateFiles].isAccepted"]);
                    if (!isAccepted) {
                        error = "지원하지 않는 파일 형식입니다";
                        continue;
                    }
                }
                valid.push(file);
            }
            return {
                valid,
                error
            };
        }
    }["FileUpload.useCallback[validateFiles]"], [
        files.length,
        maxFiles,
        maxSize,
        accept
    ]);
    const processFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUpload.useCallback[processFiles]": (fileList)=>{
            const fileArray = Array.from(fileList);
            const { valid, error } = validateFiles(fileArray);
            if (error) {
                setInternalError(error);
                onError?.(error);
            } else {
                setInternalError(null);
            }
            if (valid.length === 0) return;
            const newFiles = valid.map({
                "FileUpload.useCallback[processFiles].newFiles": (file)=>{
                    const fileWithPreview = {
                        file
                    };
                    // Generate preview for images
                    if (file.type.startsWith("image/")) {
                        fileWithPreview.preview = URL.createObjectURL(file);
                    }
                    return fileWithPreview;
                }
            }["FileUpload.useCallback[processFiles].newFiles"]);
            const updatedFiles = multiple ? [
                ...files,
                ...newFiles
            ] : newFiles;
            setFiles(updatedFiles);
            onChange?.(updatedFiles.map({
                "FileUpload.useCallback[processFiles]": (f)=>f.file
            }["FileUpload.useCallback[processFiles]"]));
        }
    }["FileUpload.useCallback[processFiles]"], [
        files,
        multiple,
        onChange,
        onError,
        validateFiles
    ]);
    const handleChange = (e)=>{
        if (e.target.files) {
            processFiles(e.target.files);
        }
        // Reset input value to allow selecting the same file again
        e.target.value = "";
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        if (!disabled) {
            setIsDragging(true);
        }
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        setIsDragging(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragging(false);
        if (disabled) return;
        if (e.dataTransfer.files) {
            processFiles(e.dataTransfer.files);
        }
    };
    const handleClick = ()=>{
        if (!disabled) {
            inputRef.current?.click();
        }
    };
    const handleRemove = (index)=>{
        const fileToRemove = files[index];
        if (fileToRemove.preview) {
            URL.revokeObjectURL(fileToRemove.preview);
        }
        const updatedFiles = files.filter((_, i)=>i !== index);
        setFiles(updatedFiles);
        onChange?.(updatedFiles.map((f)=>f.file));
        setInternalError(null);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
        }
    };
    const displayError = error ? errorMessage : internalError;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col gap-2 ${className}`,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-medium text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "button",
                tabIndex: disabled ? -1 : 0,
                onClick: handleClick,
                onKeyDown: handleKeyDown,
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onDrop: handleDrop,
                "aria-label": label || "파일 업로드",
                "aria-disabled": disabled,
                className: `
          relative border-2 border-dashed p-6 text-center transition-colors
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "cursor-pointer hover:border-primary-400 hover:bg-primary-50"}
          ${isDragging ? "border-primary-500 bg-primary-50" : ""}
          ${displayError ? "border-error-500" : "border-gray-300"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "file",
                        accept: accept,
                        multiple: multiple,
                        onChange: handleChange,
                        disabled: disabled,
                        className: "hidden",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: `w-10 h-10 ${isDragging ? "text-primary-500" : "text-gray-400"}`,
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-primary-900",
                                        children: "클릭"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    "하거나",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-primary-900",
                                        children: "드래그"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    "하여 파일을 업로드하세요"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            accept && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: accept.replace(/,/g, ", ")
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            maxSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: [
                                    "최대 ",
                                    formatFileSize(maxSize)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            displayError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-error-500",
                role: "alert",
                children: displayError
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, this),
            files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: files.map((fileItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 p-3 bg-gray-50 border border-gray-200",
                        children: [
                            showPreview && fileItem.preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: fileItem.preview,
                                alt: fileItem.file.name,
                                className: "w-12 h-12 object-cover flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                lineNumber: 280,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-gray-200 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6 text-gray-500",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                        lineNumber: 295,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                    lineNumber: 287,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                lineNumber: 286,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-900 truncate",
                                        children: fileItem.file.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: formatFileSize(fileItem.file.size)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                lineNumber: 305,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handleRemove(index);
                                },
                                disabled: disabled,
                                "aria-label": `${fileItem.file.name} 삭제`,
                                className: "p-1 text-gray-400 hover:text-error-500 transition-colors disabled:cursor-not-allowed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                        lineNumber: 333,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                    lineNumber: 325,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                                lineNumber: 315,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${fileItem.file.name}-${index}`, true, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                        lineNumber: 274,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
                lineNumber: 272,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_s(FileUpload, "ncTkDaqaBkoRgaGIYzcIMI/nlek=");
_c = FileUpload;
const __TURBOPACK__default__export__ = FileUpload;
var _c;
__turbopack_context__.k.register(_c, "FileUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Input Component
 *
 * 사용법 (React/Next.js):
 * <Input placeholder="이메일" />
 * <Input error errorMessage="필수 입력입니다" />
 *
 * Angular에서 동일한 클래스 사용:
 * <input class="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-primary-900 focus:border-transparent" />
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-4 py-3 text-lg"
};
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, error = false, errorMessage, success = false, successMessage, size = "md", layout = "column", labelWidth = "w-24", className = "", id, ...props }, ref)=>{
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");
    const baseStyles = "w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed";
    const stateStyles = error ? "border-error-500 focus:ring-error-500 focus:border-error-500" : success ? "border-success-500 focus:ring-success-500 focus:border-success-500" : "border-gray-300 focus:ring-primary-900 focus:border-transparent";
    const classes = [
        baseStyles,
        stateStyles,
        sizeStyles[size],
        className
    ].filter(Boolean).join(" ");
    const isRow = layout === "row";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${isRow ? "flex-row items-center gap-3" : "flex-col gap-1.5"}`,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: `text-sm font-medium text-gray-700 ${isRow ? `flex-shrink-0 ${labelWidth}` : ""}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Input.tsx",
                lineNumber: 71,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${isRow ? "flex-1" : ""} flex flex-col gap-1.5`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: ref,
                        id: inputId,
                        className: classes,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Input.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-error-500",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Input.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    success && successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-success-600",
                        children: successMessage
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Input.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Input.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Input.tsx",
        lineNumber: 69,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
const __TURBOPACK__default__export__ = Input;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "Confirm",
    ()=>Confirm,
    "ImagePopup",
    ()=>ImagePopup,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Modal Components
 *
 * Alert, Confirm, ImagePopup 모달 컴포넌트
 * 접근성: role="dialog", aria-modal, aria-labelledby, aria-describedby
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
function ModalBase({ isOpen, onClose, children, ariaLabelledby, ariaDescribedby }) {
    _s();
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousActiveElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalBase.useEffect": ()=>{
            if (isOpen) {
                // Store the current active element to restore focus later
                previousActiveElement.current = document.activeElement;
                document.body.style.overflow = "hidden";
                // Focus the modal
                modalRef.current?.focus();
            } else {
                document.body.style.overflow = "";
                // Restore focus to the previous element
                previousActiveElement.current?.focus();
            }
            return ({
                "ModalBase.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["ModalBase.useEffect"];
        }
    }["ModalBase.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalBase.useEffect": ()=>{
            const handleEsc = {
                "ModalBase.useEffect.handleEsc": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["ModalBase.useEffect.handleEsc"];
            if (isOpen) {
                window.addEventListener("keydown", handleEsc);
            }
            return ({
                "ModalBase.useEffect": ()=>window.removeEventListener("keydown", handleEsc)
            })["ModalBase.useEffect"];
        }
    }["ModalBase.useEffect"], [
        isOpen,
        onClose
    ]);
    // Focus trap
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalBase.useEffect": ()=>{
            if (!isOpen || !modalRef.current) return;
            const modal = modalRef.current;
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            const handleTabKey = {
                "ModalBase.useEffect.handleTabKey": (e)=>{
                    if (e.key !== "Tab") return;
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement?.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement?.focus();
                        }
                    }
                }
            }["ModalBase.useEffect.handleTabKey"];
            modal.addEventListener("keydown", handleTabKey);
            return ({
                "ModalBase.useEffect": ()=>modal.removeEventListener("keydown", handleTabKey)
            })["ModalBase.useEffect"];
        }
    }["ModalBase.useEffect"], [
        isOpen
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 transition-opacity",
                onClick: onClose,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: modalRef,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": ariaLabelledby,
                "aria-describedby": ariaDescribedby,
                tabIndex: -1,
                className: "relative z-10 w-full max-w-md mx-4 bg-white shadow-xl outline-none",
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this), document.body);
}
_s(ModalBase, "Ly0kZz6emEjy+KsxmgWGk1lR2jI=");
_c = ModalBase;
function Alert({ isOpen, onClose, title = "알림", message, confirmText = "확인" }) {
    _s1();
    const titleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const descId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalBase, {
        isOpen: isOpen,
        onClose: onClose,
        ariaLabelledby: titleId,
        ariaDescribedby: descId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                "aria-label": "닫기",
                className: "absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 6L6 18M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 pt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: titleId,
                        className: "text-xl font-bold text-gray-900 mb-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: descId,
                        className: "text-gray-600",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "px-6 py-3 text-lg bg-primary-900 text-white font-medium transition-all duration-300 hover-prism cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative z-10",
                        children: confirmText
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s1(Alert, "DsV0xos1Jc5AaPPQGC3PbJ2cRnU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c1 = Alert;
function Confirm({ isOpen, onClose, onConfirm, title = "확인", message, confirmText = "확인", cancelText = "취소", variant = "default" }) {
    _s2();
    const titleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const descId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const handleConfirm = ()=>{
        onConfirm();
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalBase, {
        isOpen: isOpen,
        onClose: onClose,
        ariaLabelledby: titleId,
        ariaDescribedby: descId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                "aria-label": "닫기",
                className: "absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 6L6 18M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 pt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: titleId,
                        className: "text-xl font-bold text-gray-900 mb-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: descId,
                        className: "text-gray-600",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 flex justify-end gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "px-6 py-3 text-lg border border-gray-300 text-gray-700 font-medium transition-all duration-300 hover:bg-gray-100 cursor-pointer",
                        children: cancelText
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleConfirm,
                        className: `px-6 py-3 text-lg font-medium transition-all duration-300 hover-prism cursor-pointer ${variant === "danger" ? "bg-error-600 text-white" : "bg-primary-900 text-white"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative z-10",
                            children: confirmText
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s2(Confirm, "DsV0xos1Jc5AaPPQGC3PbJ2cRnU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c2 = Confirm;
function ImagePopup({ isOpen, onClose, src, alt = "" }) {
    _s3();
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousActiveElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImagePopup.useEffect": ()=>{
            if (isOpen) {
                previousActiveElement.current = document.activeElement;
                modalRef.current?.focus();
            } else {
                previousActiveElement.current?.focus();
            }
        }
    }["ImagePopup.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImagePopup.useEffect": ()=>{
            const handleEsc = {
                "ImagePopup.useEffect.handleEsc": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["ImagePopup.useEffect.handleEsc"];
            if (isOpen) {
                window.addEventListener("keydown", handleEsc);
            }
            return ({
                "ImagePopup.useEffect": ()=>window.removeEventListener("keydown", handleEsc)
            })["ImagePopup.useEffect"];
        }
    }["ImagePopup.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: modalRef,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": alt || "이미지 팝업",
        tabIndex: -1,
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out outline-none",
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                "aria-label": "닫기",
                className: "absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 6L6 18M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                        lineNumber: 280,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: alt,
                className: "max-w-[90vw] max-h-[90vh] object-contain",
                onClick: (e)=>e.stopPropagation()
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this), document.body);
}
_s3(ImagePopup, "6+ymxbc78AAZOIolDu7q65cLeFc=");
_c3 = ImagePopup;
const __TURBOPACK__default__export__ = {
    Alert,
    Confirm,
    ImagePopup
};
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ModalBase");
__turbopack_context__.k.register(_c1, "Alert");
__turbopack_context__.k.register(_c2, "Confirm");
__turbopack_context__.k.register(_c3, "ImagePopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberInput",
    ()=>NumberInput,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * NumberInput Component
 *
 * 숫자 입력 컴포넌트 (증가/감소 버튼)
 * 접근성: 버튼 aria-label, 입력 aria-valuemin/max/now
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const sizeStyles = {
    sm: {
        input: "px-3 py-1.5 text-sm",
        button: "w-8"
    },
    md: {
        input: "px-4 py-2 text-base",
        button: "w-10"
    },
    lg: {
        input: "px-4 py-3 text-lg",
        button: "w-12"
    }
};
const NumberInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, error = false, errorMessage, size = "md", className = "", id, disabled, value = 0, onChange, min, max, step = 1, ...props }, ref)=>{
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");
    const handleIncrement = ()=>{
        const newValue = (value || 0) + step;
        if (max !== undefined && newValue > max) return;
        onChange?.(newValue);
    };
    const handleDecrement = ()=>{
        const newValue = (value || 0) - step;
        if (min !== undefined && newValue < min) return;
        onChange?.(newValue);
    };
    const handleChange = (e)=>{
        const newValue = parseFloat(e.target.value) || 0;
        if (min !== undefined && newValue < min) return;
        if (max !== undefined && newValue > max) return;
        onChange?.(newValue);
    };
    const baseStyles = "w-full border-y border-l transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 focus:z-10 disabled:bg-gray-100 disabled:cursor-not-allowed text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";
    const stateStyles = error ? "border-error-500 focus:ring-error-500 focus:border-error-500" : "border-gray-300 focus:ring-primary-900 focus:border-transparent";
    const classes = [
        baseStyles,
        stateStyles,
        sizeStyles[size].input,
        className
    ].filter(Boolean).join(" ");
    const buttonBase = `flex items-center justify-center border border-gray-300 bg-gray-50 text-gray-600
      hover:bg-gray-100 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400
      transition-colors cursor-pointer ${sizeStyles[size].button}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1.5",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: "text-sm font-medium text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
                lineNumber: 88,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleDecrement,
                        disabled: disabled || min !== undefined && value <= min,
                        "aria-label": "감소",
                        className: `${buttonBase} border-r-0`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "5",
                                y1: "12",
                                x2: "19",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: ref,
                        id: inputId,
                        type: "number",
                        value: value,
                        onChange: handleChange,
                        className: classes,
                        disabled: disabled,
                        min: min,
                        max: max,
                        step: step,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleIncrement,
                        disabled: disabled || max !== undefined && value >= max,
                        "aria-label": "증가",
                        className: `${buttonBase} border-l-0`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "12",
                                    y1: "5",
                                    x2: "12",
                                    y2: "19"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "5",
                                    y1: "12",
                                    x2: "19",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-error-500",
                role: "alert",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
                lineNumber: 134,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx",
        lineNumber: 86,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = NumberInput;
NumberInput.displayName = "NumberInput";
const __TURBOPACK__default__export__ = NumberInput;
var _c, _c1;
__turbopack_context__.k.register(_c, "NumberInput$forwardRef");
__turbopack_context__.k.register(_c1, "NumberInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Pagination Component
 *
 * 페이지네이션 컴포넌트
 * 접근성: nav aria-label, aria-current="page"
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function Pagination({ currentPage, totalPages, onPageChange, siblingCount = 1, className = "" }) {
    _s();
    const pages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Pagination.useMemo[pages]": ()=>{
            const range = {
                "Pagination.useMemo[pages].range": (start, end)=>{
                    return Array.from({
                        length: end - start + 1
                    }, {
                        "Pagination.useMemo[pages].range": (_, i)=>start + i
                    }["Pagination.useMemo[pages].range"]);
                }
            }["Pagination.useMemo[pages].range"];
            const totalPageNumbers = siblingCount * 2 + 5; // siblings + first + last + current + 2 dots
            if (totalPages <= totalPageNumbers) {
                return range(1, totalPages);
            }
            const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
            const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
            const showLeftDots = leftSiblingIndex > 2;
            const showRightDots = rightSiblingIndex < totalPages - 1;
            if (!showLeftDots && showRightDots) {
                const leftRange = range(1, 3 + siblingCount * 2);
                return [
                    ...leftRange,
                    "...",
                    totalPages
                ];
            }
            if (showLeftDots && !showRightDots) {
                const rightRange = range(totalPages - (2 + siblingCount * 2), totalPages);
                return [
                    1,
                    "...",
                    ...rightRange
                ];
            }
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [
                1,
                "...",
                ...middleRange,
                "...",
                totalPages
            ];
        }
    }["Pagination.useMemo[pages]"], [
        currentPage,
        totalPages,
        siblingCount
    ]);
    if (totalPages <= 1) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "페이지 네비게이션",
        className: `flex items-center justify-center gap-1 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onPageChange(currentPage - 1),
                disabled: currentPage === 1,
                "aria-label": "이전 페이지",
                className: " px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-300 hover:bg-gray-50 ",
                children: "이전"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Pagination.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            pages.map((page, index)=>{
                if (page === "...") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-3 py-2 text-sm text-gray-500",
                        "aria-hidden": "true",
                        children: "..."
                    }, `dots-${index}`, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Pagination.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this);
                }
                const pageNumber = page;
                const isActive = pageNumber === currentPage;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onPageChange(pageNumber),
                    "aria-label": `${pageNumber} 페이지`,
                    "aria-current": isActive ? "page" : undefined,
                    className: `
              px-3 py-2 text-sm font-medium border transition-all duration-300 cursor-pointer
              ${isActive ? "bg-primary-900 text-white border-primary-900" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}
            `,
                    children: pageNumber
                }, pageNumber, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Pagination.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onPageChange(currentPage + 1),
                disabled: currentPage === totalPages,
                "aria-label": "다음 페이지",
                className: " px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-300 hover:bg-gray-50 ",
                children: "다음"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Pagination.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Pagination.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Pagination, "FIcFCAcA4FH4sxFK46EQ/x3RnLw=");
_c = Pagination;
const __TURBOPACK__default__export__ = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PasswordInput",
    ()=>PasswordInput,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * PasswordInput Component
 *
 * 비밀번호 입력 컴포넌트 (표시/숨김 토글)
 * 접근성: 토글 버튼 aria-label, aria-pressed
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-4 py-3 text-lg"
};
const PasswordInput = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ label, error = false, errorMessage, size = "md", className = "", id, disabled, ...props }, ref)=>{
    _s();
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");
    const baseStyles = "w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed pr-10";
    const stateStyles = error ? "border-error-500 focus:ring-error-500 focus:border-error-500" : "border-gray-300 focus:ring-primary-900 focus:border-transparent";
    const classes = [
        baseStyles,
        stateStyles,
        sizeStyles[size],
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1.5",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: "text-sm font-medium text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: ref,
                        id: inputId,
                        type: showPassword ? "text" : "password",
                        className: classes,
                        disabled: disabled,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowPassword(!showPassword),
                        disabled: disabled,
                        "aria-label": showPassword ? "비밀번호 숨기기" : "비밀번호 표시",
                        "aria-pressed": showPassword,
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:cursor-not-allowed transition-colors cursor-pointer",
                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "1",
                                    y1: "1",
                                    x2: "23",
                                    y2: "23"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "3"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
                            lineNumber: 86,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-error-500",
                role: "alert",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
                lineNumber: 94,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx",
        lineNumber: 54,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "daguiRHWMFkqPgCh/ppD7CF5VuQ=")), "daguiRHWMFkqPgCh/ppD7CF5VuQ=");
_c1 = PasswordInput;
PasswordInput.displayName = "PasswordInput";
const __TURBOPACK__default__export__ = PasswordInput;
var _c, _c1;
__turbopack_context__.k.register(_c, "PasswordInput$forwardRef");
__turbopack_context__.k.register(_c1, "PasswordInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Radio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Radio",
    ()=>Radio,
    "RadioGroup",
    ()=>RadioGroup,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Radio Component
 *
 * 라디오 버튼 컴포넌트
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Radio = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ label, description, className = "", disabled, id, ...props }, ref)=>{
    const inputId = id || `${props.name}-${props.value}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        htmlFor: inputId,
        className: `inline-flex items-center gap-2 cursor-pointer select-none ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                id: inputId,
                type: "radio",
                disabled: disabled,
                className: " w-5 h-5 border-2 border-gray-300 bg-white rounded-full flex-shrink-0 checked:border-primary-900 checked:border-[6px] focus:ring-2 focus:ring-primary-900 focus:ring-offset-2 disabled:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed transition-all cursor-pointer appearance-none ",
                ...props
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Radio.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            (label || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-gray-900",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Radio.tsx",
                        lineNumber: 42,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Radio.tsx",
                        lineNumber: 43,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Radio.tsx",
                lineNumber: 41,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Radio.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c = Radio;
Radio.displayName = "Radio";
function RadioGroup({ name, value, onChange, options, disabled, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col gap-3 ${className}`,
        children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Radio, {
                name: name,
                value: option.value,
                label: option.label,
                description: option.description,
                checked: value === option.value,
                onChange: (e)=>onChange?.(e.target.value),
                disabled: disabled || option.disabled
            }, option.value, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Radio.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Radio.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c1 = RadioGroup;
const __TURBOPACK__default__export__ = Radio;
var _c, _c1;
__turbopack_context__.k.register(_c, "Radio");
__turbopack_context__.k.register(_c1, "RadioGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Select Component
 *
 * 드롭다운 선택 컴포넌트
 * 접근성: role="combobox/listbox/option", aria-expanded, aria-haspopup, aria-activedescendant
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-4 py-3 text-lg"
};
const Select = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ options, value, onChange, placeholder = "선택하세요", label, size = "md", layout = "column", labelWidth = "w-24", disabled = false, error = false, errorMessage, success = false, successMessage, className = "" }, ref)=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlightedIndex, setHighlightedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const baseId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const buttonId = `${baseId}-button`;
    const listboxId = `${baseId}-listbox`;
    const labelId = label ? `${baseId}-label` : undefined;
    const selectedOption = options.find((opt)=>opt.value === value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Select.useEffect": ()=>{
            const handleClickOutside = {
                "Select.useEffect.handleClickOutside": (e)=>{
                    if (containerRef.current && !containerRef.current.contains(e.target)) {
                        setIsOpen(false);
                    }
                }
            }["Select.useEffect.handleClickOutside"];
            const handleEscape = {
                "Select.useEffect.handleEscape": (e)=>{
                    if (e.key === "Escape") setIsOpen(false);
                }
            }["Select.useEffect.handleEscape"];
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
            return ({
                "Select.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                    document.removeEventListener("keydown", handleEscape);
                }
            })["Select.useEffect"];
        }
    }["Select.useEffect"], []);
    // Reset highlighted index when opening
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Select.useEffect": ()=>{
            if (isOpen) {
                const selectedIndex = options.findIndex({
                    "Select.useEffect.selectedIndex": (opt)=>opt.value === value
                }["Select.useEffect.selectedIndex"]);
                setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
            }
        }
    }["Select.useEffect"], [
        isOpen,
        options,
        value
    ]);
    const handleSelect = (option)=>{
        if (option.disabled) return;
        onChange?.(option.value);
        setIsOpen(false);
    };
    const handleKeyDown = (e)=>{
        if (disabled) return;
        switch(e.key){
            case "Enter":
            case " ":
                e.preventDefault();
                if (isOpen && highlightedIndex >= 0) {
                    const option = options[highlightedIndex];
                    if (!option.disabled) handleSelect(option);
                } else {
                    setIsOpen(true);
                }
                break;
            case "ArrowDown":
                e.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                } else {
                    setHighlightedIndex((prev)=>{
                        const next = prev + 1;
                        return next >= options.length ? 0 : next;
                    });
                }
                break;
            case "ArrowUp":
                e.preventDefault();
                if (isOpen) {
                    setHighlightedIndex((prev)=>{
                        const next = prev - 1;
                        return next < 0 ? options.length - 1 : next;
                    });
                }
                break;
            case "Home":
                if (isOpen) {
                    e.preventDefault();
                    setHighlightedIndex(0);
                }
                break;
            case "End":
                if (isOpen) {
                    e.preventDefault();
                    setHighlightedIndex(options.length - 1);
                }
                break;
        }
    };
    const isRow = layout === "row";
    const getOptionId = (index)=>`${baseId}-option-${index}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `flex ${isRow ? "flex-row items-center gap-3" : "flex-col gap-1.5"} ${className}`,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                id: labelId,
                className: `text-sm font-medium text-gray-700 ${isRow ? `flex-shrink-0 ${labelWidth}` : ""}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                lineNumber: 161,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: `relative ${isRow ? "flex-1" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        id: buttonId,
                        role: "combobox",
                        "aria-haspopup": "listbox",
                        "aria-expanded": isOpen,
                        "aria-controls": listboxId,
                        "aria-labelledby": labelId ? `${labelId} ${buttonId}` : undefined,
                        "aria-activedescendant": isOpen && highlightedIndex >= 0 ? getOptionId(highlightedIndex) : undefined,
                        onClick: ()=>!disabled && setIsOpen(!isOpen),
                        onKeyDown: handleKeyDown,
                        disabled: disabled,
                        className: `
              w-full flex items-center justify-between
              border bg-white cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent
              disabled:bg-gray-100 disabled:cursor-not-allowed
              transition-colors
              ${sizeStyles[size]}
              ${error ? "border-error-500" : success ? "border-success-500" : "border-gray-300"}
              ${isOpen ? "ring-2 ring-primary-900 border-transparent" : ""}
            `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: selectedOption ? "text-gray-900" : "text-gray-400",
                                children: selectedOption?.label || placeholder
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: `w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M19 9l-7 7-7-7"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        id: listboxId,
                        role: "listbox",
                        "aria-labelledby": labelId,
                        className: "absolute z-50 w-full mt-1 bg-white border border-gray-200 shadow-lg max-h-60 overflow-auto",
                        children: options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                id: getOptionId(index),
                                role: "option",
                                "aria-selected": option.value === value,
                                "aria-disabled": option.disabled,
                                onClick: ()=>handleSelect(option),
                                onMouseEnter: ()=>setHighlightedIndex(index),
                                className: `
                    w-full px-4 py-2 text-left transition-colors
                    ${option.disabled ? "text-gray-300 cursor-not-allowed" : "text-gray-900 cursor-pointer"}
                    ${option.value === value ? "bg-primary-50 text-primary-900 font-medium" : ""}
                    ${highlightedIndex === index && !option.disabled ? "bg-gray-100" : ""}
                    ${!option.disabled && option.value !== value ? "hover:bg-gray-100" : ""}
                  `,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        option.label,
                                        option.value === value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 text-primary-900",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                                                lineNumber: 244,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                                            lineNumber: 236,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                                    lineNumber: 233,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, option.value, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                                lineNumber: 217,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                        lineNumber: 210,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-error-500",
                role: "alert",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                lineNumber: 254,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            success && successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-success-600",
                children: successMessage
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
                lineNumber: 257,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx",
        lineNumber: 159,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "wNxJI5UWDKiZuc6ewlCeuSVLGrc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
})), "wNxJI5UWDKiZuc6ewlCeuSVLGrc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c1 = Select;
Select.displayName = "Select";
const __TURBOPACK__default__export__ = Select;
var _c, _c1;
__turbopack_context__.k.register(_c, "Select$forwardRef");
__turbopack_context__.k.register(_c1, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Skeleton Component
 *
 * 스켈레톤 로딩 컴포넌트
 */ __turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton,
    "SkeletonAvatar",
    ()=>SkeletonAvatar,
    "SkeletonCard",
    ()=>SkeletonCard,
    "SkeletonList",
    ()=>SkeletonList,
    "SkeletonTable",
    ()=>SkeletonTable,
    "SkeletonText",
    ()=>SkeletonText,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Skeleton({ className = "", width, height, variant = "rectangular", animation = "pulse" }) {
    const variantClass = {
        text: "rounded-sm",
        circular: "rounded-full",
        rectangular: ""
    }[variant];
    const animationClass = {
        pulse: "animate-pulse",
        wave: "animate-skeleton-wave",
        none: ""
    }[animation];
    const style = {
        width: width,
        height: height ?? (variant === "text" ? "1em" : undefined)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-gray-200 ${variantClass} ${animationClass} ${className}`,
        style: style
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
function SkeletonText({ lines = 3, className = "", lastLineWidth = "60%" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `space-y-2 ${className}`,
        children: Array.from({
            length: lines
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                variant: "text",
                height: 16,
                width: i === lines - 1 ? lastLineWidth : "100%"
            }, i, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c1 = SkeletonText;
function SkeletonAvatar({ size = "md", className = "" }) {
    const sizeClass = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
        xl: "w-16 h-16"
    }[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
        variant: "circular",
        className: `${sizeClass} ${className}`
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
        lineNumber: 87,
        columnNumber: 10
    }, this);
}
_c2 = SkeletonAvatar;
function SkeletonCard({ hasImage = true, lines = 2, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `border border-gray-200 p-4 ${className}`,
        children: [
            hasImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                height: 160,
                className: "mb-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                lineNumber: 103,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                variant: "text",
                height: 20,
                width: "70%",
                className: "mb-2"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                lines: lines
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_c3 = SkeletonCard;
function SkeletonTable({ rows = 5, columns = 4, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 py-3 px-4 bg-gray-50 border-y border-gray-200",
                children: Array.from({
                    length: columns
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        height: 16,
                        className: "flex-1"
                    }, i, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            Array.from({
                length: rows
            }).map((_, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 py-3 px-4 border-b border-gray-200",
                    children: Array.from({
                        length: columns
                    }).map((_, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                            height: 16,
                            className: "flex-1",
                            width: colIndex === 0 ? "80%" : undefined
                        }, colIndex, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this))
                }, rowIndex, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c4 = SkeletonTable;
function SkeletonList({ items = 3, hasAvatar = true, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `space-y-4 ${className}`,
        children: Array.from({
            length: items
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    hasAvatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonAvatar, {}, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                        lineNumber: 164,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                variant: "text",
                                height: 16,
                                width: "40%"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                variant: "text",
                                height: 14,
                                width: "80%"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c5 = SkeletonList;
const __TURBOPACK__default__export__ = Skeleton;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Skeleton");
__turbopack_context__.k.register(_c1, "SkeletonText");
__turbopack_context__.k.register(_c2, "SkeletonAvatar");
__turbopack_context__.k.register(_c3, "SkeletonCard");
__turbopack_context__.k.register(_c4, "SkeletonTable");
__turbopack_context__.k.register(_c5, "SkeletonList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Spinner Component
 *
 * 스피너 로딩 컴포넌트
 */ __turbopack_context__.s([
    "Spinner",
    ()=>Spinner,
    "SpinnerButton",
    ()=>SpinnerButton,
    "SpinnerOverlay",
    ()=>SpinnerOverlay,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Spinner({ size = "md", variant = "primary", className = "", label }) {
    const sizeClass = {
        xs: "w-3 h-3 border",
        sm: "w-4 h-4 border-2",
        md: "w-6 h-6 border-2",
        lg: "w-8 h-8 border-2",
        xl: "w-12 h-12 border-3"
    }[size];
    const variantClass = {
        primary: "border-primary-200 border-t-primary-900",
        secondary: "border-secondary-200 border-t-secondary-700",
        white: "border-white/30 border-t-white",
        gray: "border-gray-200 border-t-gray-600"
    }[variant];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-flex items-center gap-2 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${sizeClass} ${variantClass} rounded-full animate-spin`,
                role: "status",
                "aria-label": label || "로딩 중"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-gray-600",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx",
                lineNumber: 45,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = Spinner;
function SpinnerOverlay({ isVisible, label, variant = "primary", blur = false }) {
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute inset-0 flex items-center justify-center bg-white/80 z-10 ${blur ? "backdrop-blur-sm" : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                    size: "lg",
                    variant: variant
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-600",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx",
                    lineNumber: 73,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c1 = SpinnerOverlay;
function SpinnerButton({ isLoading, children, loadingText, size = "sm", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-2 ${className}`,
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                    size: size,
                    variant: "white"
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this),
                loadingText || children
            ]
        }, void 0, true) : children
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c2 = SpinnerButton;
const __TURBOPACK__default__export__ = Spinner;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Spinner");
__turbopack_context__.k.register(_c1, "SpinnerOverlay");
__turbopack_context__.k.register(_c2, "SpinnerButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCell",
    ()=>TableCell,
    "TableCheckbox",
    ()=>TableCheckbox,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow,
    "TableSortHead",
    ()=>TableSortHead,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Table Component
 *
 * 테이블 컴포넌트
 * 접근성: scope="col", aria-sort
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function Table({ children, className = "" }) {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const checkScroll = ()=>{
        const el = scrollRef.current;
        if (!el) return;
        const hasHorizontalScroll = el.scrollWidth > el.clientWidth;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(hasHorizontalScroll && el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Table.useEffect": ()=>{
            checkScroll();
            window.addEventListener("resize", checkScroll);
            return ({
                "Table.useEffect": ()=>window.removeEventListener("resize", checkScroll)
            })["Table.useEffect"];
        }
    }["Table.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            canScrollLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            canScrollRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 flex items-center justify-end pr-1",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    className: "text-gray-400 animate-pulse",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 4L10 8L6 12",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "w-full overflow-x-auto",
                onScroll: checkScroll,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: `min-w-full text-sm ${className}`,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Table, "qMZBQLvRVa8XE1Z4+ldEG71Blpc=");
_c = Table;
function TableHeader({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        className: `bg-gray-50 border-y border-gray-200 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        className: `divide-y divide-gray-200 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
        lineNumber: 81,
        columnNumber: 10
    }, this);
}
_c2 = TableBody;
function TableRow({ children, className = "", onClick, selected }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        onClick: onClick,
        className: `
        ${onClick ? "cursor-pointer hover:bg-gray-50" : ""}
        ${selected ? "bg-primary-50" : ""}
        ${className}
      `,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c3 = TableRow;
function TableHead({ children, className = "", align = "left", hideOnMobile = false }) {
    const alignClass = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }[align];
    const responsiveClass = hideOnMobile ? "hidden md:table-cell" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        scope: "col",
        className: `px-4 py-3 font-semibold text-gray-700 whitespace-nowrap ${alignClass} ${responsiveClass} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c4 = TableHead;
function TableSortHead({ children, className = "", align = "left", sortDirection, onSort }) {
    const alignClass = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }[align];
    const justifyClass = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end"
    }[align];
    const ariaSort = sortDirection === "asc" ? "ascending" : sortDirection === "desc" ? "descending" : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        scope: "col",
        "aria-sort": ariaSort,
        className: `px-4 py-3 font-semibold text-gray-700 ${alignClass} ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onSort,
            className: `inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors cursor-pointer ${justifyClass} w-full`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex-shrink-0",
                    "aria-hidden": "true",
                    children: sortDirection === "asc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        className: "text-primary-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 2L6 10M6 2L3 5M6 2L9 5",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "square"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                            lineNumber: 178,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this) : sortDirection === "desc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        className: "text-primary-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 10L6 2M6 10L3 7M6 10L9 7",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "square"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                            lineNumber: 182,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        className: "text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 4L6 2L8 4M4 8L6 10L8 8",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "square"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                            lineNumber: 186,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_c5 = TableSortHead;
function TableCell({ children, className = "", align = "left", colSpan, hideOnMobile = false }) {
    const alignClass = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }[align];
    const responsiveClass = hideOnMobile ? "hidden md:table-cell" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        colSpan: colSpan,
        className: `px-4 py-3 text-gray-900 whitespace-nowrap ${alignClass} ${responsiveClass} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCheckbox({ indeterminate, className = "", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "checkbox",
        ref: (el)=>{
            if (el) {
                el.indeterminate = indeterminate ?? false;
            }
        },
        className: `
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
        ${className}
      `,
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_c7 = TableCheckbox;
const __TURBOPACK__default__export__ = Table;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableRow");
__turbopack_context__.k.register(_c4, "TableHead");
__turbopack_context__.k.register(_c5, "TableSortHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCheckbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Tabs Component
 *
 * 탭 컴포넌트
 * - variant="underline": 밑줄 스타일 (기본)
 * - variant="button": 버튼 스타일
 * - size="md": 기본 사이즈
 * - size="lg": 큰 사이즈 (전체 너비, 중앙 정렬)
 *
 * 접근성: role="tablist/tab/tabpanel", aria-selected, aria-controls, 키보드 네비게이션
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
const TabsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function Tabs({ defaultValue, children, className = "", variant = "underline", size = "md" }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    const [tabValues, setTabValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const tabRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const baseId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const registerTab = (value, element)=>{
        tabRefs.current.set(value, element);
    };
    const unregisterTab = (value)=>{
        tabRefs.current.delete(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContext.Provider, {
        value: {
            activeTab,
            setActiveTab,
            variant,
            size,
            baseId,
            registerTab,
            unregisterTab,
            tabValues,
            setTabValues
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Tabs.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Tabs.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(Tabs, "maZ/e6P/L6+EArAVxH3oWSjt+lY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Tabs;
function TabsList({ children, className = "", "aria-label": ariaLabel }) {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TabsContext);
    if (!context) throw new Error("TabsList must be used within Tabs");
    const { variant, size, activeTab, setActiveTab, tabValues } = context;
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [indicatorStyle, setIndicatorStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        width: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabsList.useEffect": ()=>{
            const updateIndicator = {
                "TabsList.useEffect.updateIndicator": ()=>{
                    if (!listRef.current) return;
                    const activeButton = listRef.current.querySelector(`[data-tab-value="${activeTab}"]`);
                    if (activeButton) {
                        const listRect = listRef.current.getBoundingClientRect();
                        const buttonRect = activeButton.getBoundingClientRect();
                        setIndicatorStyle({
                            left: buttonRect.left - listRect.left,
                            width: buttonRect.width
                        });
                    }
                }
            }["TabsList.useEffect.updateIndicator"];
            updateIndicator();
            window.addEventListener("resize", updateIndicator);
            return ({
                "TabsList.useEffect": ()=>window.removeEventListener("resize", updateIndicator)
            })["TabsList.useEffect"];
        }
    }["TabsList.useEffect"], [
        activeTab
    ]);
    const handleKeyDown = (e)=>{
        const currentIndex = tabValues.indexOf(activeTab);
        let newIndex = currentIndex;
        switch(e.key){
            case "ArrowLeft":
                e.preventDefault();
                newIndex = currentIndex > 0 ? currentIndex - 1 : tabValues.length - 1;
                break;
            case "ArrowRight":
                e.preventDefault();
                newIndex = currentIndex < tabValues.length - 1 ? currentIndex + 1 : 0;
                break;
            case "Home":
                e.preventDefault();
                newIndex = 0;
                break;
            case "End":
                e.preventDefault();
                newIndex = tabValues.length - 1;
                break;
            default:
                return;
        }
        const newTab = tabValues[newIndex];
        setActiveTab(newTab);
        // Focus the new tab button
        const newButton = listRef.current?.querySelector(`[data-tab-value="${newTab}"]`);
        newButton?.focus();
    };
    const variantStyles = {
        underline: "border-b border-gray-200",
        button: "p-1 bg-gray-100"
    };
    const sizeStyles = {
        md: "inline-flex",
        lg: "flex w-full"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: listRef,
        role: "tablist",
        "aria-label": ariaLabel,
        onKeyDown: handleKeyDown,
        className: `relative ${sizeStyles[size]} ${variantStyles[variant]} ${className}`,
        children: [
            variant === "underline" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute bottom-0 h-0.5 bg-primary-900 transition-all duration-300 ease-out",
                style: {
                    left: indicatorStyle.left,
                    width: indicatorStyle.width
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Tabs.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-1 bottom-1 bg-white shadow-sm transition-all duration-300 ease-out",
                style: {
                    left: indicatorStyle.left,
                    width: indicatorStyle.width
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Tabs.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Tabs.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s1(TabsList, "cXUgzH6XysyBPW0zwU68Ik2TvHo=");
_c1 = TabsList;
function TabsTrigger({ value, children, disabled = false, className = "" }) {
    _s2();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TabsContext);
    if (!context) throw new Error("TabsTrigger must be used within Tabs");
    const { activeTab, setActiveTab, variant, size, baseId, registerTab, unregisterTab, setTabValues } = context;
    const isActive = activeTab === value;
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabId = `${baseId}-tab-${value}`;
    const panelId = `${baseId}-panel-${value}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabsTrigger.useEffect": ()=>{
            if (buttonRef.current) {
                registerTab(value, buttonRef.current);
            }
            setTabValues({
                "TabsTrigger.useEffect": (prev)=>prev.includes(value) ? prev : [
                        ...prev,
                        value
                    ]
            }["TabsTrigger.useEffect"]);
            return ({
                "TabsTrigger.useEffect": ()=>{
                    unregisterTab(value);
                    setTabValues({
                        "TabsTrigger.useEffect": (prev)=>prev.filter({
                                "TabsTrigger.useEffect": (v)=>v !== value
                            }["TabsTrigger.useEffect"])
                    }["TabsTrigger.useEffect"]);
                }
            })["TabsTrigger.useEffect"];
        }
    }["TabsTrigger.useEffect"], [
        value,
        registerTab,
        unregisterTab,
        setTabValues
    ]);
    const baseStyles = "relative z-10 font-medium transition-colors";
    const sizeStyles = {
        md: "px-4 py-2 text-sm",
        lg: "flex-1 px-6 py-3 text-base text-center justify-center"
    };
    const variantStyles = {
        underline: `
      -mb-px
      ${isActive ? "text-primary-900" : "text-gray-500 hover:text-gray-700"}
    `,
        button: `
      ${isActive ? "text-primary-900" : "text-gray-500 hover:text-gray-700"}
    `
    };
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: buttonRef,
        type: "button",
        role: "tab",
        id: tabId,
        "aria-selected": isActive,
        "aria-controls": panelId,
        tabIndex: isActive ? 0 : -1,
        "data-tab-value": value,
        onClick: ()=>!disabled && setActiveTab(value),
        disabled: disabled,
        className: `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Tabs.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_s2(TabsTrigger, "UhS3FR6rzjnt3KK9Q0MMi9nXVwo=");
_c2 = TabsTrigger;
function TabsContent({ value, children, className = "" }) {
    _s3();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TabsContext);
    if (!context) throw new Error("TabsContent must be used within Tabs");
    const { activeTab, baseId } = context;
    const tabId = `${baseId}-tab-${value}`;
    const panelId = `${baseId}-panel-${value}`;
    if (activeTab !== value) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "tabpanel",
        id: panelId,
        "aria-labelledby": tabId,
        tabIndex: 0,
        className: `py-4 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Tabs.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
}
_s3(TabsContent, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c3 = TabsContent;
const __TURBOPACK__default__export__ = Tabs;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Textarea Component
 *
 * 여러 줄 텍스트 입력 컴포넌트
 * 접근성: label htmlFor 연결, 에러 role="alert"
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-4 py-3 text-lg"
};
const resizeStyles = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize"
};
const Textarea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, error = false, errorMessage, success = false, successMessage, size = "md", layout = "column", labelWidth = "w-24", resize = "vertical", className = "", id, rows = 4, ...props }, ref)=>{
    const textareaId = id || label?.toLowerCase().replace(/\s/g, "-");
    const baseStyles = "w-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed";
    const stateStyles = error ? "border-error-500 focus:ring-error-500 focus:border-error-500" : success ? "border-success-500 focus:ring-success-500 focus:border-success-500" : "border-gray-300 focus:ring-primary-900 focus:border-transparent";
    const classes = [
        baseStyles,
        stateStyles,
        sizeStyles[size],
        resizeStyles[resize],
        className
    ].filter(Boolean).join(" ");
    const isRow = layout === "row";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${isRow ? "flex-row items-start gap-3" : "flex-col gap-1.5"}`,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: textareaId,
                className: `text-sm font-medium text-gray-700 ${isRow ? `flex-shrink-0 ${labelWidth} pt-2` : ""}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Textarea.tsx",
                lineNumber: 84,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${isRow ? "flex-1" : ""} flex flex-col gap-1.5`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: ref,
                        id: textareaId,
                        rows: rows,
                        className: classes,
                        "aria-invalid": error || undefined,
                        "aria-describedby": error && errorMessage ? `${textareaId}-error` : undefined,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Textarea.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: `${textareaId}-error`,
                        className: "text-sm text-error-500",
                        role: "alert",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Textarea.tsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    success && successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-success-600",
                        children: successMessage
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Textarea.tsx",
                        lineNumber: 107,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Textarea.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Textarea.tsx",
        lineNumber: 82,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
const __TURBOPACK__default__export__ = Textarea;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Toast Component
 *
 * 알림 토스트 메시지
 * 접근성: role="alert", aria-live="polite"
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const positionStyles = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-8 left-1/2 -translate-x-1/2"
};
const variantStyles = {
    default: "bg-gray-900 text-white",
    success: "bg-success-500 text-white",
    warning: "bg-warning-500 text-white",
    error: "bg-error-500 text-white",
    info: "bg-info-500 text-white"
};
const variantIcons = {
    default: null,
    success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20 6L9 17l-5-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 9v4M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }, void 0, false, {
            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 9l-6 6M9 9l6 6"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 16v-4M12 8h.01"
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
function Toast({ isOpen, onClose, message, variant = "default", duration = 3000, position = "bottom-center" }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toast.useEffect": ()=>{
            if (isOpen) {
                setIsVisible(true);
                const timer = setTimeout({
                    "Toast.useEffect.timer": ()=>{
                        setIsVisible(false);
                        setTimeout(onClose, 200);
                    }
                }["Toast.useEffect.timer"], duration);
                return ({
                    "Toast.useEffect": ()=>clearTimeout(timer)
                })["Toast.useEffect"];
            }
        }
    }["Toast.useEffect"], [
        isOpen,
        duration,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "alert",
        "aria-live": "polite",
        "aria-atomic": "true",
        className: `fixed z-50 ${positionStyles[position]} transition-all duration-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center gap-3 px-4 py-3 shadow-lg min-w-[280px] max-w-md ${variantStyles[variant]}`,
            children: [
                variantIcons[variant] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex-shrink-0",
                    "aria-hidden": "true",
                    children: variantIcons[variant]
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "flex-1 text-sm font-medium",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setIsVisible(false);
                        setTimeout(onClose, 200);
                    },
                    "aria-label": "닫기",
                    className: "flex-shrink-0 p-1 hover:bg-white/20 transition-colors cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18 6L6 18M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this), document.body);
}
_s(Toast, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = Toast;
const __TURBOPACK__default__export__ = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toggle",
    ()=>Toggle,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Toggle Component
 *
 * 토글 스위치 컴포넌트
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Toggle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, description, size = "md", className = "", disabled, id, ...props }, ref)=>{
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");
    const trackSize = {
        sm: "w-8 h-5",
        md: "w-10 h-6",
        lg: "w-12 h-7"
    }[size];
    const thumbSize = {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5"
    }[size];
    const thumbTranslate = {
        sm: "peer-checked:translate-x-3",
        md: "peer-checked:translate-x-4",
        lg: "peer-checked:translate-x-5"
    }[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        htmlFor: inputId,
        className: `inline-flex items-start gap-2 cursor-pointer select-none ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: ref,
                        id: inputId,
                        type: "checkbox",
                        disabled: disabled,
                        className: "sr-only peer",
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toggle.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
              ${trackSize} bg-gray-300 rounded-full
              peer-checked:bg-primary-900
              peer-focus-visible:ring-2 peer-focus-visible:ring-primary-900 peer-focus-visible:ring-offset-2
              peer-disabled:bg-gray-200
              transition-colors
            `
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toggle.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
              absolute top-1 left-1 ${thumbSize} bg-white rounded-full shadow
              ${thumbTranslate}
              transition-transform
            `
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toggle.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toggle.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            (label || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-0.5 pt-0.5",
                children: [
                    label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-gray-900 leading-5",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toggle.tsx",
                        lineNumber: 76,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500 leading-5",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toggle.tsx",
                        lineNumber: 77,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toggle.tsx",
                lineNumber: 75,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Toggle.tsx",
        lineNumber: 40,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Toggle;
Toggle.displayName = "Toggle";
const __TURBOPACK__default__export__ = Toggle;
var _c, _c1;
__turbopack_context__.k.register(_c, "Toggle$forwardRef");
__turbopack_context__.k.register(_c1, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/Tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Tooltip Component
 *
 * 툴팁 컴포넌트
 * 접근성: role="tooltip", aria-describedby
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Tooltip({ children, content, position = "top", delay = 0, className = "" }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const tooltipId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const calculatePosition = ()=>{
        if (!triggerRef.current || !tooltipRef.current) return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const gap = 8;
        let top = 0;
        let left = 0;
        switch(position){
            case "top":
                top = triggerRect.top - tooltipRect.height - gap;
                left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
                break;
            case "bottom":
                top = triggerRect.bottom + gap;
                left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
                break;
            case "left":
                top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
                left = triggerRect.left - tooltipRect.width - gap;
                break;
            case "right":
                top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
                left = triggerRect.right + gap;
                break;
        }
        // Keep tooltip within viewport
        const padding = 8;
        if (left < padding) left = padding;
        if (left + tooltipRect.width > window.innerWidth - padding) {
            left = window.innerWidth - tooltipRect.width - padding;
        }
        if (top < padding) top = padding;
        if (top + tooltipRect.height > window.innerHeight - padding) {
            top = window.innerHeight - tooltipRect.height - padding;
        }
        setCoords({
            top,
            left
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tooltip.useEffect": ()=>{
            if (isVisible) {
                calculatePosition();
            }
        }
    }["Tooltip.useEffect"], [
        isVisible,
        position
    ]);
    const handleMouseEnter = ()=>{
        timeoutRef.current = setTimeout(()=>{
            setIsVisible(true);
        }, delay);
    };
    const handleMouseLeave = ()=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsVisible(false);
    };
    // Clone children to add aria-describedby if it's a valid element
    const enhancedChildren = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(children) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
        "aria-describedby": isVisible ? tooltipId : undefined
    }) : children;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: triggerRef,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                onFocus: handleMouseEnter,
                onBlur: handleMouseLeave,
                className: className || "inline-block",
                children: enhancedChildren
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Tooltip.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tooltipRef,
                id: tooltipId,
                role: "tooltip",
                style: {
                    top: coords.top,
                    left: coords.left
                },
                className: `
              fixed z-50 px-3 py-2 text-sm text-white bg-gray-900 shadow-lg
              transition-opacity duration-150
              ${isVisible ? "opacity-100" : "opacity-0"}
            `,
                children: content
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/src/components/Tooltip.tsx",
                lineNumber: 118,
                columnNumber: 11
            }, this), document.body)
        ]
    }, void 0, true);
}
_s(Tooltip, "+xcRVA7RLQT6ujKgnT+5wcLwN1Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Tooltip;
const __TURBOPACK__default__export__ = Tooltip;
var _c;
__turbopack_context__.k.register(_c, "Tooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/src/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$DateInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$NumberInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$PasswordInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Radio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Radio.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Tooltip.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesignSystemPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Design System Showcase
 *
 * 모든 UI 컴포넌트와 디자인 토큰을 한눈에 볼 수 있는 페이지
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$PasswordInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/PasswordInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$NumberInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/NumberInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$DateInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/DateInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Radio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Radio.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/Spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/src/components/FileUpload.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const sections = [
    {
        id: "colors",
        label: "Colors"
    },
    {
        id: "typography",
        label: "Typography"
    },
    {
        id: "spacing",
        label: "Spacing"
    },
    {
        id: "button",
        label: "Button"
    },
    {
        id: "form",
        label: "Form"
    },
    {
        id: "card",
        label: "Card"
    },
    {
        id: "badge",
        label: "Badge"
    },
    {
        id: "tabs",
        label: "Tabs"
    },
    {
        id: "accordion",
        label: "Accordion"
    },
    {
        id: "table",
        label: "Table"
    },
    {
        id: "pagination",
        label: "Pagination"
    },
    {
        id: "tooltip",
        label: "Tooltip"
    },
    {
        id: "modal",
        label: "Modal"
    },
    {
        id: "loading",
        label: "Loading"
    },
    {
        id: "shadows",
        label: "Shadows"
    }
];
function DesignSystemPage() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("colors");
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTopButton, setShowTopButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isScrollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scrollTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Set initial sidebar state based on screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemPage.useEffect": ()=>{
            const handleResize = {
                "DesignSystemPage.useEffect.handleResize": ()=>{
                    const isDesktop = window.innerWidth >= 768;
                    setIsExpanded(isDesktop);
                }
            }["DesignSystemPage.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "DesignSystemPage.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["DesignSystemPage.useEffect"];
        }
    }["DesignSystemPage.useEffect"], []);
    // Modal states
    const [showAlert, setShowAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDangerConfirm, setShowDangerConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showImagePopup, setShowImagePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastVariant, setToastVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("default");
    // Select states
    const [selectValue, setSelectValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectValue2, setSelectValue2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Copy toast state
    const [showCopyToast, setShowCopyToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiedColor, setCopiedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // NumberInput state
    const [numberValue, setNumberValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [priceValue, setPriceValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10000);
    // Checkbox, Radio, Toggle states
    const [checked1, setChecked1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checked2, setChecked2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [radioValue, setRadioValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("option1");
    const [toggleValue, setToggleValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toggleValue2, setToggleValue2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Pagination state
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Table selection state
    const [selectedRows, setSelectedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const tableData = [
        {
            id: "1",
            name: "클래식 라운드 선글라스",
            category: "선글라스",
            price: 129000
        },
        {
            id: "2",
            name: "블루라이트 차단 안경",
            category: "안경",
            price: 89000
        },
        {
            id: "3",
            name: "빈티지 메탈 프레임",
            category: "안경테",
            price: 159000
        },
        {
            id: "4",
            name: "스포츠 고글",
            category: "고글",
            price: 199000
        }
    ];
    const isAllSelected = selectedRows.length === tableData.length;
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < tableData.length;
    const toggleSelectAll = ()=>{
        setSelectedRows(isAllSelected ? [] : tableData.map((d)=>d.id));
    };
    const toggleSelectRow = (id)=>{
        setSelectedRows((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    };
    // Table sorting state
    const [sortKey, setSortKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSort = (key)=>{
        if (sortKey === key) {
            if (sortDirection === "asc") setSortDirection("desc");
            else if (sortDirection === "desc") {
                setSortDirection(null);
                setSortKey(null);
            } else setSortDirection("asc");
        } else {
            setSortKey(key);
            setSortDirection("asc");
        }
    };
    const sortedTableData = [
        ...tableData
    ].sort((a, b)=>{
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
    // Table filter state
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const categoryOptions = [
        {
            value: "",
            label: "전체 카테고리"
        },
        {
            value: "선글라스",
            label: "선글라스"
        },
        {
            value: "안경",
            label: "안경"
        },
        {
            value: "안경테",
            label: "안경테"
        },
        {
            value: "고글",
            label: "고글"
        }
    ];
    const filteredTableData = tableData.filter((item)=>{
        const matchesSearch = searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = categoryFilter === "" || item.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemPage.useEffect": ()=>{
            let scrollEndTimer;
            const handleScroll = {
                "DesignSystemPage.useEffect.handleScroll": ()=>{
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollPercent = docHeight > 0 ? scrollTop / docHeight * 100 : 0;
                    setProgress(scrollPercent);
                    setShowTopButton(scrollTop > 200);
                    if (isScrollingRef.current) return;
                    clearTimeout(scrollEndTimer);
                    scrollEndTimer = setTimeout({
                        "DesignSystemPage.useEffect.handleScroll": ()=>{
                            const isAtBottom = scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 50;
                            if (isAtBottom) {
                                setActiveSection(sections[sections.length - 1].id);
                                return;
                            }
                            const sectionElements = sections.map({
                                "DesignSystemPage.useEffect.handleScroll.sectionElements": (s)=>document.getElementById(s.id)
                            }["DesignSystemPage.useEffect.handleScroll.sectionElements"]);
                            for(let i = sectionElements.length - 1; i >= 0; i--){
                                const el = sectionElements[i];
                                if (el) {
                                    const rect = el.getBoundingClientRect();
                                    if (rect.top <= 150) {
                                        setActiveSection(sections[i].id);
                                        break;
                                    }
                                }
                            }
                        }
                    }["DesignSystemPage.useEffect.handleScroll"], 50);
                }
            }["DesignSystemPage.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            handleScroll();
            return ({
                "DesignSystemPage.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    clearTimeout(scrollEndTimer);
                }
            })["DesignSystemPage.useEffect"];
        }
    }["DesignSystemPage.useEffect"], []);
    const scrollToSection = (id)=>{
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        if (window.innerWidth < 768) {
            setIsExpanded(false);
        }
        isScrollingRef.current = true;
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
            scrollTimeoutRef.current = setTimeout(()=>{
                isScrollingRef.current = false;
                scrollTimeoutRef.current = null;
            }, 1000);
        }
    };
    const scrollToTop = ()=>{
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        isScrollingRef.current = true;
        setActiveSection(sections[0].id);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        scrollTimeoutRef.current = setTimeout(()=>{
            isScrollingRef.current = false;
            scrollTimeoutRef.current = null;
        }, 1000);
    };
    const activeIndex = sections.findIndex((s)=>s.id === activeSection);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsExpanded(!isExpanded),
                className: "md:hidden fixed top-4 left-4 z-[60] w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 cursor-pointer",
                "aria-label": "메뉴",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 258,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 6h16M4 12h16M4 18h16"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 260,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/storybook/index.html",
                target: "_blank",
                className: "fixed top-4 right-4 z-[60] px-3 py-2 text-sm text-white mix-blend-difference flex items-center gap-1",
                children: [
                    "Storybook",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7 17L17 7M17 7H7M17 7V17"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed inset-0 bg-black/30 z-40",
                onClick: ()=>setIsExpanded(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 279,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `group/sidebar fixed left-0 top-0 h-screen border-r border-gray-200 bg-white flex flex-col py-8 z-50 transition-all duration-300
          ${isExpanded ? "w-48 translate-x-0" : "w-16 -translate-x-full md:translate-x-0"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsExpanded(!isExpanded),
                        className: "hidden md:flex absolute top-0 bottom-0 w-10 items-center justify-center transition-all duration-300 right-0 translate-x-0 opacity-0 group-hover/sidebar:translate-x-full group-hover/sidebar:opacity-100 cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                className: `transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8 2L4 6L8 10",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "square"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col items-start mt-8 relative pl-6 pr-4",
                        children: sections.map((section, index)=>{
                            const isActive = activeSection === section.id;
                            const isPast = index <= activeIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToSection(section.id),
                                className: "group relative flex items-center gap-3 h-10 w-full cursor-pointer",
                                children: [
                                    index < sections.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `absolute left-[3px] top-1/2 w-0.5 h-10 transition-colors duration-300 ${index < activeIndex ? "bg-primary-900" : "bg-gray-200"}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `relative z-10 flex-shrink-0 transition-all duration-300 ${isActive ? "w-2 h-2 bg-primary-900 ring-4 ring-primary-100" : isPast ? "w-2 h-2 bg-primary-900" : "w-2 h-2 bg-gray-300"}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 17
                                    }, this),
                                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm whitespace-nowrap ${isActive ? "text-primary-900 font-semibold" : isPast ? "text-gray-700" : "text-gray-400"}`,
                                        children: section.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 19
                                    }, this),
                                    !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-10 px-2 py-1 bg-gray-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50",
                                        children: section.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, section.id, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 314,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-auto ${isExpanded ? "pl-6" : "text-center px-4"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-400",
                            children: [
                                Math.round(progress),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `transition-[padding] duration-300 ${isExpanded ? "md:pl-48" : "md:pl-16"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto py-8 px-4 md:py-12 md:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "mb-8 md:mb-16 border-b border-gray-200 pb-8 md:pb-16 pt-12 md:pt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl md:text-4xl font-bold text-gray-900 mb-2",
                                    children: "Design System Guide"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base md:text-lg text-gray-600",
                                    children: "with Tailwind CSS"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 369,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "colors",
                            title: "Colors",
                            description: "디자인 토큰에 정의된 색상 팔레트",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700 mb-3",
                                                children: "Main Colors"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-4 md:gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MainColorSwatch, {
                                                        name: "Brand",
                                                        label: "primary-900",
                                                        cssVar: "--color-primary-900",
                                                        onCopy: (color)=>{
                                                            setCopiedColor(color);
                                                            setShowCopyToast(true);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MainColorSwatch, {
                                                        name: "Secondary",
                                                        label: "secondary-700",
                                                        cssVar: "--color-secondary-700",
                                                        onCopy: (color)=>{
                                                            setCopiedColor(color);
                                                            setShowCopyToast(true);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-20 h-20 md:w-24 md:h-24 bg-prism border border-gray-100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-gray-700",
                                                                children: "Prism"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500",
                                                                children: "gradient"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPalette, {
                                        name: "Gray",
                                        color: "gray",
                                        onCopy: (color)=>{
                                            setCopiedColor(color);
                                            setShowCopyToast(true);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPalette, {
                                        name: "Success",
                                        color: "success",
                                        onCopy: (color)=>{
                                            setCopiedColor(color);
                                            setShowCopyToast(true);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 405,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPalette, {
                                        name: "Warning",
                                        color: "warning",
                                        onCopy: (color)=>{
                                            setCopiedColor(color);
                                            setShowCopyToast(true);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 406,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPalette, {
                                        name: "Error",
                                        color: "error",
                                        onCopy: (color)=>{
                                            setCopiedColor(color);
                                            setShowCopyToast(true);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPalette, {
                                        name: "Info",
                                        color: "info",
                                        onCopy: (color)=>{
                                            setCopiedColor(color);
                                            setShowCopyToast(true);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 379,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "typography",
                            title: "Typography",
                            description: "텍스트 스타일 스케일",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700 mb-3",
                                                children: "Font Family"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 border border-gray-200 max-w-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-medium",
                                                        style: {
                                                            fontFamily: 'var(--font-family-sans)'
                                                        },
                                                        children: "Pretendard"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mt-2",
                                                        children: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700 mb-3",
                                                children: "Font Size Scale"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 bg-white p-6 border border-gray-200",
                                                children: [
                                                    {
                                                        size: "4xl",
                                                        text: "The quick brown fox",
                                                        px: "36px"
                                                    },
                                                    {
                                                        size: "3xl",
                                                        text: "The quick brown fox",
                                                        px: "30px"
                                                    },
                                                    {
                                                        size: "2xl",
                                                        text: "The quick brown fox",
                                                        px: "24px"
                                                    },
                                                    {
                                                        size: "xl",
                                                        text: "The quick brown fox",
                                                        px: "20px"
                                                    },
                                                    {
                                                        size: "lg",
                                                        text: "The quick brown fox",
                                                        px: "18px"
                                                    },
                                                    {
                                                        size: "base",
                                                        text: "The quick brown fox",
                                                        px: "16px"
                                                    },
                                                    {
                                                        size: "sm",
                                                        text: "The quick brown fox",
                                                        px: "14px"
                                                    },
                                                    {
                                                        size: "xs",
                                                        text: "The quick brown fox",
                                                        px: "12px"
                                                    }
                                                ].map(({ size, text, px })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-baseline gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-16 text-sm text-gray-500",
                                                                children: size
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-${size} ${size === "4xl" || size === "3xl" ? "font-bold" : size === "2xl" || size === "xl" ? "font-semibold" : size === "lg" ? "font-medium" : ""}`,
                                                                children: text
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-400",
                                                                children: px
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, size, true, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 427,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 414,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "spacing",
                            title: "Spacing",
                            description: "8px 기반 간격 스케일",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    8,
                                    10,
                                    12,
                                    16
                                ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-12 text-sm text-gray-500",
                                                children: n
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 456,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-4 bg-primary-900`,
                                                style: {
                                                    width: `${n * 4}px`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400",
                                                children: [
                                                    n * 4,
                                                    "px"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 458,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, n, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 453,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 452,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "button",
                            title: "Button",
                            description: "버튼 컴포넌트",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700 mb-3",
                                                children: "Variants"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 468,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "primary",
                                                        children: "Primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "secondary",
                                                        children: "Secondary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        children: "Outline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        children: "Ghost"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "danger",
                                                        children: "Danger"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700 mb-3",
                                                children: "Sizes"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 478,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        children: "Small"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "md",
                                                        children: "Medium"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "lg",
                                                        children: "Large"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 479,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700 mb-3",
                                                children: "States"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 486,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        disabled: true,
                                                        children: "Disabled"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        fullWidth: true,
                                                        children: "Full Width"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 487,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 485,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700 mb-3",
                                                children: "Rounded (Pill)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 493,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        rounded: "pill",
                                                        children: "Pill Button"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        rounded: "pill",
                                                        children: "Outline Pill"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 496,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 494,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 492,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 465,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "form",
                            title: "Form",
                            description: "폼 입력 컴포넌트",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8 max-w-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Input"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 506,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "기본 입력",
                                                placeholder: "텍스트를 입력하세요"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "성공 상태",
                                                placeholder: "확인됨",
                                                success: true,
                                                successMessage: "사용 가능한 이메일입니다"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "에러 상태",
                                                placeholder: "에러",
                                                error: true,
                                                errorMessage: "필수 입력 항목입니다"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 509,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "비활성화",
                                                placeholder: "비활성화됨",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Textarea"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                label: "설명",
                                                placeholder: "상세 내용을 입력하세요"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Select"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                label: "카테고리",
                                                options: categoryOptions,
                                                value: selectValue,
                                                onChange: setSelectValue,
                                                placeholder: "선택하세요"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Password Input"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$PasswordInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PasswordInput"], {
                                                label: "비밀번호",
                                                placeholder: "비밀번호 입력"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 531,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 529,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Number Input"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$NumberInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                                                label: "수량",
                                                value: numberValue,
                                                onChange: setNumberValue,
                                                min: 0,
                                                max: 100
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 536,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Date Input"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 540,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$DateInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateInput"], {
                                                label: "날짜"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 541,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 539,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Checkbox"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                label: "동의합니다",
                                                checked: checked1,
                                                onChange: setChecked1
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 546,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                label: "기본 선택됨",
                                                checked: checked2,
                                                onChange: setChecked2
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 547,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 544,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Radio"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 551,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Radio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
                                                name: "radio-demo",
                                                value: radioValue,
                                                onChange: setRadioValue,
                                                options: [
                                                    {
                                                        value: "option1",
                                                        label: "옵션 1"
                                                    },
                                                    {
                                                        value: "option2",
                                                        label: "옵션 2"
                                                    },
                                                    {
                                                        value: "option3",
                                                        label: "옵션 3"
                                                    }
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Toggle"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 565,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                                label: "알림 받기",
                                                checked: toggleValue,
                                                onChange: setToggleValue
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 566,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                                label: "다크 모드",
                                                checked: toggleValue2,
                                                onChange: setToggleValue2
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 567,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "File Upload"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 571,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileUpload"], {
                                                accept: "image/*",
                                                multiple: true,
                                                maxFiles: 3,
                                                maxSize: 5 * 1024 * 1024,
                                                showPreview: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 572,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 570,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 504,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 503,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "card",
                            title: "Card",
                            description: "카드 컴포넌트",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold mb-2",
                                                children: "기본 카드"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 587,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-sm",
                                                children: "카드 내용이 들어갑니다."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 588,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 586,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-primary-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold mb-2",
                                                children: "강조 카드"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 591,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-sm",
                                                children: "테두리 색상을 변경할 수 있습니다."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 592,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 590,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 585,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 584,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "badge",
                            title: "Badge",
                            description: "뱃지 컴포넌트",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        children: "Default"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 600,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "primary",
                                        children: "Primary"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 601,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "success",
                                        children: "Success"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 602,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "warning",
                                        children: "Warning"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 603,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "error",
                                        children: "Error"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 604,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "info",
                                        children: "Info"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 605,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 599,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 598,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "tabs",
                            title: "Tabs",
                            description: "탭 컴포넌트",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                                defaultValue: "tab1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "tab1",
                                                children: "탭 1"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 613,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "tab2",
                                                children: "탭 2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 614,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "tab3",
                                                children: "탭 3"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 615,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 612,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "tab1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "p-4 text-gray-600",
                                            children: "첫 번째 탭 내용입니다."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 618,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 617,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "tab2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "p-4 text-gray-600",
                                            children: "두 번째 탭 내용입니다."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "tab3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "p-4 text-gray-600",
                                            children: "세 번째 탭 내용입니다."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 624,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 611,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 610,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "accordion",
                            title: "Accordion",
                            description: "아코디언 컴포넌트",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: "item1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                children: "첫 번째 항목"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 633,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                children: "첫 번째 항목의 내용입니다. 아코디언을 클릭하면 내용이 펼쳐집니다."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 634,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 632,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: "item2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                children: "두 번째 항목"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 639,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                children: "두 번째 항목의 내용입니다."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 640,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: "item3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                children: "세 번째 항목"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 645,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                children: "세 번째 항목의 내용입니다."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 646,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 644,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 631,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 630,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "table",
                            title: "Table",
                            description: "테이블 컴포넌트",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "검색...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "max-w-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 657,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                options: categoryOptions,
                                                value: categoryFilter,
                                                onChange: setCategoryFilter,
                                                className: "max-w-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 663,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 656,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "w-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCheckbox"], {
                                                                checked: isAllSelected,
                                                                indeterminate: isIndeterminate,
                                                                onChange: toggleSelectAll
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 673,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableSortHead"], {
                                                            sorted: sortKey === "name" ? sortDirection : null,
                                                            onSort: ()=>handleSort("name"),
                                                            children: "상품명"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableSortHead"], {
                                                            sorted: sortKey === "category" ? sortDirection : null,
                                                            onSort: ()=>handleSort("category"),
                                                            children: "카테고리"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 686,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableSortHead"], {
                                                            sorted: sortKey === "price" ? sortDirection : null,
                                                            onSort: ()=>handleSort("price"),
                                                            children: "가격"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 692,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 671,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                                children: filteredTableData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        selected: selectedRows.includes(item.id),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCheckbox"], {
                                                                    checked: selectedRows.includes(item.id),
                                                                    onChange: ()=>toggleSelectRow(item.id)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 704,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 703,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: item.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 710,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: [
                                                                    item.price.toLocaleString(),
                                                                    "원"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 711,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 702,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 700,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 670,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 655,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 654,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "pagination",
                            title: "Pagination",
                            description: "페이지네이션 컴포넌트",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
                                currentPage: currentPage,
                                totalPages: 10,
                                onPageChange: setCurrentPage
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 721,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 720,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "tooltip",
                            title: "Tooltip",
                            description: "툴팁 컴포넌트",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: "위쪽 툴팁",
                                        position: "top",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            children: "Top"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 732,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 731,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: "아래쪽 툴팁",
                                        position: "bottom",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            children: "Bottom"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 735,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 734,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: "왼쪽 툴팁",
                                        position: "left",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            children: "Left"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 738,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 737,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: "오른쪽 툴팁",
                                        position: "right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            children: "Right"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 741,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 740,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 730,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 729,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "modal",
                            title: "Modal",
                            description: "모달 컴포넌트",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setShowAlert(true),
                                            children: "Alert"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 749,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: ()=>setShowConfirm(true),
                                            children: "Confirm"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 750,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "danger",
                                            onClick: ()=>setShowDangerConfirm(true),
                                            children: "Danger Confirm"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 751,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "secondary",
                                            onClick: ()=>setShowImagePopup(true),
                                            children: "Image Popup"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 752,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 748,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                    isOpen: showAlert,
                                    onClose: ()=>setShowAlert(false),
                                    title: "알림",
                                    message: "작업이 완료되었습니다."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 755,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Confirm"], {
                                    isOpen: showConfirm,
                                    onClose: ()=>setShowConfirm(false),
                                    onConfirm: ()=>setShowConfirm(false),
                                    title: "확인",
                                    message: "이 작업을 진행하시겠습니까?"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 762,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Confirm"], {
                                    isOpen: showDangerConfirm,
                                    onClose: ()=>setShowDangerConfirm(false),
                                    onConfirm: ()=>setShowDangerConfirm(false),
                                    title: "삭제 확인",
                                    message: "정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.",
                                    variant: "danger"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 770,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImagePopup"], {
                                    isOpen: showImagePopup,
                                    onClose: ()=>setShowImagePopup(false),
                                    src: "https://picsum.photos/800/600",
                                    alt: "샘플 이미지"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 779,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-gray-700 mb-3",
                                            children: "Toast"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 787,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                "default",
                                                "success",
                                                "warning",
                                                "error",
                                                "info"
                                            ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>{
                                                        setToastVariant(v);
                                                        setShowToast(true);
                                                    },
                                                    children: v
                                                }, v, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 788,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 786,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                                    isOpen: showToast,
                                    onClose: ()=>setShowToast(false),
                                    message: `${toastVariant} 토스트 메시지입니다.`,
                                    variant: toastVariant
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 802,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                                    isOpen: showCopyToast,
                                    onClose: ()=>setShowCopyToast(false),
                                    message: `${copiedColor} 복사됨`,
                                    variant: "success",
                                    duration: 1500
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 809,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 747,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "loading",
                            title: "Loading",
                            description: "로딩 컴포넌트",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700 mb-3",
                                                children: "Spinner"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 822,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                                        size: "sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 824,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                                        size: "md"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                                        size: "lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 826,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 823,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 821,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-gray-700 mb-3",
                                                children: "Skeleton"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 831,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 max-w-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonText"], {
                                                        lines: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 833,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonAvatar"], {}, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 835,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonText"], {
                                                                    lines: 2
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 837,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 834,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$src$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonCard"], {}, void 0, false, {
                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                        lineNumber: 840,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                lineNumber: 832,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 830,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 820,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 819,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                            id: "shadows",
                            title: "Shadows",
                            description: "그림자 스케일",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                                children: [
                                    "sm",
                                    "default",
                                    "md",
                                    "lg",
                                    "xl"
                                ].map((shadow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-24 bg-white border border-gray-100 flex items-center justify-center shadow-${shadow}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-600",
                                            children: shadow
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 854,
                                            columnNumber: 19
                                        }, this)
                                    }, shadow, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 850,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 848,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 847,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                            className: "mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Design System"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 862,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 861,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            showTopButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: scrollToTop,
                className: "fixed bottom-6 right-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-900/80 md:bg-primary-900 backdrop-blur-sm md:backdrop-blur-none text-white flex items-center justify-center hover-prism cursor-pointer",
                "aria-label": "맨 위로",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 15l-6-6-6 6"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 875,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                    lineNumber: 874,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 869,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
        lineNumber: 249,
        columnNumber: 5
    }, this);
}
_s(DesignSystemPage, "1SzXeMPCnW1feJ0jVN4lvMP32to=");
_c = DesignSystemPage;
// Helper Components
function Section({ id, title, description, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: "mb-16 scroll-mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl md:text-2xl font-bold text-gray-900 mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 892,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-6",
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 893,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
        lineNumber: 891,
        columnNumber: 5
    }, this);
}
_c1 = Section;
function MainColorSwatch({ name, label, cssVar, onCopy }) {
    const handleClick = ()=>{
        const color = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
        navigator.clipboard.writeText(color);
        onCopy(label);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2 cursor-pointer",
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-20 h-20 md:w-24 md:h-24 bg-${label} border border-gray-100`
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 913,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-gray-700",
                children: name
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 914,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 915,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
        lineNumber: 912,
        columnNumber: 5
    }, this);
}
_c2 = MainColorSwatch;
function ColorPalette({ name, color, onCopy }) {
    const shades = [
        50,
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        950
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-sm font-medium text-gray-700 mb-3",
                children: name
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 929,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: shades.map((shade)=>{
                    const colorClass = `${color}-${shade}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cursor-pointer",
                        onClick: ()=>{
                            const cssVar = `--color-${color}-${shade}`;
                            const colorValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
                            navigator.clipboard.writeText(colorValue);
                            onCopy(colorClass);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-12 h-12 bg-${colorClass} border border-gray-100`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 944,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 block text-center mt-1",
                                children: shade
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 945,
                                columnNumber: 15
                            }, this)
                        ]
                    }, shade, true, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 934,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 930,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
        lineNumber: 928,
        columnNumber: 5
    }, this);
}
_c3 = ColorPalette;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DesignSystemPage");
__turbopack_context__.k.register(_c1, "Section");
__turbopack_context__.k.register(_c2, "MainColorSwatch");
__turbopack_context__.k.register(_c3, "ColorPalette");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_gil_repo_next-gil-ui_97719103._.js.map