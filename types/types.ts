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
  return `/${slugify(head, { lower: true, remove: /[*+~.()'"!:?@]/g })}`;
};

export const ImgData: ImageOption[] = [
  {
    head: "Just wing it!",
    desc: "In the 1950s, where the rockets are as ugly as the schemes, Sal and his crew decide to just wing it into the future using makeshift rockets, and a whole lot of swagger.",
    src: "/pics/rocket.jpg",
    value: "rocket.jpg",
    label: "rocket.jpg",
  },
  {
    head: "Atlas",
    desc: "Captain Jezos and Atlas: Exploring an alien desert, chasing secrets under alien stars. A legendary duo in the cosmic unknown",
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
    head: "Hangar 51",
    desc: "The government's not so secret factory. The construction site of the legendary USS Enterprise.",
    src: "/pics/hangar.jpg",
    value: "hangar.jpg",
    label: "hangar.jpg",
  },
  {
    head: "Guardian",
    desc: "In a post-Kardashev I world, Aria navigates the reborn Earth with Guardian, a towering mech that is not just a protector but a power plant and a vehicle. Amidst a dwindling population, their journey unfolds, echoing the harmonious coexistence of humanity and the healing planet.",
    src: "/pics/mecha2.jpg",
    value: "mecha2.jpg",
    label: "mecha2.jpg",
  },
  {
    head: "Arrival",
    desc: "Interstellar nomads visiting home and bringing stories from the red planet.",
    src: "/pics/arrival.jpg",
    value: "arrival.jpg",
    label: "arrival.jpg",
  },
];

export const draggableStyles: string[] = [
  "techno",
  "handwritten",
  "pixel",
  "terminal",
];

export const neonGlowStyles: string[] = ["white", "red", "green", "yellow"];

export const ImageOptions: ImageOption[] = ImgData.map((options) => ({
  ...options,
  slug: `/read${generateSlug(options.head)}`,
}));