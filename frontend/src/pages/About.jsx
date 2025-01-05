import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          Welcome to our event website! Our mission is to bring people together through
          engaging and unforgettable experiences. Whether you're here to attend, network,
          or simply enjoy, we aim to provide an environment that fosters connection,
          learning, and fun.
        </p>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          This upcoming event is designed with a focus on innovation, collaboration, and
          creativity. From keynote speakers to interactive sessions, we ensure there's
          something for everyone.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Thank you for being a part of this journey. We’re excited to have you with us and
          can’t wait to make this event a memorable one!
        </p>
        <div className="mt-6 text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
