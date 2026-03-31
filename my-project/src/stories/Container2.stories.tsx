import type { Meta, StoryObj } from "@storybook/react";
import { Container2 } from "../components/Container2";

const meta: Meta<typeof Container2> = {
  title: "UI/Container2",
  component: Container2,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Container2>;

export const Default: Story = {};
