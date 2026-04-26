import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ReadMoreButton } from "../components/ReadMoreButton";

const meta = {
  title: "UI/ReadMoreButton",
  component: ReadMoreButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "xs"],
      description: "버튼의 크기를 결정합니다.",
    },
    isExpand: {
      control: "boolean",
      description: "버튼의 확장 상태를 결정합니다. (텍스트와 아이콘 변경)",
    },
    state: {
      control: "select",
      options: ["enabled", "pressed", "disabled"],
      description: "버튼의 상태를 결정합니다.",
    },
    fullWidth: {
      control: "boolean",
      description: "버튼이 부모 컨테이너의 전체 너비를 차지할지 결정합니다.",
    },
    children: {
      control: "text",
      description: "버튼 내부에 표시될 텍스트입니다. 설정하지 않으면 '더보기'/'닫기'가 기본값입니다.",
    },
    onClick: {
      action: "clicked",
      description: "버튼 클릭 시 발생하는 이벤트 핸들러입니다.",
    },
  },
  args: {
    size: "sm",
    isExpand: false,
    state: "enabled",
    fullWidth: false,
    children: undefined, // Let component handle default "더보기"/"닫기"
  },
} satisfies Meta<typeof ReadMoreButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "더보기", // Explicitly set for story clarity
  },
};

export const Expanded: Story = {
  args: {
    isExpand: true,
    children: "닫기", // Explicitly set for story clarity
  },
};

export const Pressed: Story = {
  args: {
    state: "pressed",
    children: "더보기",
  },
};

export const Disabled: Story = {
  args: {
    state: "disabled",
    children: "더보기",
  },
};

export const ExpandedPressed: Story = {
  args: {
    isExpand: true,
    state: "pressed",
    children: "닫기",
  },
};

export const ExpandedDisabled: Story = {
  args: {
    isExpand: true,
    state: "disabled",
    children: "닫기",
  },
};

export const SizeXs: Story = {
  args: {
    size: "xs",
    children: "더보기",
  },
};

export const SizeXsExpanded: Story = {
  args: {
    size: "xs",
    isExpand: true,
    children: "닫기",
  },
};

export const SizeXsPressed: Story = {
  args: {
    size: "xs",
    state: "pressed",
    children: "더보기",
  },
};

export const SizeXsDisabled: Story = {
  args: {
    size: "xs",
    state: "disabled",
    children: "더보기",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "더보기",
  },
};

export const FullWidthExpanded: Story = {
  args: {
    fullWidth: true,
    isExpand: true,
    children: "닫기",
  },
};

export const FullWidthDisabled: Story = {
  args: {
    fullWidth: true,
    state: "disabled",
    children: "더보기",
  },
};

export const CustomText: Story = {
  args: {
    children: "자세히 보기",
  },
};

export const CustomTextExpanded: Story = {
  args: {
    isExpand: true,
    children: "간략히 보기",
  },
};
