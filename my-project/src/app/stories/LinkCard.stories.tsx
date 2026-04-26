import type { Meta, StoryObj } from "@storybook/react";
import { LinkCard, LinkCardState, LinkCardVariants } from "../components/LinkCard";
import { ComponentBlank } from "../components/ComponentBlank"; // Assuming ComponentBlank is also available for default instanceSwap

const meta = {
  title: "UI/LinkCard",
  component: LinkCard,
  tags: ["autodocs"],
  argTypes: {
    instanceSwap: {
      control: "object", // ReactNode can be an object
      description: "Custom content to display inside the card. Defaults to ComponentBlank.",
    },
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"] satisfies LinkCardState[],
    },
    variants: {
      control: "select",
      options: ["shadow", "outlined", "filled"] satisfies LinkCardVariants[],
    },
    fullWidth: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    state: "enabled",
    variants: "outlined",
    fullWidth: false,
    instanceSwap: <ComponentBlank variants="instanceSwap" />, // Default instance from component
  },
} satisfies Meta<typeof LinkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    instanceSwap: <div>Default Link Card Content</div>,
  },
};

export const OutlinedEnabled: Story = {
  args: {
    state: "enabled",
    variants: "outlined",
    instanceSwap: <div>Outlined Enabled Card</div>,
  },
};

export const OutlinedPressed: Story = {
  args: {
    state: "pressed",
    variants: "outlined",
    instanceSwap: <div>Outlined Pressed Card</div>,
  },
};

export const OutlinedDisabled: Story = {
  args: {
    state: "disabled",
    variants: "outlined",
    instanceSwap: <div>Outlined Disabled Card</div>,
  },
};

export const ShadowEnabled: Story = {
  args: {
    state: "enabled",
    variants: "shadow",
    instanceSwap: <div>Shadow Enabled Card</div>,
  },
};

export const ShadowPressed: Story = {
  args: {
    state: "pressed",
    variants: "shadow",
    instanceSwap: <div>Shadow Pressed Card</div>,
  },
};

export const ShadowDisabled: Story = {
  args: {
    state: "disabled",
    variants: "shadow",
    instanceSwap: <div>Shadow Disabled Card</div>,
  },
};

export const FilledEnabled: Story = {
  args: {
    state: "enabled",
    variants: "filled",
    instanceSwap: <div>Filled Enabled Card</div>,
  },
};

export const FilledPressed: Story = {
  args: {
    state: "pressed",
    variants: "filled",
    instanceSwap: <div>Filled Pressed Card</div>,
  },
};

export const FilledDisabled: Story = {
  args: {
    state: "disabled",
    variants: "filled",
    instanceSwap: <div>Filled Disabled Card</div>,
  },
};

export const FullWidthOutlined: Story = {
  args: {
    fullWidth: true,
    state: "enabled",
    variants: "outlined",
    instanceSwap: <div>Full Width Outlined Card</div>,
  },
};

export const FullWidthShadow: Story = {
  args: {
    fullWidth: true,
    state: "enabled",
    variants: "shadow",
    instanceSwap: <div>Full Width Shadow Card</div>,
  },
};

export const FullWidthFilled: Story = {
  args: {
    fullWidth: true,
    state: "enabled",
    variants: "filled",
    instanceSwap: <div>Full Width Filled Card</div>,
  },
};

export const WithCustomContent: Story = {
  args: {
    instanceSwap: (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src="https://via.placeholder.com/32" alt="icon" style={{ borderRadius: "50%" }} />
        <span style={{ fontWeight: "bold" }}>Custom Content Example</span>
      </div>
    ),
    state: "enabled",
    variants: "outlined",
  },
};