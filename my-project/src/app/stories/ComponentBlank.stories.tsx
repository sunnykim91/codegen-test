import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentBlank } from "../components/ComponentBlank";

const meta: Meta<typeof ComponentBlank> = {
  title: "UI/ComponentBlank",
  component: ComponentBlank,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["customSlot", "instanceSwap"],
    }
  },
  args: {
    children: "ComponentBlank",
    variants: "customSlot"
  },
};

export default meta;
type Story = StoryObj<typeof ComponentBlank>;

export const Default: Story = {};

export const CustomSlot: Story = {
  args: { variants: "customSlot" },
};

export const InstanceSwap: Story = {
  args: { variants: "instanceSwap" },
};
