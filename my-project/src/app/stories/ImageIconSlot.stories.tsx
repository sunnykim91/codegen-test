import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ImageIconSlot } from "../components/ImageIconSlot";

// Define a placeholder image URL for stories that use `Img`
const placeholderImageUrl = "https://via.placeholder.com/150/0000FF/FFFFFF?text=Image";
const placeholderImageElement = <img src={placeholderImageUrl} alt="Example" />;

const meta = {
  title: "UI/ImageIconSlot",
  component: ImageIconSlot,
  tags: ["autodocs"],
  argTypes: {
    // `Img` prop is `ReactNode`, which is not typically controlled by standard Storybook controls.
    // We demonstrate its usage directly in specific story args.
    size: {
      control: "select",
      options: [24, 32, 48, 60, 72], // Number union type
      description: "The size of the image slot in pixels.",
    },
    circle: {
      control: "boolean",
      description: "If true, the image slot will have a full circle border radius.",
    },
    onClick: {
      action: "clicked", // Event handler
      description: "Optional click handler for the slot's container.",
    },
    className: {
      control: "text",
      description: "Optional CSS class name for the slot's container div.",
    },
    style: {
      control: "object",
      description: "Optional inline style object for the slot's container div.",
    },
  },
  args: {
    // Default values from the component's implementation
    size: 24,
    circle: false,
    onClick: action("clicked"), // Assign a default action for click events
  },
} satisfies Meta<typeof ImageIconSlot>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default story for ImageIconSlot, showing the BlanCIImg placeholder.
 */
export const Default: Story = {
  args: {
    // No `Img` prop provided, so the component's default `BlanCIImg` will be rendered.
  },
};

/**
 * ImageIconSlot with a size of 32px.
 */
export const Size32: Story = {
  args: {
    size: 32,
  },
};

/**
 * ImageIconSlot with a size of 48px.
 */
export const Size48: Story = {
  args: {
    size: 48,
  },
};

/**
 * ImageIconSlot with a size of 60px.
 */
export const Size60: Story = {
  args: {
    size: 60,
  },
};

/**
 * ImageIconSlot with a size of 72px.
 */
export const Size72: Story = {
  args: {
    size: 72,
  },
};

/**
 * ImageIconSlot with a circular shape (border-radius: 9999px).
 */
export const Circle: Story = {
  args: {
    size: 48, // A larger size makes the circle more apparent
    circle: true,
  },
};

/**
 * A large ImageIconSlot with a circular shape.
 */
export const LargeCircle: Story = {
  args: {
    size: 60,
    circle: true,
  },
};

/**
 * ImageIconSlot rendering an actual `<img>` element provided via the `Img` prop.
 */
export const WithImage: Story = {
  args: {
    size: 48,
    Img: placeholderImageElement,
  },
};

/**
 * ImageIconSlot rendering an actual `<img>` element in a circular shape.
 */
export const CircleWithImage: Story = {
  args: {
    size: 48,
    circle: true,
    Img: placeholderImageElement,
  },
};

/**
 * A large, circular ImageIconSlot rendering an actual `<img>` element.
 */
export const LargeCircleWithImage: Story = {
  args: {
    size: 72,
    circle: true,
    Img: placeholderImageElement,
  },
};

/**
 * ImageIconSlot rendering a simple text string as its content.
 * Custom styling is applied to center the text.
 */
export const WithText: Story = {
  args: {
    size: 48,
    Img: "TXT", // `ReactNode` can be a string
    style: {
      backgroundColor: "#e0e0e0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#555",
      fontSize: "1.2em",
      fontWeight: "bold",
    },
  },
};

/**
 * ImageIconSlot rendering a simple text string in a circular shape.
 */
export const CircleWithText: Story = {
  args: {
    size: 48,
    circle: true,
    Img: "TXT",
    style: {
      backgroundColor: "#e0e0e0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#555",
      fontSize: "1.2em",
      fontWeight: "bold",
    },
  },
};