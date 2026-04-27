import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkListItem } from "../components/LinkListItem";

const meta: Meta<typeof LinkListItem> = {
  title: "UI/LinkListItem",
  component: LinkListItem,
  tags: ["autodocs"],
  argTypes: {
    showStartItem: { control: "boolean" },
    showUnderDesc: { control: "boolean" },
    showEndItem: { control: "boolean" },
    showDesc: { control: "boolean" },
    variants: {
      control: "select",
      options: ["enabled", "disabled"],
    },
    title: { control: "text" },
    description: { control: "text" },
    underDescription: { control: "text" },
    fullWidth: { control: "boolean" }
  },
  args: {
    showStartItem: true,
    showUnderDesc: true,
    showEndItem: true,
    showDesc: true,
    variants: "enabled",
    fullWidth: false
  },
};

export default meta;
type Story = StoryObj<typeof LinkListItem>;

export const Default: Story = {};

export const Enabled: Story = {
  args: { variants: "enabled" },
};

export const Disabled: Story = {
  args: { variants: "disabled" },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};
