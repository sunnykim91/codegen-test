import type { Meta, StoryObj } from "@storybook/react";
import { BottomStickyButton } from "../components/BottomStickyButton";

const meta: Meta<typeof BottomStickyButton> = {
  title: "UI/BottomStickyButton",
  component: BottomStickyButton,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["solo", "halfStrong", "halfSubtle", "mainSub"],
    },
    mainButtonLabel: { control: "text" },
    mainButtonDisabled: { control: "boolean" },
    subButtonLabel: { control: "text" },
    subButtonDisabled: { control: "boolean" }
  },
  args: {
    children: "BottomStickyButton",
    variants: "solo",
    mainButtonDisabled: false,
    subButtonDisabled: false
  },
};

export default meta;
type Story = StoryObj<typeof BottomStickyButton>;

export const Default: Story = {};

export const Solo: Story = {
  args: { variants: "solo" },
};

export const HalfStrong: Story = {
  args: { variants: "halfStrong" },
};

export const HalfSubtle: Story = {
  args: { variants: "halfSubtle" },
};

export const MainSub: Story = {
  args: { variants: "mainSub" },
};

export const MainButtonDisabled: Story = {
  args: { mainButtonDisabled: true },
};

export const SubButtonDisabled: Story = {
  args: { subButtonDisabled: true },
};
