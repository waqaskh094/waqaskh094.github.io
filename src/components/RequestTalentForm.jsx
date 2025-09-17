import React, { useState } from "react";
import { User, Building2, Briefcase, Upload } from "lucide-react";

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

const RequestTalentForm = () => {
  const [phone, setPhone] = useState("");

  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, "");

    // Apply format: (XXX) XXX-XXXX
    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
        6,
        10
      )}`;
    }
  };

  const handleChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  return (
    <form className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 space-y-10">
      {/* Personal Details */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Personal Details
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              value={phone}
              onChange={handleChange}
              placeholder="(437) 313-7934"
              maxLength="14" // prevents typing beyond (XXX) XXX-XXXX
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                   placeholder-gray-400 dark:placeholder-gray-500 outline-none"
              required
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-700" />

      {/* Company Details */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-6 h-6 text-green-600 dark:text-green-400" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Company Details
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Company Name
            </label>
            <input
              type="text"
              placeholder="TechNova Inc."
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Company Website / URL
            </label>
            <input
              type="url"
              placeholder="https://www.technova.com"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500 outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Company Address
            </label>
            <input
              type="text"
              placeholder="123 Bay Street"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              City
            </label>
            <input
              type="text"
              placeholder="Toronto"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              State / Province / Region
            </label>
            <select
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none"
            >
              <option value="">Select Province</option>
              {provinces.map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Postal Code
            </label>
            <input
              type="text"
              placeholder="L6P 3L1"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500 outline-none"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-700" />

      {/* Job Details */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Job Details
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Software Engineer"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Number of Openings
            </label>
            <input
              type="number"
              placeholder="3"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Start Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Job Description
            </label>
            <textarea
              placeholder="Describe the role, responsibilities, and requirements..."
              rows="4"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500 outline-none"
            ></textarea>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload File
            </label>
            <div
              className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg p-3 cursor-pointer 
                            bg-white dark:bg-gray-800"
            >
              <Upload className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <input
                type="file"
                className="text-sm text-gray-700 dark:text-gray-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="pt-6 flex gap-3 justify-center">
  {/* Submit */}
  <button
    type="submit"
    className="inline-flex items-center justify-center px-5 py-2 rounded-full 
               bg-primary text-white font-medium
               cursor-pointer transform-gpu  transition-transform duration-200
               hover:opacity-90 hover:scale-105 active:scale-95
               focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500/40"
  >
    Submit Request
  </button>

  {/* Reset */}
  <button
    type="reset"
    className="inline-flex items-center justify-center px-5 py-2 rounded-full 
               border border-gray-400 dark:border-gray-600 
               text-gray-700 dark:text-gray-200 bg-transparent
               cursor-pointer transition-colors duration-200
               hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95"
  >
    Reset
  </button>
</div>

    </form>
  );
};

export default RequestTalentForm;
