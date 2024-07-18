import React from "react";

const SkillsetCard = ({ skillName, logo, yearsOfExperience }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-gray-950	 text-white mb-6">
      <div className="flex items-center justify-evenly">
        <div className="w-max h-16 flex-shrink-0 flex-center">
          <img src={logo} alt={skillName} className="w-full h-full" />
        </div>
        <div className="flex-1 text-center">
          <h3 className="text-xl font-bold">{skillName}</h3>
        </div>
        </div>
    </div>
  );
};

export default SkillsetCard;
