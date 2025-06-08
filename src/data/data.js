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
