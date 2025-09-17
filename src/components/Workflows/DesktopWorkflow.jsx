// src/components/EmployersWorkflow/DesktopWorkflow.jsx
import React, { useEffect, useState } from "react";
import { steps } from "./steps";
import {
  Briefcase,
  Clock,
  TrendingUp,
  GraduationCap,
  Laptop,
} from "lucide-react";

const DesktopWorkflow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#workflow-desktop");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const index = Math.floor(
        (-rect.top + window.innerHeight / 2) / (window.innerHeight * 0.5)
      );
      setActiveIndex(Math.max(0, Math.min(index, steps.length - 1)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="workflow-desktop"
      className="hidden lg:flex w-full min-h-[300vh] relative bg-white dark:bg-black"
    >
      {/* Left Content */}
      {/* Left Content */}
      <div className="flex-1 sticky top-0 h-screen flex flex-col justify-center px-6 text-center lg:text-left pl-36">
        <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 text-gray-800 dark:text-white leading-tight">
          Our Hiring Process
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-md text-base mb-8">
          A transparent, step-by-step process designed to connect you with the
          right talent efficiently — saving you time and helping your business
          grow.
        </p>

        {/* Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
          {[
            { icon: Briefcase, text: "Access to Qualified Talent" },
            { icon: Clock, text: "Faster Hiring Process" },
            { icon: TrendingUp, text: "Scalable Solutions" },
            { icon: GraduationCap, text: "Pre-Screened Candidates" },
            { icon: Laptop, text: "Flexible Work Models" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 text-gray-700 dark:text-white/80"
              >
                <Icon className="w-6 h-6 text-blue-500" />
                <span className="text-sm sm:text-base font-medium">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-md">
          Partner with SCI to reduce hiring risks and secure the talent your
          business needs to thrive. Our process ensures every candidate is
          carefully matched to your requirements.
        </p>
      </div>

      {/* Right Stacked Cards */}
      <div className="flex-1 sticky top-0 h-screen flex items-center justify-center relative">
        {steps.map((step, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;

          const Icon = step.icon;

          return (
            <div
              key={i}
              className={`absolute w-[350px] h-[350px] rounded-[25px] shadow-2xl p-8 text-white flex flex-col items-center justify-center gap-6 transition-all duration-700 ease-in-out ${step.color}`}
              style={{
                transform: isPast
                  ? "translateY(-120vh) rotate(-48deg)"
                  : isActive
                  ? "scale(1) rotate(0deg)"
                  : `scale(0.9) rotate(${-i * 10}deg)`,
                opacity: isActive ? 1 : 0.6,
                zIndex: steps.length - i,
              }}
            >
              {/* Step label */}
              <div className="text-sm font-semibold tracking-wider uppercase opacity-90">
                {step.sub}
              </div>

              {/* Icon */}
              {Icon && <Icon className="w-12 h-12 opacity-90" />}

              {/* Title */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight">
                {step.title}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DesktopWorkflow;
