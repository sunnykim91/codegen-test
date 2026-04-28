import type { Meta, StoryObj } from "@storybook/react";
import TT01 from "../pages/TT01";

const meta = {
  title: "Pages/TT01",
  component: TT01,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TT01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
