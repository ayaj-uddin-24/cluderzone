import React from "react";

const events = [
  {
    id: 1,
    image:
      "url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)",
    month: "Feb",
    date: 26,
    time: "10:30 pm",
    title: "Programming Quiz",
    subtitle: "1st-Semester Students",
    content:
      "🔹 An engaging MCQ quiz on programming fundamentals.<br/>🔹 Covers syntax, logic, algorithms, data types, loops, and functions.<br/>🔹 Helps beginners test knowledge and build confidence.<br/>🔹 A great chance to learn and compete in a supportive space.<br/>👉 Ideal for: 1st-semester students strengthening basics before tackling advanced topics.",
  },
  {
    id: 2,
    image:
      "url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)",
    month: "Feb",
    date: 26,
    time: "12:00 pm",
    title: "Competitive Coding",
    subtitle: "Semesters 3, 5 & 7",
    content:
      "🚀 A timed coding challenge where participants solve real-world problems.<br/>🔹 Focuses on problem-solving, algorithms, and efficiency.<br />🔹 Covers data structures, logic, and math-based coding.<br />🔹 Tests critical thinking and optimization under constraints.<br />🔹 Features varying difficulty levels in a competitive format.<br />👉 Ideal for: Intermediate and advanced programmers preparing for coding contests.",
  },
];

const Events = () => {
  return (
    <section className="container py-16">
      {/* Section Title */}
      <h2
        className="text-4xl md:text-5xl font-bold text-center"
        aria-label="Our Events"
      >
        Our Events
      </h2>
      <p className="text-sm text-center px-3 pt-4 w-full sm:w-[75%] mx-auto">
        CPI Mind Maze is an exciting programming competition designed to
        challenge and inspire students at Chittagong Polytechnic Institute.
        Organized by Tech Cluder , this event provides a platform for learners
        of all levels to test their coding skills, think critically, and compete
        for top honors.
      </p>

      {/* Events List */}
      <div className="flex flex-col sm:flex-row px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-16 gap-12">
        {events.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5"
            aria-label={`Event: ${item.title}`}
          >
            {/* Event Image */}
            <div
              className="w-full h-64 bg-top bg-cover rounded-t"
              style={{ backgroundImage: item.image }}
              aria-label={`${item.title} image`}
            ></div>

            {/* Event Details */}
            <div className="flex flex-col md:flex-row">
              {/* Event Date */}
              <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                <div className="md:text-3xl">{item.month}</div>
                <div className="md:text-6xl">{item.date}</div>
                <div className="md:text-xl">{item.time}</div>
              </div>

              {/* Event Content */}
              <div className="p-4 font-normal text-gray-800 md:w-3/4">
                <h1
                  className="mb-2 text-3xl font-bold leading-none tracking-tight text-gray-800"
                  aria-label={`Event Title: ${item.title}`}
                >
                  {item.title}
                </h1>
                <p className="mb-3 text-sm">{item.subtitle}</p>
                <p
                  className="leading-normal"
                  aria-label={`Details: ${item.content}`}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
