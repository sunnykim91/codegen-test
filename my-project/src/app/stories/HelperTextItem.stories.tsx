import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HelperTextItem } from "../components/HelperTextItem";

const meta: Meta<typeof HelperTextItem> = {
  title: "UI/HelperTextItem",
  component: HelperTextItem,
  tags: ["autodocs"],
  argTypes: {
    showText: { control: "boolean" },
    showCharacterCount: { control: "boolean" },
    showIcon: { control: "boolean" },
    text: { control: "text" },
    variants: {
      control: "select",
      options: ["enabled", "error", "success", "disabled"],
    },
  },
  args: {
    showText: true,
    showCharacterCount: true,
    showIcon: true,
    variants: "enabled",
  },
};

export default meta;
type Story = StoryObj<typeof HelperTextItem>;

export const Default: Story = {};

export const Enabled: Story = {
  args: { variants: "enabled" },
};

export const Error: Story = {
  args: { variants: "error" },
};

export const Success: Story = {
  args: { variants: "success" },
};

export const Disabled: Story = {
  args: { variants: "disabled" },
};
