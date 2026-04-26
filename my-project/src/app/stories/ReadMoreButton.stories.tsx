import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ReadMoreButton } from "../components/ReadMoreButton";

const meta = {
  title: "UI/ReadMoreButton",
  component: ReadMoreButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "xs"],
      description: "버튼의 크기를 결정합니다.",
    },
    isExpand: {
      control: "boolean",
      description: "버튼이 '닫기' 상태인지 '더보기' 상태인지 결정합니다.",
    },
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"],
      description: "버튼의 상호작용 상태를 결정합니다.",
    },
    fullWidth: {
      control: "boolean",
      description: "버튼이 부모 컨테이너의 전체 너비를 차지할지 결정합니다.",
    },
    onClick: { action: "clicked" },
  },
  args: {
    size: "sm",
    isExpand: false,
    state: "enabled",
    fullWidth: false,
  },
} satisfies Meta<typeof ReadMoreButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isExpand: false,
    state: "enabled",
  },
};

export const Expanded: Story = {
  args: {
    isExpand: true,
    state: "enabled",
  },
};

export const Pressed: Story = {
  args: {
    state: "pressed",
  },
};

export const Disabled: Story = {
  args: {
    state: "disabled",
  },
};

export const ExpandedPressed: Story = {
  args: {
    isExpand: true,
    state: "pressed",
  },
};

export const ExpandedDisabled: Story = {
  args: {
    isExpand: true,
    state: "disabled",
  },
};

export const SizeXs: Story = {
  args: {
    size: "xs",
    isExpand: false,
    state: "enabled",
  },
};

export const SizeXsExpanded: Story = {
  args: {
    size: "xs",
    isExpand: true,
    state: "enabled",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    isExpand: false,
    state: "enabled",
  },
};

export const FullWidthExpanded: Story = {
  args: {
    fullWidth: true,
    isExpand: true,
    state: "enabled",
  },
};

export const FullWidthDisabled: Story = {
  args: {
    fullWidth: true,
    isExpand: false,
    state: "disabled",
  },
};
