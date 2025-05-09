// src/components/HeaderBar.jsx
import React from "react";
import logo from "../assets/pokemon-logo.png";
import "./HeaderBar.css";
import { Search } from "lucide-react";

const HeaderBar = ({ onSearch }) => {
  return (
    <div className="header-bar">
      <img src={logo} alt="Pokemon Logo" className="logo" />

      <div className="search-wrapper">
        <Search className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search Pokemon"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default HeaderBar;
