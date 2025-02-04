import React from "react";

const RulesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-6 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          CPI Mindmaze 2025 Competition Rules
        </h1>
        <div className="space-y-6 text-gray-800">
          {/* General Rules */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              1. General Rules
            </h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Registration is mandatory to participate in the competition.
              </li>
              <li>Arrive 15 minutes before the competition starts.</li>
              <li>Mobile phones and irrelevant devices are prohibited.</li>
              <li>No external assistance or communication is allowed.</li>
            </ul>
          </section>

          {/* Programming Quiz Rules */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              2. Programming Quiz Rules (1st Semester)
            </h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Duration: 60 minutes.</li>
              <li>
                50 multiple-choice questions, each with a predefined score.
              </li>
              <li>Answers must be submitted on the online platform.</li>
              <li>Correct answers receive full points; no negative marking.</li>
              <li>No submissions accepted after time expires.</li>
            </ul>
          </section>

          {/* Competitive Programming Rules */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              3. Competitive Programming Rules (3rd, 5th, 7th Semester)
            </h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Duration: 2 hours.</li>
              <li>7-10 problems of increasing difficulty.</li>
              <li>Conducted on platforms like HackerRank or Codeforces.</li>
              <li>
                Each problem has a specific score; tie-breakers based on time.
              </li>
              <li>
                Multiple submissions allowed; only the last correct submission
                counts.
              </li>
              <li>
                Copying code or using another’s solution is strictly prohibited.
              </li>
            </ul>
          </section>

          {/* Technical Rules */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              4. Technical Rules
            </h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Report any technical issues immediately to the team.</li>
            </ul>
          </section>

          {/* Judging and Results */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              5. Judging and Results
            </h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Judges have the final decision.</li>
              <li>False information may lead to disqualification.</li>
              <li>
                Solution clarity and time management are key evaluation
                criteria.
              </li>
            </ul>
          </section>

          {/* Discipline and Conduct */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              6. Discipline and Conduct
            </h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Maintain discipline and follow organizer instructions.</li>
              <li>
                Misconduct or rule violations will result in disqualification.
              </li>
            </ul>
          </section>

          {/* Prizes and Recognition */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              7. Prizes and Recognition
            </h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Top three teams will receive prizes.</li>
              <li>All participants will receive a small gift.</li>
            </ul>
          </section>
        </div>
        <p className="mt-6 text-center text-gray-700 font-medium">
          All participants are requested to follow the rules and be prepared.
          Best of luck! 🚀
        </p>
      </div>
    </div>
  );
};

export default RulesPage;
