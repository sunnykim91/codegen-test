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
    children: "🏠",
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

export const WithCustomColor: Story = {
  args: {
    color: "#ff6b6b",
    size: 24,
  },
};

export const WithSVGIcon: Story = {
  args: {
    size: 24,
    children: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
      </svg>
    ),
  },
};

export const WithTextIcon: Story = {
  args: {
    size: 28,
    children: "⭐",
  },
};