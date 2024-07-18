'use client'
import React, { useState, useEffect,useRef } from "react";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skillset from "./components/Skillset";
import Reference from "./components/Reference";
import AnimatedText from "./components/AnimatedText";
import { FaBars, FaBell, FaTimes, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import Draggable from "react-draggable";

const navigation = [
  { name: 'About Me', refName: 'aboutMeRef' },
  { name: 'Experience', refName: 'experienceRef' },
  { name: 'Education', refName: 'educationRef' },
  { name: 'Skillset', refName: 'skillsetRef' },
  { name: 'Showcase', refName: 'ReferenceRef' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsetRef = useRef(null);
  const ReferenceRef = useRef(null);

  const refs = {
    aboutMeRef,
    experienceRef,
    educationRef,
    skillsetRef,
    ReferenceRef
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigationClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };
  return (
    <div >
      <Draggable className="draggable-util" >
       <nav className={`standard-glass-bg fixed rounded-xl top-10 right-10 w-max shadow-md z-10 flex flex-col ${isMobile ? 'hidden' : 'block'}`}>
       <div className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
          <div className={`space-y-1 px-2 py-2 ${isOpen ? 'block' : 'hidden'}`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                onClick={() => handleNavigationClick(refs[item.refName])}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-red-400 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
      </Draggable>
      {/* Content Sections */}
      <div className="flex-1">
        <AnimatedText />
        <section ref={aboutMeRef}><AboutMe /></section>
        <section ref={experienceRef}><Experience /></section>
        <section ref={educationRef}><Education /></section>
        <section ref={skillsetRef}><Skillset /></section>
        <section ref={ReferenceRef}><Reference/></section>
      </div>
    </div>
  );
}
