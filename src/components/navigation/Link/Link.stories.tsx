import type { Meta, StoryObj } from "@storybook/react";
import { Link as LinkComponent } from "@navigation/Link";

const meta = {
  component: LinkComponent,
} satisfies Meta<typeof LinkComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Link: Story = {};
