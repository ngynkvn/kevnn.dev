import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "../containers/nav";
import { withRouter } from "storybook-addon-react-router-v6";
import "../index.css";

const meta = {
  title: "Example/Page",
  component: Nav,
  decorators: [withRouter],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn: Story = {};
