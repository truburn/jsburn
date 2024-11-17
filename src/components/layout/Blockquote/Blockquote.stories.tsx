import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote as BlockquoteComponent } from "@layout/Blockquote";

const meta = {
  component: BlockquoteComponent,
} satisfies Meta<typeof BlockquoteComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Blockquote: Story = {};
