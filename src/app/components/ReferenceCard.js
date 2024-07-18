// components/ReferenceCard.js

import React from 'react';

const ReferenceCard = ({ image, link, event, date, description , link2}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white">
      <img className="w-full h-48 object-cover" src={image} alt={`${event} image`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{event}</div>
        <p className="text-gray-400 text-base">{date}</p>
        <p className="text-gray-300 text-base mt-2">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <a
          href={link}
          className="inline-block text-sm px-3 py-1 leading-none bg-blue-500 text-white hover:bg-blue-600 rounded"
        >
          Learn More
        </a>
        {link2 &&
             <a
             href={link2}
             className="inline-block text-sm px-3 py-1 leading-none bg-blue-500 text-white hover:bg-blue-600 rounded"
           >
             Learn 2
           </a>
        }
      </div>
    </div>
  );
};

export default ReferenceCard;
