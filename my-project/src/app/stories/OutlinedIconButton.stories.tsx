import type { Meta, StoryObj } from "@storybook/react";
import { OutlinedIconButton } from "../components/OutlinedIconButton";
import { useState } from "react";

const meta: Meta<typeof OutlinedIconButton> = {
  title: "UI/OutlinedIconButton",
  component: OutlinedIconButton,
  tags: ["autodocs"],
  argTypes: {
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
      options: ["sm", "xs"],
    },
    isRounded: { control: "boolean" },
    ariaLabel: { control: "text" }
  },
  args: {
    state: "enabled",
    color: "primary",
    size: "sm",
    isRounded: false
  },
};

export default meta;
type Story = StoryObj<typeof OutlinedIconButton>;

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

export const Sm: Story = {
  args: { size: "sm" },
};

export const Xs: Story = {
  args: { size: "xs" },
};

export const IsRounded: Story = {
  args: { isRounded: true },
};

export const Interactive: Story = {
  render: (args) => {
    const [isRounded, setIsRounded] = useState(false);
    return (
      <OutlinedIconButton
        {...args}
        isRounded={isRounded}
        onClick={() => setIsRounded((v) => !v)}
      />
    );
  },
};
