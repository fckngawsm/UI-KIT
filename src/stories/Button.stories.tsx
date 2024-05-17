import { Button } from '@/components/Button';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Primaryyyy Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondaryyyy Button',
};
