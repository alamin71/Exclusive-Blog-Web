import React, { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import BlogList from "./BlogList";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* ক্যাটাগরি লিস্ট */}
      <div className="w-full md:w-3/12 bg-gray-100 shadow-lg p-4 rounded-lg">
        {category.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.category_name)}
            className={`block w-full p-2 text-left rounded-md ${
              selectedCategory === cat.category_name
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {cat.category_name}
          </button>
        ))}

        {/* Blog List */}
        <div className="mt-4">
          <span className="p-2 mb-2 mx-auto bg-slate-200">Blogs List</span>
          <BlogList
            selectedCategory={selectedCategory}
            setSelectedBlog={setSelectedBlog}
          />
        </div>
      </div>

      {/* Blogs (একটি নির্দিষ্ট ব্লগ দেখাবে, নাহলে সব ব্লগ দেখাবে) */}
      <Blogs selectedBlog={selectedBlog} />
    </div>
  );
};

export default Categories;
