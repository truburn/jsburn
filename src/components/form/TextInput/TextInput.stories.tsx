import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "@form/TextInput";

const meta = {
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TempStory: Story = {};
