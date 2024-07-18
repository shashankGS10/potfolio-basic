import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    logo: "/assets/techLogo/kampao_logo.png",
    title: "Tech Co-founder",
    company: "Kampao.in",
    description: "KamPao.in, an Indian digital platform, connects semi-skilled and unskilled workers in sectors like construction and manufacturing to employers, creating a unified and accessible job market nationwide backed by IIM Bangalore and T-Hub Hyderabad.",
    duration: "Feb 23 - Present · 18 months",
    details: [
      "Built a SaaS product and released it in 9 languages, gaining 7,500+ users within the first 3 months. Currently, 15,000 active users.",
      "Part of entrepreneurship programs Lab32 organized by T-Hub Hyderabad and LaunchPad, NSRCEL organized by IIM Bangalore.",
      "Developed mobile application using React Native and web-based application using NextJS, styled with Tailwind CSS.",
      "Implemented Search functionality with filters (location, job type, etc.).",
      "Designed Animations like logos, avatars and images using Figma.",
      "Ensured Performance Optimization to run the Application smoothly across different platforms."
    ],
    skills: ["NodeJS", "React Native", "ReactJS", "NextJS"]
  },
  {
    logo: "",
    title: "Mobile App Developer",
    company: "ACS Solutions",
    description: "ACS, a leading provider of marketing and customer engagement solutions for the gaming industry, located globally. They focus on empowering casino marketing teams to boost player acquisition and omni-channel engagement currently serving Casinos in USA.",
    duration: "May 22 - Apr 23 · 11 months",
    details: [
      "Maintained and deployed hybrid applications using React Native JS.",
      "Ensured regulated and strategic distribution of iOS applications from the Apple Developer Console.",
      "Ensured consistency through manual testing across multiple devices.",
      "Streamlined client retention and engagement strategies for casino clients like Casino Del Sol.",
      "The website was built over NextJS using Tailwind CSS.",
      "Implemented Geo-location API from a third party library to enhance user engagement.",
      "Implemented A/B Testing using Apple Developer Console and AWS to release the app in specific demographic locations.",
      "Implemented custom hooks to make API calls, cached data for smooth login as a part of Performance Optimisation."
    ],
    skills: ["React Native", "ReactJS", "AWS", "NextJS", "Javascript", "Mobile UX", "User Research", "Mobile UI"]
  },
  {
    logo: "/assets/techLogo/kuvera.png",
    title: "Senior Software Developer",
    company: "Kuvera.in",
    description: "Kuvera, based in India, is an investment community committed to offering services like fund selection, goal planning, and tax optimization in a transparent, user-centric manner for an optimized financial future.",
    duration: "Sep 21 - Apr 22 · 7 months",
    details: [
      "Led a UI development team to build Amazon Wealth.",
      "Developed reusable components like horizontal scroll and scratch cards taking references from React Native for better UX.",
      "Ensured integration of the SaaS with third-party collaborators.",
      "For styling Tailwind CSS was a standard.",
      "Ensured building custom hooks to ensuring re-usability and performance optimisation."
    ],
    skills: ["ReactJS", "VueJS", "Javascript", "Web App UI", "Web App UX", "Mobile UX", "Interaction Design", "Mobile UI"]
  },
  {
    logo: "/assets/techLogo/ntwc.jpeg",
    title: "Software Engineer",
    company: "Networth Corp",
    description: "Networth Corp, a global firm based in the US, seeks to empower businesses through intelligent solutions, information integration, and innovation for maximizing true value and driving business success.",
    duration: "Apr 20 - May 21 · 13 months",
    details: [
      "ReactJS was the core library upon which Charting library and Design System was built.",
      "Engineered an in-house charting library via D3.js, handling complete deployment and testing.",
      "Co-developed and deployed UI Design system using ReactJS and Storybook.js as part of a 3-member team.",
      "Utilized Webpack and Rollup for JavaScript package bundling, ensuring access control within the organization."
    ],
    skills: ["D3.JS", "NodeJS", "ReactJS", "Visual Design", "Javascript", "Web App UI", "Web App UX", "Product Design"]
  },
  {
    logo: "/assets/techLogo/bhm.png",
    title: "SDE",
    company: "Bramhansh Technologies",
    description: "Bramhansh, a pioneering company in India's MedTech industry, is transforming migraine treatment with their device 'Migraelief'. Their vision is a drug-free migraine solution targeting occipital and trigeminal nerves.",
    duration: "Feb 19 - Apr 20 · 14 months",
    details: [
      "Developed static website using Vanilla JS, CSS, and HTML, showcasing ability to quickly learn and deliver.",
      "Demonstrated proficiency in HTML, CSS, git, npm, es6, and JavaScript before transition to ReactJS.",
      "Handled early-stage Figma design and website modifications.",
      "Gained proficiency with front-end design systems like Material UI, Bootstrap CSS and Tailwind CSS."
    ],
    skills: ["ReactJS", "Javascript"]
  }
];


const Experience = () => {
  return (
    <section id="experience" className="p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          logo={exp.logo}
          title={exp.title}
          company={exp.company}
          description={exp.description}
          duration={exp.duration}
          details={exp.details}
          skills={exp.skills}
        />
      ))}
    </section>
  );
};

export default Experience;
