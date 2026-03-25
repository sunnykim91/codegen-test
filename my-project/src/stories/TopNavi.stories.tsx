import type { Meta, StoryObj } from "@storybook/react";
import { TopNavi } from "../components/TopNavi";

const meta: Meta<typeof TopNavi> = {
  title: "UI/TopNavi",
  component: TopNavi,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["main", "sub", "popup"],
    },
    heading: { control: "text" }
  },
  args: {
    variants: "main"
  },
};

export default meta;
type Story = StoryObj<typeof TopNavi>;

export const Default: Story = {};

export const Main: Story = {
  args: { variants: "main" },
};

export const Sub: Story = {
  args: { variants: "sub" },
};

export const Popup: Story = {
  args: { variants: "popup" },
};
