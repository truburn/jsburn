import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@navigation/Link";

const meta = {
  component: Link
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
