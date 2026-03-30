import type { Meta, StoryObj } from '@storybook/react';
import { TopNavi } from '../components/TopNavi';

const meta: Meta<typeof TopNavi> = {
  title: 'UI/TopNavi',
  component: TopNavi,
  tags: ['autodocs'],
  argTypes: {
    variants: {
      control: 'select',
      options: ['main', 'sub'],
    },
    showCloseButton: {
      control: 'boolean',
    },
    showHeading: {
      control: 'boolean',
    },
    heading: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    variants: 'main',
    showCloseButton: true,
    showHeading: true,
    heading: 'heading',
  },
};

export const Sub: Story = {
  args: {
    variants: 'sub',
    showCloseButton: true,
    showHeading: true,
    heading: 'heading',
  },
};

export const SubWithoutCloseButton: Story = {
  args: {
    variants: 'sub',
    showCloseButton: false,
    showHeading: true,
    heading: 'heading',
  },
};

export const SubWithoutHeading: Story = {
  args: {
    variants: 'sub',
    showCloseButton: true,
    showHeading: false,
    heading: 'heading',
  },
};

export const SubMinimal: Story = {
  args: {
    variants: 'sub',
    showCloseButton: false,
    showHeading: false,
    heading: 'heading',
  },
};

export const SubCustomHeading: Story = {
  args: {
    variants: 'sub',
    showCloseButton: true,
    showHeading: true,
    heading: '페이지 제목',
  },
};