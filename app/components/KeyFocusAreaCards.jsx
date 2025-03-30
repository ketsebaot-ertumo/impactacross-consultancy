"use client";

import { Card, CardContent } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLeaf, FaHeartbeat, FaUtensils, FaWater, FaBook, FaGlobe } from "react-icons/fa";

const focusAreas = [
    { link: "climate-change", title: "Climate Change", icon: <FaGlobe className="text-green-500 text-4xl" /> },
    { link: "environment-natural-resources", title: "Environment & Natural Resources", icon: <FaLeaf className="text-green-700 text-4xl" /> },
    { link: "health-systems-strengthening", title: "Health Systems Strengthening", icon: <FaHeartbeat className="text-red-500 text-4xl" /> },
    { link: "food-security-nutrition", title: "Food Security & Nutrition", icon: <FaUtensils className="text-yellow-500 text-4xl" /> },
    { link: "water-sanitation-hygiene", title: "Water, Sanitation & Hygiene (WASH)", icon: <FaWater className="text-blue-500 text-4xl" /> },
    { link: "education", title: "Education", icon: <FaBook className="text-purple-500 text-4xl" /> },
];  

export default function FocusAreaCards() {
  return (
    <div className="max-w-screen-lg mx-auto md:px-8 py-12 text-gray-700">
      <h2 className="text-4xl font-semibold text-center">Key Focus Areas</h2>
      <div className="relative flex items-center justify-center mb-12 pt-4">
        <div className="w-32 border-t-2 border-gray-400"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {focusAreas.map((area, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/services/#${area.link}`} passHref prefetch={true}>
                <Card 
                    className="flex flex-col items-center p-6 rounded-2xl bg-white transition-all h-[200px] md:w-[300px] mx-6 md:mx-0"
                    sx={{
                        boxShadow: 3,
                        borderRadius: "16px", 
                        "&:hover": {
                            boxShadow: 6,
                        },
                        "&:hover": {
                            backgroundColor: "#E0F2FE",
                        },
                    }}
                >
                    <div className="flex flex-grow items-center justify-center">
                        {area.icon}
                    </div>
                    <CardContent className="flex-grow flex items-center justify-center">
                      <h3 className="text-xl font-semibold text-center">
                        {area.title}
                      </h3>
                    </CardContent>
                </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
