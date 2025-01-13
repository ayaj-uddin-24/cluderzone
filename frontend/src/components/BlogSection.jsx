import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BlogSection = () => {
  const { posts } = useContext(BlogContext);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const filterPosts = posts.filter((post) => post.popular === true);
    setFilteredPosts(filterPosts);
  }, [posts]);

  return (
    <section className="bg-white text-black mb-10 px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Section Title */}
      <h1
        className="text-4xl text-center font-bold mt-5"
        aria-label="Recent Blogs"
      >
        Recent Blogs
      </h1>
      <p className="text-sm text-center mt-4 mb-8">
        Discover the latest insights, stories, and updates from our experts.{" "}
        <br />
        Stay informed and inspired with our curated selection of popular blogs.
      </p>

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((article) => (
          <Link
            to={`/post/${encodeURIComponent(article.title)}`}
            key={article._id}
            className="block bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={`Read more about ${article.title}`}
          >
            <article>
              <img
                className="rounded-t-lg w-full h-40 object-fill"
                src={article.imageUrl}
                alt={`Visual representation of ${article.title}`}
                loading="lazy"
              />
              <div className="p-5 bg-white">
                <h4
                  className="mb-2 text-lg font-bold text-gray-800 line-clamp-2"
                  title={article.title}
                >
                  {article.title}
                </h4>
                <p
                  className="mb-4 text-sm text-gray-600 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: article.content.slice(0, 100) + "...",
                  }}
                ></p>
                <button
                  className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                  aria-label={`Read more about ${article.title}`}
                >
                  Read more
                  <FaArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
