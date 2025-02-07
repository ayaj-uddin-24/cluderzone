import React from "react";

const Mission = () => {
  return (
    <div className="mt-5 sm:my-10 px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center" aria-label="Our Mission">
        Our Mission
      </h1>
      <p className="text-sm text-center pt-4 w-full sm:w-[75%] mx-auto">
        At Tech Cluder, our mission is to empower, inspire, and nurture the next
        generation of programmers and problem-solvers. Through CPI Mind Maze, we
        aim to create an environment where students can learn, compete, and grow
        in the field of programming.
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
          <p>
            🔹 <b>Promote a Coding Culture –</b> We make coding accessible and
            enjoyable for all, from beginners to advanced programmers. By
            fostering a competitive yet collaborative environment, we help
            students build a strong problem-solving mindset.
          </p>{" "}
          <br />
          <p>
            🔹 <b>Enhance Learning Opportunities –</b> CPI Mind Maze isn’t just
            a contest—it’s a learning experience. Students apply theoretical
            knowledge, tackle real-world challenges, and gain hands-on coding
            experience.
          </p>{" "}
          <br />
          <p>
            🔹 <b>Foster Healthy Competition –</b> Competition drives growth.
            Through time-constrained and logic-based contests, students sharpen
            coding skills, think under pressure, and improve algorithmic
            problem-solving.
          </p>{" "}
          <br />
          <p>
            🔹 <b>Build a Strong Tech Community –</b> Tech Cluder connects
            students with peers, mentors, and industry professionals, fostering
            collaboration and innovation.
          </p>{" "}
          <br />
          <p>
            🔹 <b>Prepare for the Future –</b> CPI Mind Maze equips students
            with technical, analytical, and logical thinking skills essential
            for academics, careers, and global coding competitions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
