/* Only real Verity jobs belong here — the section is headed "Real Homes. Real
   Results." Stock or repeated imagery has been removed rather than padding the
   row out to three. The grids that render these adapt to the count, so adding
   a pair needs no CSS change. */
export const TRANSFORM_PAIRS = [
  {
    key: "carpet",
    before: {
      src: "/transform-carpet-before.webp",
      alt: "Bedroom carpet before cleaning, covered in food wrappers and stained",
    },
    after: {
      src: "/transform-carpet-after.jpg",
      alt: "The same bedroom carpet after cleaning, clear and evenly clean",
    },
  },
  {
    key: "bedroom",
    before: {
      src: "/transform-bedroom-before.webp",
      alt: "Bedroom floor before cleaning, carpet heavily soiled and ground in",
    },
    after: {
      src: "/transform-bedroom-after.webp",
      alt: "The same bedroom floor after cleaning, carpet restored and even in color",
    },
  },
];
