import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { IconButton } from "../components/IconButton";

const meta: Meta<typeof IconButton> = {
  title: "UI/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "text" },
    variants: { 
      control: "select", 
      options: ["primary", "gray", "invert"] 
    },
    state: { 
      control: "select", 
      options: ["enabled", "disabled"] 
    },
    size: { 
      control: "select", 
      options: [20, 24] 
    },
    onClick: { action: "clicked" },
  },
  args: {
    icon: "⭐",
    variants: "primary",
    state: "enabled",
    size: 20,
    onClick: action("clicked"),
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variants: "primary",
  },
};

export const Gray: Story = {
  args: {
    variants: "gray",
  },
};

export const Invert: Story = {
  args: {
    variants: "invert",
  },
};

export const Disabled: Story = {
  args: {
    state: "disabled",
  },
};

export const Size20: Story = {
  args: {
    size: 20,
  },
};

export const Size24: Story = {
  args: {
    size: 24,
  },
};

export const GrayDisabled: Story = {
  args: {
    variants: "gray",
    state: "disabled",
  },
};

export const InvertSize24: Story = {
  args: {
    variants: "invert",
    size: 24,
  },
};