import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Icon } from '../components/Icon';

// Mock SVG icon for demonstration
const MockIcon = ({ size, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: [14, 16, 18, 20, 22, 24, 28, 32, 40],
    },
    color: {
      control: 'text',
    },
    children: {
      control: false,
    },
    onClick: { action: 'clicked' },
  },
  args: {
    size: 16,
    color: 'currentColor',
    onClick: action('clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    children: <MockIcon />,
  },
};

export const Size14: Story = {
  args: {
    size: 14,
    children: <MockIcon />,
  },
};

export const Size24: Story = {
  args: {
    size: 24,
    children: <MockIcon />,
  },
};

export const Size32: Story = {
  args: {
    size: 32,
    children: <MockIcon />,
  },
};

export const Size40: Story = {
  args: {
    size: 40,
    children: <MockIcon />,
  },
};

export const CustomColor: Story = {
  args: {
    size: 24,
    color: '#ff6b6b',
    children: <MockIcon />,
  },
};

export const WithoutChildren: Story = {
  args: {
    size: 24,
  },
};

export const Clickable: Story = {
  args: {
    size: 24,
    children: <MockIcon />,
    style: { cursor: 'pointer' },
  },
};