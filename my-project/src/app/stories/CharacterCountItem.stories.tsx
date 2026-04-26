import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CharacterCountItem } from "../components/CharacterCountItem";

const meta: Meta<typeof CharacterCountItem> = {
  title: "UI/CharacterCountItem",
  component: CharacterCountItem,
  tags: ["autodocs"],
  argTypes: {
    count: { control: "text" },
    variants: {
      control: "select",
      options: ["enabled", "error", "disabled"],
    },
  },
  args: {
    variants: "enabled",
  },
};

export default meta;
type Story = StoryObj<typeof CharacterCountItem>;

export const Default: Story = {};

export const Enabled: Story = {
  args: { variants: "enabled" },
};

export const Error: Story = {
  args: { variants: "error" },
};

export const Disabled: Story = {
  args: { variants: "disabled" },
};
