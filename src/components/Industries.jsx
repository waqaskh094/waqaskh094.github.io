import React, { useState } from "react";
import Title from "./Title";
import { motion } from "motion/react"


const Industries = () => {
 const industriesData = [
  { title: "Hospitality", description: "Trained staff for hotels, restaurants, and events.", icon: "🍽️" },
  { title: "Admin Staff", description: "Reliable administrative and office support personnel.", icon: "🗂️" },
  { title: "Health & Social Care", description: "Qualified caregivers, nurses, and healthcare assistants.", icon: "🏥" },
  { title: "Trade & Construction", description: "Skilled tradespeople and construction workforce.", icon: "🛠️" },
  { title: "Warehouse & Logistics", description: "Staff for inventory, distribution, and supply chain support.", icon: "📦" },
  { title: "IT & Technology", description: "On-site IT specialists and technical staff.", icon: "💻" },
  { title: "Virtual Assistants", description: "Remote support for admin tasks, customer service, and research.", icon: "🌐" },
  { title: "IT Services", description: "Custom software, automation, mobile apps, and e-commerce solutions.", icon: "⚙️" },
];


  return (
    <motion.div
    initial={{ opacity: 0, y: 30}}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{duration: 0.6, delay: 0.8}}
    viewport={{once:true}}
      id="industries"
      className="relative text-center flex flex-col gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white overflow-hidden pb-3"
    >
      <motion.h2 
      initial={{ opacity: 0, y: 20}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration: 0.6}}
        viewport={{once:true}}
      className="text-3xl sm:text-5xl font-medium">Industries we serve</motion.h2>
      <p className="max-w-lg mx-auto text-center text-gray-500 dark:text-white/75 mb-6">
        We bring tailored solutions across industries, helping businesses thrive with technology and expertise.
      </p>

      {/* Scrolling container */}
      <div className="relative w-full overflow-hidden p-10">
        <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{staggerChildren: 0.1}}
        viewport={{once:true}}
        className="flex animate-scroll space-x-6">
          {[...industriesData, ...industriesData].map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Individual card with gradient hover effect
const IndustryCard = ({ industry }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative overflow-hidden min-w-[200px] max-w-[200px] flex-shrink-0 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      {/* Gradient hover effect (works in both light & dark) */}
      <div
  className="pointer-events-none blur-2xl rounded-full 
  bg-gradient-to-r from-sky-300 to-blue-700   
  w-[250px] h-[250px] absolute z-0 
  transition-opacity duration-500 opacity-40 group-hover:opacity-70 
  dark:bg-gradient-to-r dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500  
  dark:mix-blend-lighten mix-blend-multiply p-8"
  style={{ top: position.y - 125, left: position.x - 125 }}
/>


      {/* Icon with circle background */}
      <span className="text-4xl mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 relative z-10">
        {industry.icon}
      </span>

      {/* Title */}
      <h3 className="mt-2 font-bold text-sm text-gray-800 dark:text-white relative z-10">
        {industry.title}
      </h3>

      {/* Description */}
      <p className="text-xs mt-1 text-gray-500 dark:text-gray-300 relative z-10">
        {industry.description}
      </p>
    </div>
  );
};

export default Industries;
