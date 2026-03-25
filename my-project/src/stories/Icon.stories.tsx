import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../components/Icon";

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["14", "16", "18", "20", "22", "24", "28", "32", "40"],
    }
  },
  args: {
    size: "14"
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const Size14: Story = {
  args: { size: "14" },
};

export const Size16: Story = {
  args: { size: "16" },
};

export const Size18: Story = {
  args: { size: "18" },
};

export const Size20: Story = {
  args: { size: "20" },
};

export const Size22: Story = {
  args: { size: "22" },
};

export const Size24: Story = {
  args: { size: "24" },
};

export const Size28: Story = {
  args: { size: "28" },
};

export const Size32: Story = {
  args: { size: "32" },
};

export const Size40: Story = {
  args: { size: "40" },
};
