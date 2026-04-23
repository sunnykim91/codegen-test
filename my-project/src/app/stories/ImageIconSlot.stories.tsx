import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ImageIconSlot } from "../components/ImageIconSlot";

// Mock BlanCIImg for Storybook context, as it's an external dependency assumed to exist.
// In a real project, BlanCIImg would be properly imported and configured.
const MockBlanCIImg = ({ width, height, borderRadius, style }: any) => (
  <img
    src="https://via.placeholder.com/600x400?text=Image"
    alt="Placeholder"
    style={{
      width: width,
      height: height,
      borderRadius: borderRadius,
      objectFit: "cover",
      ...style, // BlanCIImg receives calculated styles
    }}
  />
);

const meta = {
  title: "UI/ImageIconSlot",
  component: ImageIconSlot,
  tags: ["autodocs"],
  argTypes: {
    imgSlot: {
      control: false, // ReactNode type is hard to control directly in Storybook UI
      description: "Optional custom content to replace the default image.",
    },
    size: {
      control: "select",
      options: [24, 32, 48, 60, 72], // Defined by ImageIconSlotSize type and sizeStyleMap
      description: "Sets the width and height of the image slot.",
    },
    circle: {
      control: "boolean",
      description: "If true, the image slot will be rendered as a circle.",
    },
    onClick: { action: "clicked" }, // Inherited from HTMLAttributes<HTMLDivElement>
  },
  args: {
    size: 24,
    circle: false,
    // imgSlot is undefined by default in the component
  },
  parameters: {
    // Optional: Add a decorator to provide the mocked BlanCIImg
    // This assumes BlanCIImg is a global or context-provided component.
    // For this example, we'll manually replace it in stories that need it or
    // ensure the story environment can handle the import.
  },
} satisfies Meta<typeof ImageIconSlot>;

export default meta;

type Story = StoryObj<typeof ImageIconSlot>;

export const Default: Story = {
  args: {
    // Default values are handled by the component's default props
    // BlanCIImg will be rendered internally
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

export const Size48: Story = {
  args: {
    size: 48,
  },
};

export const Size60: Story = {
  args: {
    size: 60,
  },
};

export const Size72: Story = {
  args: {
    size: 72,
  },
};

export const CircleSize24: Story = {
  args: {
    size: 24,
    circle: true,
  },
};

export const CircleSize48: Story = {
  args: {
    size: 48,
    circle: true,
  },
};

export const CircleSize72: Story = {
  args: {
    size: 72,
    circle: true,
  },
};

export const WithCustomImageSlot: Story = {
  args: {
    size: 48,
    circle: true,
    imgSlot: (
      // For demonstration, use a simple img tag for the custom slot
      // In a real scenario, this might be another component or a styled div
      <img
        src="https://via.placeholder.com/150/0000FF/FFFFFF?text=Custom+Image"
        alt="Custom Slot"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    ),
  },
};

export const WithIconSlot: Story = {
  args: {
    size: 32,
    imgSlot: (
      // Example with an SVG icon or a simple text icon
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ccc",
          color: "#333",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        IC
      </div>
    ),
  },
};

export const WithMockBlanCIImgSlot: Story = {
  args: {
    size: 60,
    circle: false,
    // Demonstrating imgSlot being another BlanCIImg instance (e.g., for different source)
    // Note: This relies on MockBlanCIImg being available in this context.
    imgSlot: (
      <MockBlanCIImg
        src="https://via.placeholder.com/300x200?text=Custom+BlanCI"
        width="100%"
        height="100%"
        objectFit="cover"
        borderRadius="inherit" // Inherit from parent, ImageIconSlot will set it
      />
    ),
  },
};