import React, { Component } from 'react';
import './search-box.styles.css';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <input
        className="search-box"
        type="text"
        placeholder="search monsters"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
