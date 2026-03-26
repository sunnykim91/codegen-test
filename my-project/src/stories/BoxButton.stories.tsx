import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BoxButton } from '../components/BoxButton';

const meta: Meta<typeof BoxButton> = {
  title: 'UI/BoxButton',
  component: BoxButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    color: { control: 'select', options: ['primary', 'gray'] },
    tinted: { control: 'boolean' },
    size: { control: 'select', options: ['lg', 'md', 'sm', 'xs'] },
    state: { control: 'select', options: ['enabled', 'pressed', 'disabled'] },
    variants: { control: 'select', options: ['solid', 'out-line'] },
    showStartIcon: { control: 'boolean' },
    showEndIcon: { control: 'boolean' },
    startIcon: { control: 'text' },
    endIcon: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button',
    color: 'primary',
    tinted: false,
    size: 'lg',
    state: 'enabled',
    variants: 'solid',
    showStartIcon: true,
    showEndIcon: true,
    onClick: action('clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof BoxButton>;

export const Default: Story = {};

export const PrimarySolid: Story = {
  args: {
    color: 'primary',
    variants: 'solid',
    tinted: false,
  },
};

export const PrimarySolidTinted: Story = {
  args: {
    color: 'primary',
    variants: 'solid',
    tinted: true,
  },
};

export const PrimaryOutline: Story = {
  args: {
    color: 'primary',
    variants: 'out-line',
    tinted: false,
  },
};

export const PrimaryOutlineTinted: Story = {
  args: {
    color: 'primary',
    variants: 'out-line',
    tinted: true,
  },
};

export const GraySolid: Story = {
  args: {
    color: 'gray',
    variants: 'solid',
    tinted: false,
  },
};

export const GraySolidTinted: Story = {
  args: {
    color: 'gray',
    variants: 'solid',
    tinted: true,
  },
};

export const GrayOutline: Story = {
  args: {
    color: 'gray',
    variants: 'out-line',
    tinted: false,
  },
};

export const GrayOutlineTinted: Story = {
  args: {
    color: 'gray',
    variants: 'out-line',
    tinted: true,
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'lg',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'md',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'sm',
  },
};

export const SizeXSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Pressed: Story = {
  args: {
    state: 'pressed',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};

export const WithIcons: Story = {
  args: {
    children: 'Button with Icons',
    showStartIcon: true,
    showEndIcon: true,
    startIcon: '⭐',
    endIcon: '→',
  },
};

export const WithoutIcons: Story = {
  args: {
    children: 'Button without Icons',
    showStartIcon: false,
    showEndIcon: false,
  },
};