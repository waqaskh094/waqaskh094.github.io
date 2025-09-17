// src/pages/JobSeekers.jsx
import React from "react";
import { Link } from 'react-router-dom'
import { motion } from "motion/react";
import {
  Briefcase,
  Laptop,
  Clock,
  Plane,
  Heart,
  Bus,
  GraduationCap,
  TrendingUp,
} from "lucide-react"; // make sure all icons are imported
import assets from "../assets/assets";
import JobSeekersWorkflow from "../components/Workflows/JobsSeekersWorkflow";
import JobSeekersMobileWorkflow from "../components/Workflows/JobSeekersMobileWorkflow"

const JobSeekers = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full overflow-hidden text-gray-700 dark:text-white"
      >
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left relative">
          {/* Pre-heading Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full mb-6"
          >
            <p className="text-sm font-medium">For Job Seekers</p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-bold xl:leading-[75px] max-w-3xl mx-auto lg:mx-0"
          >
            Land Your{" "}
            <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
              Dream Job{" "}
            </span>
            with SCI.
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-lg mx-auto lg:mx-0"
          >
            Over <span className="font-semibold">10,000+</span> people placed in
            jobs that match their schedule, skills, and goals. We partner with
            you every step of the way to make the job search easier, faster, and
            stress-free.
          </motion.p>

          {/* Quick stats row with icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0"
          >
            {[
              { icon: Briefcase, text: "500+ new jobs monthly" },
              { icon: Laptop, text: "Local & remote roles" },
              { icon: Clock, text: "Quick application process" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-gray-600 dark:text-white/70">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            
            <Link to="/JobOpenings" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-md" onClick={() => setsidebarOpen(false)}>JOB OPENINGS</Link>
            
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex-1 flex items-center justify-center relative"
        >
          <img
            src={assets.office} // <- replace with your illustration
            alt="Job seeker illustration"
            className="w-full max-w-md rounded-2xl shadow-lg relative z-10"
          />
        </motion.div>
      </section>

      {/* Recruiting Opportunities Section */}
      <section className="pt-0 pb-20 px-6 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-black text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 flex items-center justify-center">
            <JobSeekersWorkflow />
            <JobSeekersMobileWorkflow />
          </div>

          
        </div>
      </section>
    </>
  );
};

export default JobSeekers;
