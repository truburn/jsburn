import type { Meta, StoryObj } from "@storybook/react";
import { SectionTitle } from "@typography/SectionTitle";

const meta = {
  component: SectionTitle
} satisfies Meta<typeof SectionTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Depth2: Story = {
  args: {
    title: "H2 Section Title"
  }
};

export const Depth2WithSubtitle: Story = {
  args: {
    title: "H2 Section Title",
    subtitle: "H2 Section Subtitle"
  }
};

export const Depth3: Story = {
  args: {
    title: "H3 Section Title",
    depth: "3"
  }
};

export const Depth3WithSubtitle: Story = {
  args: {
    title: "H3 Section Title",
    subtitle: "H2 Section Subtitle",
    depth: "3"
  }
};

export const Depth4: Story = {
  args: {
    title: "H4 Section Title",
    depth: "4"
  }
};

export const Depth4WithSubtitle: Story = {
  args: {
    title: "H4 Section Title",
    subtitle: "H4 Section Subtitle",
    depth: "4"
  }
};
