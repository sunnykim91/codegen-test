import type { Meta, StoryObj } from "@storybook/react";
import { Screen } from "../components/Screen";

const meta: Meta<typeof Screen> = {
  title: "UI/Screen",
  component: Screen,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["sub", "main"],
    }
  },
  args: {
    children: "Screen",
    variants: "sub"
  },
};

export default meta;
type Story = StoryObj<typeof Screen>;

export const Default: Story = {};

export const Sub: Story = {
  args: { variants: "sub" },
};

export const Main: Story = {
  args: { variants: "main" },
};
