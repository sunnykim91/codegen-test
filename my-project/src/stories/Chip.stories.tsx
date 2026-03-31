import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../components/Chip';
import { Icon } from '../components/Icon';

const meta: Meta<typeof Chip> = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    variants: { control: 'select', options: ['filled', 'outline'] },
    state: { control: 'select', options: ['enabled', 'pressed', 'readonly', 'disabled'] },
    isSelected: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    showStartIcon: { control: 'boolean' },
    showEndIcon: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: '라벨',
    variants: 'filled',
    state: 'enabled',
    isSelected: false,
    fullWidth: false,
    showStartIcon: true,
    showEndIcon: true,
  },
};

export const FilledEnabled: Story = {
  args: {
    children: '라벨',
    variants: 'filled',
    state: 'enabled',
    isSelected: false,
    showStartIcon: true,
    showEndIcon: true,
  },
};

export const FilledSelected: Story = {
  args: {
    children: '라벨',
    variants: 'filled',
    state: 'enabled',
    isSelected: true,
    showStartIcon: true,
    showEndIcon: true,
  },
};

export const FilledPressed: Story = {
  args: {
    children: '라벨',
    variants: 'filled',
    state: 'pressed',
    isSelected: false,
    showStartIcon: true,
    showEndIcon: true,
  },
};

export const FilledDisabled: Story = {
  args: {
    children: '라벨',
    variants: 'filled',
    state: 'disabled',
    isSelected: false,
    showStartIcon: true,
    showEndIcon: true,
  },
};

export const OutlineEnabled: Story = {
  args: {
    children: '라벨',
    variants: 'outline',
    state: 'enabled',
    isSelected: false,
    showStartIcon: true,
    showEndIcon: true,
  },
};

export const OutlineSelected: Story = {
  args: {
    children: '라벨',
    variants: 'outline',
    state: 'enabled',
    isSelected: true,
    showStartIcon: true,
    showEndIcon: true,
  },
};

export const WithCustomIcons: Story = {
  args: {
    children: '커스텀 아이콘',
    variants: 'filled',
    state: 'enabled',
    isSelected: false,
    showStartIcon: true,
    showEndIcon: true,
    startIcon: <Icon name="star" />,
    endIcon: <Icon name="close" />,
  },
};

export const FullWidth: Story = {
  args: {
    children: '전체 너비',
    variants: 'filled',
    state: 'enabled',
    isSelected: false,
    fullWidth: true,
    showStartIcon: true,
    showEndIcon: true,
  },
};

export const NoIcons: Story = {
  args: {
    children: '아이콘 없음',
    variants: 'filled',
    state: 'enabled',
    isSelected: false,
    showStartIcon: false,
    showEndIcon: false,
  },
};