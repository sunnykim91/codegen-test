import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StatusBar } from "../components/StatusBar";

const meta: Meta<typeof StatusBar> = {
  title: "UI/StatusBar",
  component: StatusBar,
  tags: ["autodocs"],
  argTypes: {
    platform: {
      control: "select",
      options: ["ios", "samsung"],
      description:
        "Controls the visual style and layout of the status bar for different mobile platforms.",
    },
  },
  args: {
    platform: "ios",
  },
  parameters: {
    // Status bar is a fixed width component, centered layout helps visualize it.
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof StatusBar>;

export const Default: Story = {
  // Renders with default args: platform="ios"
  args: {},
};

export const PlatformIOS: Story = {
  args: {
    platform: "ios",
  },
};

export const PlatformSamsung: Story = {
  args: {
    platform: "samsung",
  },
};
