import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckBox } from "../components/CheckBox";
import { useState } from "react";

const meta: Meta<typeof CheckBox> = {
  title: "UI/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  argTypes: {
    showLabel: { control: "boolean" },
    state: {
      control: "select",
      options: ["enabled", "disabled"],
    },
    size: {
      control: "select",
      options: ["md", "lg"],
    },
    isSelected: { control: "boolean" },
    defaultIsSelected: { control: "boolean" }
  },
  args: {
    showLabel: true,
    state: "enabled",
    size: "lg",
    isSelected: false,
    defaultIsSelected: false
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {};

export const Enabled: Story = {
  args: { state: "enabled" },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};

export const Md: Story = {
  args: { size: "md" },
};

export const Lg: Story = {
  args: { size: "lg" },
};

export const IsSelected: Story = {
  args: { isSelected: true },
};

export const DefaultIsSelected: Story = {
  args: { defaultIsSelected: true },
};

export const Interactive: Story = {
  render: (args) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <CheckBox
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected((v) => !v)}
      />
    );
  },
};
