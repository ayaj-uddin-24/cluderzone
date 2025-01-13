import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ id, imageUrl, title, createdAt }) => {
  // Date formatting function
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
      <Link
        to={`/post/${encodeURIComponent(title)}`}
        aria-label={`Read more about ${title}`}
        className="block"
      >
        {/* Post Image */}
        <div className="relative">
          <img
            src={imageUrl || fallbackImage}
            alt={`Image for ${title}`}
            className="w-full h-56 object-cover rounded-t-xl"
          />
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded-t-xl"></div>
        </div>

        {/* Post Details */}
        <div className="p-6 space-y-4">
          <h4 className="text-2xl font-semibold text-gray-800">{title}</h4>
          <div className="text-sm text-gray-500">
            <time dateTime={new Date(createdAt).toISOString()}>
              {formatDate(createdAt)}
            </time>
          </div>

          <div className="mt-4">
            <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium transition-transform transform hover:scale-105">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
