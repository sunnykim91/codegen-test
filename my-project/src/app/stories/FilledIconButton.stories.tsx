import type { Meta, StoryObj } from "@storybook/react";
import { FilledIconButton } from "../components/FilledIconButton";
import { useState } from "react";

const meta: Meta<typeof FilledIconButton> = {
  title: "UI/FilledIconButton",
  component: FilledIconButton,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"],
    },
    size: {
      control: "select",
      options: ["sm", "xs"],
    },
    color: {
      control: "select",
      options: ["primary", "gray"],
    },
    isTinted: { control: "boolean" },
    isRounded: { control: "boolean" },
    fullWidth: { control: "boolean" }
  },
  args: {
    state: "enabled",
    size: "sm",
    color: "primary",
    isTinted: false,
    isRounded: false,
    fullWidth: false
  },
};

export default meta;
type Story = StoryObj<typeof FilledIconButton>;

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

export const Sm: Story = {
  args: { size: "sm" },
};

export const Xs: Story = {
  args: { size: "xs" },
};

export const Primary: Story = {
  args: { color: "primary" },
};

export const Gray: Story = {
  args: { color: "gray" },
};

export const IsTinted: Story = {
  args: { isTinted: true },
};

export const IsRounded: Story = {
  args: { isRounded: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};

export const Interactive: Story = {
  render: (args) => {
    const [isTinted, setIsTinted] = useState(false);
    return (
      <FilledIconButton
        {...args}
        isTinted={isTinted}
        onClick={() => setIsTinted((v) => !v)}
      />
    );
  },
};
