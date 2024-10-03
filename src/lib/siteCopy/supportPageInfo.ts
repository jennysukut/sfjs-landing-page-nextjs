export const supportPageInfo = {
  currentStatus: [
    "Right now, we have a group of makers who have all agreed to volunteer their time to help us get Straightforward Job Site off the ground!",
    "{learn more about our makers on the main page}",
    "The reality is that most of our team is working on this project in their spare time and most are actively looking for employment while trying to support themselves & their families.",
  ],

  crowdfundingNeed: [
    "This team is dedicated to making this site a reality and we are all committed to seeing it through, each as we can. ",
    "The reason we are crowdfunding is because we would like to see our makers get paid for their effort & contributions - to support their families and themselves.",
    "Currently, we have a team of 7 dedicated developers and a handful of collaborators who are working together to make this idea a reality everyone can benefit from!",
  ],

  goalDetail:
    "Most of this money would go directly to the makers of the site, the rest would be set aside for operating costs and a marketing budget to improve the success of our launch!",

  estTimeline: [
    "If you are wondering when you will get access to this amazing job site, rest assured it will be soon!",
    "Our team is working hard to deliver an MVP before the end of November.*",
    "We will set up a soft launch for our Beta Testers after a quick run through QA and are aiming for a full launch in December 2024!*",
  ],

  timelineAst:
    "*if there are delays in the development process, this timeline will be extended. We are confident we will at the very least be able to launch before the start of 2025!",

  incentivesAndRewards: [
    "The best reward is that this site will be available to use by the end of the year!",
    "Hopefully, we can change the way hiring works for 2025. Even better, with a pay-what-you-want feature, the job site will also be available for free to any person who needs to find a job!",
    "Aside from this practical upside, everybody who contributes to our campaign will have their name featured on a page dedicated just to sponsors on our site.",
  ],

  businessFinePrint: [
    "*These job posts are eligible for the first month of the posting. After the first month, the post will be renewed at the regular price.",
    "If you were rewarded with multiple posts you may choose whether to apply the rewards to a single post for multiple months or to multiple posts for a single month. Your rewarded posts will be visible on your profile.",
    "All job posts must abide by straightforward job site posting rules (rules ensuring our job seekers and businesses are respected).",
    "If a job post does not abide by the rules of our job board it may be taken down. If a business is found to be at fault for regularly or frequently breaking the job board rules or using bad practices, then straightforward job site may review your business and revoke any rewarded free postings. {treating people kindly, being honest, and following common-sense rules should be plenty}",
  ],

  rewards: {
    business: {
      $250: [
        "Get your name on our sponsor page",
        "This Time Only: Get a digital sponsor sticker on your profile",
        "Get 1 Job Post* [$400 value]",
      ],
      $500: [
        "Get your name on our sponsor page",
        "This Time Only: Get a digital sponsor sticker on your profile",
        "Get 3 Job Posts* [$1,200 value]",
      ],
      "$1,000": [
        "Get your name on our sponsor page",
        "This Time Only: Get a digital sponsor sticker on your profile",
        "Get 5 Job Posts* [$2,000 value]",
      ],
      "$2,500": [
        "Get your name on our sponsor page with a fun bordered outline",
        "This Time Only: Get a digital sponsor sticker on your profile",
        "Get 10 Job Posts* [$4,000 value]",
      ],
      "$5,000": [
        "Get your name on our sponsor page with a fun bordered outline",
        "This Time Only: Get a digital sponsor sticker on your profile",
        "Get 25 Job Posts* [$10,000 value]",
      ],
      "$10,000": [
        "Get your name on our sponsor page with a brightly colored box ",
        "This Time Only: Get a digital “elite” sponsor sticker on your profile",
        "Get 50 Job Posts* [$20,000 value]",
      ],
      "$25,000": [
        "Get your name on our sponsor page with a brightly colored box ",
        "This Time Only: Get a digital “elite” sponsor sticker on your profile",
        "Get 125 Job Posts* [$50,000 value]",
      ],
      "$50,000": [
        "Get your name on our sponsor page with a brightly colored box ",
        "This Time Only: Get a digital “elite” sponsor sticker on your profile",
        "Get a Lifetime of Free Job Listings* [almost priceless]",
      ],
    },
    individual: {
      $5: ["Get your name on our sponsor page"],
      $25: [
        "Get your name on our sponsor page",
        "This Time Only: Get a digital sponsor sticker on your profile",
      ],
      $50: [
        "Get your name on our sponsor page with a fun bordered outline ",
        "This Time Only: Get a digital sponsor sticker on your profile",
      ],
      $100: [
        "Get your name on our sponsor page with a fun bordered outline ",
        "This Time Only: Get a digital sponsor sticker on your profile",
        "Get a surprise gift in mail",
      ],
      $1000: [
        "Get your name on our sponsor page in a brightly colored box",
        "This Time Only: Get a digital “elite” sponsor sticker on your profile",
        "Get a surprise gift in mail",
      ],
      "$1000+": [
        "Get your name on our sponsor page in a brightly colored box",
        "This Time Only: Get a digital “elite” sponsor sticker on your profile",
        "Get a surprise specialty gift in mail",
      ],
    },
  },
};

// Business rewards
type BusinessRewardTier = keyof typeof supportPageInfo.rewards.business;
export const businessRewardTiers: BusinessRewardTier[] = Object.keys(
  supportPageInfo.rewards.business,
).filter(
  (key): key is BusinessRewardTier => key !== "fineprint",
) as BusinessRewardTier[];

// Individual rewards
type IndividualRewardTier = keyof typeof supportPageInfo.rewards.individual;
export const individualRewardTiers: IndividualRewardTier[] = Object.keys(
  supportPageInfo.rewards.individual,
) as IndividualRewardTier[];
