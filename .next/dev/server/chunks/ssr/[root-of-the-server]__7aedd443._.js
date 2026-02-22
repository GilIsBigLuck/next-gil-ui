module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesignSystemPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Design System Showcase
 *
 * 모든 UI 컴포넌트와 디자인 토큰을 한눈에 볼 수 있는 페이지
 * Angular에서 동일한 Tailwind 클래스를 복사해서 사용 가능
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$prism$2d$react$2d$renderer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/gil/repo/next-gil-ui/node_modules/prism-react-renderer/dist/index.mjs [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
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
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("colors");
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTopButton, setShowTopButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isScrollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scrollTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Set initial sidebar state based on screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            const isDesktop = window.innerWidth >= 768; // md breakpoint
            setIsExpanded(isDesktop);
        };
        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    // Modal states
    const [showAlert, setShowAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDangerConfirm, setShowDangerConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showImagePopup, setShowImagePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastVariant, setToastVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("default");
    // Select states
    const [selectValue, setSelectValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectValue2, setSelectValue2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Copy toast state
    const [showCopyToast, setShowCopyToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiedColor, setCopiedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // NumberInput state
    const [numberValue, setNumberValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [priceValue, setPriceValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10000);
    // Checkbox, Radio, Toggle states
    const [checked1, setChecked1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checked2, setChecked2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [radioValue, setRadioValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("option1");
    const [toggleValue, setToggleValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toggleValue2, setToggleValue2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Pagination state
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    // Table selection state
    const [selectedRows, setSelectedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
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
    const [sortKey, setSortKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let scrollEndTimer;
        const handleScroll = ()=>{
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? scrollTop / docHeight * 100 : 0;
            setProgress(scrollPercent);
            setShowTopButton(scrollTop > 200);
            // Skip active section update while programmatic scrolling
            if (isScrollingRef.current) return;
            // Debounce section detection to prevent flickering
            clearTimeout(scrollEndTimer);
            scrollEndTimer = setTimeout(()=>{
                const isAtBottom = scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 50;
                if (isAtBottom) {
                    setActiveSection(sections[sections.length - 1].id);
                    return;
                }
                const sectionElements = sections.map((s)=>document.getElementById(s.id));
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
            }, 50);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollEndTimer);
        };
    }, []);
    const scrollToSection = (id)=>{
        // Cancel any existing scroll animation
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        // Close sidebar on mobile
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
            // Reset flag after scroll animation completes
            scrollTimeoutRef.current = setTimeout(()=>{
                isScrollingRef.current = false;
                scrollTimeoutRef.current = null;
            }, 1000);
        }
    };
    const scrollToTop = ()=>{
        // Cancel any existing scroll animation
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsExpanded(!isExpanded),
                className: "md:hidden fixed top-4 left-4 z-[60] w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 cursor-pointer",
                "aria-label": "메뉴",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 265,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 6h16M4 12h16M4 18h16"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 267,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/",
                className: "fixed top-4 right-4 z-[60] px-3 py-2 text-sm text-white mix-blend-difference flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15 18l-6-6 6-6"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    "홈으로"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed inset-0 bg-black/30 z-40",
                onClick: ()=>setIsExpanded(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `group/sidebar fixed left-0 top-0 h-screen border-r border-gray-200 bg-white flex flex-col py-8 z-50 transition-all duration-300
          ${isExpanded ? "w-48 translate-x-0" : "w-16 -translate-x-full md:translate-x-0"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsExpanded(!isExpanded),
                        className: "hidden md:flex absolute top-0 bottom-0 w-10 items-center justify-center transition-all duration-300 right-0 translate-x-0 opacity-0 group-hover/sidebar:translate-x-full group-hover/sidebar:opacity-100 cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                className: `transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8 2L4 6L8 10",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "square"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col items-start mt-8 relative pl-6 pr-4",
                        children: sections.map((section, index)=>{
                            const isActive = activeSection === section.id;
                            const isPast = index <= activeIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToSection(section.id),
                                className: "group relative flex items-center gap-3 h-10 w-full cursor-pointer",
                                children: [
                                    index < sections.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `absolute left-[3px] top-1/2 w-0.5 h-10 transition-colors duration-300 ${index < activeIndex ? "bg-primary-900" : "bg-gray-200"}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `relative z-10 flex-shrink-0 transition-all duration-300 ${isActive ? "w-2 h-2 bg-primary-900 ring-4 ring-primary-100" : isPast ? "w-2 h-2 bg-primary-900" : "w-2 h-2 bg-gray-300"}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 17
                                    }, this),
                                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm whitespace-nowrap ${isActive ? "text-primary-900 font-semibold" : isPast ? "text-gray-700" : "text-gray-400"}`,
                                        children: section.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 19
                                    }, this),
                                    !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-10 px-2 py-1 bg-gray-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50",
                                        children: section.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, section.id, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 322,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-auto ${isExpanded ? "pl-6" : "text-center px-4"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-400",
                            children: [
                                Math.round(progress),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `transition-[padding] duration-300 ${isExpanded ? "md:pl-48" : "md:pl-16"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto py-8 px-4 md:py-12 md:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "mb-8 md:mb-16 border-b border-gray-200 pb-8 md:pb-16 pt-12 md:pt-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl md:text-4xl font-bold text-gray-900 mb-2",
                                        children: "Design System Guide"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 384,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base md:text-lg text-gray-600",
                                        children: "with Tailwind CSS"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "colors",
                                title: "Colors",
                                description: "디자인 토큰에 정의된 색상 팔레트",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Main Colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-4 md:gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MainColorSwatch, {
                                                            name: "Brand",
                                                            label: "primary-900",
                                                            cssVar: "--color-primary-900",
                                                            onCopy: (color)=>{
                                                                setCopiedColor(color);
                                                                setShowCopyToast(true);
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MainColorSwatch, {
                                                            name: "Secondary",
                                                            label: "secondary-700",
                                                            cssVar: "--color-secondary-700",
                                                            onCopy: (color)=>{
                                                                setCopiedColor(color);
                                                                setShowCopyToast(true);
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-20 h-20 md:w-24 md:h-24 bg-prism border border-gray-100"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-medium text-gray-700",
                                                                    children: "Prism"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "gradient"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPalette, {
                                            name: "Gray",
                                            color: "gray",
                                            onCopy: (color)=>{
                                                setCopiedColor(color);
                                                setShowCopyToast(true);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPalette, {
                                            name: "Success",
                                            color: "success",
                                            onCopy: (color)=>{
                                                setCopiedColor(color);
                                                setShowCopyToast(true);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPalette, {
                                            name: "Warning",
                                            color: "warning",
                                            onCopy: (color)=>{
                                                setCopiedColor(color);
                                                setShowCopyToast(true);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 424,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPalette, {
                                            name: "Error",
                                            color: "error",
                                            onCopy: (color)=>{
                                                setCopiedColor(color);
                                                setShowCopyToast(true);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPalette, {
                                            name: "Info",
                                            color: "info",
                                            onCopy: (color)=>{
                                                setCopiedColor(color);
                                                setShowCopyToast(true);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "typography",
                                title: "Typography",
                                description: "텍스트 스타일 스케일",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Font Family"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6 border border-gray-200 max-w-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-medium",
                                                            style: {
                                                                fontFamily: 'var(--font-family-sans)'
                                                            },
                                                            children: "Pretendard"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500 mt-2",
                                                            children: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Font Size Scale"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 bg-white p-6 border border-gray-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-16 text-sm text-gray-500",
                                                                    children: "4xl"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-4xl font-bold",
                                                                    children: "The quick brown fox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "36px"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 453,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-16 text-sm text-gray-500",
                                                                    children: "3xl"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 456,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl font-bold",
                                                                    children: "The quick brown fox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "30px"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-16 text-sm text-gray-500",
                                                                    children: "2xl"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 461,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl font-semibold",
                                                                    children: "The quick brown fox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 462,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "24px"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 463,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-16 text-sm text-gray-500",
                                                                    children: "xl"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 466,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-semibold",
                                                                    children: "The quick brown fox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "20px"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 468,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-16 text-sm text-gray-500",
                                                                    children: "lg"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-medium",
                                                                    children: "The quick brown fox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "18px"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 473,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-16 text-sm text-gray-500",
                                                                    children: "base"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-base",
                                                                    children: "The quick brown fox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "16px"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-16 text-sm text-gray-500",
                                                                    children: "sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 481,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: "The quick brown fox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 482,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "14px"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 483,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-16 text-sm text-gray-500",
                                                                    children: "xs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    children: "The quick brown fox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: "12px"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Font Weight"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 p-6 border border-gray-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-24 text-sm text-gray-500",
                                                                    children: "normal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-normal",
                                                                    children: "400 - Regular"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-24 text-sm text-gray-500",
                                                                    children: "medium"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-medium",
                                                                    children: "500 - Medium"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-24 text-sm text-gray-500",
                                                                    children: "semibold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-semibold",
                                                                    children: "600 - Semibold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-24 text-sm text-gray-500",
                                                                    children: "bold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 510,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-bold",
                                                                    children: "700 - Bold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 509,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 494,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "spacing",
                                title: "Spacing",
                                description: "간격 스케일 (4px 기반)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
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
                                    ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-12 text-sm text-gray-500",
                                                    children: size
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 bg-primary-900",
                                                    style: {
                                                        width: `${size * 4}px`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-400",
                                                    children: [
                                                        size * 4,
                                                        "px"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, size, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 522,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "button",
                                title: "Button",
                                description: "버튼 컴포넌트 변형",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Variants"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "primary",
                                                            children: "Primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 537,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "secondary",
                                                            children: "Secondary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 538,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "outline",
                                                            children: "Outline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "ghost",
                                                            children: "Ghost"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "danger",
                                                            children: "Danger"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 541,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Sizes"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            size: "sm",
                                                            children: "Small"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            size: "md",
                                                            children: "Medium"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            size: "lg",
                                                            children: "Large"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 545,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "States"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            children: "Default"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 557,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            disabled: true,
                                                            children: "Disabled"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 558,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            fullWidth: true,
                                                            className: "max-w-xs",
                                                            children: "Full Width"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 559,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Shape"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            rounded: "none",
                                                            children: "Square"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            rounded: "pill",
                                                            children: "Pill"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 567,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "outline",
                                                            rounded: "pill",
                                                            children: "Outline Pill"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "secondary",
                                                            rounded: "pill",
                                                            children: "Secondary Pill"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 563,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                                            title: "사용법",
                                            code: `// React/Next.js
<Button variant="primary" size="md">버튼</Button>

// Angular (동일한 클래스)
<button class="inline-flex items-center justify-center font-medium transition-colors
  bg-primary-900 hover:bg-primary-800 text-white px-4 py-2 text-base">
  버튼
</button>`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 573,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 533,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 532,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "form",
                                title: "Form",
                                description: "폼 입력 컴포넌트",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 max-w-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Input"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            placeholder: "기본 입력 필드"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            label: "라벨 있는 입력 (Column)",
                                                            placeholder: "입력해주세요"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 595,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            label: "라벨 (Row)",
                                                            layout: "row",
                                                            placeholder: "입력해주세요"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 596,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            label: "라벨 넓게",
                                                            layout: "row",
                                                            labelWidth: "w-32",
                                                            placeholder: "labelWidth로 조절"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 597,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            placeholder: "좌측 입력"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            placeholder: "우측 입력"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 601,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 max-w-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Textarea"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                                            placeholder: "여러 줄 입력 필드"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 609,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                                            label: "내용",
                                                            placeholder: "내용을 입력해주세요",
                                                            rows: 5
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                                            label: "설명 (Row)",
                                                            layout: "row",
                                                            placeholder: "설명을 입력하세요"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 611,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                                            label: "리사이즈 옵션",
                                                            placeholder: "resize='none'으로 고정",
                                                            resize: "none",
                                                            rows: 3
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                                            label: "에러 상태",
                                                            placeholder: "내용을 입력해주세요",
                                                            error: true,
                                                            errorMessage: "필수 입력 항목입니다",
                                                            rows: 3
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 608,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 606,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 max-w-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Select"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                            placeholder: "옵션을 선택하세요",
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
                                                            ],
                                                            value: selectValue,
                                                            onChange: setSelectValue
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                            label: "라벨 (Column)",
                                                            placeholder: "선택하세요",
                                                            options: [
                                                                {
                                                                    value: "apple",
                                                                    label: "사과"
                                                                },
                                                                {
                                                                    value: "banana",
                                                                    label: "바나나"
                                                                },
                                                                {
                                                                    value: "orange",
                                                                    label: "오렌지"
                                                                },
                                                                {
                                                                    value: "grape",
                                                                    label: "포도",
                                                                    disabled: true
                                                                }
                                                            ],
                                                            value: selectValue2,
                                                            onChange: setSelectValue2
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 642,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                            label: "라벨 (Row)",
                                                            layout: "row",
                                                            placeholder: "선택하세요",
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
                                                            lineNumber: 654,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 max-w-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Password"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PasswordInput, {
                                                            placeholder: "비밀번호 입력"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 671,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PasswordInput, {
                                                            label: "비밀번호",
                                                            placeholder: "8자 이상 입력하세요"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 672,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 668,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 max-w-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberInput, {
                                                            label: "수량",
                                                            value: numberValue,
                                                            onChange: setNumberValue,
                                                            min: 0,
                                                            max: 100
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 680,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberInput, {
                                                            label: "가격 (1000 단위)",
                                                            value: priceValue,
                                                            onChange: setPriceValue,
                                                            step: 1000,
                                                            min: 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 687,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 677,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 max-w-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DateInput, {
                                                            placeholder: "날짜 선택"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 701,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DateInput, {
                                                            label: "예약 날짜"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 702,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 698,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 max-w-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Checkbox"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                            label: "약관에 동의합니다",
                                                            checked: checked1,
                                                            onChange: (e)=>setChecked1(e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 710,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                            label: "마케팅 수신 동의",
                                                            description: "이벤트 및 할인 정보를 받아보실 수 있습니다",
                                                            checked: checked2,
                                                            onChange: (e)=>setChecked2(e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 715,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                            label: "비활성화",
                                                            disabled: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 721,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                                            label: "비활성화 (체크됨)",
                                                            disabled: true,
                                                            defaultChecked: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 722,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 707,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 max-w-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Radio"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 728,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                                                    name: "delivery",
                                                    value: radioValue,
                                                    onChange: setRadioValue,
                                                    options: [
                                                        {
                                                            value: "option1",
                                                            label: "일반 배송",
                                                            description: "3-5일 소요"
                                                        },
                                                        {
                                                            value: "option2",
                                                            label: "빠른 배송",
                                                            description: "1-2일 소요"
                                                        },
                                                        {
                                                            value: "option3",
                                                            label: "당일 배송",
                                                            description: "오늘 도착",
                                                            disabled: true
                                                        }
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 729,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 727,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 max-w-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Toggle"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                                            label: "알림 설정",
                                                            checked: toggleValue,
                                                            onChange: (e)=>setToggleValue(e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 745,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                                            label: "다크 모드",
                                                            description: "어두운 테마를 사용합니다",
                                                            checked: toggleValue2,
                                                            onChange: (e)=>setToggleValue2(e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                                            label: "비활성화",
                                                            disabled: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-4 items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                                                    size: "sm",
                                                                    defaultChecked: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 758,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                                                    size: "md",
                                                                    defaultChecked: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 759,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                                                    size: "lg",
                                                                    defaultChecked: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 760,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 757,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 744,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 742,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 max-w-2xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Sizes"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                    size: "sm",
                                                                    placeholder: "Small"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 770,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                    size: "md",
                                                                    placeholder: "Medium"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 771,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                    size: "lg",
                                                                    placeholder: "Large"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 772,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 769,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                    size: "sm",
                                                                    placeholder: "Small",
                                                                    options: [
                                                                        {
                                                                            value: "1",
                                                                            label: "옵션"
                                                                        }
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 775,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                    size: "md",
                                                                    placeholder: "Medium",
                                                                    options: [
                                                                        {
                                                                            value: "1",
                                                                            label: "옵션"
                                                                        }
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 780,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                    size: "lg",
                                                                    placeholder: "Large",
                                                                    options: [
                                                                        {
                                                                            value: "1",
                                                                            label: "옵션"
                                                                        }
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 785,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 774,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 766,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 max-w-2xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "States"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 796,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                    placeholder: "기본 상태"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 799,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                    success: true,
                                                                    successMessage: "사용 가능한 이메일입니다",
                                                                    placeholder: "성공 상태"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 800,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                    error: true,
                                                                    errorMessage: "필수 입력 항목입니다",
                                                                    placeholder: "에러 상태"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 801,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                    disabled: true,
                                                                    placeholder: "비활성화"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 802,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 798,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                    placeholder: "기본 상태",
                                                                    options: [
                                                                        {
                                                                            value: "1",
                                                                            label: "옵션"
                                                                        }
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 805,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                    success: true,
                                                                    successMessage: "선택 완료",
                                                                    value: "1",
                                                                    options: [
                                                                        {
                                                                            value: "1",
                                                                            label: "성공 상태"
                                                                        }
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 809,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                    error: true,
                                                                    errorMessage: "필수 선택 항목입니다",
                                                                    placeholder: "에러 상태",
                                                                    options: [
                                                                        {
                                                                            value: "1",
                                                                            label: "옵션"
                                                                        }
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 815,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                    disabled: true,
                                                                    placeholder: "비활성화",
                                                                    options: [
                                                                        {
                                                                            value: "1",
                                                                            label: "옵션"
                                                                        }
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 821,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 804,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 797,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 795,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "File Upload"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 832,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FileUpload, {
                                                            label: "이미지 업로드",
                                                            accept: "image/*",
                                                            maxSize: 5 * 1024 * 1024,
                                                            multiple: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 834,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FileUpload, {
                                                            label: "문서 업로드 (단일)",
                                                            accept: ".pdf,.doc,.docx",
                                                            maxSize: 10 * 1024 * 1024
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 840,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 833,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 831,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                                            title: "사용법",
                                            code: `// Input
<Input label="이메일" placeholder="example@email.com" />

// Select
<Select label="과일" options={[{ value: "apple", label: "사과" }]} value={v} onChange={setV} />

// Password / Number / Date
<PasswordInput label="비밀번호" />
<NumberInput label="수량" value={n} onChange={setN} min={0} />
<DateInput label="예약 날짜" />

// Checkbox
<Checkbox label="동의합니다" checked={c} onChange={(e) => setC(e.target.checked)} />

// Radio
<RadioGroup name="opt" value={v} onChange={setV} options={[{ value: "a", label: "A" }]} />

// Toggle
<Toggle label="알림" checked={t} onChange={(e) => setT(e.target.checked)} />

// FileUpload
<FileUpload
  label="이미지"
  accept="image/*"
  multiple
  maxSize={5 * 1024 * 1024}
  onChange={(files) => console.log(files)}
/>`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 848,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 589,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 588,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "card",
                                title: "Card",
                                description: "카드 컴포넌트",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Variants"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                            variant: "elevated",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "Elevated"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 889,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-600 text-sm",
                                                                    children: "그림자가 있는 기본 카드"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 890,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 888,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                            variant: "outlined",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "Outlined"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 893,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-600 text-sm",
                                                                    children: "테두리만 있는 카드"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 894,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 892,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                            variant: "filled",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "Filled"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 897,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-600 text-sm",
                                                                    children: "배경색이 있는 카드"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 898,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 896,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 885,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                                            title: "사용법",
                                            code: `// React/Next.js
<Card variant="elevated" padding="md">내용</Card>

// Angular (동일한 클래스)
<div class="bg-white border border-gray-200 shadow-sm p-6">내용</div>`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 903,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 884,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 883,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "badge",
                                title: "Badge",
                                description: "뱃지/태그 컴포넌트",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Variants"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 918,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            variant: "default",
                                                            children: "Default"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 920,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            variant: "primary",
                                                            children: "Primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 921,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            variant: "secondary",
                                                            children: "Secondary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 922,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            variant: "success",
                                                            children: "Success"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 923,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            variant: "warning",
                                                            children: "Warning"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 924,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            variant: "error",
                                                            children: "Error"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 925,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            variant: "info",
                                                            children: "Info"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 926,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 919,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 917,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Sizes"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 931,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            size: "sm",
                                                            children: "Small"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 933,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            size: "md",
                                                            children: "Medium"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 934,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            size: "lg",
                                                            children: "Large"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 935,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 932,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 930,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                                            title: "사용법",
                                            code: `// React/Next.js
<Badge variant="success">완료</Badge>

// Angular (동일한 클래스)
<span class="inline-flex items-center font-medium bg-success-500 text-white px-2.5 py-0.5 text-sm">
  완료
</span>`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 939,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 916,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 915,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "tabs",
                                title: "Tabs",
                                description: "탭 네비게이션 컴포넌트",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Underline (기본)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 956,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tabs, {
                                                    defaultValue: "tab1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsList, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "tab1",
                                                                    children: "계정"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 959,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "tab2",
                                                                    children: "비밀번호"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 960,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "tab3",
                                                                    children: "알림"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 961,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "tab4",
                                                                    disabled: true,
                                                                    children: "설정"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 962,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 958,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "tab1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "계정 정보를 관리할 수 있습니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 965,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 964,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "tab2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "비밀번호를 변경할 수 있습니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 968,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 967,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "tab3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "알림 설정을 관리할 수 있습니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 970,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 957,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 955,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Button"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 977,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tabs, {
                                                    defaultValue: "btn1",
                                                    variant: "button",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsList, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "btn1",
                                                                    children: "전체"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 980,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "btn2",
                                                                    children: "진행중"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 981,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "btn3",
                                                                    children: "완료"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 982,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "btn4",
                                                                    disabled: true,
                                                                    children: "보류"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 983,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 979,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "btn1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "전체 항목을 표시합니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 986,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 985,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "btn2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "진행중인 항목만 표시합니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 989,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 988,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "btn3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "완료된 항목만 표시합니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 992,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 991,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 978,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 976,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Underline Large (전체 너비)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 998,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tabs, {
                                                    defaultValue: "lg1",
                                                    size: "lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsList, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "lg1",
                                                                    children: "상품 정보"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1001,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "lg2",
                                                                    children: "상세 설명"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1002,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "lg3",
                                                                    children: "리뷰"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1003,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "lg4",
                                                                    children: "문의"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1004,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1000,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "lg1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "상품의 기본 정보를 확인할 수 있습니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1007,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1006,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "lg2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "상품의 상세 설명입니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1010,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1009,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "lg3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "고객 리뷰를 확인할 수 있습니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1013,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1012,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "lg4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "상품 문의 내역입니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1016,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1015,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 999,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 997,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Button Large (전체 너비)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1022,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tabs, {
                                                    defaultValue: "blg1",
                                                    variant: "button",
                                                    size: "lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsList, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "blg1",
                                                                    children: "일간"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1025,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "blg2",
                                                                    children: "주간"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1026,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                                    value: "blg3",
                                                                    children: "월간"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1027,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1024,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "blg1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "일간 통계를 표시합니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1030,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1029,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "blg2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "주간 통계를 표시합니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1033,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1032,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                                                            value: "blg3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "월간 통계를 표시합니다."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1036,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1035,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1023,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1021,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                                            title: "사용법",
                                            code: `// Underline (기본)
<Tabs defaultValue="tab1">
  ...
</Tabs>

// Button
<Tabs defaultValue="tab1" variant="button">
  ...
</Tabs>

// Large (전체 너비, 중앙 정렬)
<Tabs defaultValue="tab1" size="lg">
  ...
</Tabs>

// Button + Large
<Tabs defaultValue="tab1" variant="button" size="lg">
  ...
</Tabs>`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1041,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 954,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 953,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "accordion",
                                title: "Accordion",
                                description: "아코디언 컴포넌트",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8 max-w-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Single (하나만 열림)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1070,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Accordion, {
                                                    defaultValue: [
                                                        "item1"
                                                    ],
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                            value: "item1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionTrigger, {
                                                                    value: "item1",
                                                                    children: "주문은 어떻게 하나요?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1073,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContent, {
                                                                    value: "item1",
                                                                    children: "상품을 선택한 후 장바구니에 담고, 결제 페이지에서 배송지와 결제 정보를 입력하시면 됩니다."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1074,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1072,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                            value: "item2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionTrigger, {
                                                                    value: "item2",
                                                                    children: "배송은 얼마나 걸리나요?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1079,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContent, {
                                                                    value: "item2",
                                                                    children: "일반 배송은 3-5일, 빠른 배송은 1-2일 내에 도착합니다."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1080,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1078,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                            value: "item3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionTrigger, {
                                                                    value: "item3",
                                                                    children: "반품/교환은 어떻게 하나요?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1085,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContent, {
                                                                    value: "item3",
                                                                    children: "수령 후 7일 이내에 고객센터로 연락 주시면 반품/교환이 가능합니다."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1086,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1084,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1071,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1069,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Multiple (여러 개 열림)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1094,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Accordion, {
                                                    multiple: true,
                                                    defaultValue: [
                                                        "m1",
                                                        "m2"
                                                    ],
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                            value: "m1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionTrigger, {
                                                                    value: "m1",
                                                                    children: "항목 1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1097,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContent, {
                                                                    value: "m1",
                                                                    children: "여러 항목을 동시에 열 수 있습니다."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1098,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1096,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                            value: "m2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionTrigger, {
                                                                    value: "m2",
                                                                    children: "항목 2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1103,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContent, {
                                                                    value: "m2",
                                                                    children: "multiple 속성을 사용하면 됩니다."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1104,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1102,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1095,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1093,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                                            title: "사용법",
                                            code: `<Accordion defaultValue={["item1"]} multiple>
  <AccordionItem value="item1">
    <AccordionTrigger value="item1">제목</AccordionTrigger>
    <AccordionContent value="item1">내용</AccordionContent>
  </AccordionItem>
</Accordion>`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 1068,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 1067,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "table",
                                title: "Table",
                                description: "테이블 컴포넌트",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Basic"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1128,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHeader, {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "상품명"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1132,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "카테고리"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1133,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        align: "right",
                                                                        children: "가격"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1134,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        align: "center",
                                                                        children: "상태"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1135,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1131,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1130,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableBody, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "클래식 라운드 선글라스"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1140,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "선글라스"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1141,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "right",
                                                                            children: "129,000원"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1142,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                                variant: "success",
                                                                                children: "판매중"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                                lineNumber: 1143,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1143,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1139,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "블루라이트 차단 안경"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1146,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "안경"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1147,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "right",
                                                                            children: "89,000원"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1148,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                                variant: "success",
                                                                                children: "판매중"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                                lineNumber: 1149,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1149,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1145,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1138,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1129,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Filterable"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-4 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                            placeholder: "상품명 검색...",
                                                            value: searchQuery,
                                                            onChange: (e)=>setSearchQuery(e.target.value),
                                                            className: "max-w-xs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1158,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                            placeholder: "카테고리",
                                                            options: categoryOptions,
                                                            value: categoryFilter,
                                                            onChange: setCategoryFilter,
                                                            className: "w-40"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1164,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1157,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHeader, {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "상품명"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1175,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "카테고리"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1176,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        align: "right",
                                                                        children: "가격"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1177,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1174,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1173,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableBody, {
                                                            children: filteredTableData.length > 0 ? filteredTableData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1184,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: item.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1185,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "right",
                                                                            children: [
                                                                                item.price.toLocaleString(),
                                                                                "원"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1186,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, item.id, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1183,
                                                                    columnNumber: 25
                                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                    colSpan: 3,
                                                                    className: "text-center text-gray-500 py-8",
                                                                    children: "검색 결과가 없습니다"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1191,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1190,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1180,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1172,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Sortable"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHeader, {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableSortHead, {
                                                                        sortDirection: sortKey === "name" ? sortDirection : null,
                                                                        onSort: ()=>handleSort("name"),
                                                                        children: "상품명"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1205,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableSortHead, {
                                                                        sortDirection: sortKey === "category" ? sortDirection : null,
                                                                        onSort: ()=>handleSort("category"),
                                                                        children: "카테고리"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1211,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableSortHead, {
                                                                        align: "right",
                                                                        sortDirection: sortKey === "price" ? sortDirection : null,
                                                                        onSort: ()=>handleSort("price"),
                                                                        children: "가격"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1217,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1204,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1203,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableBody, {
                                                            children: sortedTableData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1229,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: item.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1230,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "right",
                                                                            children: [
                                                                                item.price.toLocaleString(),
                                                                                "원"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1231,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, item.id, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1228,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1226,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1202,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1200,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Selectable Rows"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1239,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2 text-sm text-gray-500",
                                                    children: [
                                                        "선택된 항목: ",
                                                        selectedRows.length,
                                                        "개"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1240,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHeader, {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        className: "w-12",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCheckbox, {
                                                                            checked: isAllSelected,
                                                                            indeterminate: isIndeterminate,
                                                                            onChange: toggleSelectAll
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1247,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1246,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "상품명"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1253,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "카테고리"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1254,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        align: "right",
                                                                        children: "가격"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1255,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1245,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1244,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableBody, {
                                                            children: tableData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                    selected: selectedRows.includes(item.id),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCheckbox, {
                                                                                checked: selectedRows.includes(item.id),
                                                                                onChange: ()=>toggleSelectRow(item.id)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                                lineNumber: 1262,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1261,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1267,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: item.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1268,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "right",
                                                                            children: [
                                                                                item.price.toLocaleString(),
                                                                                "원"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1269,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, item.id, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1260,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1258,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1243,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1238,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Clickable Rows (가로 스크롤)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1277,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mb-3",
                                                    children: "컬럼이 많을 경우 가로 스크롤로 확인"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1278,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHeader, {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "주문번호"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1282,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "고객명"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1283,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "연락처"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1284,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "주소"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1285,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "주문일"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1286,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "배송방법"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1287,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        align: "right",
                                                                        children: "금액"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1288,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        align: "center",
                                                                        children: "상태"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1289,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1281,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1280,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableBody, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                    onClick: ()=>console.log("주문 1 클릭"),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "ORD-2024-001"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1294,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "홍길동"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1295,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "010-1234-5678"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1296,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "서울시 강남구 테헤란로 123"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1297,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "2024-01-15"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1298,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "일반배송"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1299,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "right",
                                                                            children: "258,000원"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1300,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                                variant: "info",
                                                                                children: "배송중"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                                lineNumber: 1301,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1301,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1293,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                    onClick: ()=>console.log("주문 2 클릭"),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "ORD-2024-002"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1304,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "김철수"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1305,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "010-9876-5432"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1306,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "부산시 해운대구 센텀로 456"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1307,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "2024-01-14"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1308,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "빠른배송"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1309,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "right",
                                                                            children: "129,000원"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1310,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                                variant: "success",
                                                                                children: "완료"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                                lineNumber: 1311,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1311,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1303,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                    onClick: ()=>console.log("주문 3 클릭"),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "ORD-2024-003"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1314,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "이영희"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1315,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "010-5555-1234"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1316,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "대전시 유성구 대학로 789"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1317,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "2024-01-13"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1318,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "당일배송"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1319,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "right",
                                                                            children: "89,000원"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1320,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                                variant: "warning",
                                                                                children: "준비중"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                                lineNumber: 1321,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1321,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1313,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1292,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1279,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "hideOnMobile (컬럼 숨김)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1328,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mb-3",
                                                    children: "모바일에서 덜 중요한 컬럼 숨기기"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1329,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHeader, {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "주문번호"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1333,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        children: "고객명"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1334,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        hideOnMobile: true,
                                                                        children: "연락처"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1335,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        hideOnMobile: true,
                                                                        children: "주소"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1336,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        hideOnMobile: true,
                                                                        children: "주문일"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1337,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        hideOnMobile: true,
                                                                        children: "배송방법"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1338,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        align: "right",
                                                                        children: "금액"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1339,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                                                        align: "center",
                                                                        children: "상태"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1340,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1332,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1331,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableBody, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "ORD-2024-001"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1345,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "홍길동"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1346,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            hideOnMobile: true,
                                                                            children: "010-1234-5678"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1347,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            hideOnMobile: true,
                                                                            children: "서울시 강남구 테헤란로 123"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1348,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            hideOnMobile: true,
                                                                            children: "2024-01-15"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1349,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            hideOnMobile: true,
                                                                            children: "일반배송"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1350,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "right",
                                                                            children: "258,000원"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1351,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                                variant: "info",
                                                                                children: "배송중"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                                lineNumber: 1352,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1352,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1344,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "ORD-2024-002"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1355,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            children: "김철수"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1356,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            hideOnMobile: true,
                                                                            children: "010-9876-5432"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1357,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            hideOnMobile: true,
                                                                            children: "부산시 해운대구 센텀로 456"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1358,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            hideOnMobile: true,
                                                                            children: "2024-01-14"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1359,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            hideOnMobile: true,
                                                                            children: "빠른배송"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1360,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "right",
                                                                            children: "129,000원"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1361,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                                                            align: "center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                                variant: "success",
                                                                                children: "완료"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                                lineNumber: 1362,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1362,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1354,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1343,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1327,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                                            title: "사용법",
                                            code: `// 반응형 (모바일에서 컬럼 숨기기)
<TableHead hideOnMobile>연락처</TableHead>
<TableCell hideOnMobile>010-1234-5678</TableCell>

// 정렬
<TableSortHead
  sortDirection={sortKey === "name" ? sortDirection : null}
  onSort={() => handleSort("name")}
>
  이름
</TableSortHead>

// 체크박스 선택
<TableRow selected={selectedRows.includes(id)}>
  <TableCell>
    <TableCheckbox
      checked={selectedRows.includes(id)}
      indeterminate={isIndeterminate}
      onChange={() => toggle(id)}
    />
  </TableCell>
</TableRow>

// colSpan (빈 결과)
<TableCell colSpan={3}>결과 없음</TableCell>`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1368,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 1125,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 1124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "pagination",
                                title: "Pagination",
                                description: "페이지네이션 컴포넌트",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Interactive"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1403,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pagination, {
                                                    currentPage: currentPage,
                                                    totalPages: 10,
                                                    onPageChange: setCurrentPage
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1404,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500 mt-4 text-center",
                                                    children: [
                                                        "현재 페이지: ",
                                                        currentPage
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1409,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1402,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Few Pages"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1413,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pagination, {
                                                    currentPage: 2,
                                                    totalPages: 5,
                                                    onPageChange: ()=>{}
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1414,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1412,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Many Pages"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1422,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pagination, {
                                                    currentPage: 15,
                                                    totalPages: 30,
                                                    onPageChange: ()=>{}
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1423,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1421,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                                            title: "사용법",
                                            code: `<Pagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
  siblingCount={1} // 현재 페이지 좌우로 표시할 페이지 수
/>`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1430,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 1401,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 1400,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "tooltip",
                                title: "Tooltip",
                                description: "툴팁 컴포넌트",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Positions"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1446,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-4 py-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                                            content: "위쪽 툴팁",
                                                            position: "top",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "outline",
                                                                children: "Top"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1449,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1448,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                                            content: "아래쪽 툴팁",
                                                            position: "bottom",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "outline",
                                                                children: "Bottom"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1452,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1451,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                                            content: "왼쪽 툴팁",
                                                            position: "left",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "outline",
                                                                children: "Left"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1455,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1454,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                                            content: "오른쪽 툴팁",
                                                            position: "right",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "outline",
                                                                children: "Right"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1458,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1457,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1447,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1445,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "다양한 콘텐츠"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1464,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                                            content: "간단한 텍스트 툴팁",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "ghost",
                                                                children: "텍스트 툴팁"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1467,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1466,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold",
                                                                        children: "복잡한 툴팁"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1472,
                                                                        columnNumber: 25
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-300 text-xs mt-1",
                                                                        children: "여러 줄의 내용을 포함할 수 있습니다"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1473,
                                                                        columnNumber: 25
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1471,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "ghost",
                                                                children: "복잡한 툴팁"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1477,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1469,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1465,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1463,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                                            title: "사용법",
                                            code: `// React/Next.js
<Tooltip content="툴팁 내용" position="top">
  <Button>호버하세요</Button>
</Tooltip>

// 복잡한 콘텐츠
<Tooltip
  content={
    <div>
      <p className="font-semibold">제목</p>
      <p className="text-xs">설명</p>
    </div>
  }
>
  <span>호버하세요</span>
</Tooltip>`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1482,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 1444,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 1443,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "modal",
                                title: "Modal",
                                description: "모달, 팝업, 토스트 컴포넌트",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Alert"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1509,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                    onClick: ()=>setShowAlert(true),
                                                    children: "Alert 열기"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1510,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Alert, {
                                                    isOpen: showAlert,
                                                    onClose: ()=>setShowAlert(false),
                                                    title: "알림",
                                                    message: "작업이 완료되었습니다."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1511,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1508,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Confirm"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1521,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            onClick: ()=>setShowConfirm(true),
                                                            children: "Confirm 열기"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1523,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "danger",
                                                            onClick: ()=>setShowDangerConfirm(true),
                                                            children: "Danger Confirm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1524,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1522,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Confirm, {
                                                    isOpen: showConfirm,
                                                    onClose: ()=>setShowConfirm(false),
                                                    onConfirm: ()=>console.log("확인됨"),
                                                    title: "확인",
                                                    message: "이 작업을 진행하시겠습니까?"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1528,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Confirm, {
                                                    isOpen: showDangerConfirm,
                                                    onClose: ()=>setShowDangerConfirm(false),
                                                    onConfirm: ()=>console.log("삭제됨"),
                                                    title: "삭제 확인",
                                                    message: "정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.",
                                                    confirmText: "삭제",
                                                    variant: "danger"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1535,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1520,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Toast"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1548,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "ghost",
                                                            onClick: ()=>{
                                                                setToastVariant("default");
                                                                setShowToast(true);
                                                            },
                                                            children: "Default"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1550,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "ghost",
                                                            onClick: ()=>{
                                                                setToastVariant("success");
                                                                setShowToast(true);
                                                            },
                                                            children: "Success"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1559,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "ghost",
                                                            onClick: ()=>{
                                                                setToastVariant("warning");
                                                                setShowToast(true);
                                                            },
                                                            children: "Warning"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1568,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "ghost",
                                                            onClick: ()=>{
                                                                setToastVariant("error");
                                                                setShowToast(true);
                                                            },
                                                            children: "Error"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1577,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            variant: "ghost",
                                                            onClick: ()=>{
                                                                setToastVariant("info");
                                                                setShowToast(true);
                                                            },
                                                            children: "Info"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1586,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1549,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toast, {
                                                    isOpen: showToast,
                                                    onClose: ()=>setShowToast(false),
                                                    message: `${toastVariant.charAt(0).toUpperCase() + toastVariant.slice(1)} 메시지입니다.`,
                                                    variant: toastVariant
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1596,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1547,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-700 mb-3",
                                                    children: "Image Popup"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1606,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowImagePopup(true),
                                                    className: "group relative overflow-hidden cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
                                                            alt: "Sample",
                                                            className: "w-48 h-32 object-cover transition-transform group-hover:scale-105"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1611,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1624,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                lineNumber: 1617,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1616,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1607,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ImagePopup, {
                                                    isOpen: showImagePopup,
                                                    onClose: ()=>setShowImagePopup(false),
                                                    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
                                                    alt: "Sample full size"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1628,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1605,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                                            title: "사용법",
                                            code: `// Alert
<Alert
  isOpen={showAlert}
  onClose={() => setShowAlert(false)}
  title="알림"
  message="작업이 완료되었습니다."
/>

// Confirm
<Confirm
  isOpen={showConfirm}
  onClose={() => setShowConfirm(false)}
  onConfirm={() => handleConfirm()}
  title="확인"
  message="진행하시겠습니까?"
  variant="danger" // optional
/>

// Toast
<Toast
  isOpen={showToast}
  onClose={() => setShowToast(false)}
  message="저장되었습니다."
  variant="success"
  duration={3000}
  position="top-right"
/>

// ImagePopup
<ImagePopup
  isOpen={showImagePopup}
  onClose={() => setShowImagePopup(false)}
  src="/image.jpg"
  alt="이미지 설명"
/>`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1636,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 1506,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 1505,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "loading",
                                title: "Loading",
                                description: "로딩 상태 컴포넌트 (스피너, 스켈레톤)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2",
                                                    children: "Spinner"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1682,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-gray-700 mb-3",
                                                            children: "Sizes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1685,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                                            size: "xs"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1688,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "xs"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1689,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1687,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                                            size: "sm"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1692,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "sm"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1693,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1691,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                                            size: "md"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1696,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "md"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1697,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1695,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                                            size: "lg"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1700,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "lg"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1701,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1699,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                                            size: "xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1704,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1705,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1703,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1686,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1684,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-gray-700 mb-3",
                                                            children: "Variants"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1711,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                                            variant: "primary",
                                                                            size: "lg"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1714,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "primary"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1715,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1713,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                                            variant: "secondary",
                                                                            size: "lg"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1718,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "secondary"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1719,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1717,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                                            variant: "gray",
                                                                            size: "lg"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1722,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "gray"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1723,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1721,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2 p-3 bg-gray-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                                            variant: "white",
                                                                            size: "lg"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1726,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-300",
                                                                            children: "white"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1727,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1725,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1712,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1710,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-gray-700 mb-3",
                                                            children: "With Label"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1733,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                            size: "md",
                                                            label: "로딩 중..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1734,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1732,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-gray-700 mb-3",
                                                            children: "Overlay"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1738,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative border border-gray-200 p-6 h-40",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-600",
                                                                    children: "콘텐츠 영역"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1740,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-400 mt-2",
                                                                    children: "SpinnerOverlay가 이 영역 위에 표시됩니다"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1741,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerOverlay, {
                                                                    isVisible: true,
                                                                    label: "불러오는 중..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1742,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1739,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1737,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-gray-700 mb-3",
                                                            children: "Button Loading"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1747,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                    disabled: true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                                                size: "sm",
                                                                                variant: "white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                                lineNumber: 1751,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "저장 중..."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1750,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1749,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                    variant: "outline",
                                                                    disabled: true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                                                size: "sm",
                                                                                variant: "primary"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                                lineNumber: 1757,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "처리 중..."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                        lineNumber: 1756,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1755,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1748,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1746,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1681,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2",
                                                    children: "Skeleton"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1767,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-gray-700 mb-3",
                                                            children: "Basic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1770,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 max-w-md",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                                                    height: 20,
                                                                    width: "60%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1772,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                                                    height: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1773,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                                                    height: 16,
                                                                    width: "80%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1774,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1771,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1769,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-gray-700 mb-3",
                                                            children: "Variants"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1779,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                                                            variant: "rectangular",
                                                                            width: 60,
                                                                            height: 60
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1782,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "rectangular"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1783,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1781,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                                                            variant: "circular",
                                                                            width: 60,
                                                                            height: 60
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1786,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "circular"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1787,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1785,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                                                            variant: "text",
                                                                            width: 60,
                                                                            height: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1790,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "text"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1791,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1789,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1780,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1778,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-gray-700 mb-3",
                                                            children: "Animation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1797,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "pulse"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1800,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                                                            animation: "pulse",
                                                                            width: 100,
                                                                            height: 32
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1801,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1799,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "wave"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1804,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                                                            animation: "wave",
                                                                            width: 100,
                                                                            height: 32
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1805,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1803,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1808,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                                                            animation: "none",
                                                                            width: 100,
                                                                            height: 32
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1809,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1807,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1798,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1796,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-gray-700 mb-3",
                                                            children: "Presets"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1815,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 gap-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "SkeletonText"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1818,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                                                                            lines: 3
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1819,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1817,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "SkeletonList"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1822,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonList, {
                                                                            items: 2
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1823,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1821,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "SkeletonCard"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1826,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, void 0, false, {
                                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                            lineNumber: 1827,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                                    lineNumber: 1825,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1816,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1814,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-gray-700 mb-3",
                                                            children: "SkeletonTable"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1833,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonTable, {
                                                            rows: 3,
                                                            columns: 4
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                            lineNumber: 1834,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1832,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1766,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                                            title: "사용법",
                                            code: `// 스피너
<Spinner size="md" variant="primary" />
<Spinner size="lg" label="로딩 중..." />

// 스피너 오버레이
<div className="relative">
  <Content />
  <SpinnerOverlay isVisible={isLoading} label="불러오는 중..." />
</div>

// 버튼 로딩
<Button disabled>
  <Spinner size="sm" variant="white" />
  저장 중...
</Button>

// 스켈레톤
<Skeleton width={200} height={20} />
<Skeleton variant="circular" width={40} height={40} />
<SkeletonCard hasImage />
<SkeletonTable rows={5} columns={4} />`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1838,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 1679,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 1678,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                id: "shadows",
                                title: "Shadows",
                                description: "그림자 스타일",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-8",
                                    children: [
                                        {
                                            name: "sm",
                                            class: "shadow-sm"
                                        },
                                        {
                                            name: "default",
                                            class: "shadow"
                                        },
                                        {
                                            name: "md",
                                            class: "shadow-md"
                                        },
                                        {
                                            name: "lg",
                                            class: "shadow-lg"
                                        },
                                        {
                                            name: "xl",
                                            class: "shadow-xl"
                                        },
                                        {
                                            name: "2xl",
                                            class: "shadow-2xl"
                                        }
                                    ].map(({ name, class: cls })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-20 h-20 bg-white border border-gray-100 ${cls}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1877,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500",
                                                    children: name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1878,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, name, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1876,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 1867,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 1866,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "border-t border-gray-200 py-8 mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " Rainbow Spino. All rights reserved."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 1888,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:gilisbigluck@gmail.com",
                                    className: "flex items-center gap-2 text-sm text-gray-500 hover:text-primary-900 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "2",
                                                    y: "4",
                                                    width: "20",
                                                    height: "16",
                                                    rx: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1905,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 7l-10 7L2 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                                    lineNumber: 1906,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                            lineNumber: 1895,
                                            columnNumber: 15
                                        }, this),
                                        "gilisbigluck@gmail.com"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                    lineNumber: 1891,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 1887,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 1886,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: scrollToTop,
                className: `!fixed right-4 bottom-4 md:right-8 md:bottom-8 z-[100] w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-900/80 md:bg-primary-900 backdrop-blur-sm md:backdrop-blur-none text-white flex items-center justify-center shadow-lg transition-all duration-300 hover-prism cursor-pointer ${showTopButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
                "aria-label": "맨 위로",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10 4L10 16M10 4L5 9M10 4L15 9",
                            strokeWidth: "2",
                            strokeLinecap: "square"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                            lineNumber: 1924,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 1923,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                    lineNumber: 1922,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 1915,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toast, {
                isOpen: showCopyToast,
                onClose: ()=>setShowCopyToast(false),
                message: `${copiedColor} 복사됨`,
                variant: "success",
                duration: 2000
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 1930,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
/* Helper Components */ function Section({ id, title, description, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: "scroll-mt-8 pb-8 md:pb-16 mb-8 md:mb-16 border-b border-gray-200 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 md:mb-6 flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 bg-primary-900 mt-2.5 md:mt-3 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 1957,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl md:text-2xl font-bold text-gray-900",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 1959,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm md:text-base text-gray-600",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 1960,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 1958,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 1956,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
        lineNumber: 1955,
        columnNumber: 5
    }, this);
}
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
        900
    ];
    const handleCopy = (shade, element)=>{
        const computedColor = getComputedStyle(element).backgroundColor;
        const hexColor = rgbToHex(computedColor);
        const colorVar = `${color}-${shade}`;
        navigator.clipboard.writeText(hexColor);
        onCopy?.(hexColor);
    };
    const rgbToHex = (rgb)=>{
        const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (!match) return rgb;
        const r = parseInt(match[1]).toString(16).padStart(2, '0');
        const g = parseInt(match[2]).toString(16).padStart(2, '0');
        const b = parseInt(match[3]).toString(16).padStart(2, '0');
        return `#${r}${g}${b}`.toUpperCase();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-sm font-medium text-gray-700 mb-2",
                children: name
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 1990,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-5 md:grid-cols-10 gap-2",
                children: shades.map((shade)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorSwatch, {
                        color: color,
                        shade: shade,
                        onCopy: handleCopy
                    }, shade, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 1993,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 1991,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
        lineNumber: 1989,
        columnNumber: 5
    }, this);
}
function ColorSwatch({ color, shade, onCopy }) {
    const [hexValue, setHexValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const swatchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (swatchRef.current) {
            const computedColor = getComputedStyle(swatchRef.current).backgroundColor;
            const match = computedColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (match) {
                const r = parseInt(match[1]).toString(16).padStart(2, '0');
                const g = parseInt(match[2]).toString(16).padStart(2, '0');
                const b = parseInt(match[3]).toString(16).padStart(2, '0');
                setHexValue(`#${r}${g}${b}`.toUpperCase());
            }
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                content: hexValue || "Loading...",
                position: "top",
                className: "block w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: swatchRef,
                    className: "h-12 w-full cursor-pointer hover:ring-2 hover:ring-primary-900 hover:ring-offset-2 transition-all",
                    style: {
                        backgroundColor: `var(--color-${color}-${shade})`
                    },
                    onClick: ()=>swatchRef.current && onCopy(shade, swatchRef.current)
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                    lineNumber: 2025,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 2024,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-center text-gray-500",
                children: shade
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 2032,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
        lineNumber: 2023,
        columnNumber: 5
    }, this);
}
function MainColorSwatch({ name, label, cssVar, onCopy }) {
    const [hexValue, setHexValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const swatchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (swatchRef.current) {
            const computedColor = getComputedStyle(swatchRef.current).backgroundColor;
            const match = computedColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (match) {
                const r = parseInt(match[1]).toString(16).padStart(2, '0');
                const g = parseInt(match[2]).toString(16).padStart(2, '0');
                const b = parseInt(match[3]).toString(16).padStart(2, '0');
                setHexValue(`#${r}${g}${b}`.toUpperCase());
            }
        }
    }, []);
    const handleCopy = ()=>{
        if (hexValue) {
            navigator.clipboard.writeText(hexValue);
            onCopy?.(hexValue);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                content: hexValue || "Loading...",
                position: "top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: swatchRef,
                    className: "w-20 h-20 md:w-24 md:h-24 border border-gray-100 cursor-pointer hover:ring-2 hover:ring-primary-900 hover:ring-offset-2 transition-all",
                    style: {
                        backgroundColor: `var(${cssVar})`
                    },
                    onClick: handleCopy
                }, void 0, false, {
                    fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                    lineNumber: 2064,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 2063,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-gray-700",
                children: name
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 2071,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 2072,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
        lineNumber: 2062,
        columnNumber: 5
    }, this);
}
function CodeBlock({ title, code }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 bg-gray-800 text-gray-400 text-sm",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 2080,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$prism$2d$react$2d$renderer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Highlight"], {
                theme: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$prism$2d$react$2d$renderer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes"].nightOwl,
                code: code.trim(),
                language: "tsx",
                children: ({ style, tokens, getLineProps, getTokenProps })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "p-4 text-sm overflow-x-auto",
                        style: style,
                        children: tokens.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ...getLineProps({
                                    line
                                }),
                                children: line.map((token, key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$gil$2f$repo$2f$next$2d$gil$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ...getTokenProps({
                                            token
                                        })
                                    }, key, false, {
                                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                        lineNumber: 2087,
                                        columnNumber: 19
                                    }, this))
                            }, i, false, {
                                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                                lineNumber: 2085,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                        lineNumber: 2083,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
                lineNumber: 2081,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/gil/repo/next-gil-ui/app/page.tsx",
        lineNumber: 2079,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7aedd443._.js.map