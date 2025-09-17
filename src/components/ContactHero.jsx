import React from "react";
import assets from "../assets/assets";

const ContactHero = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-black py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start ml-24">
          <img
            src={assets.contactUs}
            alt="Request Talent"
            className="rounded-2xl shadow-lg object-cover w-full max-w-sm"
          />
        </div>

        {/* Right: Request Talent Info */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
            Find the Right Talent, Faster
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
            Looking to scale your team? Whether you need skilled developers, project
            managers, or creative experts — we connect you with top professionals who
            can help your business grow.
          </p>

          <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 space-y-4 text-left border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-200 flex items-center gap-2">
              📞 <span className="font-semibold">+1 (123) 456-7890</span>
            </p>
            <p className="text-gray-700 dark:text-gray-200 flex items-center gap-2">
              ✉️ <span className="font-semibold">talent@yourcompany.com</span>
            </p>
            <p className="text-gray-700 dark:text-gray-200 flex items-center gap-2">
              📍 <span className="font-semibold">123 Business Street, Toronto, ON</span>
            </p>
          </div>

          <p className="mt-8 text-gray-500 dark:text-gray-400 text-4xl">
            Tell us about your hiring needs using the form below 👇
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
