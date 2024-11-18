import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@navigation/Button";

const meta = {
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
