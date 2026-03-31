import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../components/Divider";

const meta: Meta<typeof Divider> = {
  title: "UI/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    colro: {
      control: "select",
      options: ["subtle", "strong"],
    },
    weight: {
      control: "select",
      options: ["thin", "bold"],
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    }
  },
  args: {
    colro: "subtle",
    weight: "thin",
    direction: "horizontal"
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const Subtle: Story = {
  args: { colro: "subtle" },
};

export const Strong: Story = {
  args: { colro: "strong" },
};

export const Thin: Story = {
  args: { weight: "thin" },
};

export const Bold: Story = {
  args: { weight: "bold" },
};

export const Horizontal: Story = {
  args: { direction: "horizontal" },
};

export const Vertical: Story = {
  args: { direction: "vertical" },
};
