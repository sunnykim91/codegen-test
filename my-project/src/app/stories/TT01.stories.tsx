import type { Meta, StoryObj } from "@storybook/react";
import TT01 from "../pages/TT01";

const meta = {
  title: "Pages/TT01",
  component: TT01,
  parameters: {
    layout: "fullscreen",
    viewports: {
      mobile: {
        name: "Mobile",
        styles: { width: "390px", height: "844px" },
        type: "mobile",
      },
    },
  },
} satisfies Meta<typeof TT01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
