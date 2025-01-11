import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BlogContext } from "./contexts/BlogContext";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ManagePosts from "./pages/ManagePosts";
import AddPost from "./pages/AddPost";
import UpdatePost from "./pages/UpdatePost";
import ManageCandidates from "./pages/ManageCandidates";
import Home from "./pages/Home";
export const url = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const { user } = useContext(BlogContext);
  return (
    <div>
      {user ? <Navbar /> : <></>}
      <ToastContainer />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route
          path="/manage-posts"
          element={user ? <ManagePosts /> : <Navigate to="/" />}
        />
        <Route
          path="/add-post"
          element={user ? <AddPost /> : <Navigate to="/" />}
        />
        <Route
          path="/manage-candidates"
          element={user ? <ManageCandidates /> : <Navigate to="/" />}
        />
        <Route
          path="/update-post/:id"
          element={user ? <UpdatePost /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
