import axios from "axios";
import React, { useContext, useState } from "react";
import { url } from "../App";
import { toast } from "react-toastify";
import { BlogContext } from "../contexts/BlogContext";
import AlreadyRegistered from "./AlreadyRegistered";

const RegistrationForm = () => {
  const { userData, setUserData } = useContext(BlogContext);
  const [formData, setFormData] = useState({
    fullName: "",
    teamName: "",
    candidate1: "",
    candidate2: "",
    candidate1Roll: "",
    candidate2Roll: "",
    email: "",
    phone: "",
    semester: "",
    event: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/user/register`, formData);

      setUserData(formData);
      if (res.data.success) {
        setFormData({
          fullName: "",
          teamName: "",
          candidate1: "",
          candidate2: "",
          candidate1Roll: "",
          candidate2Roll: "",
          email: "",
          phone: "",
          semester: "",
          event: "",
        });
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return userData ? (
    <AlreadyRegistered />
  ) : (
    <div className="flex items-center min-h-screen justify-center bg-gray-100 py-10">
      <div className="flex flex-col md:flex-row w-full max-w-5xl px-4 sm:px-[5vw]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-l-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to CPI MindMaze</h1>
          <p className="text-lg">
            Join us for an unforgettable experience filled with learning,
            competition, and fun. Register now to secure your spot!
          </p>
          <img
            src="/register.jpg"
            alt="Event Graphic"
            className="mt-6 rounded-lg shadow-lg w-4/5"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-10 rounded-r-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Event Registration
            </h2>

            {/* Semester Selection */}
            <div className="mb-6">
              <label
                htmlFor="semester"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Select Semester
              </label>
              <select
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                required
              >
                <option value="" disabled>
                  Choose semester
                </option>
                {["1st", "3rd", "5th", "7th"].map((sem) => (
                  <option key={sem} value={sem}>
                    {sem}
                  </option>
                ))}
              </select>
            </div>

            {/* Event Selection */}
            <div className="mb-6">
              <label
                htmlFor="event"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Select Event
              </label>
              <select
                id="event"
                name="event"
                value={formData.event}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                required
              >
                <option value="" disabled>
                  Choose an event
                </option>
                <option value="coding">Coding Contest</option>
                {formData.semester === "1st" && (
                  <option value="quiz">Quiz Contest</option>
                )}
              </select>
            </div>

            {/* Conditional Fields */}
            {formData.event === "coding" ? (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="teamName"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Team Name
                  </label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["candidate1", "candidate2"].map((candidate, index) => (
                    <div key={candidate}>
                      <label
                        htmlFor={candidate}
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Candidate {index + 1}
                      </label>
                      <input
                        type="text"
                        id={candidate}
                        name={candidate}
                        value={formData[candidate]}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        required
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["candidate1Roll", "candidate2Roll"].map(
                    (candidateRoll, index) => (
                      <div key={candidateRoll}>
                        <label
                          htmlFor={candidateRoll}
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Candidate {index + 1} Roll
                        </label>
                        <input
                          type="text"
                          id={candidateRoll}
                          name={candidateRoll}
                          value={formData[candidateRoll]}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                          required
                        />
                      </div>
                    )
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="candidate1Roll"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Institute Roll
                  </label>
                  <input
                    type="number"
                    id="candidate1Roll"
                    name="candidate1Roll"
                    value={formData.candidate1Roll}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>
              </>
            )}

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
