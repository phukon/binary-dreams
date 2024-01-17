import type { Meta, StoryObj } from "@storybook/react";
import Play from "@/stories/Play";

const meta = {
  title: "Play",
  component: Play,

  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Play>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlayLight: Story = {};
