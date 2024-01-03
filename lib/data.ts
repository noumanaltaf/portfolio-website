import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import momentumproImg from "@/public/momentum-pro.png";
import warehouseMobilityImg from "@/public/warehouse-mobility.png";
import actImg from "@/public/act.png";
import cgnImg from "@/public/cgn.png";
import gifwImg from "@/public/gifw.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachlor's in Computer Software Engineering",
    company: 'Foundation University Islamabad',
    location: "Islamabad, Pakistan",
    description:
      "Successfully completed my degree with a major in Software Engineering, and received a merit certificate as well.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2017",
  },
  {
    title: "Software Engineer",
    company: 'eMumba Pvt Ltd',
    location: "Islamabad, Pakistan",
    description:
      "I have predominantly focused on frontend development, with a primary emphasis on React.js and some exposure to Angular.js.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Senior Software Developer",
    company: 'Markinson Business Software Solutions',
    location: "Remote, Islamabad",
    description:
      "My primary role involves managing the frontend development in React.js, alongside contributing to projects using Xamarin Forms and ASP.NET Web APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Momentum Pro",
    description:
      "For the past 4.7 years, I have been actively involved in the development of Momentup Pro, an ERP system designed for warehouse management. This application is built using React.js.",
    tags: ["React.js", "Redux.js", "react query", "React Hooks", "material ui", "context api", "Azure DevOps Services", "Storybooks", "Jest", "Jenkins", "Highcharts", "redux", "saga", "DevExpress", "ASP.NET", "Web API"],
    imageUrl: momentumproImg,
    href: 'https://www.markinson.com.au/front-office'
  },
  {
    title: "Warehouse Mobility",
    description:
      "Effective management of stock on hand in the warehouse, fast, accurate picking of customer orders and timely, efficient processing of stock receipts are critical for the operation of any warehouse.",
    tags: ["Xamarin Forms", "C#"],
    imageUrl: warehouseMobilityImg,
    href: 'https://www.markinson.com.au/warehouse-mobility'
  },
  {
    title: "CGN",
    description:
      "The app provides real-time actionable insights on network and subscriber behavior for faster analysis and troubleshooting.",
    tags: ["React", "redux", "redux thunk", "ramda js", "Highcharts", "D3.js", "Ant Design", "SCSS"],
    imageUrl: cgnImg,
    href: 'https://www.youtube.com/watch?v=73dlmjx5YOo'
  },
  {
    title: "GIFW",
    description:
      " The app provides actionable insights on application, network and subscriber behavior so that issues can be caught quickly.",
    tags: ["React", "redux", "redux thunk", "ramda js", "Highcharts", "D3.js", "Ant Design", "SCSS"],
    imageUrl: gifwImg,
    href: 'https://www.youtube.com/watch?v=oU3AHt67ME0'
  },
  {
    title: "AppCentric Templates (ACT)",
    description:
      "AppCentric Templates (ACT) Wizard, Advanced Configurations, Dashboards, Troubleshooting, Dashboard Wizard and Cloud-based updates.",
    tags: ["React", "redux"],
    imageUrl: actImg,
    href: 'https://www.youtube.com/watch?v=A5k9zf4ayuo'
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS",
  'SCSS/styled-components',
  'React',
  'Next js',
  'JavaScript',
  'Typescript',
  'Redux',
  'React Query',
  "Redux-saga/thunk",
  "MySQL",
  "MongoDB",
  "Unit testing/storyboarding",
  'Xamarin Forms',
  'C#',
  'SOAP',
  'REST',
  ' Node js',
  'Express Js',
  'Agile Development'
] as const;
