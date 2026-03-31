import type { Meta, StoryObj } from "@storybook/react";
import { DropdownChipItem } from "../components/DropdownChipItem";

const meta = {
  title: "UI/DropdownChipItem",
  component: DropdownChipItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    isSelected: {
      control: "boolean",
    },
    state: {
      control: "select",
      options: ["enabled", "pressed", "readonly", "disabled", "focused"],
    },
    fullWidth: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof DropdownChipItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "라벨",
    isSelected: false,
    state: "enabled",
    fullWidth: false,
  },
};

export const Enabled: Story = {
  args: {
    children: "Enabled",
    state: "enabled",
    isSelected: false,
  },
};

export const Pressed: Story = {
  args: {
    children: "Pressed",
    state: "pressed",
    isSelected: false,
  },
};

export const Readonly: Story = {
  args: {
    children: "Readonly",
    state: "readonly",
    isSelected: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    state: "disabled",
    isSelected: false,
  },
};

export const Focused: Story = {
  args: {
    children: "Focused",
    state: "focused",
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    children: "Selected",
    state: "enabled",
    isSelected: true,
  },
};

export const SelectedFocused: Story = {
  args: {
    children: "Selected & Focused",
    state: "focused",
    isSelected: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width",
    state: "enabled",
    isSelected: false,
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};