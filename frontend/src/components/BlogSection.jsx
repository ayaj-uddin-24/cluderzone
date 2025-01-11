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
    <div className="bg-white text-black mb-10 px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* SEO Meta Tags */}
      <h1 className="text-4xl text-center font-bold p-5 mt-5">Blogs</h1>

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-5">
        {filteredPosts.map((article) => (
          <Link
            to={`/post/${encodeURIComponent(article.title)}`}
            key={article._id}
            className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg"
          >
            <article>
              <img
                className="rounded-t-lg"
                src={article.imageUrl}
                alt={`Image for ${article.title}`}
              />
              <div className="p-5 bg-white">
                <h4 className="mb-2 font-bold tracking-tight text-gray-800">
                  {article.title}
                </h4>
                <p
                  className="mb-3 font-normal text-sm text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: article.content.slice(0, 100) + ".....",
                  }}
                ></p>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Read more
                  <FaArrowRight className="ps-2 pt-[3px]" size={22} />
                </button>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
