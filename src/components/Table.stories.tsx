import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCheckbox,
  TableSortHead,
  SortDirection,
} from "./Table";
import { Badge } from "./Badge";

const meta: Meta<typeof Table> = {
  title: "Data Display/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
  { id: "1", name: "클래식 라운드 선글라스", category: "선글라스", price: 129000, status: "판매중" },
  { id: "2", name: "블루라이트 차단 안경", category: "안경", price: 89000, status: "판매중" },
  { id: "3", name: "빈티지 메탈 프레임", category: "안경테", price: 159000, status: "품절" },
  { id: "4", name: "스포츠 고글", category: "고글", price: 199000, status: "판매중" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>상품명</TableHead>
          <TableHead>카테고리</TableHead>
          <TableHead align="right">가격</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithSelection: Story = {
  render: function WithSelectionTable() {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const isAllSelected = selectedRows.length === sampleData.length;
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < sampleData.length;

    const toggleSelectAll = () => {
      setSelectedRows(isAllSelected ? [] : sampleData.map((d) => d.id));
    };

    const toggleSelectRow = (id: string) => {
      setSelectedRows((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    };

    return (
      <div className="space-y-2">
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
            {sampleData.map((item) => (
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
        <p className="text-sm text-gray-500">
          {selectedRows.length}개 선택됨
        </p>
      </div>
    );
  },
};

export const WithSorting: Story = {
  render: function WithSortingTable() {
    const [sortKey, setSortKey] = useState<"name" | "price" | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);

    const handleSort = (key: "name" | "price") => {
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

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableSortHead
              sortDirection={sortKey === "name" ? sortDirection : null}
              onSort={() => handleSort("name")}
            >
              상품명
            </TableSortHead>
            <TableHead>카테고리</TableHead>
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
          {sortedData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const WithStatus: Story = {
  render: () => (
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
        {sampleData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
            <TableCell align="center">
              <Badge
                variant={item.status === "판매중" ? "success" : "error"}
                size="sm"
              >
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const ClickableRows: Story = {
  render: function ClickableRowsTable() {
    const handleRowClick = (id: string) => {
      alert(`Row ${id} clicked`);
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>상품명</TableHead>
            <TableHead>카테고리</TableHead>
            <TableHead align="right">가격</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((item) => (
            <TableRow key={item.id} onClick={() => handleRowClick(item.id)}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const Empty: Story = {
  render: () => (
    <Table>
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
  ),
};

export const FullFeature: Story = {
  render: function FullFeatureTable() {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [sortKey, setSortKey] = useState<"name" | "price" | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);

    const isAllSelected = selectedRows.length === sampleData.length;
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < sampleData.length;

    const toggleSelectAll = () => {
      setSelectedRows(isAllSelected ? [] : sampleData.map((d) => d.id));
    };

    const toggleSelectRow = (id: string) => {
      setSelectedRows((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    };

    const handleSort = (key: "name" | "price") => {
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

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            총 {sampleData.length}개 | {selectedRows.length}개 선택됨
          </p>
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
              <TableSortHead
                sortDirection={sortKey === "name" ? sortDirection : null}
                onSort={() => handleSort("name")}
              >
                상품명
              </TableSortHead>
              <TableHead>카테고리</TableHead>
              <TableSortHead
                align="right"
                sortDirection={sortKey === "price" ? sortDirection : null}
                onSort={() => handleSort("price")}
              >
                가격
              </TableSortHead>
              <TableHead align="center">상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item) => (
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
                <TableCell align="center">
                  <Badge
                    variant={item.status === "판매중" ? "success" : "error"}
                    size="sm"
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};
