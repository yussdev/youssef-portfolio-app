export const profile = {
  name: "Youssef Alijani",
  role: "Senior Software Engineer",
  tagline: "Full-Stack & Web3 Engineer",
  location: "United Kingdom",
  email: "yussdev@gmail.com",
  github: "https://github.com/yussdev",
  linkedin: "https://www.linkedin.com/in/youss-js",
  summary:
    "Senior Software Engineer with 9+ years of experience building scalable web applications. I've delivered and maintained more than 10 production-grade applications across different industries, with a strong understanding of software engineering principles beyond frameworks and tools — deep knowledge of application architecture, system design, and how technologies work from the ground up. Experienced in leading full development lifecycles, from concept and architecture to deployment and production maintenance, across the full stack including backend and Web3.",
  stats: [
    { value: "9+", label: "Years of experience" },
    { value: "10+", label: "Production apps shipped" },
    { value: "4", label: "Countries worked with" },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "React-Query",
      "React Router",
      "SSR",
      "Vue.js",
      "Angular",
      "Svelte",
      "Tailwind",
      "CSS-in-JS",
      "BEM",
      "Atomic Design",
      "PWA",
      "RWD",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Prisma",
      "ORM",
      "MongoDB",
      "NoSQL",
      "Postgres",
      "Redis",
      "OAuth",
      "REST APIs",
      "GraphQL",
      "Java",
      "Docker",
      "CLI",
    ],
  },
  {
    title: "Web3",
    skills: [
      "Ethers.js",
      "viem",
      "Thirdweb",
      "EVM",
      "Smart Wallets",
      "NFT Airdrops",
      "Token Distribution",
    ],
  },
  {
    title: "System Design",
    skills: [
      "Microfrontend",
      "Microservices",
      "OS Concepts",
      "Data Structures & Algorithms",
      "Design Patterns",
      "FP / OOP",
      "Reactive Programming",
    ],
  },
];

export const experience = [
  {
    role: "Senior Full-Stack Engineer (Tech Lead)",
    company: "Giveth",
    companyUrl: "https://www.linkedin.com/company/givethio",
    location: "Spain — Remote",
    period: "Mar 2024 – Present",
    points: [
      "Led and developed three concurrent projects across frontend and backend systems, managing two frontend applications and one backend service simultaneously.",
      "Built a secure smart wallet client enabling users to create and manage Web3 communities, onboard members, and distribute tokens and NFTs via airdrops.",
      "Designed and implemented trading bots in Node.js, optimizing strategies to generate consistent profits for the company.",
    ],
  },
  {
    role: "Senior Frontend Engineer",
    company: "Innoscripta SE",
    companyUrl: "https://www.linkedin.com/company/innoscripta-se/",
    location: "Germany — Remote",
    period: "Jan 2023 – Mar 2024",
    points: [
      "Built a real-time messaging application using WebSocket technology, similar to WhatsApp.",
      "Designed and implemented low-latency, bidirectional communication for instant message delivery.",
    ],
  },
  {
    role: "Senior Frontend Engineer",
    company: "CoDeTech",
    companyUrl: "https://www.linkedin.com/company/codetechcc/",
    location: "Bratislava",
    period: "Mar 2021 – Dec 2022",
    points: [
      "Engineered a Web3 video-sharing platform, leveraging blockchain for secure and decentralized content distribution.",
      "Built a reusable component library (React + TypeScript) adopted across 8 internal projects, cutting new feature setup time.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Devolon",
    companyUrl: "https://www.linkedin.com/company/devolon",
    location: "Finland",
    period: "Jul 2019 – Feb 2021",
    points: [
      "Developed and maintained multiple SaaS and IT service-based projects.",
      "Led frontend development efforts across diverse projects, optimizing user experience and interface consistency to improve development efficiency.",
    ],
  },
];

export const projects = [
  {
    name: "Giveth",
    url: "https://giveth.io/",
    description:
      "Giveth empowers changemakers to accept crypto donations, building the future of giving with zero added fees.",
    tech: ["Next.js", "Nest.js", "Postgres", "Tailwind", "Web3", "Ethers.js", "Thirdweb"],
  },
  {
    name: "Clusterix",
    url: "https://clusterix.io/en",
    description:
      "Clusterix unifies all company functions into one system, enabling rapid adaptation and exceptional performance.",
    tech: ["React.js", "WebSocket", "Microfrontend", "WebRTC"],
  },
  {
    name: "Ping Exchange",
    url: "https://ping.exchange/",
    description:
      "A hybrid platform with unparalleled blockchain utilization and a uniquely secure login — the first exchange to offer Core Coin (XCB) and Core Token (CTN).",
    tech: ["React.js", "Blockchain", "Postgres", "Redis", "Express.js", "CSS-in-JS"],
  },
  {
    name: "Staker — SporkDAO",
    url: "https://staker.sporkdao.io/",
    description:
      "Empowering the ETHDenver community since 2017 with on-chain staking built on smart contracts.",
    tech: ["Next.js", "Tailwind", "Thirdweb", "Viem", "Smart Contracts"],
  },
  {
    name: "CorePass",
    url: "https://corepass.net/",
    description:
      "CorePass revolutionizes digital identity management, giving you full control over your personal data — deciding how it is shared and with whom for a new level of privacy and security.",
    tech: ["Next.js", "Tailwind", "Vite"],
  },
];

export const education = [
  {
    degree: "B.S. in Computer Software Engineering",
    school: "Tehran University",
    period: "2015 – 2018",
  },
];
