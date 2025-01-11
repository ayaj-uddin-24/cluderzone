import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";
import { url } from "../App";
import { toast } from "react-toastify";
import axios from "axios";

const ManagePosts = () => {
  const { posts } = useContext(BlogContext);

  const removePost = async (id) => {
    const res = await axios.delete(`${url}/api/post/remove-post/${id}`);
    if (res.data.success) {
      toast.success(res.data.message);
    }
  };

  return (
    <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-5">
      <Link
        to="/add-post"
        className="bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Add Post
      </Link>

      <h2 className="text-3xl font-semibold text-center py-10">Manage Posts</h2>

      {posts ? (
        <table className="w-full border-collapse border text-center">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Popular</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {posts
              ? posts.map((post) => {
                  return (
                    <tr className="border" key={post._id}>
                      <td>
                        <img
                          src={post.imageUrl}
                          alt="post"
                          className="h-20 mx-auto"
                        />
                      </td>
                      <td>{post.title.slice(0, 20)}...</td>
                      <td>{post.category}</td>
                      <td>
                        {post.popular.toString() === "true" ? "Yes" : "No"}
                      </td>
                      <td>
                        <Link
                          to={`/update-post/${post._id}`}
                          className="bg-red-600 px-2 py-1 text-white font-semibold rounded-md text-sm"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => removePost(post._id)}
                          className="bg-red-800 px-2 py-1 text-white font-semibold rounded-md text-sm"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      ) : (
        "No Posts Available"
      )}
    </div>
  );
};

export default ManagePosts;
