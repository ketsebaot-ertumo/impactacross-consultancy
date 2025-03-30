"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "Stakeholder Consultations",
    content: [
      "We prioritize participatory engagement, listening to the voices of all stakeholders—from community members and grassroots organizations to government officials and international agencies.",
      "Our consultations identify key challenges, needs, and opportunities, ensuring co-creation of solutions that are inclusive and contextually relevant.",
      "By fostering collaboration, we bridge gaps between sectors and align efforts for greater impact."
    ]
  },
  {
    title: "Thematic and Landscape Analyses",
    content: [
      "Our thematic analyses delve into critical topics, such as the intersections of reproductive health and climate resilience, while our landscape studies map ongoing initiatives and funding streams.",
      "These analyses identify duplication, gaps, and best practices, guiding decision-makers to allocate resources effectively and design targeted interventions.",
      "By synthesizing findings into actionable insights, we help stakeholders navigate complex systems with clarity."
    ]
  },
  {
    title: "Evaluations and Assessments",
    content: [
      "We employ robust methodologies to evaluate program effectiveness, scalability, and long-term sustainability.",
      "Using tools like cost-benefit analysis, impact assessments, and monitoring frameworks, we identify areas for improvement and inform strategic adjustments.",
      "Our assessments help organizations demonstrate accountability to funders and stakeholders while strengthening their credibility and impact."
    ]
  }
];

const strategySections = [
  {
    title: "Strategic Planning",
    content: [
      "We prioritize participatory engagement, listening to the voices of all stakeholders—from community members and grassroots organizations to government officials and international agencies.",
      "Our consultations identify key challenges, needs, and opportunities, ensuring co-creation of solutions that are inclusive and contextually relevant.",
      "By fostering collaboration, we bridge gaps between sectors and align efforts for greater impact.",
    ]
  },
  {
    title: "Workshop and Meeting Facilitation",
    content: [
      "We design dynamic, participatory workshops and meetings that foster knowledge-sharing and innovation.",
      "Our facilitation techniques ensure every voice is heard, encourage creative problem-solving, and build consensus among diverse stakeholders.",
      "Whether shaping policy frameworks or training community leaders, our workshops are tailored to achieve tangible outcomes."
    ]
  },
  {
    title: "Policy and Program Design and Development",
    content: [
      "We craft evidence-based policies and programs that address critical challenges across sectors, ensuring alignment with national and international goals (e.g., SDGs, climate frameworks).",
      "Our designs integrate innovative tools, such as digital platforms, climate-smart solutions, and gender-sensitive approaches.",
      "By emphasizing implementation readiness, we ensure that policies and programs transition seamlessly from planning to action."
    ]
  }
];

const actionSections = [
  {
    title: "Unlocking Funding Streams",
    content: [
      "We identify and secure diverse funding opportunities, including climate funds, development grants, and public-private partnerships, to sustain transformative initiatives.",
      "Our expertise in proposal writing, funder engagement, and financial strategy ensures clients access the resources they need to scale their efforts.",
      "By navigating complex funding landscapes, we help stakeholders align their initiatives with global priorities, such as climate resilience and sustainable development."
    ]
  },
  {
    title: "Capacity Strengthening for Implementation",
    content: [
      "We provide tailored training and technical assistance to organizations, government agencies, and communities to enhance their ability to execute programs effectively.",
      "This includes building skills in areas such as project management, data analysis, advocacy, and monitoring and evaluation.",
      "By strengthening institutional and individual capacities, we ensure that solutions are not only implemented but sustained over time."
    ]
  },
  {
    title: "Facilitating Partnerships and Collaborations",
    content: [
      "We connect stakeholders across sectors, fostering partnerships that leverage diverse expertise and resources.",
      "These collaborations amplify impact by aligning efforts, reducing duplication, and creating synergies for greater efficiency and effectiveness.",
      "Our role as facilitators ensures that partnerships are equitable, transparent, and focused on shared goals."
    ]
  },
  {
    title: "Piloting and Scaling Innovations",
    content: [
      "We support the design and implementation of pilot projects that test innovative approaches to complex challenges.",
      "By carefully monitoring outcomes and refining methods, we create scalable models that can be adapted to different contexts and regions.",
      "This iterative approach ensures that innovations are both effective and practical for widespread adoption."
    ]
  },
  {
    title: "Advocacy and Awareness Campaigns",
    content: [
      "We design and execute advocacy campaigns to promote policies, programs, and practices that address critical issues at local, national, and global levels.",
      "By raising awareness and influencing decision-makers, we ensure that key issues, such as women’s health and climate resilience, remain at the forefront of development agendas.",
      "Our campaigns are informed by evidence and tailored to resonate with diverse audiences, from policymakers to grassroots communities."
    ]
  },
  {
    title: "Monitoring, Learning, and Adaptation",
    content: [
      "We implement robust monitoring and learning systems to track progress, evaluate impact, and inform adaptive strategies.",
      "This approach ensures continuous improvement and responsiveness to evolving needs and challenges.",
      "By fostering a culture of learning, we help organizations remain agile and effective in achieving their goals."
    ]
  },
];

export default function AnalysisSection() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-12 text-gray-700">
      <div className="max-w-screen-lg mx-auto py-6 px-4 md:px-8">
        <h2 className="text-4xl font-semibold mb-4">Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <p className="mb-6">
              <i>We use evidence-driven approaches to analyze the multifaceted connections between health, environment, climate change, and development. This ensures that interventions are rooted in a comprehensive understanding of the challenges at hand.</i>
            </p>
            {sections.map((section, index) => (
              <div key={index} className="mb-4 border-b pb-2">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center text-lg font-semibold focus:outline-none"
                >
                  {section.title}
                  {openSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openSection === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-gray-600"
                  >
                    <ul className="list-disc pl-10">
                      {section.content.map((text, idx) => (
                        <li key={idx} className="mt-1">{text}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          <div>
            <img 
              src="https://img.freepik.com/premium-photo/male-hands-typing-computer-keyboard-service-concept_220873-10436.jpg?semt=ais_hybrid"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-6">
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-semibold mb-4 mt-12">Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <p className="mb-6">
                <i>Our strategies are crafted to be forward-thinking, innovative, and actionable, ensuring they are adaptable to changing needs while driving long-term impact.</i>
              </p>
              {strategySections.map((section, index) => (
                <div key={index} className="mb-4 border-b pb-2">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex justify-between items-center text-lg font-semibold focus:outline-none"
                  >
                    {section.title}
                    {openSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {openSection === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 text-gray-600"
                    >
                      <ul className="list-disc pl-10">
                        {section.content.map((text, idx) => (
                          <li key={idx} className="mt-1">{text}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            <div>
              <img 
                src="https://img.freepik.com/premium-photo/male-hands-typing-computer-keyboard-service-concept_220873-10436.jpg?semt=ais_hybrid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-semibold mb-4 mt-12">Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <p className="mb-6">
              <i>We translate strategies into impactful, on-the-ground initiatives, ensuring communities and institutions are empowered to drive sustainable, lasting change.</i>
            </p>
            {actionSections.map((section, index) => (
              <div key={index} className="mb-4 border-b pb-2">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center text-lg font-semibold focus:outline-none"
                >
                  {section.title}
                  {openSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openSection === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-gray-600"
                  >
                    <ul className="list-disc pl-10">
                      {section.content.map((text, idx) => (
                        <li key={idx} className="mt-1">{text}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          <div>
            <img 
              src="https://img.freepik.com/premium-photo/business-woman-presenting-graph_220873-10436.jpg?semt=ais_hybrid"
              alt=""
            />
          </div>
        </div>
      </div>

    </div>
  );
}







// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const sections = [
//   {
//     title: "Stakeholder Consultations",
//     content: [
//       "We prioritize participatory engagement, listening to the voices of all stakeholders—from community members and grassroots organizations to government officials and international agencies.",
//       "Our consultations identify key challenges, needs, and opportunities, ensuring co-creation of solutions that are inclusive and contextually relevant.",
//       "By fostering collaboration, we bridge gaps between sectors and align efforts for greater impact."
//     ]
//   },
//   {
//     title: "Thematic and Landscape Analyses",
//     content: [
//       "Our thematic analyses delve into critical topics, such as the intersections of reproductive health and climate resilience, while our landscape studies map ongoing initiatives and funding streams.",
//       "These analyses identify duplication, gaps, and best practices, guiding decision-makers to allocate resources effectively and design targeted interventions.",
//       "By synthesizing findings into actionable insights, we help stakeholders navigate complex systems with clarity."
//     ]
//   },
//   {
//     title: "Evaluations and Assessments",
//     content: [
//       "We employ robust methodologies to evaluate program effectiveness, scalability, and long-term sustainability.",
//       "Using tools like cost-benefit analysis, impact assessments, and monitoring frameworks, we identify areas for improvement and inform strategic adjustments.",
//       "Our assessments help organizations demonstrate accountability to funders and stakeholders while strengthening their credibility and impact."
//     ]
//   }
// ];

// export default function AnalysisSection() {
//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (index) => {
//     setOpenSection((prev) => (prev === index ? null : index));
//   };

//   return (
//     <div className="max-w-screen-lg mx-auto py-12 text-gray-700">
//       <h2 className="text-4xl font-semibold mb-4">Analysis</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
//         <div>
//           <p className="mb-6">
//             <i>We use evidence-driven approaches to analyze the multifaceted connections between health, environment, climate change, and development. This ensures that interventions are rooted in a comprehensive understanding of the challenges at hand.</i>
//           </p>
//           {sections.map((section, index) => (
//             <div key={index} className="mb-4 border-b pb-2">
//               <button
//                 onClick={() => toggleSection(index)}
//                 className="w-full flex justify-between items-center text-lg font-semibold focus:outline-none"
//               >
//                 {section.title}
//                 {openSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//               </button>
//               {openSection === index && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="mt-2 text-gray-600"
//                 >
//                   <ul className="list-disc pl-10">
//                     {section.content.map((text, idx) => (
//                       <li key={idx} className="mt-1">{text}</li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               )}
//             </div>
//           ))}
//         </div>
//         <div>
//           <img 
//             src="https://img.freepik.com/premium-photo/male-hands-typing-computer-keyboard-service-concept_220873-10436.jpg?semt=ais_hybrid"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
