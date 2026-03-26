import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BoxButton } from "../components/BoxButton";

const meta: Meta<typeof BoxButton> = {
  title: "UI/BoxButton",
  component: BoxButton,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "gray"],
    },
    variants: {
      control: "select",
      options: ["solid", "out-line"],
    },
    size: {
      control: "select",
      options: ["lg", "md", "sm", "xs"],
    },
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"],
    },
    tinted: {
      control: "boolean",
    },
    showStartIcon: {
      control: "boolean",
    },
    showEndIcon: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
    onClick: { action: "clicked" },
  },
  args: {
    color: "primary",
    variants: "solid",
    size: "lg",
    state: "enabled",
    tinted: false,
    showStartIcon: true,
    showEndIcon: true,
    children: "Button",
    onClick: action("clicked"),
  },
};

export default meta;
type Story = StoryObj<typeof BoxButton>;

export const Default: Story = {};

export const PrimarySolid: Story = {
  args: {
    color: "primary",
    variants: "solid",
  },
};

export const PrimaryOutline: Story = {
  args: {
    color: "primary",
    variants: "out-line",
  },
};

export const GraySolid: Story = {
  args: {
    color: "gray",
    variants: "solid",
  },
};

export const GrayOutline: Story = {
  args: {
    color: "gray",
    variants: "out-line",
  },
};

export const Tinted: Story = {
  args: {
    tinted: true,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
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

export const WithoutIcons: Story = {
  args: {
    showStartIcon: false,
    showEndIcon: false,
  },
};

export const WithStartIconOnly: Story = {
  args: {
    showStartIcon: true,
    showEndIcon: false,
    startIcon: <div>🚀</div>,
  },
};

export const WithEndIconOnly: Story = {
  args: {
    showStartIcon: false,
    showEndIcon: true,
    endIcon: <div>➡️</div>,
  },
};

export const WithBothIcons: Story = {
  args: {
    showStartIcon: true,
    showEndIcon: true,
    startIcon: <div>📄</div>,
    endIcon: <div>📎</div>,
    children: "Download File",
  },
};