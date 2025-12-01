"use client";
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
      <p className="mb-4">
        🚀 Senior Frontend Developer with more than 8 years of experience, I specialize in frontend technologies, particularly React.js, Next.js and Angular Proficient in JavaScript and TypeScript, I excel at creating dynamic and responsive user interfaces.
        My expertise also includes state management solutions like Redux, Context API, and React Query, ensuring scalable and efficient data flow within applications.
      </p>
      <p className="mb-4">
        💻 In the backend realm, I specialize in Node.js and Express.js, leveraging
        their robust capabilities to build scalable and performant server-side
        applications. Additionally, I have experience with ASP.NET Web APIs,
        offering versatility in backend development frameworks.
      </p>
      <p>
        My commitment to quality assurance is demonstrated through my proficiency in
        Test-Driven Development (TDD), employing tools like Jest, React Testing
        Library, Playwright and Cypress to ensure the reliability and functionality of my code.
        With a strong foundation in both frontend and backend technologies, along
        with a dedication to best practices and Agile methodologies, I am equipped
        to deliver high-quality, scalable, and user-centric web solutions.
        <br></br><br></br>Let's connect and explore opportunities at the intersection of technology and creativity!
      </p>
    </motion.section>
  );
}
