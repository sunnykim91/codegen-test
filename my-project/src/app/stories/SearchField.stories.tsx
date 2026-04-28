import type { Meta, StoryObj } from "@storybook/react";
import { SearchField } from "../components/SearchField";

const meta: Meta<typeof SearchField> = {
  title: "UI/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    name: { control: "text" },
    showHelperText: { control: "boolean" },
    showLabel: { control: "boolean" },
    state: {
      control: "select",
      options: ["enabled", "focused", "filled", "read-only", "disabled"],
    },
    status: {
      control: "select",
      options: ["none", "error", "success"],
    },
    label: { control: "text" },
    helperText: { control: "text" },
    characterCountText: { control: "text" }
  },
  args: {
    showHelperText: true,
    showLabel: true,
    state: "enabled",
    status: "none"
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {};

export const Enabled: Story = {
  args: { state: "enabled" },
};

export const Focused: Story = {
  args: { state: "focused" },
};

export const Filled: Story = {
  args: { state: "filled" },
};

export const ReadOnly: Story = {
  args: { state: "read-only" },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};

export const None: Story = {
  args: { status: "none" },
};

export const Error: Story = {
  args: { status: "error" },
};

export const Success: Story = {
  args: { status: "success" },
};
