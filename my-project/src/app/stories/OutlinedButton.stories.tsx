import type { Meta, StoryObj } from "@storybook/react";
import { OutlinedButton } from "../components/OutlinedButton";

const meta: Meta<typeof OutlinedButton> = {
  title: "UI/OutlinedButton",
  component: OutlinedButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"],
    },
    color: {
      control: "select",
      options: ["primary", "gray"],
    },
    size: {
      control: "select",
      options: ["lg", "md", "sm", "xs"],
    },
    fullWidth: { control: "boolean" },
    showStartIcon: { control: "boolean" },
    showEndIcon: { control: "boolean" }
  },
  args: {
    state: "enabled",
    color: "primary",
    size: "lg",
    fullWidth: false,
    showStartIcon: true,
    showEndIcon: true
  },
};

export default meta;
type Story = StoryObj<typeof OutlinedButton>;

export const Default: Story = {};

export const Enabled: Story = {
  args: { state: "enabled" },
};

export const Pressed: Story = {
  args: { state: "pressed" },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};

export const Primary: Story = {
  args: { color: "primary" },
};

export const Gray: Story = {
  args: { color: "gray" },
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

export const FullWidth: Story = {
  args: { fullWidth: true },
};
