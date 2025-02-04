import React, { useState, useEffect } from "react";
import HomeBanner from "../components/HomeBanner";
import Events from "../components/Events";
import Mission from "../components/Mission";
import BlogSection from "../components/BlogSection";
import { RxCross2 } from "react-icons/rx";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  // Trigger the popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 10000);

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
          <div className="rounded-lg shadow-lg space-y-4 text-center relative mx-5 sm:mx-0">
            <img src="/popup.jpg" className="w-96" alt="Popup image" />
            <RxCross2
              size={22}
              className="absolute text-white -top-[27px] -right-2.5 cursor-pointer"
              onClick={() => setShowPopUp(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
