import React from 'react';
import { FiSearch } from 'react-icons/fi';
import '../../DB.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
};

export default SearchBar;
