import type { Meta, StoryObj } from "@storybook/react";
import { BoxButton } from "./BoxButton";

const meta: Meta<typeof BoxButton> = {
  title: "UI/BoxButton",
  component: BoxButton,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "gray"],
    },
    tinted: { control: "boolean" },
    variants: {
      control: "select",
      options: ["solid", "out-line"],
    },
    size: {
      control: "select",
      options: ["lg", "md", "sm", "xs"],
    },
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"],
    },
    ShowStartIcon: { control: "boolean" },
    ShowEndIcon: { control: "boolean" }
  },
  args: {
    children: "BoxButton",
    color: "primary",
    tinted: false,
    variants: "solid",
    size: "lg",
    state: "enabled",
    ShowStartIcon: true,
    ShowEndIcon: true
  },
};

export default meta;
type Story = StoryObj<typeof BoxButton>;

export const Default: Story = {};

export const Primary: Story = {
  args: { color: "primary" },
};

export const Gray: Story = {
  args: { color: "gray" },
};

export const Solid: Story = {
  args: { variants: "solid" },
};

export const OutLine: Story = {
  args: { variants: "out-line" },
};

export const Lg: Story = {
  args: { size: "lg" },
};

export const Md: Story = {
  args: { size: "md" },
};

export const Sm: Story = {
  args: { size: "sm" },
};

export const Xs: Story = {
  args: { size: "xs" },
};

export const Enabled: Story = {
  args: { state: "enabled" },
};

export const Pressed: Story = {
  args: { state: "pressed" },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};

export const Tinted: Story = {
  args: { tinted: true },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};
