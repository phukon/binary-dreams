import type { Meta, StoryObj } from "@storybook/react";
import caroPlay from "@/app/CaroPlay";

const meta = {
  title: "playground/caroPlay",
  component: caroPlay,

  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof caroPlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const caroPlayLight: Story = {};
