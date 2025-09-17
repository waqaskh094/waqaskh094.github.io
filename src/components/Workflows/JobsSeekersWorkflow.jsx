// src/components/JobSeekersWorkflow/DesktopWorkflow.jsx
import React, { useEffect, useState } from "react";
import { jobSeekerSteps } from "./steps";
import {
  Plane,
  Briefcase,
  Heart,
  Bus,
  GraduationCap,
  Clock,
  TrendingUp,
  Laptop,
} from "lucide-react";

const JobSeekersWorkflow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#jobseekers-workflow");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const index = Math.floor(
        (-rect.top + window.innerHeight / 2) / (window.innerHeight * 0.5)
      );
      setActiveIndex(Math.max(0, Math.min(index, jobSeekerSteps.length - 1)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="jobseekers-workflow"
      className="hidden lg:flex w-full min-h-[300vh] relative bg-white dark:bg-black"
    >
      {/* Left Content */}
      <div className="flex-1 sticky top-0 h-screen flex flex-col justify-center px-6 text-center lg:text-left">
        <h2 className="pt-48 text-5xl lg:text-6xl font-extrabold mb-6 text-gray-800 dark:text-white leading-tight">
          Our Application Process
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-md text-base mb-8">
          At SCI, we make job searching easier. Follow our simple, step-by-step
          process to land your dream role quickly and confidently.
        </p>

        {/* Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
          {[
            { icon: Briefcase, text: "Above Average Pay" },
            { icon: Plane, text: "Paid Vacation Time *" },
            { icon: Heart, text: "Benefits" },
            { icon: Bus, text: "Free Transportation *" },
            { icon: GraduationCap, text: "Paid Training" },
            { icon: Clock, text: "Paid Overtime" },
            { icon: TrendingUp, text: "Opportunity for Growth" },
            { icon: Laptop, text: "Remote Work Options *" },
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

        {/* Disclaimer */}
        <p className="text-xs mt-4 text-gray-500">
          *Not applicable for all jobs. Contact a recruiter for details.
        </p>

        {/* Closing Statement */}
        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-md">
          It’s time to land the dream job you’ve been searching for. Stop
          wasting time on postings that don’t match your expectations — send us
          your resume today and apply for exciting opportunities.
        </p>
      </div>

      {/* Right Stacked Workflow Cards */}
      <div className="flex-1 sticky top-0 h-screen flex items-center justify-center pt-8">
        {jobSeekerSteps.map((step, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;
          const Icon = step.icon;

          return (
            <div
              key={i}
              className={`absolute w-[350px] h-[400px] rounded-[25px] shadow-2xl p-8 text-white flex flex-col items-center justify-center gap-4 transition-all duration-700 ease-in-out ${step.color}`}
              style={{
                transform: isPast
                  ? "translateY(-120vh) rotate(-48deg)"
                  : isActive
                  ? "scale(1) rotate(0deg)"
                  : `scale(0.9) rotate(${-i * 10}deg)`,
                opacity: isActive ? 1 : 0.6,
                zIndex: jobSeekerSteps.length - i,
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

              {/* Description */}
              <p className="text-sm text-center opacity-90 max-w-xs">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default JobSeekersWorkflow;
