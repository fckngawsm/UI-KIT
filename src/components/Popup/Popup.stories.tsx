import { Meta, StoryFn } from "@storybook/react";
import { Popup } from "./index";

export default {
  title: "Popup",
  component: Popup,
} as Meta<typeof Popup>;

const Template: StoryFn<typeof Popup> = (args) => <Popup {...args} />;

export const ExamplePopup = Template.bind({});

ExamplePopup.args = {
  isOpen: true,
  size: "m",
  children: <h2>check</h2>,
};
