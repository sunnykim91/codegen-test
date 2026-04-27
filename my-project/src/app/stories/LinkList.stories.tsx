import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkList } from "../components/LinkList";

const meta: Meta<typeof LinkList> = {
  title: "UI/LinkList",
  component: LinkList,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"],
    },
    title: { control: "text" },
    description: { control: "text" },
    underDescription: { control: "text" },
    showStartItem: { control: "boolean" },
    showUnderDesc: { control: "boolean" },
    showEndItem: { control: "boolean" },
    showDesc: { control: "boolean" },
    fullWidth: { control: "boolean" }
  },
  args: {
    state: "enabled",
    showStartItem: true,
    showUnderDesc: true,
    showEndItem: true,
    showDesc: true,
    fullWidth: false
  },
};

export default meta;
type Story = StoryObj<typeof LinkList>;

export const Default: Story = {};

export const Enabled: Story = {
  args: { state: "enabled" },
};

export const Pressed: Story = {
  args: { state: "pressed" },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};
