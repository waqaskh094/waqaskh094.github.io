import React from "react";
import { FileText, Upload, User } from "lucide-react";

const SubmitProfile = () => {
  return (
    <section className="max-w-4xl mx-auto my-16 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Didn’t Find Your Role?
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        If you couldn’t find a role that matches your skills, share your
        information with us. We’ll reach out when an opportunity that fits your
        profile comes up.
      </p>

      {/* Form */}
      <form className="space-y-6">
        {/* Personal Info */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                       placeholder-gray-400 dark:placeholder-gray-500 outline-none"
            required
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="john.doe@email.com"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                         placeholder-gray-400 dark:placeholder-gray-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="(437) 313-7934"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                         placeholder-gray-400 dark:placeholder-gray-500 outline-none"
              required
            />
          </div>
        </div>

        {/* Desired Field */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Desired Field / Role
          </label>
          <input
            type="text"
            placeholder="e.g. Software Engineering, Marketing, Data Science"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                       placeholder-gray-400 dark:placeholder-gray-500 outline-none"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Cover Letter
          </label>
          <textarea
            rows="4"
            placeholder="Write a short cover letter..."
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                       placeholder-gray-400 dark:placeholder-gray-500 outline-none"
          ></textarea>
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Upload Resume
          </label>
          <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg p-3 
                          bg-white dark:bg-gray-800 cursor-pointer">
            <Upload className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <input
              type="file"
              className="text-sm text-gray-700 dark:text-gray-200"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium
                       hover:bg-blue-700 hover:scale-105 transition-transform cursor-pointer"
          >
            Submit Profile
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubmitProfile;
