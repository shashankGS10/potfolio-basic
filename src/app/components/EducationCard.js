import React from "react";
import { GrCertificate } from "react-icons/gr";

const EducationCard = ({ collegeName, degree, specialization, percentage, startDate, endDate, CGPA }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-gray-900 text-white mb-6">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 mr-4 flex-shrink-0">
          <GrCertificate className="w-full h-full text-blue-300" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{collegeName}</h3>
          <p className="text-blue-300">{degree} {specialization}</p>
          <p className="text-red-300 mt-2">
            <i className="fas fa-clock"></i> {startDate} - {endDate}
          </p>
          {percentage && <p className="text-blue-300 mt-2">Percentage: {percentage}%</p>}
          {CGPA && <p className="text-blue-300 mt-2">CGPA: {CGPA}</p>}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
