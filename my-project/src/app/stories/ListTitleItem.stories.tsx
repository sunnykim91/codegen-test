import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ListTitleItem } from "../components/ListTitleItem";

const meta: Meta<typeof ListTitleItem> = {
  title: "UI/ListTitleItem",
  component: ListTitleItem,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    variants: {
      control: "select",
      options: ["enabled", "disabled"],
    },
    size: {
      control: "select",
      options: ["lg", "md", "sm", "xs"],
    },
    color: {
      control: "select",
      options: ["gray", "grayTinted", "primary"],
    },
    fontWeight: {
      control: "select",
      options: ["bold", "medium"],
    }
  },
  args: {
    variants: "enabled",
    size: "lg",
    color: "gray",
    fontWeight: "bold"
  },
};

export default meta;
type Story = StoryObj<typeof ListTitleItem>;

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

export const Sm: Story = {
  args: { size: "sm" },
};

export const Xs: Story = {
  args: { size: "xs" },
};

export const Gray: Story = {
  args: { color: "gray" },
};

export const GrayTinted: Story = {
  args: { color: "grayTinted" },
};

export const Primary: Story = {
  args: { color: "primary" },
};

export const Bold: Story = {
  args: { fontWeight: "bold" },
};

export const Medium: Story = {
  args: { fontWeight: "medium" },
};
