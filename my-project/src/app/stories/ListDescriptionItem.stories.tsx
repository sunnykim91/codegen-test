import type { Meta, StoryObj } from "@storybook/react";
import { ListDescriptionItem } from "../components/ListDescriptionItem";

const meta = {
  title: "UI/ListDescriptionItem",
  component: ListDescriptionItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Text content for the list description item.",
    },
    variants: {
      control: "select",
      options: ["enabled", "disabled"],
      description: "Visual state of the item (enabled or disabled).",
    },
    size: {
      control: "select",
      options: ["md", "sm", "xs"],
      description: "Size of the item, affecting its height and font size.",
    },
    color: {
      control: "select",
      options: ["gray", "grayTinted", "primary"],
      description: "Color palette for the item's text.",
    },
    fontWeight: {
      control: "select",
      options: ["bold", "medium"],
      description: "Font weight of the item's text.",
    },
    onClick: {
      action: "clicked",
      description: "Event handler for click events.",
    },
  },
  args: {
    title: "#description",
    variants: "enabled",
    size: "md",
    color: "gray",
    fontWeight: "bold",
  },
} satisfies Meta<typeof ListDescriptionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Description Item",
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Item",
    variants: "disabled",
  },
};

export const SmallSize: Story = {
  args: {
    title: "Small Size Item (15px font)",
    size: "sm",
  },
};

export const ExtraSmallSize: Story = {
  args: {
    title: "Extra Small Size Item (14px font)",
    size: "xs",
  },
};

export const GrayTintedColor: Story = {
  args: {
    title: "Gray Tinted Color Item",
    color: "grayTinted",
  },
};

export const PrimaryColor: Story = {
  args: {
    title: "Primary Color Item",
    color: "primary",
  },
};

export const MediumFontWeight: Story = {
  args: {
    title: "Medium Font Weight Item",
    fontWeight: "medium",
  },
};

export const AllVariants: Story = {
  args: {
    title: "Disabled, XS, Primary, Medium",
    variants: "disabled",
    size: "xs",
    color: "primary",
    fontWeight: "medium",
  },
};