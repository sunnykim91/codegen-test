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
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    size: 16,
    color: "currentColor",
    children: "📍",
  },
};

export const Size14: Story = {
  args: {
    size: 14,
    color: "currentColor",
    children: "⭐",
  },
};

export const Size20: Story = {
  args: {
    size: 20,
    color: "currentColor",
    children: "❤️",
  },
};

export const Size24: Story = {
  args: {
    size: 24,
    color: "currentColor",
    children: "🎯",
  },
};

export const Size32: Story = {
  args: {
    size: 32,
    color: "currentColor",
    children: "🚀",
  },
};

export const Size40: Story = {
  args: {
    size: 40,
    color: "currentColor",
    children: "🌟",
  },
};

export const CustomColor: Story = {
  args: {
    size: 24,
    color: "#ff6b6b",
    children: "💎",
  },
};

export const WithSvgIcon: Story = {
  args: {
    size: 24,
    color: "#4f46e5",
    children: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
};