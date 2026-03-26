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
    onClick: { action: "clicked" },
  },
  args: {
    size: 16,
    color: "currentColor",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const MockSVGIcon = ({ size = 12, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Default: Story = {
  args: {
    children: <MockSVGIcon />,
  },
};

export const Size14: Story = {
  args: {
    size: 14,
    children: <MockSVGIcon />,
  },
};

export const Size24: Story = {
  args: {
    size: 24,
    children: <MockSVGIcon />,
  },
};

export const Size40: Story = {
  args: {
    size: 40,
    children: <MockSVGIcon />,
  },
};

export const CustomColor: Story = {
  args: {
    size: 24,
    color: "#3b82f6",
    children: <MockSVGIcon />,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
      {[14, 16, 18, 20, 22, 24, 28, 32, 40].map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
          <Icon size={size}>
            <MockSVGIcon />
          </Icon>
          <span style={{ fontSize: "12px", color: "#666" }}>{size}px</span>
        </div>
      ))}
    </div>
  ),
};