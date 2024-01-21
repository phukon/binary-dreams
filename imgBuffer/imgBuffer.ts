import slugify from "slugify";

export type ImageOption = {
  head: string;
  desc: string;
  pic: string;
  value: string;
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
    pic: "/pics/rocket.jpg",
    value: "rocket.jpg",
  },
  {
    head: "dreams from the future",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    pic: "/pics/mecha.jpg",
    value: "mecha.jpg",
  },
  {
    head: "dreams from the future",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    pic: "/pics/rocket.jpg",
    value: "rocket.jpg",
  },
  {
    head: "dreams from the future",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    pic: "/pics/mecha.jpg",
    value: "mecha.jpg",
  },
  {
    head: "Are you listening?",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    pic: "/pics/satDish.jpg",
    value: "satDish.jpg",
  },
  {
    head: "Hangar",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    pic: "/pics/hangar.jpg",
    value: "hangar.jpg",
  },
  {
    head: "Defence",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    pic: "/pics/mecha2.jpg",
    value: "mecha2.jpg",
  },
  {
    head: "Arrival",
    desc: "Giant satellite dishes are emblems of human curiosity. They are always out there, transmitting electromagnetic radiation into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watchon into the starry night skies. Always watching. Always tracking. Always communicating",
    pic: "/pics/arrival.jpg",
    value: "arrival.jpg",
  },
];

export const QuoteStyles: string[] = ["minimal", "bold", "cool"];

export const ImageOptions: ImageOption[] = ImgData.map((options) => ({
  ...options,
  slug: `/read${generateSlug(options.head)}`,
}));
