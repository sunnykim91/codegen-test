import type { Meta, StoryObj } from "@storybook/react";
import { UDS001InputScreen } from "../components/UDS-001-input_screen";

const meta: Meta<typeof UDS001InputScreen> = {
  title: "UI/UDS001InputScreen",
  component: UDS001InputScreen,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    buttonLabel: { control: "text" },
  },
  args: {
    children: "UDS001InputScreen",
  },
};

export default meta;
type Story = StoryObj<typeof UDS001InputScreen>;

export const Default: Story = {};
