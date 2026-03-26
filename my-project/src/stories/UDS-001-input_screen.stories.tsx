import type { Meta, StoryObj } from "@storybook/react";
import { UDS001InputScreen } from "../components/UDS001InputScreen";

const meta: Meta<typeof UDS001InputScreen> = {
  title: "UI/UDS001InputScreen",
  component: UDS001InputScreen,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    buttonLabel: {
      control: "text",
    },
    onButtonClick: {
      action: "buttonClicked",
    },
    onBack: {
      action: "backClicked",
    },
    children: {
      control: false,
    },
    className: {
      control: "text",
    },
    style: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "#title",
    description: "#description",
    buttonLabel: "버튼 라벨",
  },
};

export const WithCustomContent: Story = {
  args: {
    title: "회원가입",
    description: "아래 정보를 입력해주세요",
    buttonLabel: "다음",
    children: (
      <div style={{ padding: "0 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input 
            type="text" 
            placeholder="이름을 입력하세요"
            style={{
              padding: "12px 16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px"
            }}
          />
          <input 
            type="email" 
            placeholder="이메일을 입력하세요"
            style={{
              padding: "12px 16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px"
            }}
          />
        </div>
      </div>
    ),
  },
};

export const LoginForm: Story = {
  args: {
    title: "로그인",
    description: "계정 정보를 입력해주세요",
    buttonLabel: "로그인",
    children: (
      <div style={{ padding: "0 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input 
            type="email" 
            placeholder="이메일"
            style={{
              padding: "12px 16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px"
            }}
          />
          <input 
            type="password" 
            placeholder="비밀번호"
            style={{
              padding: "12px 16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px"
            }}
          />
        </div>
      </div>
    ),
  },
};

export const EmptyForm: Story = {
  args: {
    title: "설정 완료",
    description: "모든 설정이 완료되었습니다",
    buttonLabel: "확인",
  },
};