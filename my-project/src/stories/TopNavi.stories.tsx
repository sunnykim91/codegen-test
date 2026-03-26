import type { Meta, StoryObj } from '@storybook/react';
import { TopNavi } from '../components/TopNavi';

const meta: Meta<typeof TopNavi> = {
  title: 'UI/TopNavi',
  component: TopNavi,
  tags: ['autodocs'],
  argTypes: {
    variants: {
      control: 'select',
      options: ['main', 'sub', 'popup']
    },
    closeButton: {
      control: 'boolean'
    },
    centerHeading: {
      control: 'boolean'
    },
    children: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof TopNavi>;

export const Main: Story = {
  args: {
    variants: 'main',
    closeButton: true,
    centerHeading: true,
  }
};

export const Sub: Story = {
  args: {
    variants: 'sub',
    closeButton: true,
    centerHeading: true,
    children: 'Sub Navigation'
  }
};

export const SubWithBackButton: Story = {
  args: {
    variants: 'sub',
    closeButton: true,
    centerHeading: true,
    children: 'Back Navigation'
  }
};

export const Popup: Story = {
  args: {
    variants: 'popup',
    closeButton: true,
    centerHeading: true,
    children: 'Popup Title'
  }
};

export const PopupWithoutCloseButton: Story = {
  args: {
    variants: 'popup',
    closeButton: false,
    centerHeading: true,
    children: 'Popup Title'
  }
};

export const SubWithoutCenterHeading: Story = {
  args: {
    variants: 'sub',
    closeButton: true,
    centerHeading: false,
    children: 'Custom Heading'
  }
};

export const PopupWithoutCenterHeading: Story = {
  args: {
    variants: 'popup',
    closeButton: true,
    centerHeading: false,
    children: 'Custom Heading'
  }
};