import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tommy Myers | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Info about Tommy Myers', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  img: 'profile.png',
  title: '',
  name: 'Tommy Myers',
  subtitle: "I'm a software developer.",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  paragraphOne:
    'My love for coding started at a young age, first with iOS development, then learning Java to make Minecraft mods, Python for school projects, JavaScript/NodeJS to make web APIs, Arduino/embedded projects and a few other technologies.',
  paragraphTwo: "I'm currently working as an RPA Developer/Consultant at a consultancy.",
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'youtube-channel.png',
    title: 'iPhoneSDKDeveloper Channel',
    info:
      "YouTube channel I created when I was 9. It was about iOS Development tutorials and there's currently 38 videos accumulating almost 75,000 views. Most of the videos were about solutions to problems that I encountered. It was a sort of log book to my growth as a young iOS developer.",
    info2: '',
    url: 'https://www.youtube.com/user/iPhoneSDKDeveloper',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tmod0.png',
    title: 'tMod',
    info:
      'Utility mod for Minecraft that adds useful information to the HUD like the health of your armour and the remaining potion effect duration.',
    info2: '',
    url: '',
    repo: 'https://github.com/tommymyers/tmod', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ' ',
  btn: 'Email Me',
  email: 'tommy@tommymyers.dev',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/tommy-myers',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tommymyers',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
