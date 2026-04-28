import type { Meta, StoryObj } from "@storybook/react";
import { Backdrop } from "../components/Backdrop";

const meta: Meta<typeof Backdrop> = {
  title: "UI/Backdrop",
  component: Backdrop,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["default"],
    }
  },
  args: {
    variants: "default"
  },
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {};
