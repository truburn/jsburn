import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@layout/Header";
import { HeadingProps } from "@typography/Heading";
import { ButtonProps } from "@navigation/Button";
import { ReactNode } from "react";

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const MOCK_HEADING: HeadingProps & { type: "heading" } = {
  type: "heading",
  title: "Level 2 Heading",
};

const MOCK_BUTTONS: Array<ButtonProps & { type: "button" }> = [
  { type: "button" },
  { type: "button" },
  { type: "button" },
];

const MOCK_PARAGRAPH: ReactNode = <p>The Big Oxmox advised her not to do so</p>;

export const StartSection: Story = {
  args: {
    startContent: [MOCK_HEADING],
  },
};

export const MidSection: Story = {
  args: {
    midContent: [MOCK_HEADING],
  },
};

export const EndSection: Story = {
  args: {
    endContent: [MOCK_HEADING],
  },
};

export const StartEndSections: Story = {
  args: {
    startContent: [MOCK_HEADING],
    endContent: MOCK_BUTTONS,
  },
};

export const StartMidSections: Story = {
  args: {
    startContent: MOCK_BUTTONS,
    midContent: [MOCK_HEADING],
  },
};

export const MidEndSections: Story = {
  args: {
    midContent: [MOCK_HEADING],
    endContent: MOCK_BUTTONS,
  },
};

export const AllSections: Story = {
  args: {
    startContent: [MOCK_HEADING],
    midContent: [MOCK_PARAGRAPH],
    endContent: MOCK_BUTTONS,
  },
};

export const CustomContent: Story = {
  args: {
    children: (
      <>
        {MOCK_PARAGRAPH}
        <table border={1}>
          <tr>
            <td>Table</td>
            <td>in the</td>
            <td>Header</td>
          </tr>
        </table>
      </>
    ),
  },
};
