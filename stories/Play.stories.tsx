import type { Meta, StoryObj } from "@storybook/react";
import Play from "@/stories/Play";
import { CanvasProvider } from "@/context/CanvasContext";

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

export const PlayLight: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      router: {
        basePath: '/',
      },
    },
  },
  decorators: [
    (Story) => (
      <CanvasProvider>
        <Story />
      </CanvasProvider>
    ),
  ],
};
