'use client'
import React, { useState, useRef } from "react";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skillset from "./components/Skillset";
import Extrass from "./components/Extrass";
import Foo from "./components/Foo";
import { FaBars, FaBell, FaTimes, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const navigation = [
  { name: 'About Me', refName: 'aboutMeRef' },
  { name: 'Experience', refName: 'experienceRef' },
  { name: 'Education', refName: 'educationRef' },
  { name: 'Skillset', refName: 'skillsetRef' },
  { name: 'Extras', refName: 'extrasRef' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsetRef = useRef(null);
  const extrasRef = useRef(null);

  const refs = {
    aboutMeRef,
    experienceRef,
    educationRef,
    skillsetRef,
    extrasRef
  };

  const handleNavigationClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };
  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <nav className="standard-glass-bg fixed top-0 left-0 h-full w-60 bg-white shadow-md z-10 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between p-4">
            <div className="flex-row items-center bg-lime-200 rounded-lg py-2 px-8">
              <div className="text-lg text-lime-800 font-bold">Digital_Resume</div>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
          <div className={`space-y-1 px-2 py-2 ${isOpen ? 'block' : 'hidden'} sm:block`}>
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

      {/* Content Sections */}
      <div className="ml-64 flex-1">
        <section ref={aboutMeRef}><AboutMe /></section>
        <section ref={experienceRef}><Experience /></section>
        <section ref={educationRef}><Education /></section>
        <section ref={skillsetRef}><Skillset /></section>
        <section ref={extrasRef}><Extrass /></section>
      </div>
    </div>
  );
}
