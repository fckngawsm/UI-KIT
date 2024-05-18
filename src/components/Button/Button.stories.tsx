import { Button } from "@/components/Button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const OutlinedButton = Template.bind({});

OutlinedButton.args = {
  variant: "outlined",
  children: "Outlined Button",
};

export const ShadedButton = Template.bind({});

ShadedButton.args = {
  variant: "shaded",
  children: "Shaded Button",
};

export const ButtonWithUpperCaseText = Template.bind({});

ButtonWithUpperCaseText.args = {
  textIsUpper: false,
  children: "Upper Case Text",
};
