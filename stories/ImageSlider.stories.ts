import type { Meta, StoryObj } from "@storybook/react";
import ImageSlider from "@/components/ImageSlider";

const meta = {
  title: "ImageSlider",
  component: ImageSlider,

  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ImageSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageSliderLight: Story = {
  args: {
    slides: [
      { url: "/public/pics/satDash.jpg", title: "beach 1" },
      { url: "/public/pics/satDash.jpg", title: "beach 1" },
      { url: "/public/pics/satDash.jpg", title: "beach 1" },
      { url: "/public/pics/satDash.jpg", title: "beach 1" },
      { url: "/public/pics/satDash.jpg", title: "beach 1" },
    ],
  },
};
