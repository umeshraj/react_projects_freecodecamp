import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      {/* all items */}
      <button
        className="filter-btn"
        onClick={() => {
          filterItems("all");
        }}
      >
        all
      </button>

      {/* specific category */}
      <button
        className="filter-btn"
        onClick={() => {
          filterItems("breakfast");
        }}
      >
        breakfast
      </button>
    </div>
  );
};

export default Categories;
