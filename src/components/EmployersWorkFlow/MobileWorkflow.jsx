// src/components/EmployersWorkflow/MobileWorkflow.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { steps } from "./steps";

const MobileWorkflow = () => {
  const [index, setIndex] = useState(0);

  const handleSwipe = () => {
    if (index < steps.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleReset = () => setIndex(0);

  return (
    <section className="lg:hidden w-full bg-white dark:bg-black py-12">
      <div className="px-4 text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">
          Our Hiring Process
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
          Swipe through each step below.
        </p>
      </div>

      {/* Card stack */}
      <div className="relative w-full flex justify-center items-center h-[320px]">
        <AnimatePresence>
          {steps.slice(index, index + 3).map((step, i) => {
            const isTop = i === 0;
            const Icon = step.icon;

            const isLastCard = index === steps.length - 1 && isTop;

            return (
              <motion.div
                key={step.title}
                className={`absolute w-[260px] h-[260px] rounded-2xl shadow-xl p-6 text-white flex flex-col items-center justify-center gap-4 ${step.color} ${
                  isLastCard ? "cursor-pointer" : ""
                }`}
                style={{ zIndex: steps.length - i }}
                initial={{
                  scale: 0.9 - i * 0.05,
                  y: i * 15,
                  rotate: -i * 3,
                  opacity: 1,
                }}
                animate={{
                  scale: 1 - i * 0.05,
                  y: i * 15,
                  rotate: -i * 3,
                  opacity: 1,
                }}
                exit={
                  isTop
                    ? {
                        x: 200,
                        rotate: 20,
                        opacity: 0,
                        transition: { duration: 0.4 },
                      }
                    : {}
                }
                drag={isTop && !isLastCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (Math.abs(info.offset.x) > 100 && !isLastCard) {
                    handleSwipe();
                  }
                }}
                onClick={() => {
                  if (isLastCard) {
                    handleReset();
                  }
                }}
              >
                {/* Step label */}
                <div className="text-sm font-semibold tracking-wider uppercase opacity-90">
                  {step.sub}
                </div>

                {/* Icon */}
                {Icon && <Icon className="w-10 h-10 opacity-90" />}

                {/* Title */}
                <div className="text-xl md:text-2xl font-bold text-center leading-snug">
                  {step.title}
                </div>

                {/* Reset hint for last card */}
                {isLastCard && (
                  <div className="mt-3 text-xs opacity-80 italic">
                    Tap to restart
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MobileWorkflow;
