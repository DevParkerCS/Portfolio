import galacticGame from "../assets/galacticgame.png";
import galacticHome from "../assets/galacticHome.png";
import whatSort1 from "../assets/whatsort1.jpg";
import whatSort2 from "../assets/whatsort2.jpg";
import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import golfhub1 from "../assets/golfhub1.png";
import golfhub2 from "../assets/golfhub2.png";

export type TProject = {
  name: string;
  tools: string;
  description: string;
  imgTop: string;
  imgBottom: string;
  gitLink: string;
  webLink?: string;
};

export const projects: TProject[] = [
  {
    name: "GolfHub Social",
    tools: "TypeScript, React, Express, MongoDB",
    description:
      "This is my most recent full stack project.  I am developing a golf social media platform which allows users to create profiles, add golf scores, browse courses and other users, and track their stats.  In Progress: Responsiveness only works for large monitors, and adding reviews doesn't work yet.",
    imgTop: golfhub1,
    imgBottom: golfhub2,
    gitLink: "https://github.com/DevParkerCS/GolfSocial",
  },
  {
    name: "Galactic Shooter",
    tools: "TypeScript, React, Express, MongoDB, Socket.io",
    description:
      "2D web game that incorporates a singeplayer and multiplayer gamemode. Real-time leaderboard that keeps track of the top 10 scores of all time.",
    imgTop: galacticHome,
    imgBottom: galacticGame,
    gitLink: "https://github.com/DevParkerCS/Galactic-Shooter",
    webLink: "https://galactic-shooter.onrender.com/",
  },
  {
    tools: "React, Typescript, SCSS",
    name: "My Portfolio",
    description:
      "This is my static Frontend portfolio. If you'd like you can check out my github repository for this page below!",
    imgTop: portfolio1,
    imgBottom: portfolio2,
    gitLink: "https://github.com/DevParkerCS/Portfolio",
    webLink: "pphillips.dev",
  },
  {
    name: "What The Sort",
    tools: "React, Typescript, SCSS",
    description:
      " A sorting visualizer that helps students visualize different sorting algorithms in Computer Science. Created for students like me that can have a hard time visualizing complex ideas in class.",
    imgTop: whatSort1,
    imgBottom: whatSort2,
    gitLink: "https://github.com/DevParkerCS/WhatTheSort",
    webLink: "https://main.d3or1kkvm9vtt4.amplifyapp.com/",
  },
];
