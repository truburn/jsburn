import type { Meta, StoryObj } from "@storybook/react";
import { Code as CodeComponent } from "@layout/Code";

const meta = {
  component: CodeComponent,
} satisfies Meta<typeof CodeComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Code: Story = {};
