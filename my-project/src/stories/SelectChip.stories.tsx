import type { Meta, StoryObj } from "@storybook/react";
import { SelectChip } from "../components/SelectChip";

const meta: Meta<typeof SelectChip> = {
  title: "UI/SelectChip",
  component: SelectChip,
  tags: ["autodocs"],
  argTypes: {
    showMaskStart: { control: "boolean" },
    showExpendIcon: { control: "boolean" },
    showMaskEnd: { control: "boolean" },
    variants: {
      control: "select",
      options: ["single", "multi"],
    },
    isExpand: { control: "boolean" }
  },
  args: {
    showMaskStart: true,
    showExpendIcon: true,
    showMaskEnd: true,
    variants: "single",
    isExpand: false
  },
};

export default meta;
type Story = StoryObj<typeof SelectChip>;

export const Default: Story = {};

export const Single: Story = {
  args: { variants: "single" },
};

export const Multi: Story = {
  args: { variants: "multi" },
};

export const IsExpand: Story = {
  args: { isExpand: true },
};
