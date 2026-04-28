import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "../components/ButtonGroup";

const meta: Meta<typeof ButtonGroup> = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["verticalText", "sinlge", "subGray", "halfTinted", "halfOutlined"],
    }
  },
  args: {
    variants: "verticalText"
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {};

export const VerticalText: Story = {
  args: { variants: "verticalText" },
};

export const Sinlge: Story = {
  args: { variants: "sinlge" },
};

export const SubGray: Story = {
  args: { variants: "subGray" },
};

export const HalfTinted: Story = {
  args: { variants: "halfTinted" },
};

export const HalfOutlined: Story = {
  args: { variants: "halfOutlined" },
};
