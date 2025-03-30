"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For smooth animations

const data = [
  {
    title: "Mission",
    description:
      "Improving lives by bridging the vital connections between health, environment, and development.",
  },
  {
    title: "Vision",
    description:
      "To be a global leader in sustainable solutions that create lasting positive impacts on communities.",
  },
  {
    title: "Objective",
    description:
      "Our objective is to implement programs that empower communities and improve the quality of life sustainably.",
  },
];

export default function MissionVisionObjective() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width < 768); // Small screens (below md)
      setIsMediumScreen(width >= 768 && width < 1024); // Medium screens (md to lg)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Slideshow effect every 2 seconds (only on small screens)
  useEffect(() => {
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isSmallScreen]);

  return (
    <div className="max-w-screen-lg mx-auto flex flex-wrap overflow-hidden justify-center items-center gap-6 px-4 py-6 md:py-10 text-gray-600">
      {isSmallScreen ? (
        <div className="relative w-full max-w-xs h-56 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ x: 100, opacity: 0 }} // Start off-screen (right)
              animate={{ x: 0, opacity: 1 }} // Slide in to center
              exit={{ x: -100, opacity: 0 }} // Slide out to left
              transition={{ duration: 0.5 }} // Smooth transition
              className="absolute w-full h-full bg-white shadow-lg rounded-3xl p-6 text-center flex flex-col justify-center items-center"
            >
              <h2 className="text-xl font-bold mb-4">{data[activeIndex].title}</h2>
              <p className="text-sm">{data[activeIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-6">
          {isMediumScreen
            ? data.slice(0, 2).map((item, index) => ( // Show only first two for medium screens
                <motion.div
                  key={index}
                  className="bg-white w-80 h-56 shadow-lg rounded-3xl p-6 flex flex-col justify-center items-center text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: false }}
                >
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-md">{item.description}</p>
                </motion.div>
              ))
            : data.map((item, index) => ( // Show all items for large screens
                <motion.div
                  key={index}
                  className="bg-white w-80 h-56 shadow-lg rounded-3xl p-6 flex flex-col justify-center items-center text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: false }}
                >
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-md">{item.description}</p>
                </motion.div>
              ))}
        </div>
      )}
    </div>
  );
}
