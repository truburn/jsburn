import type { Meta, StoryObj } from "@storybook/react";
import { Container as ContainerComponent } from "@layout/Container";

const meta = {
  component: ContainerComponent,
} satisfies Meta<typeof ContainerComponent>;

export default meta;

type Story = StoryObj<typeof ContainerComponent>;

export const Container: Story = {};
