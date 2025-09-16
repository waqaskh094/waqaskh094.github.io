import React from "react";
import { motion } from "motion/react";
import assets from "../assets/assets";
import EmployersWorkflow from "../components/EmployersWorkFlow";


const Employers = () => {
  return (
    <>
    <section
      id="hero"
      className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full overflow-hidden text-gray-700 dark:text-white"
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
          <p className="text-sm font-medium">For Employers</p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-bold xl:leading-[75px] max-w-3xl mx-auto lg:mx-0"
        >
          Find{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            Qualified Talent{" "}
          </span>
          for all your business needs.
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-base sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-lg mx-auto lg:mx-0"
        >
          We connect you with pre-screened, referenced candidates ready to make
          an impact.
        </motion.p>

        {/* Long Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-base sm:text-lg font-normal text-gray-600 dark:text-white/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
        >
          Are you struggling with or in need of retaining and finding the right
          talent? At SCI, we have access to a large talent pool of pre-screened
          and referenced candidates. You will only meet with candidates that
          have already been carefully assessed and interviewed for your role.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <a
            href="/request-talent"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-md"
          >
            REQUEST TALENT
          </a>
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
        {/* Foreground illustration */}
        <img
          src={assets.welder}
          alt="Illustration"
          className="w-full max-w-md rounded-2xl shadow-lg relative z-10 transform scale-x-[-1]"
        />
      </motion.div>
    </section>

    <EmployersWorkflow />

    </>
  );
};

export default Employers;
