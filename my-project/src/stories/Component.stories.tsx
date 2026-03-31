import type { Meta, StoryObj } from "@storybook/react";
import { SelectChipItem } from "../components/SelectChipItem";

const meta: Meta<typeof SelectChipItem> = {
  title: "UI/SelectChipItem",
  component: SelectChipItem,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["multi", "single"],
    },
    state: {
      control: "select",
      options: ["enabled", "pressed", "readonly", "disabled"],
    },
    isSelected: { control: "boolean" },
    fullWidth: { control: "boolean" }
  },
  args: {
    children: "SelectChipItem",
    variants: "multi",
    state: "enabled",
    isSelected: false,
    fullWidth: false
  },
};

export default meta;
type Story = StoryObj<typeof SelectChipItem>;

export const Default: Story = {};

export const Multi: Story = {
  args: { variants: "multi" },
};

export const Single: Story = {
  args: { variants: "single" },
};

export const Enabled: Story = {
  args: { state: "enabled" },
};

export const Pressed: Story = {
  args: { state: "pressed" },
};

export const Readonly: Story = {
  args: { state: "readonly" },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};

export const IsSelected: Story = {
  args: { isSelected: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};
