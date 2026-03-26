import type { Meta, StoryObj } from "@storybook/react";
import { BoxButton } from "../components/BoxButton";

const meta: Meta<typeof BoxButton> = {
  title: "UI/BoxButton",
  component: BoxButton,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    color: { control: "select", options: ["primary", "gray"] },
    tinted: { control: "boolean" },
    size: { control: "select", options: ["lg", "md", "sm", "xs"] },
    state: { control: "select", options: ["enabled", "pressed", "disabled"] },
    variants: { control: "select", options: ["solid", "out-line"] },
    showStartIcon: { control: "boolean" },
    showEndIcon: { control: "boolean" },
    startIcon: { control: "text" },
    endIcon: { control: "text" },
    fullWidth: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    color: "primary",
    tinted: false,
    size: "lg",
    state: "enabled",
    variants: "solid",
    showStartIcon: true,
    showEndIcon: true,
    fullWidth: false,
  },
};

export const PrimarySolid: Story = {
  args: {
    children: "Primary Solid",
    color: "primary",
    variants: "solid",
    tinted: false,
    size: "lg",
    state: "enabled",
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: "Primary Outline",
    color: "primary",
    variants: "out-line",
    tinted: false,
    size: "lg",
    state: "enabled",
  },
};

export const GraySolid: Story = {
  args: {
    children: "Gray Solid",
    color: "gray",
    variants: "solid",
    tinted: false,
    size: "lg",
    state: "enabled",
  },
};

export const GrayOutline: Story = {
  args: {
    children: "Gray Outline",
    color: "gray",
    variants: "out-line",
    tinted: false,
    size: "lg",
    state: "enabled",
  },
};

export const Tinted: Story = {
  args: {
    children: "Tinted Button",
    color: "primary",
    variants: "solid",
    tinted: true,
    size: "lg",
    state: "enabled",
  },
};

export const SizeLg: Story = {
  args: {
    children: "Large",
    size: "lg",
    color: "primary",
    variants: "solid",
  },
};

export const SizeMd: Story = {
  args: {
    children: "Medium",
    size: "md",
    color: "primary",
    variants: "solid",
  },
};

export const SizeSm: Story = {
  args: {
    children: "Small",
    size: "sm",
    color: "primary",
    variants: "solid",
  },
};

export const SizeXs: Story = {
  args: {
    children: "Extra Small",
    size: "xs",
    color: "primary",
    variants: "solid",
  },
};

export const Pressed: Story = {
  args: {
    children: "Pressed",
    state: "pressed",
    color: "primary",
    variants: "solid",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    state: "disabled",
    color: "primary",
    variants: "solid",
    size: "lg",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
    color: "primary",
    variants: "solid",
    size: "lg",
  },
};

export const WithStartIcon: Story = {
  args: {
    children: "With Start Icon",
    showStartIcon: true,
    showEndIcon: false,
    startIcon: "🔥",
    color: "primary",
    variants: "solid",
    size: "lg",
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "With End Icon",
    showStartIcon: false,
    showEndIcon: true,
    endIcon: "→",
    color: "primary",
    variants: "solid",
    size: "lg",
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Both Icons",
    showStartIcon: true,
    showEndIcon: true,
    startIcon: "🔥",
    endIcon: "→",
    color: "primary",
    variants: "solid",
    size: "lg",
  },
};