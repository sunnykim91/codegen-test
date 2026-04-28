import type { Meta, StoryObj } from "@storybook/react";
import { ListMetaTextItem } from "../components/ListMetaTextItem";

const meta: Meta<typeof ListMetaTextItem> = {
  title: "UI/ListMetaTextItem",
  component: ListMetaTextItem,
  tags: ["autodocs"],
  argTypes: {
    showContainer02: { control: "boolean" },
    showContainer03: { control: "boolean" },
    variants: {
      control: "select",
      options: ["enabled", "disabled"],
    },
    layout: {
      control: "select",
      options: ["vertical", "horizontal"],
    }
  },
  args: {
    showContainer02: true,
    showContainer03: true,
    variants: "enabled",
    layout: "horizontal"
  },
};

export default meta;
type Story = StoryObj<typeof ListMetaTextItem>;

export const Default: Story = {};

export const Enabled: Story = {
  args: { variants: "enabled" },
};

export const Disabled: Story = {
  args: { variants: "disabled" },
};

export const Vertical: Story = {
  args: { layout: "vertical" },
};

export const Horizontal: Story = {
  args: { layout: "horizontal" },
};
