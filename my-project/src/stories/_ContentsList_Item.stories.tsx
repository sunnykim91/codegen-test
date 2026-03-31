import type { Meta, StoryObj } from "@storybook/react";
import { ContentsListItem } from "../components/ContentsListItem";

const meta: Meta<typeof ContentsListItem> = {
  title: "UI/ContentsListItem",
  component: ContentsListItem,
  tags: ["autodocs"],
  argTypes: {
    showSlotStart: { control: "boolean" },
    showSlotEnd: { control: "boolean" }
  },
  args: {
    showSlotStart: true,
    showSlotEnd: true
  },
};

export default meta;
type Story = StoryObj<typeof ContentsListItem>;

export const Default: Story = {};
