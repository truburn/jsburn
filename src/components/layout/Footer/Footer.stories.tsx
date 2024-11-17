import type { Meta, StoryObj } from "@storybook/react";
import { Footer as FooterComponent } from "@layout/Footer";

const meta = {
  component: FooterComponent,
} satisfies Meta<typeof FooterComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Footer: Story = {};
