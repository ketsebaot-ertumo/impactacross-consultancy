"use client";

import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGenderless, FaBalanceScale } from "react-icons/fa";

const multiDimensionalAreas = [
  { link: "gender-and-youth-integration", title: "Gender and Youth Integration", icon: <FaGenderless className="text-pink-500 text-4xl" /> },
  { link: "governance-and-accountability", title: "Governance and Accountability", icon: <FaBalanceScale className="text-blue-500 text-4xl" /> },
];

export default function MultiDimensionalAreas() {
  return (
    <div className="max-w-screen-lg mx-auto py-12 p-2 md:p-12">
      <h2 className="text-4xl font-semibold text-center text-gray-800 px-8">Multi-Dimensional Areas</h2>
      <div className="relative flex items-center justify-center mb-12 pt-4">
        <div className="w-38 border-t-2 border-gray-400"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex justify-center gap-6">
        {multiDimensionalAreas.map((area, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/services/#${area.link}`} passHref prefetch={true}>
              <Card
                className="flex flex-col items-center p-6 md:py-10 rounded-2xl bg-white transition-all h-[200px] md:w-[320px] mx-4 md:mx-0"
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
                  <h3 className="text-xl font-semibold text-gray-800 text-center md:w-[280px]">
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
