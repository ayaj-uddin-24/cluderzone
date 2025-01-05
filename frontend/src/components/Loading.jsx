import React from "react";

const Loading = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-white"
      role="status"
      aria-live="polite"
    >
      <div className="loader border-t-4 border-blue-600 w-16 h-16 rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;