import React from 'react';
import { motion } from 'framer-motion';

const PremiumCarousel = ({ carouselData }) => {
  const variants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Ultra Premium Carousel</h2>
      <div className="flex flex-wrap -mx-4">
        {carouselData.map((item, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <div className="border rounded-lg shadow-md bg-white p-4">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              {item.image && (
                <img src={item.image} alt={item.name} className="mb-2 rounded-lg" />
              )}
              <p className="text-gray-500 mb-2">{item.date}</p>
              <a
                href={item.referenceLink}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PremiumCarousel;
