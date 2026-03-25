import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../components/IconButton";

const meta: Meta<typeof IconButton> = {
  title: "UI/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["primary", "gray", "invert"],
    },
    state: {
      control: "select",
      options: ["enabled", "disabled"],
    },
    size: {
      control: "select",
      options: ["20", "24"],
    }
  },
  args: {
    variants: "primary",
    state: "enabled",
    size: "20"
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variants: "primary" },
};

export const Gray: Story = {
  args: { variants: "gray" },
};

export const Invert: Story = {
  args: { variants: "invert" },
};

export const Enabled: Story = {
  args: { state: "enabled" },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};

export const 20: Story = {
  args: { size: "20" },
};

export const 24: Story = {
  args: { size: "24" },
};
