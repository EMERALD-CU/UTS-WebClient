// src/components/FilterBar.jsx
import React from "react";
import "./FilterBar.css";
import { Grid, List } from "lucide-react";

const FilterBar = ({ sortOption, setSortOption, gridView, setGridView }) => {
  return (
    <div className="filter-bar">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="sort-dropdown"
      >
        <option value="id">Sort by ID</option>
        <option value="name">Sort by Name</option>
        <option value="type">Sort by Type</option>
      </select>

      <div className="view-toggle">
        <button
          onClick={() => setGridView(true)}
          className={gridView ? "active" : ""}
        >
          <Grid size={18} />
        </button>
        <button
          onClick={() => setGridView(false)}
          className={!gridView ? "active" : ""}
        >
          <List size={18} />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
