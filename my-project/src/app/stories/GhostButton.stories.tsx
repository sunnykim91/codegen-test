import type { Meta, StoryObj } from "@storybook/react";
import { GhostButton } from "../components/GhostButton";

const meta: Meta<typeof GhostButton> = {
  title: "UI/GhostButton",
  component: GhostButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    state: {
      control: "select",
      options: ["enabeld", "pressed", "disabled"],
    },
    color: {
      control: "select",
      options: ["primary", "gray", "grayTinted", "invert"],
    },
    textSize: {
      control: "select",
      options: ["lg", "md", "xs"],
    },
    fullWidth: { control: "boolean" },
    showEndIcon: { control: "boolean" },
    showUnderline: { control: "boolean" },
    showStartIcon: { control: "boolean" }
  },
  args: {
    state: "enabeld",
    color: "primary",
    textSize: "lg",
    fullWidth: false,
    showEndIcon: true,
    showUnderline: true,
    showStartIcon: true
  },
};

export default meta;
type Story = StoryObj<typeof GhostButton>;

export const Default: Story = {};

export const Enabeld: Story = {
  args: { state: "enabeld" },
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

export const Lg: Story = {
  args: { textSize: "lg" },
};

export const Md: Story = {
  args: { textSize: "md" },
};

export const Xs: Story = {
  args: { textSize: "xs" },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};
