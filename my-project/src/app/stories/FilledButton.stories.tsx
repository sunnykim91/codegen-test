import type { Meta, StoryObj } from "@storybook/react";
import { FilledButton } from "../components/FilledButton";
import { useState } from "react";

const meta: Meta<typeof FilledButton> = {
  title: "UI/FilledButton",
  component: FilledButton,
  tags: ["autodocs"],
  argTypes: {
    showStartIcon: { control: "boolean" },
    showEndIcon: { control: "boolean" },
    label: { control: "text" },
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"],
    },
    isTinted: { control: "boolean" },
    color: {
      control: "select",
      options: ["primary", "gray"],
    },
    size: {
      control: "select",
      options: ["lg", "md", "sm", "xs"],
    },
    fullWidth: { control: "boolean" }
  },
  args: {
    showStartIcon: true,
    showEndIcon: true,
    state: "enabled",
    isTinted: false,
    color: "primary",
    size: "lg",
    fullWidth: false
  },
};

export default meta;
type Story = StoryObj<typeof FilledButton>;

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

export const IsTinted: Story = {
  args: { isTinted: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};

export const Interactive: Story = {
  render: (args) => {
    const [isTinted, setIsTinted] = useState(false);
    return (
      <FilledButton
        {...args}
        isTinted={isTinted}
        onClick={() => setIsTinted((v) => !v)}
      />
    );
  },
};
