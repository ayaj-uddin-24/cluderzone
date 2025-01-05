import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    semester: "",
    event: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Registration Successful!");
    // Add logic to send form data to backend or API
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="flex w-full max-w-4xl">
        <div className="w-1/2 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Event!</h1>
          <p className="text-lg">
            Join us for an unforgettable experience filled with learning, competition, and fun. Register now to secure your spot!
          </p>
          <img
            src="/event-grapics.jpg"
            alt="Event Graphic"
            className="mt-6 rounded-lg shadow-lg w-1/2"
          />
        </div>
        <div className="w-1/2">
          <form
            className="w-full bg-white p-8 shadow-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Event Registration</h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
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

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semester">
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
                <option value="1st">1st</option>
                <option value="3rd">3rd</option>
                <option value="5th">5th</option>
                <option value="7th">7th</option>
              </select>
            </div>


            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event">
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
                <option value="debate">Debate Competition</option>
                <option value="quiz">Quiz Contest</option>
              </select>
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
