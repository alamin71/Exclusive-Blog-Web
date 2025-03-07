import React from "react";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blogImpot }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hastag,
  } = blogImpot;
  return (
    <>
      <div className="mb-16">
        <img
          className="w-full mb-7"
          src={cover}
          alt={`cover picture of the title ${title}`}
        />
        <div className="flex justify-between mb-3">
          <div className="flex text-start">
            <img className="w-14 rounded-full" src={author_img} alt="" />
            <div className="ml-6">
              <h1 className="text-2xl">{author}</h1>
              <p>{posted_date}</p>
            </div>
          </div>
          <div>
            <span>{reading_time} min read</span>
            <button>
              <FaRegBookmark className="ml-2 text-blue-600" />
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-start">{title}</h1>
          <p className="text-start">
            {hastag.map((hash, idx) => (
              <span key={idx}>
                <a href="">{hash}</a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
