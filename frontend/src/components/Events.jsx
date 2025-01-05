import React from "react";

const Events = () => {
  return (
    <section className="container py-16">
      <div className="mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold relative inline-block">
          Our Events
          <span className="absolute -bottom-3 left-28 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform translate-y-3"></span>
        </h2>
      </div>

      <div className="mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Left Section */}
        <div className="relative bg-gradient-to-b from-purple-600 via-purple-800 to-purple-900 rounded-2xl overflow-hidden shadow-lg max-w-md md:max-w-lg">
          <img
            src="/event-img.jpg"
            alt="Course Thumbnail"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-white">Quiz Contest</h3>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Let's Go
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
            Kickstart your journey in Event 1
          </h2>
          <p className="text-sm md:text-base text-gray-500 mb-6">
            Welcome to Programming Hero! Dive into the world of modern web
            development with a focus on the MERN stack—MongoDB, Express.js,
            React, and Node.js. Take a course from the basics all the way to
            landing a job or internship.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Explore
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-purple-500 text-purple-500 px-6 py-2 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition-colors"
            >
              Success
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
