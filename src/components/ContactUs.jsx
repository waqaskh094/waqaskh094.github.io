import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
  {/* Name */}
  <div>
    <p className="mb-2 text-sm font-medium">Your name</p>
    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
      <img src={assets.person_icon} alt="" className="w-5" />
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full p-3 text-sm outline-none bg-transparent"
        required
      />
    </div>
  </div>

  {/* Email */}
  <div>
    <p className="mb-2 text-sm font-medium">Email id </p>
    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
      <img src={assets.email_icon} alt="" className="w-5" />
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 text-sm outline-none bg-transparent"
        required
      />
    </div>
  </div>

  {/* Subject */}
  <div>
    <p className="mb-2 text-sm font-medium">Subject</p>
    <input
      type="text"
      placeholder="Enter subject"
      className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
    />
  </div>

  {/* Company Name */}
  <div>
    <p className="mb-2 text-sm font-medium">Company name</p>
    <input
      type="text"
      placeholder="Enter company name"
      className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
    />
  </div>

  {/* Phone Number */}
  <div>
    <p className="mb-2 text-sm font-medium">Phone number</p>
    <input
      type="tel"
      placeholder="Enter phone number"
      className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
      required
    />
  </div>

  {/* Preferred Contact Method */}
  <div>
    <p className="mb-2 text-sm font-medium">Preferred contact method</p>
    <div className="flex items-center gap-4">
      <label className="flex items-center gap-2 text-sm">
        <input type="radio" name="contactMethod" value="email" required />
        Email
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input type="radio" name="contactMethod" value="phone" required />
        Phone
      </label>
    </div>
  </div>

  {/* Service Dropdown */}
  <div className="sm:col-span-2">
    <p className="mb-2 text-sm font-medium">Select service</p>
    <select
      className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
      defaultValue=""
    >
      <option value="" disabled>
        -- Select a service --
      </option>
      <optgroup label="Staffing Solutions">
        <option value="hospitality">Hospitality</option>
        <option value="construction">Construction</option>
        <option value="general-labor">General Labor</option>
      </optgroup>
      <optgroup label="Virtual Assistants">
        <option value="admin">Administrative Support</option>
        <option value="customer-support">Customer Support</option>
        <option value="data-entry">Data Entry</option>
      </optgroup>
      <optgroup label="IT Services">
        <option value="mobile-app">Mobile App Development</option>
        <option value="web-development">Web Development</option>
        <option value="software-testing">Software Testing</option>
      </optgroup>
      <option value="others">Others</option>
    </select>
  </div>

  {/* Message */}
  <div className="sm:col-span-2">
    <p className="mb-2 text-sm font-medium">Message</p>
    <textarea
      rows={8}
      placeholder="Enter your message"
      className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
    />
  </div>

  {/* Submit Button */}
  <div className="sm:col-span-2 flex justify-center mb-5">
    <button
      type="submit"
      className="flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all"
    >
      Submit <img src={assets.arrow_icon} alt="" />
    </button>
  </div>
</form>

    </div>
  )
}

export default ContactUs
