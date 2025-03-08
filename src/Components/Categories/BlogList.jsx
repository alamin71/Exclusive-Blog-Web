import React, { useEffect, useState } from "react";

const BlogList = ({ selectedCategory, setSelectedBlog }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false); // Data loaded, stop loading
      });
  }, []);

  // ফিল্টার করা ব্লগ
  const filteredBlogs =
    selectedCategory === "ALL" || !selectedCategory
      ? blogs
      : blogs.filter((blog) => blog.category_name === selectedCategory);

  // লোডিং স্টেট চেক করা
  if (loading) {
    return <p>Loading blogs...</p>;
  }

  return (
    <div className="mt-4">
      {filteredBlogs.map((blog) => (
        <div key={blog.id} className="mb-4 p-4 border rounded-lg shadow">
          <img
            className="w-full h-32 object-cover rounded"
            src={blog.cover}
            alt={blog.title}
          />
          <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
          <button
            onClick={() => setSelectedBlog(blog)}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View Blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
