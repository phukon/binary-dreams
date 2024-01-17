import type { Meta, StoryObj } from "@storybook/react";
import Home from "@/app/page";

const meta = {
  title: "playground/page",
  component: Home,

  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const homeLight: Story = {};
