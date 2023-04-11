import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
      description: 'toggles disabled styles',
      table: {
        defaultValue: { summary: false },
      }
    },
  },
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/PIxONA27GqaVXJLGKJd6ak/GC-UI-Makeover?node-id=1074-21829&t=Bu4JhskvTUK1Jr6d-0',
  },
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'light',
};

type Story = StoryObj<typeof Button>;

export const DarkModeButton: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333' },
      ],
    },
  },
};

DarkModeButton.args = {
  variant: 'dark',
};
