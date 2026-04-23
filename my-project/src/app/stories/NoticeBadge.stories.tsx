import type { Meta, StoryObj } from "@storybook/react";
import { NoticeBadge } from "../components/NoticeBadge";

const meta: Meta<typeof NoticeBadge> = {
  title: "UI/NoticeBadge",
  component: NoticeBadge,
  tags: ["autodocs"],
  argTypes: {
    showPlusIcon: { control: "boolean" },
    badgeLabel: { control: "text" },
    variants: {
      control: "select",
      options: ["number", "dot"],
    }
  },
  args: {
    children: "NoticeBadge",
    showPlusIcon: true,
    variants: "number"
  },
};

export default meta;
type Story = StoryObj<typeof NoticeBadge>;

export const Default: Story = {};

export const Number: Story = {
  args: { variants: "number" },
};

export const Dot: Story = {
  args: { variants: "dot" },
};
