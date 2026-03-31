import type { Meta, StoryObj } from "@storybook/react";
import { ContentsListItem } from "../components/ContentsListItem";

const meta: Meta<typeof ContentsListItem> = {
  title: "UI/ContentsListItem",
  component: ContentsListItem,
  tags: ["autodocs"],
  argTypes: {
    showSlotEnd: { control: "boolean" },
    showSlotStart: { control: "boolean" },
    hasGutter: { control: "boolean" }
  },
  args: {
    showSlotEnd: true,
    showSlotStart: true,
    hasGutter: true
  },
};

export default meta;
type Story = StoryObj<typeof ContentsListItem>;

export const Default: Story = {};
