import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TestFrame03 } from "../components/TestFrame03";

const meta: Meta<typeof TestFrame03> = {
  title: "UI/TestFrame03",
  component: TestFrame03,
  tags: ["autodocs"],
  argTypes: {
    onClose: { action: "onClose" },
    onServiceExperienceClick: { action: "onServiceExperienceClick" },
    onChipSelect: { action: "onChipSelect" },
    onProductClick: { action: "onProductClick" },
    onBranchFinderClick: { action: "onBranchFinderClick" },
    onFAQClick: { action: "onFAQClick" },
  },
  args: {
    onClose: action("onClose"),
    onServiceExperienceClick: action("onServiceExperienceClick"),
    onChipSelect: action("onChipSelect"),
    onProductClick: action("onProductClick"),
    onBranchFinderClick: action("onBranchFinderClick"),
    onFAQClick: action("onFAQClick"),
  },
};

export default meta;
type Story = StoryObj<typeof TestFrame03>;

export const Default: Story = {};

export const WithEventHandlers: Story = {
  args: {
    onClose: () => console.log("Close clicked"),
    onServiceExperienceClick: (serviceName) => console.log("Service clicked:", serviceName),
    onChipSelect: (chipLabel) => console.log("Chip selected:", chipLabel),
    onProductClick: (productName) => console.log("Product clicked:", productName),
    onBranchFinderClick: () => console.log("Branch finder clicked"),
    onFAQClick: () => console.log("FAQ clicked"),
  },
};

export const CustomStyle: Story = {
  args: {
    style: {
      backgroundColor: "#f5f5f5",
      border: "1px solid #ddd",
    },
    className: "custom-test-frame",
  },
};