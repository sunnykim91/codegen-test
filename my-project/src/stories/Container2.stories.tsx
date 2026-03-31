import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../components/Container";

const meta: Meta<typeof Container> = {
  title: "UI/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {

  },
  args: {

  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {};
