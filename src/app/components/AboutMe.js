import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const AboutMe = () => {
  // const links = [
  //   { name: 'Kampao.in', url: 'https://kampao.in' },
  //   { name: 'LaunchPad by NSRCEL', url: 'https://www.linkedin.com/posts/kampao-in_indianstartups-nsrcel-launchpad-activity-7158382813111545856-DLRg?utm_source=share&utm_medium=member_desktop' },
  //   { name: 'Lab32 by T-Hub Hyderabad', url: 'https://www.linkedin.com/posts/lab32thub_launch-of-lab32-cohort-11-at-t-hub-activity-7100771573065797632-YnEo?utm_source=combined_share_message&utm_medium=member_desktop' }
  // ];

  const aboutMeText = "Hello there I'm Shashank, a tech enthusiast with a passion for front-end development and entrepreneurship. Over the past five years, I've refined my skills in crafting and deploying robust web and mobile applications using cutting-edge technologies like React.js, React Native, and Node.js. My journey has been a dynamic blend of technical innovation and business strategy, having co-founded KamPao.in and actively participating in esteemed entrepreneurship programs like Lab32 by T-Hub Hyderabad and StartUp LaunchPad by NSRCEL, IIM Bangalore. Professionally, I've been dedicated to developing UI/UX user-centric products that drive significant use cases. In my current role, I focus on developing new features, optimizing UX, and solving real-life problems using technology."; // Replace with your desired text
  return (
    <section id="aboutme" className="px-10 w-full items-center justify-between min-h-screen lg:mt-0">
     <div className='flex min-h-screen flex-col md:flex-row justify-center items-center gap-4'> 
     <div className=''>
          <img src='/assets/coderBoy.png'
          className="animated-image h-max p-4 max-w-full md:w-1/2"
          alt="Coder Boy"/>
        </div>
      <div className={`standard-textColor justify-center items-center rounded-lg bg-white shadow-lg p-4 w-full md:w-1/2`}>
          <h2 className="px-2 text-2xl font-bold mb-2">About Me</h2>
          <p className='p-2'>{aboutMeText}</p>
        </div>
        
      </div>
    </section>
  );
};

export default AboutMe;
