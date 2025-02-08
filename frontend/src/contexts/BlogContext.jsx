import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { url } from "../App";

export const BlogContext = createContext(null);

const BlogContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(() => {
    const storeData = localStorage.getItem("user");
    return storeData ? JSON.parse(storeData) : null;
  });

  const getPosts = useCallback(async () => {
    try {
      const res = await axios.get(`${url}/api/post/get-post`);
      if (res.data.success) {
        setPosts(res.data.posts);
      }
    } catch (err) {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.clear();
    }
  }, [userData]);

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    error,
    userData,
    setUserData,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;
