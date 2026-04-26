import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Divider } from "../components/Divider";

const meta: Meta<typeof Divider> = {
  title: "UI/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    color: {
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
    color: "subtle",
    weight: "thin",
    direction: "horizontal"
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const Subtle: Story = {
  args: { color: "subtle" },
};

export const Strong: Story = {
  args: { color: "strong" },
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
