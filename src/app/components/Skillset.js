import React from "react";
import SkillsetCard from "./SkillsetCard";

const jsLibraries = [
  { skillName: "React.js", logo: "/assets/techLogo/logo-og.png", yearsOfExperience: 3 },
  { skillName: "React Native", logo: "/assets/techLogo/native-logo.png", yearsOfExperience: 2 },
  { skillName: "Node.js", logo: "/assets/techLogo/nodejs-dark.png", yearsOfExperience: 3 },
  { skillName: "Redux", logo: "/assets/techLogo/redux-react-logo.png", yearsOfExperience: 1 }
];

const codingLanguages = [
  { skillName: "JavaScript", logo: "/assets/techLogo/js-logo.png", yearsOfExperience: 4 },
  { skillName: "CSS", logo: "/assets/techLogo/css-logo.png", yearsOfExperience: 5 },
  { skillName: "HTML", logo: "/assets/techLogo/html5-logo.png", yearsOfExperience: 5}
];

const visualizationSkills = [
  { skillName: "Three.js", logo: "/assets/techLogo/three-js-logo.png", yearsOfExperience: 1 },
  { skillName: "Blender 3D", logo: "/assets/techLogo/blender.png", yearsOfExperience: 2 },
  { skillName: "D3.js", logo: "/assets/techLogo/d3-logo.png", yearsOfExperience: 1 },
  { skillName: "Figma", logo: "/assets/techLogo/figma-logo.png", yearsOfExperience: 1 }
];

const coreStrength = [
  "Startup Founder",
  "Frontend Developer",
  "UI/UX Research",
  "Web/ Mobile Deployment"
];

const Skillset = () => {
  return (
    <section id="skills" className="p-4 min-h-screen">

      <h2 className="text-2xl font-bold mb-4">Coding Languages</h2>
      <div className="flex flex-wrap -mx-4">
        {codingLanguages.map((skill, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
            <SkillsetCard {...skill} />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">JavaScript Libraries</h2>
      <div className="flex flex-wrap -mx-4">
        {jsLibraries.map((skill, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
            <SkillsetCard {...skill} />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Visualization Tools</h2>
      <div className="flex flex-wrap -mx-4">
        {visualizationSkills.map((skill, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
            <SkillsetCard {...skill} />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Core Strength</h2>
      <div className="border p-4 rounded-lg shadow-md bg-gray-900 text-white mb-6">
        <ul className="list-disc pl-5">
          {coreStrength.map((skill, index) => (
            <li key={index} className="mb-2">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skillset;
