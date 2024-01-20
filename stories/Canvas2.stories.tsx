import type { Meta, StoryObj } from "@storybook/react";
import Canvas2 from "@/app/editor/Canvas2";

const meta = {
  title: "Canvas2",
  component: Canvas2,

  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Canvas2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Canvas2Light: Story = {};
