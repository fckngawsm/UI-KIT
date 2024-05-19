import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../Button";
import { AppRoot } from "./AppRoot";

export default {
  title: "App Root",
  component: AppRoot,
} as Meta<typeof AppRoot>;

const Template: StoryFn<typeof AppRoot> = (args) => <AppRoot {...args} />;

export const AppRootTemplate = Template.bind({});

AppRootTemplate.args = {
  children: <Button>hello</Button>,
};
