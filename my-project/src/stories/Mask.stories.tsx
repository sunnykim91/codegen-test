import type { Meta, StoryObj } from "@storybook/react";
import { Mask } from "../components/Mask";

const meta: Meta<typeof Mask> = {
  title: "UI/Mask",
  component: Mask,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    }
  },
  args: {
    direction: "top"
  },
};

export default meta;
type Story = StoryObj<typeof Mask>;

export const Default: Story = {};

export const Top: Story = {
  args: { direction: "top" },
};

export const Right: Story = {
  args: { direction: "right" },
};

export const Bottom: Story = {
  args: { direction: "bottom" },
};

export const Left: Story = {
  args: { direction: "left" },
};
