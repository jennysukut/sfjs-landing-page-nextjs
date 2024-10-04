export const makersInfo = {
  "jenny sukut": {
    firstName: "jenny",
    lastName: "sukut",
    img: "bg-[url('/makers/jenny.svg')]",
    shadow: "bg-magenta",
    details: [
      "Is a digital nomad",
      "Believes in the magical power of color",
      "Made 3 small humans",
      "Is passionate about design + general goodness",
      "Has a history of baking fantastical french macarons",
      "Thinks imagination and creativity can change the world",
      "Also thinks the avatar, master of all 4 elements, can change the world",
      "Can sew pants",
      "Wants to make everything herself",
      "Is a major proponent of creative chaos",
      "Laughs at her own jokes",
      "A bit of a serial Entrepreneur",
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
    details: [
      "Likes running",
      "From a small town in Wisconsin",
      "Still does the wordle every day",
      "Fan of the Green Bay Packers",
    ],
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
      "In his free time, he likes going to the park with his wife and daughter",
      "Has never eaten a raw potato and is now tempted to take a bite of one",
      "Is a huge fan of video games, especially retro arcade games",
    ],
  },
  "dillon arnold": {
    firstName: "dillon",
    lastName: "arnold",
    img: "bg-[url('/makers/dillon.svg')]",
    shadow: "bg-orange",
    details: [
      "His passion is flying planes",
      "Has a degree in finance",
      "Husband and dog dad",
      "If he wasn't a software developer with a degree in finance, he's love to get into the field of homicide investigation",
    ],
  },

  "jacob sukut": {
    firstName: "jacob",
    lastName: "sukut",
    img: "bg-[url('/makers/jacob.svg')]",
    shadow: "bg-olive",
    details: [
      "Is from Montana but has moved about 30 times",
      "He was a Literature and History Teacher and Ultimate coach",
      "Is a badass Blacksmith",
      "Eats peanut-butter and syrup on pancakes",
      "Thinks spiders are kinda cute",
      "He thinks sauteeing onions in butter is one of the best smells in the world",
      "Loves books and stories",
      "Sometimes he eats potatoes raw",
    ],
  },
  "lean vilas": {
    firstName: "lean",
    lastName: "vilas",
    img: "bg-[url('/makers/lean.svg')]",
    shadow: "bg-sky",
    details: [
      "Senior Software Engineer with 11 years of experience in the industry",
      "Is from Spain, but lives in Germany",
      "Prepares developers for their next job",
      "Is a proponent of the radical candor formula",
      "Will google raw potatoes before trying them.",
      "Is still skeptical about raw potatoes",
    ],
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
    details: [
      "Father",
      "Software Engineer",
      "Curious",
      "Enjoys potatoes! Especially Indian cuisine",
      "Vegetarian since birth",
      "Is not curious about meat",
    ],
  },
  "katelyn lusher": {
    firstName: "katelyn",
    lastName: "lusher",
    img: "bg-[url('/makers/katelyn.svg')]",
    shadow: "bg-jade",
    details: [
      "Has a PhD in Rhetoric & Composition",
      "Born and raised in Michigan",
      "Lives in Cincinnati",
      "WILL fight you about Skyline Chili (delish)",
      "Is a mother to 2 cats and an Australian cattle dog",
      "Coffee is part of her personality",
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
