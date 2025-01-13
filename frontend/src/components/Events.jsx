import React from "react";

const events = [
  {
    id: 1,
    image:
      "url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)",
    month: "Jan",
    date: 13,
    time: "7 pm",
    title: "2020 National Championship",
    content:
      "The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season.",
    sponsor: "Mercedes-Benz Superdome",
  },
  {
    id: 2,
    image:
      "url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)",
    month: "Jan",
    date: 13,
    time: "7 pm",
    title: "2020 National Championship",
    content:
      "The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season.",
    sponsor: "Mercedes-Benz Superdome",
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
      <p className="text-sm text-center pt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, minus
        tempora natus a pariatur voluptate! <br /> Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Possimus, earum.
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
                  className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800"
                  aria-label={`Event Title: ${item.title}`}
                >
                  {item.title}
                </h1>
                <p
                  className="leading-normal"
                  aria-label={`Details: ${item.content}`}
                >
                  {item.content}
                </p>

                {/* Sponsor Details */}
                <div className="flex flex-row items-center mt-4 text-gray-700">
                  <div
                    className="w-1/2"
                    aria-label={`Sponsor: ${item.sponsor}`}
                  >
                    {item.sponsor}
                  </div>
                  <div className="w-1/2 flex justify-end">
                    <img
                      src="https://collegefootballplayoff.com/images/section_logo.png"
                      alt="Sponsor Logo"
                      className="w-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
