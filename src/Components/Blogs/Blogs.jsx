import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="w-6/12 border">
        {blogs.map((blog) => (
          <Blog blogImpot={blog} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
