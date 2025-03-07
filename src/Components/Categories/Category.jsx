import React from "react";

const Category = ({ categoryImport }) => {
  return (
    <div className="p-3 bg-blue-100 rounded-md shadow-md text-left mb-2">
      <span className="text-lg font-semibold text-blue-600">
        <a href="#"> {categoryImport.name}</a>
      </span>
    </div>
  );
};

export default Category;
