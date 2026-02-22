import type { Meta, StoryObj } from "@storybook/react";
import {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonTable,
  SkeletonList,
} from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular"],
      description: "스켈레톤 형태",
    },
    animation: {
      control: "select",
      options: ["pulse", "wave", "none"],
      description: "애니메이션 타입",
    },
    width: {
      control: "text",
      description: "너비",
    },
    height: {
      control: "text",
      description: "높이",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    width: "100%",
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    width: 48,
    height: 48,
  },
};

export const Rectangular: Story = {
  args: {
    variant: "rectangular",
    width: 200,
    height: 100,
  },
};

export const TextBlock: Story = {
  render: () => (
    <div className="max-w-md">
      <SkeletonText lines={4} />
    </div>
  ),
};

export const AvatarSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <SkeletonAvatar size="sm" />
      <SkeletonAvatar size="md" />
      <SkeletonAvatar size="lg" />
      <SkeletonAvatar size="xl" />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="max-w-sm">
      <SkeletonCard />
    </div>
  ),
};

export const CardWithoutImage: Story = {
  render: () => (
    <div className="max-w-sm">
      <SkeletonCard hasImage={false} lines={3} />
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => <SkeletonTable rows={5} columns={4} />,
};

export const ListSkeleton: Story = {
  render: () => (
    <div className="max-w-md">
      <SkeletonList items={4} />
    </div>
  ),
};

export const ListWithoutAvatar: Story = {
  render: () => (
    <div className="max-w-md">
      <SkeletonList items={4} hasAvatar={false} />
    </div>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="border border-gray-200 p-4">
          <Skeleton height={180} className="mb-3" />
          <Skeleton variant="text" height={16} width="80%" className="mb-2" />
          <Skeleton variant="text" height={14} width="60%" className="mb-3" />
          <Skeleton variant="text" height={20} width="40%" />
        </div>
      ))}
    </div>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <div className="max-w-sm p-4 border border-gray-200">
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
  ),
};

export const ArticleList: Story = {
  render: () => (
    <div className="max-w-2xl space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex gap-4 p-4 border border-gray-200">
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
        </div>
      ))}
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-4 border border-gray-200">
            <Skeleton variant="text" height={14} width="50%" className="mb-2" />
            <Skeleton variant="text" height={28} width="70%" className="mb-2" />
            <Skeleton variant="text" height={12} width="40%" />
          </div>
        ))}
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
  ),
};

export const CommentList: Story = {
  render: () => (
    <div className="max-w-lg space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex gap-3">
          <SkeletonAvatar size="md" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Skeleton variant="text" height={14} width={80} />
              <Skeleton variant="text" height={12} width={60} />
            </div>
            <SkeletonText lines={2} />
          </div>
        </div>
      ))}
    </div>
  ),
};
