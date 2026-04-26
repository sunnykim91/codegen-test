import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ReadMoreButton } from "../components/ReadMoreButton";

const meta: Meta<typeof ReadMoreButton> = {
  title: "UI/ReadMoreButton",
  component: ReadMoreButton,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description:
        "Optional: allows overriding the default '더보기' / '닫기' text.",
    },
    size: {
      control: "select",
      options: ["sm", "xs"],
      description: "Determines the size of the button.",
    },
    isExpand: {
      control: "boolean",
      description:
        "If true, the button indicates an expanded state, showing '닫기' and 'DirectionUpIcon'.",
    },
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"],
      description: "Visual state of the button.",
    },
    fullWidth: {
      control: "boolean",
      description:
        "If true, the button will take up the full width of its parent container.",
    },
    onClick: { action: "clicked" }, // Event handler for button clicks
  },
  args: {
    size: "sm",
    isExpand: false,
    state: "enabled",
    fullWidth: false,
  },
};

export default meta;

type Story = StoryObj<typeof ReadMoreButton>;

export const Default: Story = {
  args: {
    // Inherits default args from meta: size="sm", isExpand=false, state="enabled", fullWidth=false
  },
};

export const SizeXs: Story = {
  args: {
    size: "xs",
  },
};

export const StatePressed: Story = {
  args: {
    state: "pressed",
  },
};

export const StateDisabled: Story = {
  args: {
    state: "disabled",
  },
};

export const Expanded: Story = {
  args: {
    isExpand: true,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => (
    <div style={{ width: "300px", border: "1px solid #eee", padding: "10px" }}>
      <ReadMoreButton {...args} />
    </div>
  ),
};

export const CustomText: Story = {
  args: {
    children: "자세히 보기",
  },
};

export const CustomTextExpanded: Story = {
  args: {
    children: "접기",
    isExpand: true,
  },
};

export const XsExpandedDisabled: Story = {
  args: {
    size: "xs",
    isExpand: true,
    state: "disabled",
  },
};

export const SmPressedFullWidth: Story = {
  args: {
    size: "sm",
    state: "pressed",
    fullWidth: true,
  },
  render: (args) => (
    <div style={{ width: "300px", border: "1px solid #eee", padding: "10px" }}>
      <ReadMoreButton {...args} />
    </div>
  ),
};
