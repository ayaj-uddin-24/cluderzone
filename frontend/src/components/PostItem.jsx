import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ id, imageUrl, title, createdAt }) => {
  return (
    <article className="flex items-start space-x-4">
      <Link
        to={`/post/${encodeURIComponent(title)}`}
        key={id}
        className="flex items-start space-x-4"
        aria-label={`Read more about ${title}`}
      >
        <img
          src={imageUrl}
          alt={`Image for ${title}`}
          className="w-20 h-16 object-cover rounded-lg"
        />
        <div>
          <h4 className="text-sm font-semibold leading-tight">{title}</h4>
          <time
            className="text-xs text-gray-500 mt-1"
            dateTime={new Date(createdAt).toISOString()}
          >
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>
      </Link>
    </article>
  );
};

export default PostItem;
