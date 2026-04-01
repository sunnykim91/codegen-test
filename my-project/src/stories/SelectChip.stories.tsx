import type { Meta, StoryObj } from "@storybook/react";
import { SelectChip } from "../components/SelectChip";
import { SelectChipItem } from "../components/SelectChipItem";

const defaultChildren = (
  <>
    <SelectChipItem />
    <SelectChipItem />
    <SelectChipItem isSelected />
    <SelectChipItem />
    <SelectChipItem />
    <SelectChipItem />
    <SelectChipItem />
    <SelectChipItem />
    <SelectChipItem />
    <SelectChipItem />
  </>
);

const meta: Meta<typeof SelectChip> = {
  title: "UI/SelectChip",
  component: SelectChip,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["single", "multi"],
    },
    isExpand: { control: "boolean" },
    showMaskStart: { control: "boolean" },
    showExpendIcon: { control: "boolean" },
    showMaskEnd: { control: "boolean" },
  },
  args: {
    children: defaultChildren,
    variants: "single",
    isExpand: false,
    showMaskStart: true,
    showExpendIcon: true,
    showMaskEnd: true,
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
