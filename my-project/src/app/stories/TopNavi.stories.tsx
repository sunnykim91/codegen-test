import type { Meta, StoryObj } from "@storybook/react";
import { TopNavi } from "../components/TopNavi";

const meta: Meta<typeof TopNavi> = {
  title: "UI/TopNavi",
  component: TopNavi,
  tags: ["autodocs"],
  argTypes: {
    showMenuButton: { control: "boolean" },
    showHomeButton: { control: "boolean" },
    showCancelButton: { control: "boolean" },
    showCloseButton: { control: "boolean" },
    showHeading: { control: "boolean" },
    heading: { control: "text" },
    variants: {
      control: "select",
      options: ["mainPage", "subPage", "dialog"],
    }
  },
  args: {
    showMenuButton: true,
    showHomeButton: true,
    showCancelButton: true,
    showCloseButton: true,
    showHeading: true,
    variants: "mainPage"
  },
};

export default meta;
type Story = StoryObj<typeof TopNavi>;

export const Default: Story = {};

export const MainPage: Story = {
  args: { variants: "mainPage" },
};

export const SubPage: Story = {
  args: { variants: "subPage" },
};

export const Dialog: Story = {
  args: { variants: "dialog" },
};
