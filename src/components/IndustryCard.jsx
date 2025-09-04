import React from "react";

const IndustryCard = ({ industry, onEnter, onLeave }) => {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="h-44 sm:h-48 w-full rounded-xl bg-white dark:bg-gray-900 shadow
                 flex flex-col items-center justify-center text-center
                 hover:shadow-lg transition"
    >
      <span className="text-5xl leading-none">{industry.icon}</span>
      <h3 className="mt-3 font-semibold">{industry.title}</h3>
    </div>
  );
};

export default IndustryCard;
