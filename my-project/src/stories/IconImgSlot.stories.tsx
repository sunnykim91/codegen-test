import type { Meta, StoryObj } from "@storybook/react";
import { IconImgSlot } from "../components/IconImgSlot";

const meta: Meta<typeof IconImgSlot> = {
  title: "UI/IconImgSlot",
  component: IconImgSlot,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [20, 24, 32, 48, 60, 72],
    },
    circle: { control: "boolean" }
  },
  args: {
    size: 24,
    circle: false
  },
};

export default meta;
type Story = StoryObj<typeof IconImgSlot>;

export const Default: Story = {};

export const Size20: Story = {
  args: { size: 20 },
};

export const Size24: Story = {
  args: { size: 24 },
};

export const Size32: Story = {
  args: { size: 32 },
};

export const Size48: Story = {
  args: { size: 48 },
};

export const Size60: Story = {
  args: { size: 60 },
};

export const Size72: Story = {
  args: { size: 72 },
};

export const Circle: Story = {
  args: { circle: true },
};
