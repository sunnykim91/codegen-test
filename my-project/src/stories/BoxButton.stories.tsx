import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BoxButton } from '../components/BoxButton';

const meta: Meta<typeof BoxButton> = {
  title: 'UI/BoxButton',
  component: BoxButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'gray'],
    },
    variants: {
      control: 'select',
      options: ['solid', 'out-line'],
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
    },
    state: {
      control: 'select',
      options: ['enabled', 'pressed', 'disabled'],
    },
    tinted: {
      control: 'boolean',
    },
    showStartIcon: {
      control: 'boolean',
    },
    showEndIcon: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    color: 'primary',
    tinted: false,
    size: 'lg',
    state: 'enabled',
    variants: 'solid',
    showStartIcon: true,
    showEndIcon: true,
    label: '버튼 라벨',
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

export const PrimaryOutLine: Story = {
  args: {
    color: 'primary',
    variants: 'out-line',
    tinted: false,
  },
};

export const PrimaryOutLineTinted: Story = {
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

export const GrayOutLine: Story = {
  args: {
    color: 'gray',
    variants: 'out-line',
    tinted: false,
  },
};

export const GrayOutLineTinted: Story = {
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

export const SizeExtraSmall: Story = {
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

export const WithoutIcons: Story = {
  args: {
    showStartIcon: false,
    showEndIcon: false,
  },
};

export const StartIconOnly: Story = {
  args: {
    showStartIcon: true,
    showEndIcon: false,
  },
};

export const EndIconOnly: Story = {
  args: {
    showStartIcon: false,
    showEndIcon: true,
  },
};

export const CustomLabel: Story = {
  args: {
    label: '사용자 정의 버튼',
  },
};

export const WithChildren: Story = {
  args: {
    children: '자식 요소로 설정된 텍스트',
  },
};