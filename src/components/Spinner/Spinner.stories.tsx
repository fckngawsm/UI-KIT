import { Meta, StoryFn } from "@storybook/react";
import { Spinner } from "../Spinner";

export default {
  title: "Spinner",
  component: Spinner,
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />;

export const ExampleSpinner = Template.bind({});

ExampleSpinner.args = {
  animationTime: 2,
  size: "l",
};
