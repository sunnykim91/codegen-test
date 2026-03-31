import type { Meta, StoryObj } from "@storybook/react";
import { DropdownChipItem } from "../components/DropdownChipItem";

const meta: Meta<typeof DropdownChipItem> = {
  title: "UI/DropdownChipItem",
  component: DropdownChipItem,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["enabled", "pressed", "readonly", "disabled", "focused"],
    },
    fullWidth: { control: "boolean" }
  },
  args: {
    children: "DropdownChipItem",
    state: "enabled",
    fullWidth: false
  },
};

export default meta;
type Story = StoryObj<typeof DropdownChipItem>;

export const Default: Story = {};

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

export const Focused: Story = {
  args: { state: "focused" },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};
