import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  const educationDetails = [{
    collegeName: "CSVTU SSTC FET, Bhilai, India",
    degree: "Bachelors of Engineering In",
    specialization: "Electronics And Telecommunication",
    percentage: 66.3,
    startDate: "06/2014",
    endDate: "05/2018",
  },
  {
    collegeName: "Sri Chaitanya Junior College, Hyderabad, India",
    degree: "Senior Secondary Schooling [ Class 12th ]",
    specialization: "Physics, Chemistry, Mathematics",
    percentage: 88.6,
    startDate: "04/2013",
    endDate: "05/2014",
  },
  {
    collegeName: "Kendriya Vidyalaya, Bilaspur, India",
    degree: "Higher Secondary Schooling [ Class 10th ]",
    specialization: "",
    CGPA: 8.2,
    startDate: "06/2014",
    endDate: "05/2018",
  }];

  return (
    <section id="education" className="p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {educationDetails.map((education, index) => (
        <EducationCard key={index} {...education} />
      ))}
    </section>
  );
};

export default Education;
