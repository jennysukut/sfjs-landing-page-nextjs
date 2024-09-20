export const makersInfo = {
  "jenny sukut": {
    firstName: "jenny",
    lastName: "sukut",
    img: "bg-[url('/makers/jenny.svg')]",
    shadow: "bg-magenta",
    details: [
      "comes up with silly prompts for websites",
      "like one where you see the makers of a website",
      "and get little details of them when you click on their faces",
      "also, she laughs at her own jokes",
    ],
  },
  "joshua duncan": {
    firstName: "joshua",
    lastName: "duncan",
    img: "bg-[url('/makers/joshua.svg')]",
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
  "carl thronson": {
    firstName: "carl",
    lastName: "thronson",
    img: "bg-[url('/makers/carl.svg')]",
    shadow: "bg-lilac",
    details: [],
  },
  "stephen walker": {
    firstName: "stephen",
    lastName: "walker",
    img: "bg-[url('/makers/stephen.svg')]",
    shadow: "bg-jade",
    details: [
      "Is from England",
      "Is participating in the Innovative Entrepreneurs Cohort",
      "Has a passion for learning new technologies and tackling complex challenges",
      "Enjoys going to the gym and running to get his day started",
      "In his free time, Stephen likes going to the park with his wife and daughter",
      "Has never eaten a raw potato and is now tempted to take a bite of one",
      "Is a huge fan of video games, especially retro arcade games",
    ],
  },

  "jacob sukut": {
    firstName: "jacob",
    lastName: "sukut",
    img: "bg-[url('/makers/jacob.svg')]",
    shadow: "bg-olive",
    details: [
      "Is from Montana but has moved about 30 times",
      "He was a literature and history teacher and Ultimate coach",
      "Is a badass blacksmith",
      "Eats peanut-butter and syrup on pancakes",
      "Sometimes he eats potatoes raw",
      "Thinks spiders are kinda cute",
      "He thinks sauteeing onions in butter is one of the best smells in the world",
      "Loves books and stories",
    ],
  },
  "lean vilas": {
    firstName: "lean",
    lastName: "vilas",
    img: "bg-[url('/makers/lean.svg')]",
    shadow: "bg-sky",
    details: [],
  },
  "joshua caldwell": {
    firstName: "joshua",
    lastName: "caldwell",
    img: "bg-[url('/makers/josh.svg')]",
    shadow: "bg-peach",
    details: [
      "From the Land Of Pilgrims",
      "Blockbuster Alum and Avid Jobs Applier",
      "18 Years of Marketing and Brand Experience",
      "Media Junkie and Political Pontificator",
      "Will scream if I see a snake",
      "I can't use Ultimate 'cause Jacob beat me to it and if too many of us congregate it turns into a pick up game.",
    ],
  },
  "kaitlyn cernanec": {
    firstName: "kaitlyn",
    lastName: "cernanec",
    img: "bg-[url('/makers/kaitlyn.svg')]",
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
  "vishal sonthalia": {
    firstName: "vishal",
    lastName: "sonthalia",
    img: "bg-[url('/makers/vishal.svg')]",
    shadow: "bg-olive",
    details: [],
  },
  "katelyn lusher": {
    firstName: "katelyn",
    lastName: "lusher",
    img: "bg-[url('/makers/katelyn.svg')]",
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

export type MakersObjectType = typeof makersInfo;
export type MakerInfoType = {
  firstName: string;
  lastName: string;
  img: string;
  shadow: string;
  details: string[];
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
