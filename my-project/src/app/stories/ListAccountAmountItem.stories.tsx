import type { Meta, StoryObj } from "@storybook/react";
import { ListAccountAmountItem } from "../components/ListAccountAmountItem";

const meta: Meta<typeof ListAccountAmountItem> = {
  title: "UI/ListAccountAmountItem",
  component: ListAccountAmountItem,
  tags: ["autodocs"],
  argTypes: {
    amount: { control: "text" },
    variants: {
      control: "select",
      options: ["enabled", "disabled"],
    },
    size: {
      control: "select",
      options: ["lg", "md", "3xl", "xl"],
    },
    fontWeight: {
      control: "select",
      options: ["bold", "medium"],
    }
  },
  args: {
    variants: "enabled",
    size: "lg",
    fontWeight: "bold"
  },
};

export default meta;
type Story = StoryObj<typeof ListAccountAmountItem>;

export const Default: Story = {};

export const Enabled: Story = {
  args: { variants: "enabled" },
};

export const Disabled: Story = {
  args: { variants: "disabled" },
};

export const Lg: Story = {
  args: { size: "lg" },
};

export const Md: Story = {
  args: { size: "md" },
};

export const Size3xl: Story = {
  args: { size: "3xl" },
};

export const Xl: Story = {
  args: { size: "xl" },
};

export const Bold: Story = {
  args: { fontWeight: "bold" },
};

export const Medium: Story = {
  args: { fontWeight: "medium" },
};
