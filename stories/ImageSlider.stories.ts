import type { Meta, StoryObj } from "@storybook/react";
import ImageSlider from "@/components/ImageSlider";
import satDish from "/public/pics/satDish.jpg";
import mecha from "/public/pics/mecha.jpg";


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
      {
        head: "dreams from the future",
        desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
        pic: mecha,
      },
      {
        head: "wbfewf ewnwedewaec",
        desc: "wbfewfewn wbfon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchewfewn wbfewfewn wbfewfewnwbfewfewn wbfewfewn wbfewfewnwbfewfewn wbfewfewn wbfewfewnwbfewfewn wbfewfewn wbfewfewn",
        pic: satDish,
      },
      {
        head: "dreams from the future",
        desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
        pic: mecha,
      },
      {
        head: "wbfewfew deen aec",
        desc: "wbfewfewn wbfewfeon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchwn wbfewfewn wbfewfewnwbfewfewn wbfewfewn wbfewfewnwbfewfewn wbfewfewn wbfewfewnwbfewfewn wbfewfewn wbfewfewn",
        pic: satDish,
      },
    ],
  },
};
