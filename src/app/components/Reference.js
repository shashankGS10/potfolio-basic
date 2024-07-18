// pages/index.js

import React from 'react';
import ReferenceCard from '../components/ReferenceCard';

const references = [
  {
    image: '/assets/techLogo/kampao_logo.png',
    link: 'https://kampao.in/',
    event: 'Eduvar Software Pvt Ltd - Kampao.in',
    date: 'Feb 23, 2023',
    description:'Launched a SaaS product which connects semi-skilled and unskilled to find jobs.'
  },
  {
    image: '/assets/Founders_talk.png',
    link: 'https://youtu.be/CZFJmiYIMPE?si=O3cPo6PyeC5FAYSR',
    link2:'https://www.linkedin.com/posts/shashank-g-sai_launch-of-lab32-cohort-11-at-t-hub-activity-7100850814767812608-Bkr_?utm_source=share&utm_medium=member_desktop',
    event: 'Founders Talk @ T-Hub Hyderabad',
    date: 'Dec 7, 2023',
    description:'Bridging the Gap: Innovative WorkForce Solution | KamPao | T-Hub Founder Talks'
  },
  {
    image: '/assets/techLogo/kampao_logo.png',
    link: 'https://www.linkedin.com/posts/suryansh-p-416a88235_indianstartups-nsrcel-launchpad-activity-7158382723319975936-bStK?utm_source=share&utm_medium=member_desktop',
    event: 'LaunchPad @ NSRCEL IIM Bangalore',
    date: 'Feb 21, 2024',
    description:' KamPao.in officially graduated from Launchpad, the early stage startup program of the NSRCEL at IIM B'
  },
  // Add more references as needed
];

const Reference = () => {
  return (
    <section id="reference" className="p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">References</h2>
      <div className="flex flex-wrap">
      {references.map((ref, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <ReferenceCard
              image={ref.image}
              link={ref.link}
              event={ref.event}
              date={ref.date}
              description={ref.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};


export default Reference;