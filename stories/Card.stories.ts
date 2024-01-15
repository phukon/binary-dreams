import type { Meta, StoryObj } from "@storybook/react";
import Card from "@/components/Card";

const meta = {
  title: "Card",
  component: Card,

  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardLight: Story = {};
