import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageIconSlot } from "../components/ImageIconSlot";
import React from "react"; // For JSX in children prop

const meta = {
  title: "UI/ImageIconSlot",
  component: ImageIconSlot,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [24, 32, 48, 60, 72],
      description: "Defines the width and height of the icon slot.",
    },
    circle: {
      control: "boolean",
      description: "Applies a full border-radius to make the slot circular.",
    },
    children: {
      control: false, // ReactNode props are typically not controlled via Storybook controls.
      description:
        "Custom content to render inside the slot, overriding the default image.",
    },
    className: {
      control: "text",
      description: "Additional CSS class names.",
    },
    onClick: {
      action: "clicked",
      description: "Event handler for click events.",
    },
  },
  args: {
    size: 24,
    circle: false,
    className: "",
    // 'children' is intentionally left undefined here to show the default image
    // unless overridden in specific stories below.
  },
} satisfies Meta<typeof ImageIconSlot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}, // Uses default args from meta (size=24, circle=false, default image)
};

export const Size24: Story = {
  args: {
    size: 24,
    circle: false,
  },
};

export const Size32: Story = {
  args: {
    size: 32,
    circle: false,
  },
};

export const Size48: Story = {
  args: {
    size: 48,
    circle: false,
  },
};

export const Size60: Story = {
  args: {
    size: 60,
    circle: false,
  },
};

export const Size72: Story = {
  args: {
    size: 72,
    circle: false,
  },
};

export const CircularSize24: Story = {
  args: {
    size: 24,
    circle: true,
  },
};

export const CircularSize32: Story = {
  args: {
    size: 32,
    circle: true,
  },
};

export const CircularSize48: Story = {
  args: {
    size: 48,
    circle: true,
  },
};

export const CircularSize60: Story = {
  args: {
    size: 60,
    circle: true,
  },
};

export const CircularSize72: Story = {
  args: {
    size: 72,
    circle: true,
  },
};

export const WithCustomTextChildren: Story = {
  args: {
    size: 48,
    circle: false,
    children: (
      <span style={{ fontSize: "20px", fontWeight: "bold", color: "purple" }}>
        TXT
      </span>
    ),
  },
};

export const WithCustomEmojiChildren: Story = {
  args: {
    size: 60,
    circle: true,
    children: (
      <span role="img" aria-label="star icon" style={{ fontSize: "30px" }}>
        ⭐️
      </span>
    ),
  },
};

export const ClickableWithCustomContent: Story = {
  args: {
    size: 48,
    circle: true,
    onClick: meta.argTypes.onClick.action, // Assign the action from argTypes
    children: <span style={{ fontSize: "24px", color: "red" }}>👆</span>,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates a clickable icon slot with custom content. Check the Actions tab for logs.",
      },
    },
  },
};
