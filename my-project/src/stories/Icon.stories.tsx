import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../components/Icon";

// Example SVG icon for demonstrations
const ExampleIcon = ({ size, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path 
      d="M12 2L13.09 8.26L22 9L17 14L18.18 22L12 19L5.82 22L7 14L2 9L10.91 8.26L12 2Z" 
      fill={color || "currentColor"}
    />
  </svg>
);

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
      table: {
        disable: true,
      },
    },
  },
  args: {
    size: 16,
    color: "currentColor",
    children: <ExampleIcon />,
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

export const Size22: Story = {
  args: {
    size: 22,
  },
};

export const Size24: Story = {
  args: {
    size: 24,
  },
};

export const Size28: Story = {
  args: {
    size: 28,
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

export const CustomColor: Story = {
  args: {
    color: "#3b82f6",
    size: 24,
  },
};

export const RedIcon: Story = {
  args: {
    color: "#ef4444",
    size: 24,
  },
};

export const GreenIcon: Story = {
  args: {
    color: "#10b981",
    size: 24,
  },
};

export const WithoutChildren: Story = {
  args: {
    children: undefined,
    size: 24,
  },
};

export const TextContent: Story = {
  args: {
    children: "🌟",
    size: 24,
  },
};