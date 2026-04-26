import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LinkCard } from "../components/LinkCard";

const meta: Meta<typeof LinkCard> = {
  title: "UI/LinkCard",
  component: LinkCard,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"],
    },
    variants: {
      control: "select",
      options: ["shadow", "outlined", "filled"],
    }
  },
  args: {
    state: "enabled",
    variants: "shadow"
  },
};

export default meta;
type Story = StoryObj<typeof LinkCard>;

export const Default: Story = {};

export const Enabled: Story = {
  args: { state: "enabled" },
};

export const Pressed: Story = {
  args: { state: "pressed" },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};

export const Shadow: Story = {
  args: { variants: "shadow" },
};

export const Outlined: Story = {
  args: { variants: "outlined" },
};

export const Filled: Story = {
  args: { variants: "filled" },
};
