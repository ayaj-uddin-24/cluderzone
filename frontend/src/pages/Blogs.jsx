import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Loading from "../components/Loading";

const CategoryPosts = () => {
  const { posts, loading, setLoading } = useContext(BlogContext);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [posts]);

  if (loading) {
    return <Loading />;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="bg-white text-black mb-10">
      {/* SEO Meta Tags */}
      <h1 className="text-3xl font-bold p-5 mt-5">Blogs</h1>

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-5">
        {currentPosts.map((article) => (
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

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        {/* SEO Pagination Links */}
        {currentPage > 1 && (
          <link rel="prev" href={`?page=${currentPage - 1}`} />
        )}
        {currentPage < totalPages && (
          <link rel="next" href={`?page=${currentPage + 1}`} />
        )}
      </div>
    </div>
  );
};

export default CategoryPosts;
