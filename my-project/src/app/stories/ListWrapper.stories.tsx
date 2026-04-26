import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ListWrapper } from "../components/ListWrapper";

const meta: Meta<typeof ListWrapper> = {
  title: "UI/ListWrapper",
  component: ListWrapper,
  tags: ["autodocs"],
  argTypes: {
    showBottomDivider: { control: "boolean" },
    disabledGutters: { control: "boolean" },
    dense: { control: "boolean" }
  },
  args: {
    showBottomDivider: true,
    disabledGutters: false,
    dense: false
  },
};

export default meta;
type Story = StoryObj<typeof ListWrapper>;

export const Default: Story = {};

export const DisabledGutters: Story = {
  args: { disabledGutters: true },
};

export const Dense: Story = {
  args: { dense: true },
};
