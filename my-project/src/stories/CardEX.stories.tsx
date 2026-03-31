import type { Meta, StoryObj } from "@storybook/react";
import { CardEX } from "../components/CardEX";

const meta: Meta<typeof CardEX> = {
  title: "UI/CardEX",
  component: CardEX,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["md", "sm"],
    }
  },
  args: {
    children: "CardEX",
    size: "md"
  },
};

export default meta;
type Story = StoryObj<typeof CardEX>;

export const Default: Story = {};

export const Md: Story = {
  args: { size: "md" },
};

export const Sm: Story = {
  args: { size: "sm" },
};
