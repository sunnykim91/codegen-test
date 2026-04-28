import type { Meta, StoryObj } from "@storybook/react";
import TT07 from "../pages/TT07";

const meta = {
  title: "Pages/TT07",
  component: TT07,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TT07>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
