import type { Meta, StoryObj } from "@storybook/react";
import { Container2 } from "../components/Container2";

const meta: Meta<typeof Container2> = {
  title: "UI/Container2",
  component: Container2,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Container2>;

export const Default: Story = {};

export const WithCustomStyle: Story = {
  args: {
    style: {
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
    },
  },
};

export const WithCustomClassName: Story = {
  args: {
    className: "custom-container",
  },
};

export const InteractiveDemo: Story = {
  args: {
    onBusinessLoanClick: () => alert("사업자대출 신청하기 클릭됨"),
    onTaxRefundClick: () => alert("종합소득세 환급받기 클릭됨"),
    onStartupKitClick: () => alert("예비사장님 KIT 클릭됨"),
  },
};
