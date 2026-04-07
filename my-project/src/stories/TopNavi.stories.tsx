import type { Meta, StoryObj } from "@storybook/react";
import { TopNavi } from "../components/TopNavi";

const meta: Meta<typeof TopNavi> = {
  title: "UI/TopNavi",
  component: TopNavi,
  tags: ["autodocs"],
  argTypes: {
    showCloseButton: { control: "boolean" },
    showHeading: { control: "boolean" },
    heading: { control: "text" },
    variants: {
      control: "select",
      options: ["main", "sub", "sub2"],
    }
  },
  args: {
    showCloseButton: true,
    showHeading: true,
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

export const Sub2: Story = {
  args: { variants: "sub2" },
};
