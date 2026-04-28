import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "../components/IconButton";

const meta: Meta<typeof IconButton> = {
  title: "UI/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};
