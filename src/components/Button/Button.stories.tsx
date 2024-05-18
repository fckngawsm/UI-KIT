import { Button } from "@/components/Button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ExampleButton = Template.bind({});

ExampleButton.args = {
  variant: "elevated",
  children: "My button",
};

export const ExampleDisabledButton = Template.bind({});

ExampleDisabledButton.args = {
  disabled: true,
  variant: "elevated",
  children: "disabled button",
};
