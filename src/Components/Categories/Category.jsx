import React from "react";

const Category = ({ categoryImport, handleCategoryClick }) => {
  return (
    <>
      <div
        className="p-3 bg-blue-100 rounded-md shadow-md text-left mb-2 cursor-pointer hover:bg-blue-200 transition"
        onClick={() => handleCategoryClick(categoryImport.category_name)}
      >
        <span className="text-lg font-semibold text-blue-600">
          {categoryImport.category_name}
        </span>
      </div>
    </>
  );
};

export default Category;
