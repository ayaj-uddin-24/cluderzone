import React from "react";

const Mission = () => {
  return (
    <div className="my-10 px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center" aria-label="Our Mission">
        Our Mission
      </h1>
      <p className="text-sm text-center pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolor,
        quibusdam vel corrupti sunt at. <br /> Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Consectetur, vitae.
      </p>

      {/* Mission Details */}
      <div className="flex flex-col sm:flex-row gap-8 mt-12 items-center justify-between">
        {/* Mission Image */}
        <img
          src="/event-grapics.jpg"
          className="h-auto w-auto sm:w-1/2 rounded-lg shadow-lg"
          alt="Illustration depicting our mission"
          loading="lazy"
        />

        {/* Mission Content */}
        <div>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="mb-6">
              <h2
                className="text-2xl font-bold"
                aria-label={`Mission Point ${index}`}
              >
                Lorem, ipsum.
              </h2>
              <p
                className="text-sm pt-2 text-gray-500 leading-relaxed"
                aria-label={`Details for mission point ${index}`}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                eum nulla animi aut autem nihil? Optio, hic, culpa explicabo
                similique dolor nihil est aut quod corporis, nemo distinctio
                aliquid voluptatibus!
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
