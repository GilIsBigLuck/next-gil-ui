"use client";

/**
 * Design System Showcase
 *
 * 모든 UI 컴포넌트와 디자인 토큰을 한눈에 볼 수 있는 페이지
 * Angular에서 동일한 Tailwind 클래스를 복사해서 사용 가능
 */

import { useEffect, useState, useRef } from "react";
import { Highlight, themes } from "prism-react-renderer";
import {
  Button,
  Input,
  Textarea,
  Card,
  Badge,
  Alert, Confirm, ImagePopup,
  Toast,
  Select,
  Tooltip,
  PasswordInput,
  NumberInput,
  DateInput,
  Checkbox,
  Radio, RadioGroup,
  Toggle,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCheckbox, TableSortHead,
  Pagination,
  Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard, SkeletonTable, SkeletonList,
  Spinner, SpinnerOverlay,
  FileUpload,
} from "@/components";
import type { SortDirection } from "@/components";

const sections = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "button", label: "Button" },
  { id: "form", label: "Form" },
  { id: "card", label: "Card" },
  { id: "badge", label: "Badge" },
  { id: "tabs", label: "Tabs" },
  { id: "accordion", label: "Accordion" },
  { id: "table", label: "Table" },
  { id: "pagination", label: "Pagination" },
  { id: "tooltip", label: "Tooltip" },
  { id: "modal", label: "Modal" },
  { id: "loading", label: "Loading" },
  { id: "shadows", label: "Shadows" },
];

export default function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState("colors");
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Set initial sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768; // md breakpoint
      setIsExpanded(isDesktop);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Modal states
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDangerConfirm, setShowDangerConfirm] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastVariant, setToastVariant] = useState<"default" | "success" | "warning" | "error" | "info">("default");

  // Select states
  const [selectValue, setSelectValue] = useState("");
  const [selectValue2, setSelectValue2] = useState("");

  // Copy toast state
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [copiedColor, setCopiedColor] = useState("");

  // NumberInput state
  const [numberValue, setNumberValue] = useState(0);
  const [priceValue, setPriceValue] = useState(10000);

  // Checkbox, Radio, Toggle states
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [radioValue, setRadioValue] = useState("option1");
  const [toggleValue, setToggleValue] = useState(false);
  const [toggleValue2, setToggleValue2] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Table selection state
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const tableData = [
    { id: "1", name: "클래식 라운드 선글라스", category: "선글라스", price: 129000 },
    { id: "2", name: "블루라이트 차단 안경", category: "안경", price: 89000 },
    { id: "3", name: "빈티지 메탈 프레임", category: "안경테", price: 159000 },
    { id: "4", name: "스포츠 고글", category: "고글", price: 199000 },
  ];
  const isAllSelected = selectedRows.length === tableData.length;
  const isIndeterminate = selectedRows.length > 0 && selectedRows.length < tableData.length;
  const toggleSelectAll = () => {
    setSelectedRows(isAllSelected ? [] : tableData.map((d) => d.id));
  };
  const toggleSelectRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Table sorting state
  const [sortKey, setSortKey] = useState<"name" | "category" | "price" | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const handleSort = (key: "name" | "category" | "price") => {
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
  const sortedTableData = [...tableData].sort((a, b) => {
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
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const categoryOptions = [
    { value: "", label: "전체 카테고리" },
    { value: "선글라스", label: "선글라스" },
    { value: "안경", label: "안경" },
    { value: "안경테", label: "안경테" },
    { value: "고글", label: "고글" },
  ];
  const filteredTableData = tableData.filter((item) => {
    const matchesSearch = searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "" || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    let scrollEndTimer: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
      setShowTopButton(scrollTop > 200);

      // Skip active section update while programmatic scrolling
      if (isScrollingRef.current) return;

      // Debounce section detection to prevent flickering
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => {
        const isAtBottom = scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 50;
        if (isAtBottom) {
          setActiveSection(sections[sections.length - 1].id);
          return;
        }

        const sectionElements = sections.map(s => document.getElementById(s.id));
        for (let i = sectionElements.length - 1; i >= 0; i--) {
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollEndTimer);
    };
  }, []);

  const scrollToSection = (id: string) => {
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
      element.scrollIntoView({ behavior: "smooth" });
      // Reset flag after scroll animation completes
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        scrollTimeoutRef.current = null;
      }, 1000);
    }
  };

  const scrollToTop = () => {
    // Cancel any existing scroll animation
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    isScrollingRef.current = true;
    setActiveSection(sections[0].id);
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      scrollTimeoutRef.current = null;
    }, 1000);
  };

  const activeIndex = sections.findIndex(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Menu Button - Left */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="md:hidden fixed top-4 left-4 z-[60] w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 cursor-pointer"
        aria-label="메뉴"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isExpanded ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Home Link - Right */}
      <a
        href="/"
        className="fixed top-4 right-4 z-[60] px-3 py-2 text-sm text-white mix-blend-difference flex items-center gap-1"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        홈으로
      </a>

      {/* Mobile Overlay */}
      {isExpanded && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`group/sidebar fixed left-0 top-0 h-screen border-r border-gray-200 bg-white flex flex-col py-8 z-50 transition-all duration-300
          ${isExpanded ? "w-48 translate-x-0" : "w-16 -translate-x-full md:translate-x-0"}
        `}
      >
        {/* Toggle Button - slides out on hover (hidden on mobile) */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="hidden md:flex absolute top-0 bottom-0 w-10 items-center justify-center transition-all duration-300 right-0 translate-x-0 opacity-0 group-hover/sidebar:translate-x-full group-hover/sidebar:opacity-100 cursor-pointer"
        >
          <span className="w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`}
            >
              <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
          </span>
        </button>

        {/* Navigation with integrated progress */}
        <nav className="flex flex-col items-start mt-8 relative pl-6 pr-4">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            const isPast = index <= activeIndex;

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center gap-3 h-10 w-full cursor-pointer"
              >
                {/* Progress line segment (between dots) */}
                {index < sections.length - 1 && (
                  <span
                    className={`absolute left-[3px] top-1/2 w-0.5 h-10 transition-colors duration-300 ${
                      index < activeIndex ? "bg-primary-900" : "bg-gray-200"
                    }`}
                  />
                )}

                {/* Dot */}
                <span
                  className={`relative z-10 flex-shrink-0 transition-all duration-300 ${
                    isActive
                      ? "w-2 h-2 bg-primary-900 ring-4 ring-primary-100"
                      : isPast
                        ? "w-2 h-2 bg-primary-900"
                        : "w-2 h-2 bg-gray-300"
                  }`}
                />

                {/* Label - no transition to prevent flashing */}
                {isExpanded && (
                  <span
                    className={`text-sm whitespace-nowrap ${
                      isActive
                        ? "text-primary-900 font-semibold"
                        : isPast
                          ? "text-gray-700"
                          : "text-gray-400"
                    }`}
                  >
                    {section.label}
                  </span>
                )}

                {/* Tooltip for collapsed state */}
                {!isExpanded && (
                  <span className="absolute left-10 px-2 py-1 bg-gray-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    {section.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Scroll Progress Percentage */}
        <div className={`mt-auto ${isExpanded ? "pl-6" : "text-center px-4"}`}>
          <span className="text-xs text-gray-400">{Math.round(progress)}%</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-[padding] duration-300 ${isExpanded ? "md:pl-48" : "md:pl-16"}`}>
        <div className="max-w-5xl mx-auto py-8 px-4 md:py-12 md:px-8">
          {/* Header */}
          <header className="mb-8 md:mb-16 border-b border-gray-200 pb-8 md:pb-16 pt-12 md:pt-0">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              Design System Guide
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              with Tailwind CSS
            </p>
          </header>

          {/* Colors */}
          <Section id="colors" title="Colors" description="디자인 토큰에 정의된 색상 팔레트">
            <div className="space-y-8">
              {/* Main Colors */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Main Colors</h4>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <MainColorSwatch
                    name="Brand"
                    label="primary-900"
                    cssVar="--color-primary-900"
                    onCopy={(color) => { setCopiedColor(color); setShowCopyToast(true); }}
                  />
                  <MainColorSwatch
                    name="Secondary"
                    label="secondary-700"
                    cssVar="--color-secondary-700"
                    onCopy={(color) => { setCopiedColor(color); setShowCopyToast(true); }}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-prism border border-gray-100" />
                    <span className="text-sm font-medium text-gray-700">Prism</span>
                    <span className="text-xs text-gray-500">gradient</span>
                  </div>
                </div>
              </div>

              {/* Gray Scale */}
              <ColorPalette name="Gray" color="gray" onCopy={(color) => { setCopiedColor(color); setShowCopyToast(true); }} />

              {/* Semantic Colors */}
              <ColorPalette name="Success" color="success" onCopy={(color) => { setCopiedColor(color); setShowCopyToast(true); }} />
              <ColorPalette name="Warning" color="warning" onCopy={(color) => { setCopiedColor(color); setShowCopyToast(true); }} />
              <ColorPalette name="Error" color="error" onCopy={(color) => { setCopiedColor(color); setShowCopyToast(true); }} />
              <ColorPalette name="Info" color="info" onCopy={(color) => { setCopiedColor(color); setShowCopyToast(true); }} />
            </div>
          </Section>

          {/* Typography */}
          <Section id="typography" title="Typography" description="텍스트 스타일 스케일">
            <div className="space-y-8">
              {/* Font Family */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Font Family</h4>
                <div className="p-6 border border-gray-200 max-w-md">
                  <p className="text-2xl font-medium" style={{ fontFamily: 'var(--font-family-sans)' }}>
                    Pretendard
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif
                  </p>
                </div>
              </div>

              {/* Font Size Scale */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Font Size Scale</h4>
                <div className="space-y-4 bg-white p-6 border border-gray-200">
                  <div className="flex items-baseline gap-4">
                    <span className="w-16 text-sm text-gray-500">4xl</span>
                    <span className="text-4xl font-bold">The quick brown fox</span>
                    <span className="text-xs text-gray-400">36px</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="w-16 text-sm text-gray-500">3xl</span>
                    <span className="text-3xl font-bold">The quick brown fox</span>
                    <span className="text-xs text-gray-400">30px</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="w-16 text-sm text-gray-500">2xl</span>
                    <span className="text-2xl font-semibold">The quick brown fox</span>
                    <span className="text-xs text-gray-400">24px</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="w-16 text-sm text-gray-500">xl</span>
                    <span className="text-xl font-semibold">The quick brown fox</span>
                    <span className="text-xs text-gray-400">20px</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="w-16 text-sm text-gray-500">lg</span>
                    <span className="text-lg font-medium">The quick brown fox</span>
                    <span className="text-xs text-gray-400">18px</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="w-16 text-sm text-gray-500">base</span>
                    <span className="text-base">The quick brown fox</span>
                    <span className="text-xs text-gray-400">16px</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="w-16 text-sm text-gray-500">sm</span>
                    <span className="text-sm">The quick brown fox</span>
                    <span className="text-xs text-gray-400">14px</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="w-16 text-sm text-gray-500">xs</span>
                    <span className="text-xs">The quick brown fox</span>
                    <span className="text-xs text-gray-400">12px</span>
                  </div>
                </div>
              </div>

              {/* Font Weight */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Font Weight</h4>
                <div className="space-y-3 p-6 border border-gray-200">
                  <div className="flex items-center gap-4">
                    <span className="w-24 text-sm text-gray-500">normal</span>
                    <span className="text-xl font-normal">400 - Regular</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-24 text-sm text-gray-500">medium</span>
                    <span className="text-xl font-medium">500 - Medium</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-24 text-sm text-gray-500">semibold</span>
                    <span className="text-xl font-semibold">600 - Semibold</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-24 text-sm text-gray-500">bold</span>
                    <span className="text-xl font-bold">700 - Bold</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Spacing */}
          <Section id="spacing" title="Spacing" description="간격 스케일 (4px 기반)">
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <span className="w-12 text-sm text-gray-500">{size}</span>
                  <div className="h-4 bg-primary-900" style={{ width: `${size * 4}px` }} />
                  <span className="text-sm text-gray-400">{size * 4}px</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Button */}
          <Section id="button" title="Button" description="버튼 컴포넌트 변형">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Variants</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Sizes</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">States</h4>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button disabled>Disabled</Button>
                  <Button fullWidth className="max-w-xs">Full Width</Button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Shape</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button rounded="none">Square</Button>
                  <Button rounded="pill">Pill</Button>
                  <Button variant="outline" rounded="pill">Outline Pill</Button>
                  <Button variant="secondary" rounded="pill">Secondary Pill</Button>
                </div>
              </div>

              <CodeBlock
                title="사용법"
                code={`// React/Next.js
<Button variant="primary" size="md">버튼</Button>

// Angular (동일한 클래스)
<button class="inline-flex items-center justify-center font-medium transition-colors
  bg-primary-900 hover:bg-primary-800 text-white px-4 py-2 text-base">
  버튼
</button>`}
              />
            </div>
          </Section>

          {/* Form */}
          <Section id="form" title="Form" description="폼 입력 컴포넌트">
            <div className="space-y-12">
              {/* Input */}
              <div className="space-y-6 max-w-xl">
                <h4 className="text-lg font-semibold text-gray-900">Input</h4>
                <div className="space-y-4">
                  <Input placeholder="기본 입력 필드" />
                  <Input label="라벨 있는 입력 (Column)" placeholder="입력해주세요" />
                  <Input label="라벨 (Row)" layout="row" placeholder="입력해주세요" />
                  <Input label="라벨 넓게" layout="row" labelWidth="w-32" placeholder="labelWidth로 조절" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input placeholder="좌측 입력" />
                  <Input placeholder="우측 입력" />
                </div>
              </div>

              {/* Textarea */}
              <div className="space-y-6 max-w-xl">
                <h4 className="text-lg font-semibold text-gray-900">Textarea</h4>
                <div className="space-y-4">
                  <Textarea placeholder="여러 줄 입력 필드" />
                  <Textarea label="내용" placeholder="내용을 입력해주세요" rows={5} />
                  <Textarea label="설명 (Row)" layout="row" placeholder="설명을 입력하세요" />
                  <Textarea
                    label="리사이즈 옵션"
                    placeholder="resize='none'으로 고정"
                    resize="none"
                    rows={3}
                  />
                  <Textarea
                    label="에러 상태"
                    placeholder="내용을 입력해주세요"
                    error
                    errorMessage="필수 입력 항목입니다"
                    rows={3}
                  />
                </div>
              </div>

              {/* Select */}
              <div className="space-y-6 max-w-xl">
                <h4 className="text-lg font-semibold text-gray-900">Select</h4>
                <div className="space-y-4">
                  <Select
                    placeholder="옵션을 선택하세요"
                    options={[
                      { value: "option1", label: "옵션 1" },
                      { value: "option2", label: "옵션 2" },
                      { value: "option3", label: "옵션 3" },
                    ]}
                    value={selectValue}
                    onChange={setSelectValue}
                  />
                  <Select
                    label="라벨 (Column)"
                    placeholder="선택하세요"
                    options={[
                      { value: "apple", label: "사과" },
                      { value: "banana", label: "바나나" },
                      { value: "orange", label: "오렌지" },
                      { value: "grape", label: "포도", disabled: true },
                    ]}
                    value={selectValue2}
                    onChange={setSelectValue2}
                  />
                  <Select
                    label="라벨 (Row)"
                    layout="row"
                    placeholder="선택하세요"
                    options={[
                      { value: "option1", label: "옵션 1" },
                      { value: "option2", label: "옵션 2" },
                      { value: "option3", label: "옵션 3" },
                    ]}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-6 max-w-lg">
                <h4 className="text-lg font-semibold text-gray-900">Password</h4>
                <div className="space-y-4">
                  <PasswordInput placeholder="비밀번호 입력" />
                  <PasswordInput label="비밀번호" placeholder="8자 이상 입력하세요" />
                </div>
              </div>

              {/* Number */}
              <div className="space-y-6 max-w-lg">
                <h4 className="text-lg font-semibold text-gray-900">Number</h4>
                <div className="space-y-4">
                  <NumberInput
                    label="수량"
                    value={numberValue}
                    onChange={setNumberValue}
                    min={0}
                    max={100}
                  />
                  <NumberInput
                    label="가격 (1000 단위)"
                    value={priceValue}
                    onChange={setPriceValue}
                    step={1000}
                    min={0}
                  />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-6 max-w-lg">
                <h4 className="text-lg font-semibold text-gray-900">Date</h4>
                <div className="space-y-4">
                  <DateInput placeholder="날짜 선택" />
                  <DateInput label="예약 날짜" />
                </div>
              </div>

              {/* Checkbox */}
              <div className="space-y-6 max-w-lg">
                <h4 className="text-lg font-semibold text-gray-900">Checkbox</h4>
                <div className="flex flex-col gap-3">
                  <Checkbox
                    label="약관에 동의합니다"
                    checked={checked1}
                    onChange={(e) => setChecked1(e.target.checked)}
                  />
                  <Checkbox
                    label="마케팅 수신 동의"
                    description="이벤트 및 할인 정보를 받아보실 수 있습니다"
                    checked={checked2}
                    onChange={(e) => setChecked2(e.target.checked)}
                  />
                  <Checkbox label="비활성화" disabled />
                  <Checkbox label="비활성화 (체크됨)" disabled defaultChecked />
                </div>
              </div>

              {/* Radio */}
              <div className="space-y-6 max-w-lg">
                <h4 className="text-lg font-semibold text-gray-900">Radio</h4>
                <RadioGroup
                  name="delivery"
                  value={radioValue}
                  onChange={setRadioValue}
                  options={[
                    { value: "option1", label: "일반 배송", description: "3-5일 소요" },
                    { value: "option2", label: "빠른 배송", description: "1-2일 소요" },
                    { value: "option3", label: "당일 배송", description: "오늘 도착", disabled: true },
                  ]}
                />
              </div>

              {/* Toggle */}
              <div className="space-y-6 max-w-lg">
                <h4 className="text-lg font-semibold text-gray-900">Toggle</h4>
                <div className="flex flex-col gap-3">
                  <Toggle
                    label="알림 설정"
                    checked={toggleValue}
                    onChange={(e) => setToggleValue(e.target.checked)}
                  />
                  <Toggle
                    label="다크 모드"
                    description="어두운 테마를 사용합니다"
                    checked={toggleValue2}
                    onChange={(e) => setToggleValue2(e.target.checked)}
                  />
                  <Toggle label="비활성화" disabled />
                  <div className="flex gap-4 items-center">
                    <Toggle size="sm" defaultChecked />
                    <Toggle size="md" defaultChecked />
                    <Toggle size="lg" defaultChecked />
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-6 max-w-2xl">
                <h4 className="text-lg font-semibold text-gray-900">Sizes</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Input size="sm" placeholder="Small" />
                    <Input size="md" placeholder="Medium" />
                    <Input size="lg" placeholder="Large" />
                  </div>
                  <div className="space-y-4">
                    <Select
                      size="sm"
                      placeholder="Small"
                      options={[{ value: "1", label: "옵션" }]}
                    />
                    <Select
                      size="md"
                      placeholder="Medium"
                      options={[{ value: "1", label: "옵션" }]}
                    />
                    <Select
                      size="lg"
                      placeholder="Large"
                      options={[{ value: "1", label: "옵션" }]}
                    />
                  </div>
                </div>
              </div>

              {/* States */}
              <div className="space-y-6 max-w-2xl">
                <h4 className="text-lg font-semibold text-gray-900">States</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Input placeholder="기본 상태" />
                    <Input success successMessage="사용 가능한 이메일입니다" placeholder="성공 상태" />
                    <Input error errorMessage="필수 입력 항목입니다" placeholder="에러 상태" />
                    <Input disabled placeholder="비활성화" />
                  </div>
                  <div className="space-y-4">
                    <Select
                      placeholder="기본 상태"
                      options={[{ value: "1", label: "옵션" }]}
                    />
                    <Select
                      success
                      successMessage="선택 완료"
                      value="1"
                      options={[{ value: "1", label: "성공 상태" }]}
                    />
                    <Select
                      error
                      errorMessage="필수 선택 항목입니다"
                      placeholder="에러 상태"
                      options={[{ value: "1", label: "옵션" }]}
                    />
                    <Select
                      disabled
                      placeholder="비활성화"
                      options={[{ value: "1", label: "옵션" }]}
                    />
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900">File Upload</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FileUpload
                    label="이미지 업로드"
                    accept="image/*"
                    maxSize={5 * 1024 * 1024}
                    multiple
                  />
                  <FileUpload
                    label="문서 업로드 (단일)"
                    accept=".pdf,.doc,.docx"
                    maxSize={10 * 1024 * 1024}
                  />
                </div>
              </div>

              <CodeBlock
                title="사용법"
                code={`// Input
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
/>`}
              />
            </div>
          </Section>

          {/* Card */}
          <Section id="card" title="Card" description="카드 컴포넌트">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Variants</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card variant="elevated">
                    <h3 className="font-semibold mb-2">Elevated</h3>
                    <p className="text-gray-600 text-sm">그림자가 있는 기본 카드</p>
                  </Card>
                  <Card variant="outlined">
                    <h3 className="font-semibold mb-2">Outlined</h3>
                    <p className="text-gray-600 text-sm">테두리만 있는 카드</p>
                  </Card>
                  <Card variant="filled">
                    <h3 className="font-semibold mb-2">Filled</h3>
                    <p className="text-gray-600 text-sm">배경색이 있는 카드</p>
                  </Card>
                </div>
              </div>

              <CodeBlock
                title="사용법"
                code={`// React/Next.js
<Card variant="elevated" padding="md">내용</Card>

// Angular (동일한 클래스)
<div class="bg-white border border-gray-200 shadow-sm p-6">내용</div>`}
              />
            </div>
          </Section>

          {/* Badge */}
          <Section id="badge" title="Badge" description="뱃지/태그 컴포넌트">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Variants</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Sizes</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>

              <CodeBlock
                title="사용법"
                code={`// React/Next.js
<Badge variant="success">완료</Badge>

// Angular (동일한 클래스)
<span class="inline-flex items-center font-medium bg-success-500 text-white px-2.5 py-0.5 text-sm">
  완료
</span>`}
              />
            </div>
          </Section>

          {/* Tabs */}
          <Section id="tabs" title="Tabs" description="탭 네비게이션 컴포넌트">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Underline (기본)</h4>
                <Tabs defaultValue="tab1">
                  <TabsList>
                    <TabsTrigger value="tab1">계정</TabsTrigger>
                    <TabsTrigger value="tab2">비밀번호</TabsTrigger>
                    <TabsTrigger value="tab3">알림</TabsTrigger>
                    <TabsTrigger value="tab4" disabled>설정</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <p className="text-gray-600">계정 정보를 관리할 수 있습니다.</p>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <p className="text-gray-600">비밀번호를 변경할 수 있습니다.</p>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <p className="text-gray-600">알림 설정을 관리할 수 있습니다.</p>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Button</h4>
                <Tabs defaultValue="btn1" variant="button">
                  <TabsList>
                    <TabsTrigger value="btn1">전체</TabsTrigger>
                    <TabsTrigger value="btn2">진행중</TabsTrigger>
                    <TabsTrigger value="btn3">완료</TabsTrigger>
                    <TabsTrigger value="btn4" disabled>보류</TabsTrigger>
                  </TabsList>
                  <TabsContent value="btn1">
                    <p className="text-gray-600">전체 항목을 표시합니다.</p>
                  </TabsContent>
                  <TabsContent value="btn2">
                    <p className="text-gray-600">진행중인 항목만 표시합니다.</p>
                  </TabsContent>
                  <TabsContent value="btn3">
                    <p className="text-gray-600">완료된 항목만 표시합니다.</p>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Underline Large (전체 너비)</h4>
                <Tabs defaultValue="lg1" size="lg">
                  <TabsList>
                    <TabsTrigger value="lg1">상품 정보</TabsTrigger>
                    <TabsTrigger value="lg2">상세 설명</TabsTrigger>
                    <TabsTrigger value="lg3">리뷰</TabsTrigger>
                    <TabsTrigger value="lg4">문의</TabsTrigger>
                  </TabsList>
                  <TabsContent value="lg1">
                    <p className="text-gray-600">상품의 기본 정보를 확인할 수 있습니다.</p>
                  </TabsContent>
                  <TabsContent value="lg2">
                    <p className="text-gray-600">상품의 상세 설명입니다.</p>
                  </TabsContent>
                  <TabsContent value="lg3">
                    <p className="text-gray-600">고객 리뷰를 확인할 수 있습니다.</p>
                  </TabsContent>
                  <TabsContent value="lg4">
                    <p className="text-gray-600">상품 문의 내역입니다.</p>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Button Large (전체 너비)</h4>
                <Tabs defaultValue="blg1" variant="button" size="lg">
                  <TabsList>
                    <TabsTrigger value="blg1">일간</TabsTrigger>
                    <TabsTrigger value="blg2">주간</TabsTrigger>
                    <TabsTrigger value="blg3">월간</TabsTrigger>
                  </TabsList>
                  <TabsContent value="blg1">
                    <p className="text-gray-600">일간 통계를 표시합니다.</p>
                  </TabsContent>
                  <TabsContent value="blg2">
                    <p className="text-gray-600">주간 통계를 표시합니다.</p>
                  </TabsContent>
                  <TabsContent value="blg3">
                    <p className="text-gray-600">월간 통계를 표시합니다.</p>
                  </TabsContent>
                </Tabs>
              </div>

              <CodeBlock
                title="사용법"
                code={`// Underline (기본)
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
</Tabs>`}
              />
            </div>
          </Section>

          {/* Accordion */}
          <Section id="accordion" title="Accordion" description="아코디언 컴포넌트">
            <div className="space-y-8 max-w-2xl">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Single (하나만 열림)</h4>
                <Accordion defaultValue={["item1"]}>
                  <AccordionItem value="item1">
                    <AccordionTrigger value="item1">주문은 어떻게 하나요?</AccordionTrigger>
                    <AccordionContent value="item1">
                      상품을 선택한 후 장바구니에 담고, 결제 페이지에서 배송지와 결제 정보를 입력하시면 됩니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item2">
                    <AccordionTrigger value="item2">배송은 얼마나 걸리나요?</AccordionTrigger>
                    <AccordionContent value="item2">
                      일반 배송은 3-5일, 빠른 배송은 1-2일 내에 도착합니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item3">
                    <AccordionTrigger value="item3">반품/교환은 어떻게 하나요?</AccordionTrigger>
                    <AccordionContent value="item3">
                      수령 후 7일 이내에 고객센터로 연락 주시면 반품/교환이 가능합니다.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Multiple (여러 개 열림)</h4>
                <Accordion multiple defaultValue={["m1", "m2"]}>
                  <AccordionItem value="m1">
                    <AccordionTrigger value="m1">항목 1</AccordionTrigger>
                    <AccordionContent value="m1">
                      여러 항목을 동시에 열 수 있습니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="m2">
                    <AccordionTrigger value="m2">항목 2</AccordionTrigger>
                    <AccordionContent value="m2">
                      multiple 속성을 사용하면 됩니다.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <CodeBlock
                title="사용법"
                code={`<Accordion defaultValue={["item1"]} multiple>
  <AccordionItem value="item1">
    <AccordionTrigger value="item1">제목</AccordionTrigger>
    <AccordionContent value="item1">내용</AccordionContent>
  </AccordionItem>
</Accordion>`}
              />
            </div>
          </Section>

          {/* Table */}
          <Section id="table" title="Table" description="테이블 컴포넌트">
            <div className="space-y-8">
              {/* Basic Table */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Basic</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>상품명</TableHead>
                      <TableHead>카테고리</TableHead>
                      <TableHead align="right">가격</TableHead>
                      <TableHead align="center">상태</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>클래식 라운드 선글라스</TableCell>
                      <TableCell>선글라스</TableCell>
                      <TableCell align="right">129,000원</TableCell>
                      <TableCell align="center"><Badge variant="success">판매중</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>블루라이트 차단 안경</TableCell>
                      <TableCell>안경</TableCell>
                      <TableCell align="right">89,000원</TableCell>
                      <TableCell align="center"><Badge variant="success">판매중</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Filterable</h4>
                <div className="flex gap-4 mb-4">
                  <Input
                    placeholder="상품명 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-xs"
                  />
                  <Select
                    placeholder="카테고리"
                    options={categoryOptions}
                    value={categoryFilter}
                    onChange={setCategoryFilter}
                    className="w-40"
                  />
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>상품명</TableHead>
                      <TableHead>카테고리</TableHead>
                      <TableHead align="right">가격</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTableData.length > 0 ? (
                      filteredTableData.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.category}</TableCell>
                          <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center text-gray-500 py-8">
                          검색 결과가 없습니다
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Sortable</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableSortHead
                        sortDirection={sortKey === "name" ? sortDirection : null}
                        onSort={() => handleSort("name")}
                      >
                        상품명
                      </TableSortHead>
                      <TableSortHead
                        sortDirection={sortKey === "category" ? sortDirection : null}
                        onSort={() => handleSort("category")}
                      >
                        카테고리
                      </TableSortHead>
                      <TableSortHead
                        align="right"
                        sortDirection={sortKey === "price" ? sortDirection : null}
                        onSort={() => handleSort("price")}
                      >
                        가격
                      </TableSortHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedTableData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Selectable Rows</h4>
                <div className="mb-2 text-sm text-gray-500">
                  선택된 항목: {selectedRows.length}개
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <TableCheckbox
                          checked={isAllSelected}
                          indeterminate={isIndeterminate}
                          onChange={toggleSelectAll}
                        />
                      </TableHead>
                      <TableHead>상품명</TableHead>
                      <TableHead>카테고리</TableHead>
                      <TableHead align="right">가격</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((item) => (
                      <TableRow key={item.id} selected={selectedRows.includes(item.id)}>
                        <TableCell>
                          <TableCheckbox
                            checked={selectedRows.includes(item.id)}
                            onChange={() => toggleSelectRow(item.id)}
                          />
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Clickable Rows (가로 스크롤)</h4>
                <p className="text-xs text-gray-500 mb-3">컬럼이 많을 경우 가로 스크롤로 확인</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>주문번호</TableHead>
                      <TableHead>고객명</TableHead>
                      <TableHead>연락처</TableHead>
                      <TableHead>주소</TableHead>
                      <TableHead>주문일</TableHead>
                      <TableHead>배송방법</TableHead>
                      <TableHead align="right">금액</TableHead>
                      <TableHead align="center">상태</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow onClick={() => console.log("주문 1 클릭")}>
                      <TableCell>ORD-2024-001</TableCell>
                      <TableCell>홍길동</TableCell>
                      <TableCell>010-1234-5678</TableCell>
                      <TableCell>서울시 강남구 테헤란로 123</TableCell>
                      <TableCell>2024-01-15</TableCell>
                      <TableCell>일반배송</TableCell>
                      <TableCell align="right">258,000원</TableCell>
                      <TableCell align="center"><Badge variant="info">배송중</Badge></TableCell>
                    </TableRow>
                    <TableRow onClick={() => console.log("주문 2 클릭")}>
                      <TableCell>ORD-2024-002</TableCell>
                      <TableCell>김철수</TableCell>
                      <TableCell>010-9876-5432</TableCell>
                      <TableCell>부산시 해운대구 센텀로 456</TableCell>
                      <TableCell>2024-01-14</TableCell>
                      <TableCell>빠른배송</TableCell>
                      <TableCell align="right">129,000원</TableCell>
                      <TableCell align="center"><Badge variant="success">완료</Badge></TableCell>
                    </TableRow>
                    <TableRow onClick={() => console.log("주문 3 클릭")}>
                      <TableCell>ORD-2024-003</TableCell>
                      <TableCell>이영희</TableCell>
                      <TableCell>010-5555-1234</TableCell>
                      <TableCell>대전시 유성구 대학로 789</TableCell>
                      <TableCell>2024-01-13</TableCell>
                      <TableCell>당일배송</TableCell>
                      <TableCell align="right">89,000원</TableCell>
                      <TableCell align="center"><Badge variant="warning">준비중</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">hideOnMobile (컬럼 숨김)</h4>
                <p className="text-xs text-gray-500 mb-3">모바일에서 덜 중요한 컬럼 숨기기</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>주문번호</TableHead>
                      <TableHead>고객명</TableHead>
                      <TableHead hideOnMobile>연락처</TableHead>
                      <TableHead hideOnMobile>주소</TableHead>
                      <TableHead hideOnMobile>주문일</TableHead>
                      <TableHead hideOnMobile>배송방법</TableHead>
                      <TableHead align="right">금액</TableHead>
                      <TableHead align="center">상태</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>ORD-2024-001</TableCell>
                      <TableCell>홍길동</TableCell>
                      <TableCell hideOnMobile>010-1234-5678</TableCell>
                      <TableCell hideOnMobile>서울시 강남구 테헤란로 123</TableCell>
                      <TableCell hideOnMobile>2024-01-15</TableCell>
                      <TableCell hideOnMobile>일반배송</TableCell>
                      <TableCell align="right">258,000원</TableCell>
                      <TableCell align="center"><Badge variant="info">배송중</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>ORD-2024-002</TableCell>
                      <TableCell>김철수</TableCell>
                      <TableCell hideOnMobile>010-9876-5432</TableCell>
                      <TableCell hideOnMobile>부산시 해운대구 센텀로 456</TableCell>
                      <TableCell hideOnMobile>2024-01-14</TableCell>
                      <TableCell hideOnMobile>빠른배송</TableCell>
                      <TableCell align="right">129,000원</TableCell>
                      <TableCell align="center"><Badge variant="success">완료</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <CodeBlock
                title="사용법"
                code={`// 반응형 (모바일에서 컬럼 숨기기)
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
<TableCell colSpan={3}>결과 없음</TableCell>`}
              />
            </div>
          </Section>

          {/* Pagination */}
          <Section id="pagination" title="Pagination" description="페이지네이션 컴포넌트">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Interactive</h4>
                <Pagination
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={setCurrentPage}
                />
                <p className="text-sm text-gray-500 mt-4 text-center">현재 페이지: {currentPage}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Few Pages</h4>
                <Pagination
                  currentPage={2}
                  totalPages={5}
                  onPageChange={() => {}}
                />
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Many Pages</h4>
                <Pagination
                  currentPage={15}
                  totalPages={30}
                  onPageChange={() => {}}
                />
              </div>

              <CodeBlock
                title="사용법"
                code={`<Pagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
  siblingCount={1} // 현재 페이지 좌우로 표시할 페이지 수
/>`}
              />
            </div>
          </Section>

          {/* Tooltip */}
          <Section id="tooltip" title="Tooltip" description="툴팁 컴포넌트">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Positions</h4>
                <div className="flex flex-wrap gap-4 py-8">
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
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">다양한 콘텐츠</h4>
                <div className="flex flex-wrap gap-4">
                  <Tooltip content="간단한 텍스트 툴팁">
                    <Button variant="ghost">텍스트 툴팁</Button>
                  </Tooltip>
                  <Tooltip
                    content={
                      <div className="text-center">
                        <p className="font-semibold">복잡한 툴팁</p>
                        <p className="text-gray-300 text-xs mt-1">여러 줄의 내용을 포함할 수 있습니다</p>
                      </div>
                    }
                  >
                    <Button variant="ghost">복잡한 툴팁</Button>
                  </Tooltip>
                </div>
              </div>

              <CodeBlock
                title="사용법"
                code={`// React/Next.js
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
</Tooltip>`}
              />
            </div>
          </Section>

          {/* Modal */}
          <Section id="modal" title="Modal" description="모달, 팝업, 토스트 컴포넌트">
            <div className="space-y-8">
              {/* Alert */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Alert</h4>
                <Button onClick={() => setShowAlert(true)}>Alert 열기</Button>
                <Alert
                  isOpen={showAlert}
                  onClose={() => setShowAlert(false)}
                  title="알림"
                  message="작업이 완료되었습니다."
                />
              </div>

              {/* Confirm */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Confirm</h4>
                <div className="flex gap-4">
                  <Button onClick={() => setShowConfirm(true)}>Confirm 열기</Button>
                  <Button variant="danger" onClick={() => setShowDangerConfirm(true)}>
                    Danger Confirm
                  </Button>
                </div>
                <Confirm
                  isOpen={showConfirm}
                  onClose={() => setShowConfirm(false)}
                  onConfirm={() => console.log("확인됨")}
                  title="확인"
                  message="이 작업을 진행하시겠습니까?"
                />
                <Confirm
                  isOpen={showDangerConfirm}
                  onClose={() => setShowDangerConfirm(false)}
                  onConfirm={() => console.log("삭제됨")}
                  title="삭제 확인"
                  message="정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
                  confirmText="삭제"
                  variant="danger"
                />
              </div>

              {/* Toast */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Toast</h4>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setToastVariant("default");
                      setShowToast(true);
                    }}
                  >
                    Default
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setToastVariant("success");
                      setShowToast(true);
                    }}
                  >
                    Success
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setToastVariant("warning");
                      setShowToast(true);
                    }}
                  >
                    Warning
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setToastVariant("error");
                      setShowToast(true);
                    }}
                  >
                    Error
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setToastVariant("info");
                      setShowToast(true);
                    }}
                  >
                    Info
                  </Button>
                </div>
                <Toast
                  isOpen={showToast}
                  onClose={() => setShowToast(false)}
                  message={`${toastVariant.charAt(0).toUpperCase() + toastVariant.slice(1)} 메시지입니다.`}
                  variant={toastVariant}
                />
              </div>

              {/* Image Popup */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Image Popup</h4>
                <button
                  onClick={() => setShowImagePopup(true)}
                  className="group relative overflow-hidden cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
                    alt="Sample"
                    className="w-48 h-32 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </button>
                <ImagePopup
                  isOpen={showImagePopup}
                  onClose={() => setShowImagePopup(false)}
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
                  alt="Sample full size"
                />
              </div>

              <CodeBlock
                title="사용법"
                code={`// Alert
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
/>`}
              />
            </div>
          </Section>

          {/* Loading */}
          <Section id="loading" title="Loading" description="로딩 상태 컴포넌트 (스피너, 스켈레톤)">
            <div className="space-y-12">
              {/* Spinner */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Spinner</h3>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Sizes</h4>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="xs" />
                      <span className="text-xs text-gray-500">xs</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="sm" />
                      <span className="text-xs text-gray-500">sm</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="md" />
                      <span className="text-xs text-gray-500">md</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="lg" />
                      <span className="text-xs text-gray-500">lg</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="xl" />
                      <span className="text-xs text-gray-500">xl</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Variants</h4>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Spinner variant="primary" size="lg" />
                      <span className="text-xs text-gray-500">primary</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner variant="secondary" size="lg" />
                      <span className="text-xs text-gray-500">secondary</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner variant="gray" size="lg" />
                      <span className="text-xs text-gray-500">gray</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 bg-gray-800">
                      <Spinner variant="white" size="lg" />
                      <span className="text-xs text-gray-300">white</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">With Label</h4>
                  <Spinner size="md" label="로딩 중..." />
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Overlay</h4>
                  <div className="relative border border-gray-200 p-6 h-40">
                    <p className="text-gray-600">콘텐츠 영역</p>
                    <p className="text-sm text-gray-400 mt-2">SpinnerOverlay가 이 영역 위에 표시됩니다</p>
                    <SpinnerOverlay isVisible={true} label="불러오는 중..." />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Button Loading</h4>
                  <div className="flex gap-4">
                    <Button disabled>
                      <span className="flex items-center gap-2">
                        <Spinner size="sm" variant="white" />
                        저장 중...
                      </span>
                    </Button>
                    <Button variant="outline" disabled>
                      <span className="flex items-center gap-2">
                        <Spinner size="sm" variant="primary" />
                        처리 중...
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Skeleton */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Skeleton</h3>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Basic</h4>
                  <div className="space-y-3 max-w-md">
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={16} />
                    <Skeleton height={16} width="80%" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Variants</h4>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Skeleton variant="rectangular" width={60} height={60} />
                      <span className="text-xs text-gray-500">rectangular</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Skeleton variant="circular" width={60} height={60} />
                      <span className="text-xs text-gray-500">circular</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Skeleton variant="text" width={60} height={16} />
                      <span className="text-xs text-gray-500">text</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Animation</h4>
                  <div className="flex gap-8">
                    <div className="space-y-2">
                      <span className="text-xs text-gray-500">pulse</span>
                      <Skeleton animation="pulse" width={100} height={32} />
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs text-gray-500">wave</span>
                      <Skeleton animation="wave" width={100} height={32} />
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs text-gray-500">none</span>
                      <Skeleton animation="none" width={100} height={32} />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Presets</h4>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <span className="text-xs text-gray-500">SkeletonText</span>
                      <SkeletonText lines={3} />
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs text-gray-500">SkeletonList</span>
                      <SkeletonList items={2} />
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs text-gray-500">SkeletonCard</span>
                      <SkeletonCard />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">SkeletonTable</h4>
                  <SkeletonTable rows={3} columns={4} />
                </div>
              </div>

              <CodeBlock
                title="사용법"
                code={`// 스피너
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
<SkeletonTable rows={5} columns={4} />`}
              />
            </div>
          </Section>

          {/* Shadows */}
          <Section id="shadows" title="Shadows" description="그림자 스타일">
            <div className="flex flex-wrap gap-8">
              {[
                { name: "sm", class: "shadow-sm" },
                { name: "default", class: "shadow" },
                { name: "md", class: "shadow-md" },
                { name: "lg", class: "shadow-lg" },
                { name: "xl", class: "shadow-xl" },
                { name: "2xl", class: "shadow-2xl" },
              ].map(({ name, class: cls }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <div className={`w-20 h-20 bg-white border border-gray-100 ${cls}`} />
                  <span className="text-xs text-gray-500">{name}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-8 mt-16">
          <div className="max-w-5xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Rainbow Spino. All rights reserved.
            </p>
            <a
              href="mailto:gilisbigluck@gmail.com"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-900 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
              gilisbigluck@gmail.com
            </a>
          </div>
        </footer>
      </main>

      {/* Floating Top Button */}
      <button
        onClick={scrollToTop}
        className={`!fixed right-4 bottom-4 md:right-8 md:bottom-8 z-[100] w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-900/80 md:bg-primary-900 backdrop-blur-sm md:backdrop-blur-none text-white flex items-center justify-center shadow-lg transition-all duration-300 hover-prism cursor-pointer ${
          showTopButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="맨 위로"
      >
        <span className="relative z-10">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M10 4L10 16M10 4L5 9M10 4L15 9" strokeWidth="2" strokeLinecap="square" />
          </svg>
        </span>
      </button>

      {/* Copy Toast */}
      <Toast
        isOpen={showCopyToast}
        onClose={() => setShowCopyToast(false)}
        message={`${copiedColor} 복사됨`}
        variant="success"
        duration={2000}
      />
    </div>
  );
}

/* Helper Components */

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 pb-8 md:pb-16 mb-8 md:mb-16 border-b border-gray-200 last:border-b-0">
      <div className="mb-4 md:mb-6 flex items-start gap-3">
        <span className="w-2 h-2 bg-primary-900 mt-2.5 md:mt-3 flex-shrink-0" />
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm md:text-base text-gray-600">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function ColorPalette({ name, color, onCopy }: { name: string; color: string; onCopy?: (color: string) => void }) {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const handleCopy = (shade: number, element: HTMLDivElement) => {
    const computedColor = getComputedStyle(element).backgroundColor;
    const hexColor = rgbToHex(computedColor);
    const colorVar = `${color}-${shade}`;
    navigator.clipboard.writeText(hexColor);
    onCopy?.(hexColor);
  };

  const rgbToHex = (rgb: string): string => {
    const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!match) return rgb;
    const r = parseInt(match[1]).toString(16).padStart(2, '0');
    const g = parseInt(match[2]).toString(16).padStart(2, '0');
    const b = parseInt(match[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`.toUpperCase();
  };

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-700 mb-2">{name}</h4>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
        {shades.map((shade) => (
          <ColorSwatch
            key={shade}
            color={color}
            shade={shade}
            onCopy={handleCopy}
          />
        ))}
      </div>
    </div>
  );
}

function ColorSwatch({ color, shade, onCopy }: { color: string; shade: number; onCopy: (shade: number, element: HTMLDivElement) => void }) {
  const [hexValue, setHexValue] = useState("");
  const swatchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  return (
    <div className="space-y-1">
      <Tooltip content={hexValue || "Loading..."} position="top" className="block w-full">
        <div
          ref={swatchRef}
          className="h-12 w-full cursor-pointer hover:ring-2 hover:ring-primary-900 hover:ring-offset-2 transition-all"
          style={{ backgroundColor: `var(--color-${color}-${shade})` }}
          onClick={() => swatchRef.current && onCopy(shade, swatchRef.current)}
        />
      </Tooltip>
      <p className="text-xs text-center text-gray-500">{shade}</p>
    </div>
  );
}

function MainColorSwatch({ name, label, cssVar, onCopy }: { name: string; label: string; cssVar: string; onCopy?: (color: string) => void }) {
  const [hexValue, setHexValue] = useState("");
  const swatchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const handleCopy = () => {
    if (hexValue) {
      navigator.clipboard.writeText(hexValue);
      onCopy?.(hexValue);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Tooltip content={hexValue || "Loading..."} position="top">
        <div
          ref={swatchRef}
          className="w-20 h-20 md:w-24 md:h-24 border border-gray-100 cursor-pointer hover:ring-2 hover:ring-primary-900 hover:ring-offset-2 transition-all"
          style={{ backgroundColor: `var(${cssVar})` }}
          onClick={handleCopy}
        />
      </Tooltip>
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );
}

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="overflow-hidden">
      <div className="px-4 py-2 bg-gray-800 text-gray-400 text-sm">{title}</div>
      <Highlight theme={themes.nightOwl} code={code.trim()} language="tsx">
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className="p-4 text-sm overflow-x-auto" style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
