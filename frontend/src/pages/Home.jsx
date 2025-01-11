import React from "react";
import HomeBanner from "../components/HomeBanner";
import Events from "../components/Events";
import Mission from "../components/Mission";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Events />
      <Mission />
      <BlogSection />
    </div>
  );
};

export default Home;
