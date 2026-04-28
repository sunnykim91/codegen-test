import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "../components/BottomSheet";
import { useState } from "react";

const meta: Meta<typeof BottomSheet> = {
  title: "UI/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
  argTypes: {
    showHeading: { control: "boolean" },
    isFullHeight: { control: "boolean" },
    hauButton: { control: "boolean" },
    mainButtonLabel: { control: "text" },
    mainButtonDisabled: { control: "boolean" }
  },
  args: {
    children: "BottomSheet",
    showHeading: true,
    isFullHeight: false,
    hauButton: false,
    mainButtonDisabled: false
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {};

export const IsFullHeight: Story = {
  args: { isFullHeight: true },
};

export const HauButton: Story = {
  args: { hauButton: true },
};

export const MainButtonDisabled: Story = {
  args: { mainButtonDisabled: true },
};

export const Interactive: Story = {
  render: (args) => {
    const [isFullHeight, setIsFullHeight] = useState(false);
    return (
      <BottomSheet
        {...args}
        isFullHeight={isFullHeight}
        onClick={() => setIsFullHeight((v) => !v)}
      />
    );
  },
};
