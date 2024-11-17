import type { Meta, StoryObj } from "@storybook/react";
import { Modal as ModalComponent } from "@layout/Modal";

const meta = {
  component: ModalComponent,
} satisfies Meta<typeof ModalComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Modal: Story = {};
