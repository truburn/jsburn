import type { Meta, StoryObj } from "@storybook/react";
import { Menu as MenuComponent } from "@navigation/Menu";

const meta = {
  component: MenuComponent,
} satisfies Meta<typeof MenuComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Menu: Story = {};
