export type Woman = {
  name: string;
  category: string;
  image: string;
  description: string;
};

export const women:Woman[] = [
  {
    name: "Grace Hopper",
    category: "Computer Science",
    image: "/images/grace-hopper.jpg",
    description:
      "Grace Hopper was a pioneering computer scientist and United States Navy rear admiral. She helped develop COBOL and was one of the first programmers of the Harvard Mark I computer.",
  },

  {
    name: "Katherine Johnson",
    category: "Mathematics & Space",
    image: "/images/katherine-johnson.jpg",
    description:
      "Katherine Johnson was a mathematician whose calculations were critical to NASA's early space missions. Her work helped send astronauts safely into orbit and to the Moon.",
  },

  {
    name: "Hedy Lamarr",
    category: "Technology & Engineering",
    image: "/images/hedy-lamarr.jpg",
    description:
      "Hedy Lamarr was an inventor who co-developed a frequency-hopping communication technology during World War II. Her ideas later influenced technologies used in modern wireless communication.",
  },
];