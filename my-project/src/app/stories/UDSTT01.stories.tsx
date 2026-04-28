import type { Meta, StoryObj } from "@storybook/react";
import UDSTT01 from "../pages/UDSTT01";

const meta = {
  title: "Pages/UDSTT01",
  component: UDSTT01,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof UDSTT01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
