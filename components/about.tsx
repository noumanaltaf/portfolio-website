"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      🚀 Senior Full Stack Developer (Frontend Heavy) with 6+ years specializing in React js. 
      Proficient in Redux, React-query for state management and MySQL/MongoDB for robust backend integrations. 
      Adept at crafting seamless user experiences through innovative technologies.
     </p>
     <p>
      💻 Full-stack expertise covering JavaScript, TypeScript, C#, HTML5, CSS, and SCSS/styled-components.
       Proven track record in Xamarin Forms for cross-platform mobile development.
        Skilled in Agile Development, enhancing collaborative workflows and delivering high-quality, bug-free code by following TDD.
    </p>
    <p>
    📡 Well-versed in backend technologies (ASP.Net WebApi, Express.js) and API integration (SOAP, REST). 
    Actively engaged in the tech community, committed to staying ahead of industry trends while contributing to efficient development processes.
     <br></br><br></br>Let's connect and explore opportunities at the intersection of technology and creativity!
      </p>
    </motion.section>
  );
}
