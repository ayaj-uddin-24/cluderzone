import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Post from "./pages/Post";
export const url = import.meta.env.VITE_BACKEND_URL;
import { ToastContainer } from "react-toastify";
import RulesPage from "./pages/RulesPage";
import CountdownTimer from "./pages/CountdownTimer";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to={"/"} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/post/:title" element={<Post />} />
        <Route path="/rules-book" element={<RulesPage />} />
        <Route path="/count" element={<CountdownTimer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
