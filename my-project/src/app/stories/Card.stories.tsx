import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["shadow", "outlined", "filled"],
    }
  },
  args: {
    variants: "shadow"
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Shadow: Story = {
  args: { variants: "shadow" },
};

export const Outlined: Story = {
  args: { variants: "outlined" },
};

export const Filled: Story = {
  args: { variants: "filled" },
};
