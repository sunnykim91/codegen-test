import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BoxButton } from '../components/BoxButton';
import { Home, Search, Settings } from '../icons';

const meta: Meta<typeof BoxButton> = {
  title: 'UI/BoxButton',
  component: BoxButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'gray']
    },
    variants: {
      control: 'select',
      options: ['solid', 'out-line']
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs']
    },
    state: {
      control: 'select',
      options: ['enabled', 'pressed', 'disabled']
    },
    tinted: {
      control: 'boolean'
    },
    showStartIcon: {
      control: 'boolean'
    },
    showEndIcon: {
      control: 'boolean'
    },
    children: {
      control: 'text'
    }
  },
  args: {
    children: 'Button Text',
    color: 'primary',
    variants: 'solid',
    size: 'lg',
    state: 'enabled',
    tinted: false,
    showStartIcon: true,
    showEndIcon: true,
    onClick: action('clicked')
  }
};

export default meta;
type Story = StoryObj<typeof BoxButton>;

export const Default: Story = {};

export const PrimarySolid: Story = {
  args: {
    color: 'primary',
    variants: 'solid'
  }
};

export const PrimaryOutLine: Story = {
  args: {
    color: 'primary',
    variants: 'out-line'
  }
};

export const GraySolid: Story = {
  args: {
    color: 'gray',
    variants: 'solid'
  }
};

export const GrayOutLine: Story = {
  args: {
    color: 'gray',
    variants: 'out-line'
  }
};

export const Tinted: Story = {
  args: {
    tinted: true
  }
};

export const SizeLg: Story = {
  args: {
    size: 'lg'
  }
};

export const SizeMd: Story = {
  args: {
    size: 'md'
  }
};

export const SizeSm: Story = {
  args: {
    size: 'sm'
  }
};

export const SizeXs: Story = {
  args: {
    size: 'xs'
  }
};

export const Pressed: Story = {
  args: {
    state: 'pressed'
  }
};

export const Disabled: Story = {
  args: {
    state: 'disabled'
  }
};

export const WithStartIcon: Story = {
  args: {
    startIcon: <Home />,
    showEndIcon: false
  }
};

export const WithEndIcon: Story = {
  args: {
    endIcon: <Search />,
    showStartIcon: false
  }
};

export const WithBothIcons: Story = {
  args: {
    startIcon: <Home />,
    endIcon: <Settings />
  }
};

export const NoIcons: Story = {
  args: {
    showStartIcon: false,
    showEndIcon: false
  }
};