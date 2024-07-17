import React from "react";

const ExperienceCard = ({ logo, title, company, description, duration, details, skills }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row items-center mb-4">
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-16 h-16 mr-4 mb-4 md:mb-0"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-blue-300">{company}</p>
          <p className="text-blue-300">Product company &middot; Bootstrapped</p>
          <p className="text-red-300	 mt-2">
            <i className="fas fa-clock"></i> {duration}
          </p>
        </div>
      </div>
      <p className="text-teal-50 mb-4">{description}</p>
      <ul className="list-disc list-inside mb-4 text-teal-50">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <p className="text-teal-50 font-bold">
        Skills: <span className="font-normal">{skills.join(', ')}</span>
      </p>
    </div>
  );
};

export default ExperienceCard;
