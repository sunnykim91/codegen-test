import type { Meta, StoryObj } from "@storybook/react";
import { StatusBar } from "../components/StatusBar";

const meta: Meta<typeof StatusBar> = {
  title: "UI/StatusBar",
  component: StatusBar,
  tags: ["autodocs"],
  argTypes: {
    platform: {
      control: "select",
      options: ["samsung", "ios"],
      description: "Determines the platform-specific styling and layout of the status bar.",
    },
    // HTMLAttributes<HTMLDivElement> are not typically exposed as controls
    // If specific HTML attributes like `className` or `style` are desired as controls,
    // they would need to be explicitly added here.
  },
  args: {
    platform: "ios", // Default value from component definition
  },
  parameters: {
    layout: 'fullscreen', // Status bars typically span the full width/top
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof StatusBar>;

export const Default: Story = {
  // Uses default args
  // This story will render with platform="ios"
};

export const IOSPlatform: Story = {
  args: {
    platform: "ios",
  },
};

export const SamsungPlatform: Story = {
  args: {
    platform: "samsung",
  },
};