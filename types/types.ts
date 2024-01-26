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
  return `/${slugify(head, { lower: true, remove: /[*+~.(),'"!:?@]/g })}`;
};

export const ImgData: ImageOption[] = [
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
  {
    head: "Portal",
    desc: "We messed up big time! This was probably due to the quaternion in the",
    src: "/pics/portal.jpg",
    value: "portal.jpg",
    label: "portal.jpg",
  },
  {
    head: "Build more, build fast!",
    desc: "The only way out is forward.",
    src: "/pics/construction.jpg",
    value: "construction.jpg",
    label: "construction.jpg",
  },
  {
    head: "Night shift",
    desc: "Sorry, this post is still under construction. Wanna contribute?? hit me up at",
    src: "/pics/nightshift.jpg",
    value: "nightshift.jpg",
    label: "nightshift.jpg",
  },
  {
    head: "Sky temples",
    desc: "Sorry, this post is still under construction. Wanna contribute?? hit me up at",
    src: "/pics/temples.jpg",
    value: "temples.jpg",
    label: "temples.jpg",
  },
  {
    head: "Fly-through",
    desc: "Sorry, this post is still under construction. Wanna contribute?? hit me up at",
    src: "/pics/fly-through.jpg",
    value: "fly-through.jpg",
    label: "fly-through.jpg",
  },
  {
    head: "Industrial revolution X",
    desc: "Sorry, this post is still under construction. Wanna contribute?? hit me up at",
    src: "/pics/industrial-revolution.jpg",
    value: "industrial-revolution.jpg",
    label: "industrial-revolution.jpg",
  },
  {
    head: "Ancient Temple",
    desc: "Sorry, this post is still under construction. Wanna contribute?? hit me up at",
    src: "/pics/ancient-temple.jpg",
    value: "ancient-temple.jpg",
    label: "ancient-temple.jpg",
  },
  {
    head: "Quick-fix",
    desc: "Sorry, this post is still under construction. Wanna contribute?? hit me up at",
    src: "/pics/quick-fix.jpg",
    value: "quick-fix.jpg",
    label: "quick-fix.jpg",
  },
  {
    head: "aws-east-mars",
    desc: "Sorry, this post is still under construction. Wanna contribute?? hit me up at",
    src: "/pics/data-centres.jpg",
    value: "data-centres.jpg",
    label: "data-centres.jpg",
  },
  {
    head: "Just wing it!",
    desc: "In the 1950s, where the rockets are as ugly as the schemes, Sal and his crew decide to just wing it into the future using makeshift rockets, and a whole lot of swagger.",
    src: "/pics/rocket.jpg",
    value: "rocket.jpg",
    label: "rocket.jpg",
  },
  {
    head: "Hangar 51",
    desc: "The government's not so secret factory. The construction site of the legendary USS Enterprise.",
    src: "/pics/hangar.jpg",
    value: "hangar.jpg",
    label: "hangar.jpg",
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