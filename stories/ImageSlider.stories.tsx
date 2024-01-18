import type { Meta, StoryObj } from "@storybook/react";
import ImageSlider from "@/components/ImageSlider";
import { CanvasProvider } from "@/context/CanvasContext";

const meta: Meta<typeof ImageSlider> = {
  component: ImageSlider,
};
export default meta;

type Story = StoryObj<typeof ImageSlider>;

export const ImageSliderLight: Story = {
  decorators: [
    (Story) => (
      <CanvasProvider>
        <Story />
      </CanvasProvider>
    ),
  ],
};
