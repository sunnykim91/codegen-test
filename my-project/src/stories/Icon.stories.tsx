import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../components/Icon";

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [14, 16, 18, 20, 22, 24, 28, 32, 40],
    },
    color: {
      control: "text",
    },
    children: {
      control: "text",
    },
  },
  args: {
    size: 16,
    color: "currentColor",
    children: "🎯",
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const Size14: Story = {
  args: {
    size: 14,
  },
};

export const Size16: Story = {
  args: {
    size: 16,
  },
};

export const Size18: Story = {
  args: {
    size: 18,
  },
};

export const Size20: Story = {
  args: {
    size: 20,
  },
};

export const Size24: Story = {
  args: {
    size: 24,
  },
};

export const Size32: Story = {
  args: {
    size: 32,
  },
};

export const Size40: Story = {
  args: {
    size: 40,
  },
};

export const ColoredIcon: Story = {
  args: {
    size: 24,
    color: "#3b82f6",
    children: "⭐",
  },
};

export const WithSVG: Story = {
  args: {
    size: 24,
    children: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
};