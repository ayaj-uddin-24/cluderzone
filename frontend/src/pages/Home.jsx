import React, { useState, useEffect } from "react";
import HomeBanner from "../components/HomeBanner";
import Events from "../components/Events";
import Mission from "../components/Mission";
import BlogSection from "../components/BlogSection";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  // Trigger the popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <HomeBanner />
      <Events />
      <Mission />
      <BlogSection />

      {/* Popup Message */}
      {showPopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-1 rounded-lg shadow-lg space-y-4 text-center">
            <img src="/popup.jpg" className="w-96" alt="" />
            <button
              onClick={() => setShowPopUp(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
