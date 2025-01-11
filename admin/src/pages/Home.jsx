import React, { useContext, useState, useEffect } from "react";
import { BlogContext } from "../contexts/BlogContext";

const Home = () => {
  const { posts, candidates } = useContext(BlogContext);
  const [codingCandidates, setCodingCandidates] = useState([]);
  const [quizCandidates, setQuizCandidates] = useState([]);

  useEffect(() => {
    if (candidates.length > 0) {
      const filteredCandidates = candidates.filter(
        (candidate) => candidate.event === "coding"
      );
      setCodingCandidates(filteredCandidates);
    }
  }, [candidates]);

  useEffect(() => {
    if (candidates.length > 0) {
      const filteredCandidates = candidates.filter(
        (candidate) => candidate.event === "quiz"
      );
      setQuizCandidates(filteredCandidates);
    }
  }, [candidates]);

  return (
    <div className="flex gap-3 mt-10 px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="border border-gray-600 p-2">
        <h3>Total Posts</h3>
        <p>{posts.length}</p>
      </div>
      <div className="border border-gray-600 p-2">
        <h3>Coding Contest Candidates</h3>
        <p>{codingCandidates.length}</p>
      </div>
      <div className="border border-gray-600 p-2">
        <h3>Quiz Contest Candidates</h3>
        <p>{quizCandidates.length}</p>
      </div>
    </div>
  );
};

export default Home;
