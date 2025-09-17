import React, { useState } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const dummyJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Confidential Client",
    location: "Toronto, ON",
    type: "Full-time",
    posted: "2 days ago",
    description:
      "We are looking for a skilled Frontend Developer with experience in React.js and Tailwind CSS. You will collaborate with our design and backend teams to build scalable web applications.",
  },
  {
    id: 2,
    title: "Project Manager",
    company: "TechNova Inc.",
    location: "Vancouver, BC",
    type: "Contract",
    posted: "5 days ago",
    description:
      "Seeking a Project Manager with strong Agile experience. You’ll oversee a cross-functional team and ensure timely delivery of software projects.",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Confidential Client",
    location: "Remote",
    type: "Part-time",
    posted: "1 week ago",
    description:
      "We need a Data Analyst who can derive insights from business datasets, create reports, and assist management in data-driven decision-making.",
  },
];

const JobListingsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore Current Openings</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          All roles are carefully verified and posted by our team. Apply now and
          take the next step in your career.
        </p>
      </section>

      {/* Filters/Search */}
      <section className="max-w-6xl mx-auto px-6 mb-8">
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-4 sm:items-center">
          <input
            type="text"
            placeholder="Search by job title..."
            className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-transparent outline-none"
          />
          <select className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-transparent outline-none">
            <option>All Locations</option>
            <option>Toronto, ON</option>
            <option>Vancouver, BC</option>
            <option>Remote</option>
          </select>
          <select className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-transparent outline-none">
            <option>All Types</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
        </div>
      </section>

      {/* Job Cards */}
      <section className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyJobs.map((job, index) => (
          <motion.div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="cursor-pointer bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {job.company}
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={16} /> {job.location}
              </p>
              <p className="flex items-center gap-2">
                <Briefcase size={16} /> {job.type}
              </p>
              <p className="flex items-center gap-2">
                <Clock size={16} /> {job.posted}
              </p>
            </div>
            <button className="mt-4 text-blue-600 dark:text-blue-400 font-medium">
              View Details →
            </button>
          </motion.div>
        ))}
      </section>

      {/* Job Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-2xl w-full p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {selectedJob.company} • {selectedJob.location}
              </p>
              <p className="mb-4">{selectedJob.description}</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Apply Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobListingsPage;
