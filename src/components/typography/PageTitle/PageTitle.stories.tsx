import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "@typography/PageTitle";

const meta = {
  component: PageTitle,
  args: {
    title: "Page Title"
  }
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoSubtitle: Story = {};

export const WithSubtitle: Story = {
  args: {
    subtitle: "Subtitle Text"
  }
};
