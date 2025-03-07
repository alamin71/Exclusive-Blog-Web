import { Key } from "lucide-react";
import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <>
      <div className="w-3/12 border">
        {category.map((category) => (
          <Category categoryImport={category} />
        ))}
      </div>
    </>
  );
};

export default Categories;
