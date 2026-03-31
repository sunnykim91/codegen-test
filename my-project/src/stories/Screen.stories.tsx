import type { Meta, StoryObj } from '@storybook/react';
import { Screen } from '../components/Screen';

const meta: Meta<typeof Screen> = {
  title: 'UI/Screen',
  component: Screen,
  tags: ['autodocs'],
  argTypes: {
    variants: {
      control: 'select',
      options: ['sub', 'main'],
    },
    children: {
      control: 'text',
    },
  },
  args: {
    variants: 'main',
  },
};

export default meta;
type Story = StoryObj<typeof Screen>;

export const Main: Story = {
  args: {
    variants: 'main',
    children: <div style={{ padding: '20px' }}>메인 화면 콘텐츠</div>,
  },
};

export const Sub: Story = {
  args: {
    variants: 'sub',
    children: <div style={{ padding: '20px' }}>서브 화면 콘텐츠</div>,
  },
};

export const WithContent: Story = {
  args: {
    variants: 'main',
    children: (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2>화면 제목</h2>
        <p>화면 내용이 들어갈 자리입니다.</p>
        <button>액션 버튼</button>
      </div>
    ),
  },
};

export const SubWithContent: Story = {
  args: {
    variants: 'sub',
    children: (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2>서브 화면 제목</h2>
        <p>서브 화면 내용이 들어갈 자리입니다.</p>
        <button>액션 버튼</button>
      </div>
    ),
  },
};