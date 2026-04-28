import type { Meta, StoryObj } from "@storybook/react";
import { GhostIconButton } from "../components/GhostIconButton";
import { useState } from "react";

const meta: Meta<typeof GhostIconButton> = {
  title: "UI/GhostIconButton",
  component: GhostIconButton,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"],
    },
    isPadded: { control: "boolean" },
    color: {
      control: "select",
      options: ["primary", "gray", "grayTinted", "invert"],
    },
    size: {
      control: "select",
      options: ["sm", "xs"],
    },
    fullWidth: { control: "boolean" },
    ariaLabel: { control: "text" }
  },
  args: {
    state: "enabled",
    isPadded: true,
    color: "primary",
    size: "sm",
    fullWidth: false
  },
};

export default meta;
type Story = StoryObj<typeof GhostIconButton>;

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

export const GrayTinted: Story = {
  args: { color: "grayTinted" },
};

export const Invert: Story = {
  args: { color: "invert" },
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

export const Interactive: Story = {
  render: (args) => {
    const [isPadded, setIsPadded] = useState(true);
    return (
      <GhostIconButton
        {...args}
        isPadded={isPadded}
        onClick={() => setIsPadded((v) => !v)}
      />
    );
  },
};
