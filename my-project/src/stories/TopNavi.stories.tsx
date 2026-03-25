import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TopNavi } from "../components/TopNavi";

const meta: Meta<typeof TopNavi> = {
  title: "UI/TopNavi",
  component: TopNavi,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: "select",
      options: ["main", "sub", "popup"]
    },
    closeButton: {
      control: "boolean"
    },
    centerHeading: {
      control: "boolean"
    },
    title: {
      control: "text"
    }
  },
  args: {
    variants: "main",
    closeButton: true,
    centerHeading: true,
    title: "LOGO"
  }
};

export default meta;
type Story = StoryObj<typeof TopNavi>;

export const Main: Story = {
  args: {
    variants: "main"
  }
};

export const Sub: Story = {
  args: {
    variants: "sub",
    title: "heading"
  }
};

export const SubWithBackButton: Story = {
  args: {
    variants: "sub",
    title: "페이지 제목"
  }
};

export const Popup: Story = {
  args: {
    variants: "popup",
    title: "팝업 제목"
  }
};

export const PopupWithCloseButton: Story = {
  args: {
    variants: "popup",
    title: "팝업 제목",
    closeButton: true
  }
};

export const PopupWithoutCloseButton: Story = {
  args: {
    variants: "popup",
    title: "팝업 제목",
    closeButton: false
  }
};

export const CustomTitle: Story = {
  args: {
    variants: "main",
    title: "커스텀 로고"
  }
};