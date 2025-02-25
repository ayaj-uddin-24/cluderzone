import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const HomeBanner = () => {
  const targetDate = "February 25, 2025 09:30:00";
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
        backgroundImage: "url('/banner.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center text-white space-y-6 max-w-3xl">
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed font-bold pt-36"
            aria-label="Event details: February 27, 2025, at Chattogram Polytechnic"
          >
            Join us at Chattogram Polytechnic <br /> on February 27, 2025
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
                className="flex flex-col items-center bg-black/35 backdrop-blur-md p-3 sm:p-4 rounded-lg shadow-md"
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
            className="inline-block border border-blue-0 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            aria-label="Register for the TechCluder Community Event"
            style={{
              backgroundColor: "#FD62CA",
            }}
          >
            Register Now
          </NavLink>
          <NavLink
            to="/rules-book"
            className="inline-block border border-blue-600 ms-2 hover:bg-blue-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            aria-label="Register for the TechCluder Community Event"
          >
            Rules Book
          </NavLink>
          <NavLink
            className="inline-block border border-blue-0 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 ms-2"
            aria-label="Hackerrank Contest Link"
            to={"https://www.hackerrank.com/codestorm-1-0-1740324245"}
          >
            Join Now
          </NavLink>
          <NavLink
            to="/count"
            className="inline-block border border-blue-0 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 ms-3"
            aria-label="Register for the TechCluder Community Event"
            style={{
              backgroundColor: "#FD62CA",
            }}
          >
            Count Down
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
