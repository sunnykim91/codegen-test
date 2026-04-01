import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../components/Chip";

const meta: Meta<typeof Chip> = {
  title: "UI/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variants: {
      control: "select",
      options: ["filled", "outline"],
    },
    state: {
      control: "select",
      options: ["enabled", "pressed", "readonly", "disabled"],
    },
    isSelected: { control: "boolean" },
    fullWidth: { control: "boolean" },
    showStartIcon: { control: "boolean" },
    showEndIcon: { control: "boolean" },
  },
  args: {
    variants: "filled",
    state: "enabled",
    isSelected: false,
    fullWidth: false,
    showStartIcon: true,
    showEndIcon: true,
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const Filled: Story = {
  args: { variants: "filled" },
};

export const Outline: Story = {
  args: { variants: "outline" },
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
