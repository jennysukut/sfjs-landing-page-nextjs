interface Maker {
  firstName: string;
  lastName: string;
  img: string;
  shadow: string;
  details: string[];
}

export const makersInfo: Record<string, Maker> = {
  jenny: {
    firstName: "jenny",
    lastName: "sukut",
    img: "bg-[url('/jenny.svg')]",
    shadow: "bg-magenta",
    details: [],
  },
  joshua: {
    firstName: "joshua",
    lastName: "duncan",
    img: "bg-[url('/joshua.svg')]",
    shadow: "bg-lime",
    details: [
      "Raised in Rochester, NY",
      "Lives in Denver, CO",
      "Ex-Hospitality Professional",
      "Software Engineer & Brand Designer",
      "Hobbyist Musician",
      "Plant Dad",
      "Like Jacob, He Eats Potatoes Raw",
      "Is Addicted to Soda Water",
    ],
  },
  carl: {
    firstName: "carl",
    lastName: "thronson",
    img: "bg-[url('/carl.svg')]",
    shadow: "bg-lilac",
    details: [],
  },
  stephen: {
    firstName: "stephen",
    lastName: "walker",
    img: "bg-[url('/stephen.svg')]",
    shadow: "bg-jade",
    details: [
      "Is from England",
      "Is participating in the Innovative Entrepreneurs cohort, a 9-month Government initiative aimed at nurturing entrepreneurial skills and helping participants turn their innovative ideas into successful global businesses",
      "Has a passion for learning new technologies and tackling complex challenges",
      "Enjoys going to the gym and running to get his day started",
      "In his free time, Stephen likes going to the park with his wife and daughter",
      "Has never eaten a raw potato and is now tempted to take a bite of one",
      "Is a huge fan of video games, especially retro arcade games",
    ],
  },
  liam: {
    firstName: "liam",
    lastName: "prince",
    img: "bg-[url('/liam.svg')]",
    shadow: "bg-peach",
    details: [],
  },
  jacob: {
    firstName: "jacob",
    lastName: "sukut",
    img: "bg-[url('/jacob.svg')]",
    shadow: "bg-sky",
    details: [],
  },
  lean: {
    firstName: "lean",
    lastName: "vilas",
    img: "bg-[url('/lean.svg')]",
    shadow: "bg-sky",
    details: [],
  },
  josh: {
    firstName: "joshua",
    lastName: "caldwell",
    img: "bg-[url('/josh.svg')]",
    shadow: "bg-peach",
    details: [
      "From the Land Of Pilgrims",
      "Blockbuster Alum and Avid Jobs Applier",
      "18 Years of Marketing and Brand Experience",
      "Media Junkie and Political Pontificator",
      "Will scream if I see a snake",
    ],
  },
  kaitlyn: {
    firstName: "kaitlyn",
    lastName: "cernanec",
    img: "bg-[url('/kaitlyn.svg')]",
    shadow: "bg-lilac",
    details: [
      "Token Canadian",
      "Mixed Media Artist (current medium is bleach on t-shirts)",
      "5 years of Social Media Management",
      "Anthropologist",
      "Transit Justice Organizer",
      "Ex-Career Centre Cmployee",
      "Professionally ghosted after 4 interviews last month",
    ],
  },
  vishal: {
    firstName: "vishal",
    lastName: "sonthalia",
    img: "bg-[url('/vishal.svg')]",
    shadow: "bg-olive",
    details: [],
  },
  katelyn: {
    firstName: "katelyn",
    lastName: "lusher",
    img: "bg-[url('/katelyn.svg')]",
    shadow: "bg-jade",
    details: [
      "has a PhD in Rhetoric & Composition",
      "born and raised in Michigan",
      "lives in Cincinnati",
      "WILL fight you about Skyline Chili (delish)",
      "is a mother to 2 cats and an Australian cattle dog",
      "coffee is part of her personality",
    ],
  },
};

export function printMakersInfo() {
  Object.entries(makersInfo).forEach(([key, maker]) => {
    console.log(`Maker: ${key}`);
    console.log(`Name: ${maker.firstName} ${maker.lastName}`);
    console.log(`Image: ${maker.img}`);
    console.log(`Shadow: ${maker.shadow}`);
    console.log("Details:");
    maker.details.forEach((detail) => console.log(`- ${detail}`));
    console.log("-------------------");
  });
}
