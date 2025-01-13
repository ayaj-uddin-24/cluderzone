import React, { useEffect, useState, useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";

const ManageCandidates = () => {
  const { candidates } = useContext(BlogContext);
  const [groupedCandidates, setGroupedCandidates] = useState({});

  // Group candidates by event type
  useEffect(() => {
    if (candidates) {
      const grouped = candidates.reduce((acc, candidate) => {
        const event = candidate.event;
        if (!acc[event]) {
          acc[event] = [];
        }
        acc[event].push(candidate);
        return acc;
      }, {});
      setGroupedCandidates(grouped);
    }
  }, [candidates]);

  // Remove user and update the state
  const removeUser = async (id, event) => {
    try {
      const res = await axios.delete(`${url}/api/user/remove-user/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);

        // Update the state after removal
        setGroupedCandidates((prev) => {
          const updatedEventCandidates = prev[event].filter(
            (candidate) => candidate._id !== id
          );
          return {
            ...prev,
            [event]: updatedEventCandidates,
          };
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error removing user:", error);
      toast.error("Failed to remove user. Please try again.");
    }
  };

  return (
    <div className="mb-12">
      <h1 className="text-3xl font-semibold mt-16 text-center">
        Manage Candidates
      </h1>

      <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        {Object.keys(groupedCandidates).length > 0 ? (
          Object.keys(groupedCandidates).map((event) => (
            <div key={event}>
              <h2 className="text-xl font-bold pb-4 pt-12 capitalize">
                {event} Contest Candidates
              </h2>
              {groupedCandidates[event].length > 0 ? (
                <table className="w-full border-collapse border text-center">
                  <thead>
                    <tr>
                      {event === "coding" ? <th>Team</th> : <th>Name</th>}
                      {event === "coding" ? <th>Candidates</th> : <></>}
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Roll</th>
                      <th>Semester</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupedCandidates[event].map((candidate) => (
                      <tr className="border" key={candidate._id}>
                        {event === "coding" ? (
                          <td>{candidate.teamName}</td>
                        ) : (
                          <td>{candidate.fullName}</td>
                        )}
                        {event === "coding" ? (
                          <td>
                            {candidate.candidate1
                              ? `${candidate.candidate1}, ${candidate.candidate2}`
                              : "-"}
                          </td>
                        ) : (
                          <></>
                        )}
                        <td>{candidate.email}</td>
                        <td>{candidate.phone}</td>
                        <td>
                          {candidate.candidate1Roll}{" "}
                          {candidate.candidate2Roll
                            ? `, ${candidate.candidate2Roll} `
                            : ""}
                        </td>
                        <td>{candidate.semester}</td>
                        <td>
                          <button
                            onClick={() => removeUser(candidate._id, event)}
                            className="bg-red-800 px-2 py-1 text-white font-semibold rounded-md text-sm"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No Candidates Available</p>
              )}
            </div>
          ))
        ) : (
          <p>No Candidates Available</p>
        )}
      </div>
    </div>
  );
};

export default ManageCandidates;
