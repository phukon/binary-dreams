import slugify from "slugify";

export type ImageOption = {
  head: string;
  desc: string;
  src: string;
  value: string;
  label: string;
  slug?: string;
};

// the slug and the head should be identical in lowercase!
const generateSlug = (head: string): string => {
  return `/${slugify(head, { lower: true })}`;
};

export const ImgData: ImageOption[] = [
  {
    head: "dreams from the future",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    src: "/pics/rocket.jpg",
    value: "rocket.jpg",
    label: "rocket.jpg",
  },
  {
    head: "Titans",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    src: "/pics/mecha.jpg",
    value: "mecha.jpg",
    label: "mecha.jpg",
  },
  {
    head: "Are you listening?",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    src: "/pics/satDish.jpg",
    value: "satDish.jpg",
    label: "satDish.jpg",
  },
  {
    head: "Hangar",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    src: "/pics/hangar.jpg",
    value: "hangar.jpg",
    label: "hangar.jpg",
  },
  {
    head: "Defence",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    src: "/pics/mecha2.jpg",
    value: "mecha2.jpg",
    label: "mecha2.jpg",
  },
  {
    head: "Arrival",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    src: "/pics/arrival.jpg",
    value: "arrival.jpg",
    label: "arrival.jpg",
  },
];

export const draggableStyles: string[] = [
  "techno",
  "bold",
  "handwritten",
  "pixel1",
  "pixel2",
  "default",
];

export const neonGlowStyles: string[] = ["white", "red", "green", "yellow"];

export const ImageOptions: ImageOption[] = ImgData.map((options) => ({
  ...options,
  slug: `/read${generateSlug(options.head)}`,
}));
