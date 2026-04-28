import type { Meta, StoryObj } from "@storybook/react-vite";
import { FieldLabelItem } from "../components/FieldLabelItem";

const meta: Meta<typeof FieldLabelItem> = {
  title: "UI/FieldLabelItem",
  component: FieldLabelItem,
  tags: ["autodocs"],
  argTypes: {
    showIcon: { control: "boolean" },
    isRequired: { control: "boolean" },
    label: { control: "text" },
    state: {
      control: "select",
      options: ["enabled", "disabled"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
  args: {
    showIcon: true,
    isRequired: true,
    state: "enabled",
    size: "sm",
  },
};

export default meta;
type Story = StoryObj<typeof FieldLabelItem>;

export const Default: Story = {};

export const Enabled: Story = {
  args: { state: "enabled" },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};

export const Sm: Story = {
  args: { size: "sm" },
};

export const Md: Story = {
  args: { size: "md" },
};
