import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TestFrame03 } from '../components/TestFrame03';

const meta: Meta<typeof TestFrame03> = {
  title: 'UI/TestFrame03',
  component: TestFrame03,
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'closed' },
    onBack: { action: 'back' },
    onServiceExperience1: { action: 'serviceExperience1' },
    onServiceExperience2: { action: 'serviceExperience2' },
    onServiceExperience3: { action: 'serviceExperience3' },
    onChipSelect: { action: 'chipSelect' },
    selectedChip: { control: 'number' },
    onBranchFind: { action: 'branchFind' },
    onFAQ: { action: 'FAQ' },
    onExpandChips: { action: 'expandChips' },
    isChipsExpanded: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TestFrame03>;

export const Default: Story = {
  args: {
    selectedChip: 0,
    isChipsExpanded: false,
  },
};

export const ChipsExpanded: Story = {
  args: {
    selectedChip: 0,
    isChipsExpanded: true,
  },
};

export const SelectedDeposit: Story = {
  args: {
    selectedChip: 1,
    isChipsExpanded: false,
  },
};

export const SelectedSavings: Story = {
  args: {
    selectedChip: 2,
    isChipsExpanded: false,
  },
};

export const SelectedLoan: Story = {
  args: {
    selectedChip: 3,
    isChipsExpanded: false,
  },
};

export const WithInteractions: Story = {
  args: {
    selectedChip: 0,
    isChipsExpanded: false,
    onClose: action('close clicked'),
    onBack: action('back clicked'),
    onServiceExperience1: action('service experience 1 clicked'),
    onServiceExperience2: action('service experience 2 clicked'),
    onServiceExperience3: action('service experience 3 clicked'),
    onChipSelect: action('chip selected'),
    onBranchFind: action('branch find clicked'),
    onFAQ: action('FAQ clicked'),
    onExpandChips: action('expand chips clicked'),
  },
};