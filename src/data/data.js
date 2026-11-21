// Skills Icon Imports
import HTML5 from "../assets/icons/HTML5.png";
import CSS from "../assets/icons/CSS3.png";
import JavaScript from "../assets/icons/JavaScript.png";
import ReactIcon from "../assets/icons/React.png";
import TailwindCss from "../assets/icons/TailwindCss.png";
import Vite from "../assets/icons/vitejs.svg";
import NodeIcon from "../assets/icons/Node.js.png";
import Express from "../assets/icons/expressjs.svg";
import Firebase from "../assets/icons/Firebase.png";
import MongoDB from "../assets/icons/MongoDB.png";
import PostgreSQL from "../assets/icons/postgresql.png";
import MySQL from "../assets/icons/MySQL.png";
import Docker from "../assets/icons/docker.svg";
import Git from "../assets/icons/Git.png";
import Github from "../assets/icons/github.svg";
import Figma from "../assets/icons/Figma.png";
import Canva from "../assets/icons/canva.svg";
import ERPNext from "../assets/icons/ERPNext.webp";
import SAPIcon from "../assets/icons/sap.svg";
import ERPIcon from "../assets/icons/erp.svg";

// Project Image Imports
import DevFinder from "../assets/images/DevFinder.png";
import Velienne from "../assets/images/Velienne.png";
import AppController from "../assets/images/App-Controller.png";
import RMS from "../assets/images/RMS.png";
import PortfolioV1 from "../assets/images/Portfolio-v1.png";
import ITHub from "../assets/images/IT-Hub.png";
import SpaceSync from "../assets/images/SpaceSync.png";

export const personalInfo = {
  name: "Ben Raymond Aniasco",
  shortName: "Ben Aniasco",
  initials: "B.R.A",
  role: "Front-End Developer & ERP Systems Specialist",
  subRole: "Modern Web Applications • Functional SAP Business One • ERPNext Workflows",
  location: "Tagum City, Davao del Norte, Philippines, 8100",
  education: "University of Mindanao Tagum College (UMTC)",
  degree: "Bachelor of Science in Information Technology",
  experienceYears: "2+",
  completedProjects: "7+",
  technologiesCount: "20+",
  email: "aniascoben@gmail.com",
  phone: "+63 993 673 6625",
  linkedin: "https://www.linkedin.com/in/ben-raymond-aniasco-381523334/",
  github: "https://github.com/Bintooot",
  instagram: "https://www.instagram.com/raammm03/",
  messenger: "https://www.messenger.com/e2ee/t/9625184080914205/",
  resumeUrl: "CV.pdf",
};

export const skills = [
  // Frontend
  {
    id: 1,
    name: "HTML5",
    category: "Frontend",
    image: HTML5,
    alt: "HTML5 Icon",
  },
  {
    id: 2,
    name: "CSS3",
    category: "Frontend",
    image: CSS,
    alt: "CSS3 Icon",
  },
  {
    id: 3,
    name: "JavaScript",
    category: "Frontend",
    image: JavaScript,
    alt: "JavaScript Icon",
  },
  {
    id: 4,
    name: "React",
    category: "Frontend",
    image: ReactIcon,
    alt: "React Icon",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    category: "Frontend",
    image: TailwindCss,
    alt: "Tailwind CSS Icon",
  },
  {
    id: 6,
    name: "Vite",
    category: "Frontend",
    image: Vite,
    alt: "Vite Icon",
  },

  // ERP & Enterprise Systems
  {
    id: 7,
    name: "SAP B1 (Functional)",
    category: "ERP & Enterprise",
    image: SAPIcon,
    alt: "SAP Business One Functional Icon",
  },
  {
    id: 8,
    name: "ERPNext",
    category: "ERP & Enterprise",
    image: ERPNext,
    alt: "ERPNext Icon",
  },
  {
    id: 9,
    name: "ERP Architecture",
    category: "ERP & Enterprise",
    image: ERPIcon,
    alt: "ERP Systems Icon",
  },

  // Backend
  {
    id: 10,
    name: "Node.js",
    category: "Backend",
    image: NodeIcon,
    alt: "Node.js Icon",
  },
  {
    id: 11,
    name: "Express.js",
    category: "Backend",
    image: Express,
    alt: "Express Icon",
  },
  {
    id: 12,
    name: "Firebase",
    category: "Backend",
    image: Firebase,
    alt: "Firebase Icon",
  },

  // Database
  {
    id: 13,
    name: "MongoDB",
    category: "Database",
    image: MongoDB,
    alt: "MongoDB Icon",
  },
  {
    id: 14,
    name: "PostgreSQL",
    category: "Database",
    image: PostgreSQL,
    alt: "PostgreSQL Icon",
  },
  {
    id: 15,
    name: "MySQL",
    category: "Database",
    image: MySQL,
    alt: "MySQL Icon",
  },

  // Tools & Design
  {
    id: 16,
    name: "Git",
    category: "Tools & Design",
    image: Git,
    alt: "Git Icon",
  },
  {
    id: 17,
    name: "GitHub",
    category: "Tools & Design",
    image: Github,
    alt: "GitHub Icon",
  },
  {
    id: 18,
    name: "Docker",
    category: "Tools & Design",
    image: Docker,
    alt: "Docker Icon",
  },
  {
    id: 19,
    name: "Figma",
    category: "Tools & Design",
    image: Figma,
    alt: "Figma Icon",
  },
  {
    id: 20,
    name: "Canva",
    category: "Tools & Design",
    image: Canva,
    alt: "Canva Icon",
  },
];

export const skillsCategories = [
  "All",
  "Frontend",
  "ERP & Enterprise",
  "Backend",
  "Database",
  "Tools & Design",
];

export const frontend = skills.filter((item) => item.category === "Frontend");
export const erp = skills.filter((item) => item.category === "ERP & Enterprise");
export const backend = skills.filter((item) => item.category === "Backend");
export const database = skills.filter((item) => item.category === "Database");
export const others = skills.filter(
  (item) => item.category === "Tools & Design",
);

// Project Data
export const projectData = [
  {
    id: 1,
    name: "IoT Incubator Mobile Controller",
    category: "Mobile & IoT System",
    description:
      "A cross-platform mobile application designed to remotely monitor and regulate temperature, humidity levels, and egg rotation parameters for automated poultry incubators in real time.",
    image: AppController,
    alt: "IoT Incubator App Controller Preview",
    time: "Oct 2024 - Nov 2024",
    techStack: ["React Native", "Expo", "Firebase", "JavaScript", "IoT"],
    github: "https://github.com/Bintooot/incubator-app-controller",
    live: false,
    status: "Mobile / IoT Hardware",
  },
  {
    id: 2,
    name: "Request Management System (RMS)",
    category: "Government Enterprise & ERP Workflow",
    description:
      "A comprehensive municipal web platform built for government livestock and chick distribution. Incorporates ERP-style workflows including beneficiary verification, multi-stage approval lifecycles, and inventory distribution tracking.",
    image: RMS,
    alt: "Request Management System Preview",
    time: "Nov 2024 - Feb 2025",
    techStack: ["React", "Node.js", "Express", "MongoDB", "CSS3", "ERP Workflows"],
    github: "https://github.com/Bintooot/request_management_system.git",
    live: false,
    status: "Internal Enterprise System",
  },
  {
    id: 3,
    name: "Portfolio v.1",
    category: "Personal Portfolio",
    description:
      "The initial version of my developer portfolio, showcasing earlier projects, creative UI designs, and foundational front-end development capabilities.",
    image: PortfolioV1,
    alt: "Portfolio v1 Preview",
    time: "May 2025 - June 2025",
    techStack: ["React", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Bintooot/benaniasco-portfolio",
    live: "https://benaniasco-portfolio.vercel.app",
    status: "Live Demo",
  },
  {
    id: 4,
    name: "Velienne Restaurant",
    category: "UI/UX & Landing Page",
    description:
      "A visually captivating restaurant landing page built with modern component architecture. Features responsive menu showcases, booking inquiry flows, and fluid animations.",
    image: Velienne,
    alt: "Velienne Project Preview",
    time: "May 2025 - June 2025",
    techStack: ["React", "CSS Modules", "JavaScript", "Framer Motion"],
    github: "https://github.com/Bintooot/velienne",
    live: "https://velienne.vercel.app",
    status: "Live Demo",
  },
  {
    id: 5,
    name: "DevFinder",
    category: "Frontend API App",
    description:
      "A sleek, responsive web application that connects with the GitHub REST API to search developer profiles, inspect follower counts, public repositories, biographies, and account stats.",
    image: DevFinder,
    alt: "DevFinder Project Preview",
    time: "June 2025",
    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub API"],
    github: "https://github.com/Bintooot/DevFinder",
    live: "https://dev-finder-bintooots-projects.vercel.app/",
    status: "Live Demo",
  },
  {
    id: 6,
    name: "IT Hub",
    category: "IT Solutions & Web Portal",
    description:
      "A modern and responsive web application designed to showcase IT services, technology solutions, and collaborative team portfolios with dynamic content and seamless navigation.",
    image: ITHub,
    alt: "IT Hub Project Preview",
    time: "2026",
    techStack: ["React", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Bintooot/it-hub",
    live: "https://it-hub-three.vercel.app",
    status: "Live Demo",
  },
  {
    id: 7,
    name: "SpaceSync",
    category: "Workspace & Room Booking Platform",
    description:
      "A smart workspace and room reservation platform designed to streamline booking schedules, synchronize real-time room availability, and manage meeting space reservations seamlessly.",
    image: SpaceSync,
    alt: "SpaceSync Project Preview",
    time: "2026",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Bintooot/booking-rooms",
    live: "https://booking-rooms-sage.vercel.app/",
    status: "Live Demo",
  },
];
