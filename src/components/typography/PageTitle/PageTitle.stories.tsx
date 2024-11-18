import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "@typography/PageTitle";

const meta = {
  component: PageTitle
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
