export interface WorkItem {
  slug: string;
  name: string;
  trade: string;
  blurb: string;
  tag: 'Concept Project';
  image: string;
  url: string;
}

export const WORK: WorkItem[] = [
  {
    slug: 'armsworthy-tulsa-fencing',
    name: 'Armsworthy Tulsa Fencing',
    trade: 'Fencing',
    blurb: 'Full fence-catalog site with installation and repair service pages, built for fast local-search visibility.',
    tag: 'Concept Project',
    image: '/work/armsworthy.jpg',
    url: 'https://armsworthytulsafencing.pages.dev',
  },
  {
    slug: 'o-fence-mustang',
    name: 'O-Fence of Mustang',
    trade: 'Fencing',
    blurb: 'A second fencing build in a different market — same trade, different town, different positioning and layout.',
    tag: 'Concept Project',
    image: '/work/ofence.jpg',
    url: 'https://repository-host-05.pages.dev',
  },
  {
    slug: 'whisker-and-bean',
    name: 'Whisker & Bean',
    trade: 'Cat Cafe',
    blurb: 'Playful, warm-toned booking site for an Edmond cat cafe — lounge reservations and adoptable-cat gallery.',
    tag: 'Concept Project',
    image: '/work/whisker-and-bean.jpg',
    url: 'https://whisker-and-bean-cafe.pages.dev',
  },
];
