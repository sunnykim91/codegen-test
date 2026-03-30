import type { Meta, StoryObj } from "@storybook/react";
import { BoxButton } from "../components/BoxButton";

const meta: Meta<typeof BoxButton> = {
  title: "UI/BoxButton",
  component: BoxButton,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    color: { control: "select", options: ["primary", "gray"] },
    isTinted: { control: "boolean" },
    variants: { control: "select", options: ["filled", "outline"] },
    size: { control: "select", options: ["lg", "md", "sm", "xs"] },
    state: { control: "select", options: ["enabled", "pressed", "disabled"] },
    showStartIcon: { control: "boolean" },
    showEndIcon: { control: "boolean" },
    label: { control: "text" },
    startIcon: { control: "text" },
    endIcon: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof BoxButton>;

export const Default: Story = {
  args: {
    color: "primary",
    isTinted: false,
    variants: "filled",
    size: "lg",
    state: "enabled",
    showStartIcon: true,
    showEndIcon: true,
    label: "버튼 라벨",
    startIcon: "blank",
    endIcon: "blank",
  },
};

export const PrimaryFilled: Story = {
  args: {
    ...Default.args,
    color: "primary",
    variants: "filled",
    label: "Primary Filled",
  },
};

export const PrimaryOutline: Story = {
  args: {
    ...Default.args,
    color: "primary",
    variants: "outline",
    label: "Primary Outline",
  },
};

export const GrayFilled: Story = {
  args: {
    ...Default.args,
    color: "gray",
    variants: "filled",
    label: "Gray Filled",
  },
};

export const GrayOutline: Story = {
  args: {
    ...Default.args,
    color: "gray",
    variants: "outline",
    label: "Gray Outline",
  },
};

export const Tinted: Story = {
  args: {
    ...Default.args,
    isTinted: true,
    label: "Tinted Button",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
    label: "Large",
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: "md",
    label: "Medium",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
    label: "Small",
  },
};

export const ExtraSmall: Story = {
  args: {
    ...Default.args,
    size: "xs",
    label: "Extra Small",
  },
};

export const Pressed: Story = {
  args: {
    ...Default.args,
    state: "pressed",
    label: "Pressed State",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    state: "disabled",
    label: "Disabled State",
  },
};

export const NoIcons: Story = {
  args: {
    ...Default.args,
    showStartIcon: false,
    showEndIcon: false,
    label: "No Icons",
  },
};

export const StartIconOnly: Story = {
  args: {
    ...Default.args,
    showStartIcon: true,
    showEndIcon: false,
    label: "Start Icon Only",
  },
};

export const EndIconOnly: Story = {
  args: {
    ...Default.args,
    showStartIcon: false,
    showEndIcon: true,
    label: "End Icon Only",
  },
};