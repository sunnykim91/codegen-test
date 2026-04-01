import type { Meta, StoryObj } from "@storybook/react";
import { TestFrame03 } from "../components/TestFrame03";

const meta: Meta<typeof TestFrame03> = {
  title: "UI/TestFrame03",
  component: TestFrame03,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof TestFrame03>;

export const Default: Story = {};
