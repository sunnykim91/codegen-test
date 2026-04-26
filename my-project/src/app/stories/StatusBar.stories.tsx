import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StatusBar } from "../components/StatusBar";

const meta: Meta<typeof StatusBar> = {
  title: "UI/StatusBar",
  component: StatusBar,
  tags: ["autodocs"],
  argTypes: {
    platform: {
      control: "select",
      options: ["samsung", "ios"],
    }
  },
  args: {
    platform: "ios"
  },
};

export default meta;
type Story = StoryObj<typeof StatusBar>;

export const Default: Story = {};

export const Samsung: Story = {
  args: { platform: "samsung" },
};

export const Ios: Story = {
  args: { platform: "ios" },
};
