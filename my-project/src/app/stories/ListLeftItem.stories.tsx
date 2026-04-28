<<<<<<< HEAD
import type { Meta, StoryObj } from "@storybook/react-vite";
=======
import type { Meta, StoryObj } from "@storybook/react";
>>>>>>> origin/feat/test2
import { ListLeftItem } from "../components/ListLeftItem";

const meta: Meta<typeof ListLeftItem> = {
  title: "UI/ListLeftItem",
  component: ListLeftItem,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["imageSlot", "iconSlot", "check"],
    }
  },
  args: {
    variants: "iconSlot"
  },
};

export default meta;
type Story = StoryObj<typeof ListLeftItem>;

export const Default: Story = {};

export const ImageSlot: Story = {
  args: { variants: "imageSlot" },
};

export const IconSlot: Story = {
  args: { variants: "iconSlot" },
};

export const Check: Story = {
  args: { variants: "check" },
};
