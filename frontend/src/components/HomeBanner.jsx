import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const HomeBanner = () => {
  const targetDate = "February 27, 2025 00:00:00";
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const [days, hours, minutes, seconds] = getReturnValues(countDown);

  return (
    <section
      className="relative bg-cover bg-center h-[500px] sm:h-screen"
      style={{
        backgroundImage: "url('../../public/banner.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center text-white space-y-6 max-w-3xl">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-md"
            aria-label="TechCluder Community Event"
          >
            TechCluder Community Event
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed font-medium"
            aria-label="Event details: February 27, 2025, at Chattogram Polytechnic"
          >
            Join us at Chattogram Polytechnic on February 27, 2025
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-6 text-sm sm:text-lg md:text-2xl">
            {[
              { value: days, label: "Days" },
              { value: hours, label: "Hours" },
              { value: minutes, label: "Minutes" },
              { value: seconds, label: "Seconds" },
            ].map((time, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-black/70 backdrop-blur-md p-3 sm:p-4 rounded-lg shadow-md"
                aria-label={`${time.value} ${time.label}`}
              >
                <p className="font-bold text-xl sm:text-2xl md:text-4xl">
                  {time.value}
                </p>
                <p>{time.label}</p>
              </div>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <NavLink
            to="/registration"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            aria-label="Register for the TechCluder Community Event"
          >
            Register Now
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
