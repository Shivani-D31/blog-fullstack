import React from "react";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/blogpage/blogs";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";
import MyBlogs from "./pages/blogpage/myblogs";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/myblogs" element={<MyBlogs />} />
    </Routes>
  );
}

export default AllRoutes;
