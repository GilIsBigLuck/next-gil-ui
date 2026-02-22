import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Data Display/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: "number",
      description: "현재 페이지",
    },
    totalPages: {
      control: "number",
      description: "전체 페이지 수",
    },
    siblingCount: {
      control: "number",
      description: "현재 페이지 양옆에 보여줄 페이지 수",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: function DefaultPagination() {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
      />
    );
  },
};

export const FewPages: Story = {
  render: function FewPagesPagination() {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        currentPage={page}
        totalPages={5}
        onPageChange={setPage}
      />
    );
  },
};

export const ManyPages: Story = {
  render: function ManyPagesPagination() {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        currentPage={page}
        totalPages={100}
        onPageChange={setPage}
      />
    );
  },
};

export const MiddlePage: Story = {
  render: function MiddlePagePagination() {
    const [page, setPage] = useState(5);
    return (
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
      />
    );
  },
};

export const LastPage: Story = {
  render: function LastPagePagination() {
    const [page, setPage] = useState(10);
    return (
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
      />
    );
  },
};

export const ExtendedSiblings: Story = {
  render: function ExtendedSiblingsPagination() {
    const [page, setPage] = useState(10);
    return (
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 mb-2">siblingCount=1 (기본)</p>
          <Pagination
            currentPage={page}
            totalPages={20}
            siblingCount={1}
            onPageChange={setPage}
          />
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">siblingCount=2</p>
          <Pagination
            currentPage={page}
            totalPages={20}
            siblingCount={2}
            onPageChange={setPage}
          />
        </div>
      </div>
    );
  },
};

export const SinglePage: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-sm text-gray-500">페이지가 1개면 표시되지 않습니다</p>
      <Pagination
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      />
    </div>
  ),
};

export const WithTable: Story = {
  render: function WithTablePagination() {
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 23;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startItem = (page - 1) * itemsPerPage + 1;
    const endItem = Math.min(page * itemsPerPage, totalItems);

    return (
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 min-h-[200px] flex items-center justify-center text-gray-500">
          테이블 영역 (페이지 {page})
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            {totalItems}개 중 {startItem}-{endItem} 표시
          </p>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    );
  },
};

export const Gallery: Story = {
  render: function GalleryPagination() {
    const [page, setPage] = useState(1);
    const totalPages = 8;

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
            >
              {(page - 1) * 8 + i + 1}
            </div>
          ))}
        </div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    );
  },
};
