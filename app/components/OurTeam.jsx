"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "data:image/jpeg;base64,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",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  {
    name: "Jane Smith",
    position: "Chief Operations Officer",
    image: "data:image/jpeg;base64,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",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
  },
];

export default function OurTeam() {
  return (
    <section className="py-16 px-6 md:px-12 text-gray-700">
      <div className="max-w-screen-lg mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false}}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          className="text-lgmt-4 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false}}
        >
          Our team consists of passionate professionals and industry experts dedicated to delivering innovative and impactful solutions.
        </motion.p>

        <div className="md:flex justify-center items-center md:gap-12 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
              viewport={{ once: false}}
            >
              <div className="flex items-center justify-center ">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={140}
                  height={140}
                  className="rounded-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <Link href={member.linkedin} target="_blank" prefetch={true}>
                    <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800 transition" />
                  </Link>
                  <Link href={member.twitter} target="_blank" prefetch={true}>
                    <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600 transition" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
