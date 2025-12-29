import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import momentumproImg from "@/public/momentum-pro.png";
import warehouseMobilityImg from "@/public/warehouse-mobility.png";
import serviceMobilityImg from "@/public/service-mobility.png";
import actImg from "@/public/act.png";
import cgnImg from "@/public/cgn.png";
import gifwImg from "@/public/gifw.png";
import lexstepImg from "@/public/lexstep.png";

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
    date: "2019 - 2024",
  },
  {
    title: "Senior Frontend Developer",
    company: 'Saudi Information Technology Company - SITE',
    location: "Riyadh, KSA",
    description:
      "My primary role involves Develop secure, scalable government applications with Keycloak, Playwright, and React, ensuring robust architecture, testing, and UI/UX precision.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Momentum Pro",
    description:
      `For the past 4.7 years, I have been actively involved in the development of Momentup Pro, an ERP system designed for warehouse management. 
      \nThis application is built using React.js. The MomentumPro Front Office Sales module provides immediate and accurate access to information on stock availability and movements, 
      customer sales history, and order status, resulting in improved staff performance and flexibility, more satisfied customers and cost savings.`,
    tags: ["React.js", "Redux.js", "react query", "React Hooks", "material ui", "context api", "Azure DevOps Services", "Storybooks", "Jest", "Jenkins", "Highcharts", "redux", "saga", "DevExpress", "ASP.NET Web API", 'Lodash', 'Ramda js', 'underscore'],
    imageUrl: momentumproImg,
    href: 'https://www.markinson.com.au/front-office'
  },
  {
    title: "Warehouse Mobility",
    description:
    `Effective management of stock on hand in the warehouse, fast, accurate picking of customer orders and timely, efficient processing of stock receipts are critical for the operation of any warehouse.
      \n In summary, the Warehouse Mobility for MomentumPro ERP project outcomes include mobile-enabled warehouse management, a tailor-made platform, effective stock management, efficient order picking, timely stock receipt processing, a collaborative development approach, operational criticality, and enhanced workflow efficiency. These outcomes collectively contribute to the optimization of warehouse operations and the overall success of the ERP system in meeting the specific needs of the business.`,
    tags: ["Xamarin Forms", "C#"],
    imageUrl: warehouseMobilityImg,
    href: 'https://www.markinson.com.au/warehouse-mobility'
  },
  {
    title: "Service Mobility",
    description:
      `Developed an Android App in Xamarin forms that guides technicians through their scheduled jobs and activities ensuring a consistent high level of service.
      As an optional module addition to MomentumPro, Service Mobility delivers a powerful visual scheduling tool for customer service and workflows, all seamlessly integrated into the full business ERP.
      \nIn summary, the Service Mobility module outcomes include a customer-centric approach, seamless integration with MomentumPro ERP, a visual scheduling tool for efficient management, a guided mobile service app for technicians, a consistent high level of service, efficient identification and scheduling of future service jobs, and enhanced workflows. These outcomes collectively contribute to improved customer service, operational efficiency, and the potential for ongoing business growth through repeat service engagements.`,
    tags: ["Xamarin Forms", "C#"],
    imageUrl: serviceMobilityImg,
    href: 'https://www.markinson.com.au/service-mobility'
  },
  {
    title: "CGN",
    description:
      `The app provides real-time actionable insights on network and subscriber behavior for faster analysis and troubleshooting.
      I was involved in a project that utilized React.js, Ramda.js, and various chart libraries. The project was data-intensive, involving the display of over 10,000 logs on the user interface. To address this challenge, I employed React visualization techniques.
      Utilized on React, Redux, and other related libraries.
      \nIn summary, the outcomes of the project include the successful implementation of real-time actionable insights, efficient analysis and troubleshooting, utilization of React visualization techniques for handling data-intensive displays, a user-friendly interface, enhanced data presentation, improved user experience, and effective problem resolution. These outcomes collectively contribute to the application's effectiveness in providing valuable insights and addressing challenges related to network and subscriber behavior.`,
    tags: ["React", "redux", "redux thunk", "ramda js", "Highcharts", "D3.js", "Ant Design", "SCSS"],
    imageUrl: cgnImg,
    href: 'https://www.youtube.com/watch?v=73dlmjx5YOo'
  },
  {
    title: "GIFW",
    description:
      `The app provides actionable insights on application, network and subscriber behavior so that issues can be caught quickly.
      I was involved in a project that utilized React.js, Ramda.js, and various chart libraries. The project was data-intensive, involving the display of over 10,000 logs on the user interface. To address this challenge, I employed React visualization techniques.
      \nIn conclusion, the project has achieved success in implementing an application that delivers actionable insights, enabling swift issue identification and efficient problem resolution. It excels in handling large volumes of data, offering a user-friendly visualization experience. The application facilitates comprehensive monitoring, empowers enhanced decision-making, and leverages modern web technologies for scalability and optimal performance. Additionally, its proactive approach aids in issue prevention, collectively enhancing its effectiveness in monitoring and optimizing application, network, and subscriber behavior.`,
    tags: ["React", "redux", "redux thunk", "ramda js", "Highcharts", "D3.js", "Ant Design", "SCSS"],
    imageUrl: gifwImg,
    href: 'https://www.youtube.com/watch?v=oU3AHt67ME0'
  },
  {
    title: "AppCentric Templates (ACT)",
    description:
      "AppCentric Templates (ACT) Wizard, Advanced Configurations, Dashboards, Troubleshooting, Dashboard Wizard and Cloud-based updates.",
    tags: ["Html", "CSS", "Angular", "bootstrap","SCSS"],
    imageUrl: actImg,
    href: 'https://www.youtube.com/watch?v=A5k9zf4ayuo'
  },  
  {
    title: "Lexstep",
    description:
      `I contributed to the development of a job portal designed for solicitors, built using Angular v1.7.9. The portal successfully catered to a user base exceeding 50,000 individuals.
      \n The outcome of the project involved the successful development of a job portal for solicitors using Angular v1.7.9. The portal achieved effectiveness by serving a substantial user base of over 50,000 users. `,
    tags: ["Html", "CSS", "Angular", "bootstrap","AWS"],
    imageUrl: lexstepImg,
    href: 'https://www.lexstep.com/'
  },
] as const;

export const skillsData = [
 // Languages / Frameworks / Libraries
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "React Query",
  "GraphQL",
  "CSS-in-JS",
  "Bootstrap",
  "TailwindCSS",
  "Material UI",
  "Ant Design",
  "D3.js",
  "Highcharts",
  "react-vis",

  // Backend / APIs / Architecture
  "Express.js",
  "ASP.NET Core Web API",
  "REST",
  "Modular Architecture",
  "Monolithic Architecture",
  "Microservices",

  // Testing / DevOps
  "Jest",
  "Enzyme",
  "React Testing Library",
  "Playwright",
  "Cypress",
  "Storybook",
  "Git",
  "Jenkins",
  "Azure DevOps",
  "Docker",
  "CI/CD",

  // Authentication / Practices
  "OAuth",
  "Keycloak",
  "Agile Development",
  "Responsive UI",
  "Accessibility (A11y)",
  "i18n",
  "Web Performance Optimization"
] as const;
