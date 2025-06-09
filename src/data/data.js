// Skills Data Import Start //

import HTML5 from "../assets/icons/HTML5.png";
import CSS from "../assets/icons/CSS3.png";
import JavaScript from "../assets/icons/JavaScript.png";
import Canva from "../assets/icons/Canva.png";
import Express from "../assets/icons/Express.png";
import Figma from "../assets/icons/Figma.png";
import Firebase from "../assets/icons/Firebase.png";
import Git from "../assets/icons/Git.png";
import Github from "../assets/icons/Github.png";
import MongoDB from "../assets/icons/MongoDB.png";
import MySQL from "../assets/icons/MySQL.png";
import Node from "../assets/icons/Node.js.png";
import React from "../assets/icons/React.png";
import TailwindCss from "../assets/icons/TailwindCss.png";

// Skills Data Import End //

// Project Data Import Start //

import DevFinder from "../assets/images/DevFinder.png";
import Velienne from "../assets/images/Velienne.png";
import AppController from "../assets/images/App-Controller.png";
import RMS from "../assets/images/RMS.png";

// Project Data Import End //

export const skills = [
  {
    id: 1,
    image: HTML5,
    name: "HTML",
    alt: "HTML.png",
  },
  {
    id: 2,
    image: CSS,
    name: "CSS",
    alt: "CSS.png",
  },
  {
    id: 3,
    image: JavaScript,
    name: "JavaScript",
    alt: "JavaScript.png",
  },
  {
    id: 4,
    image: Canva,
    name: "Canva",
    alt: "Canva.png",
  },
  {
    id: 5,
    image: Express,
    name: "Express",
    alt: "Express.png",
  },
  {
    id: 6,
    image: Figma,
    name: "Figma",
    alt: "Figma.png",
  },
  {
    id: 7,
    image: Firebase,
    name: "Firebase",
    alt: "Firebase.png",
  },
  {
    id: 8,
    image: Git,
    name: "Git",
    alt: "Git.png",
  },
  {
    id: 9,
    image: Github,
    name: "Github",
    alt: "Github.png",
  },
  {
    id: 10,
    image: MongoDB,
    name: "MongoDB",
    alt: "MongoDB.png",
  },
  {
    id: 11,
    image: MySQL,
    name: "MySQL",
    alt: "MySQL.png",
  },
  {
    id: 12,
    image: React,
    name: "React",
    alt: "React.png",
  },
  {
    id: 13,
    image: Node,
    name: "Node",
    alt: "Node.png",
  },
  {
    id: 14,
    image: TailwindCss,
    name: "TailwindCss",
    alt: "TailwindCss.png",
  },
];

export const frontend = skills.filter((item) =>
  [1, 2, 3, 12, 14].includes(item.id)
);

export const backend = skills.filter((item) => [5, 13].includes(item.id));

export const database = skills.filter((item) => [7, 10, 11].includes(item.id));

export const others = skills.filter((item) => [4, 8, 6, 9].includes(item.id));

// Project Data //

export const projectData = [
  {
    id: 1,
    image: DevFinder,
    name: "DevFInder",
    alt: "DevFinder.jpeg",
    description:
      "DevFinder is a responsive web app that allows users to search for GitHub profiles and view key information including avatar, bio, repositories, followers, and more.",
    techStack: ["HTML", "CSS", "JavaScript"],
    time: "Jun 3, 2025 - Jun 4, 2025",
    github: "https://github.com/Bintooot/DevFinder",
    live: "https://bintooot.github.io/DevFinder/",
  },
  {
    id: 2,
    name: "Velienne - Landing Page",
    description:
      "A visually appealing landing page designed to showcase the Velienne Restaurant. It features a modern design, highlights the restaurant's offerings, and provides an easy-to-navigate interface for users to explore the menu and make reservations.",
    image: Velienne,
    time: "May 30, 2025 - Jun 2, 2025",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Bintooot/velienne",
    live: "https://bintooot.github.io/velienne/",
  },
  {
    id: 3,
    name: "IoT Based Mobile Incubator Monitoring & Controller",
    description:
      "It is a mobile application that allows users to monitor and control the incubator. It also allows users to view the status of the incubator and the eggs inside it.",
    image: AppController,
    time: "October 2024 - November 2024",
    techStack: ["React Native", "CSS", "JavaScript", "Expo", "Firebase"],
    github: "https://github.com/Bintooot/incubator-app-controller",
    live: "#",
  },
  {
    id: 4,
    name: "Request Management System",
    description:
      "This project focuses on managing user requests for chicks, specifically designed for government use. The system allows users to register, submit requests, track the status of their requests, and receive the chicks once approved. This web-based platform streamlines the process for individuals seeking chicks for their farms, helping the government efficiently manage and process these requests.",
    image: RMS,
    time: "November 2024 - February 2025",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/Bintooot/request_management_system.git",
    live: "#",
  },
];
