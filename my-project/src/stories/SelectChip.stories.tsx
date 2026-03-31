import type { Meta, StoryObj } from "@storybook/react";
import { SelectChip } from "../components/SelectChip";

const meta = {
  title: "UI/SelectChip",
  component: SelectChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showMaskStart: {
      control: "boolean",
    },
    showExpendIcon: {
      control: "boolean",
    },
    showMaskEnd: {
      control: "boolean",
    },
    variants: {
      control: "select",
      options: ["single", "multi"],
    },
    isExpand: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof SelectChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showMaskStart: true,
    showExpendIcon: true,
    showMaskEnd: true,
    variants: "single",
    isExpand: false,
  },
};

export const SingleCollapsed: Story = {
  args: {
    showMaskStart: true,
    showExpendIcon: true,
    showMaskEnd: true,
    variants: "single",
    isExpand: false,
  },
};

export const SingleExpanded: Story = {
  args: {
    showMaskStart: true,
    showExpendIcon: true,
    showMaskEnd: true,
    variants: "single",
    isExpand: true,
  },
};

export const MultiCollapsed: Story = {
  args: {
    showMaskStart: true,
    showExpendIcon: true,
    showMaskEnd: true,
    variants: "multi",
    isExpand: false,
  },
};

export const MultiExpanded: Story = {
  args: {
    showMaskStart: true,
    showExpendIcon: true,
    showMaskEnd: true,
    variants: "multi",
    isExpand: true,
  },
};

export const WithoutMasks: Story = {
  args: {
    showMaskStart: false,
    showExpendIcon: true,
    showMaskEnd: false,
    variants: "single",
    isExpand: false,
  },
};

export const WithoutExpandIcon: Story = {
  args: {
    showMaskStart: true,
    showExpendIcon: false,
    showMaskEnd: true,
    variants: "single",
    isExpand: false,
  },
};

export const MinimalConfig: Story = {
  args: {
    showMaskStart: false,
    showExpendIcon: false,
    showMaskEnd: false,
    variants: "single",
    isExpand: false,
  },
};