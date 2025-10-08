import React from "react";
import { useState } from "react";
import { Search, X } from "lucide-react";

const Searchbar = ({ onSearchChange, searchValue, placeholder = "Search for food, coffee, etc.." }) => {
  const handleSearchChange = (e) => {
    const value = e.target.value;
    onSearchChange(value);
  };

  const clearSearch = () => {
    onSearchChange("");
  };

  return (
    <React.Fragment>
      <div className="relative w-full max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchValue}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-10 py-3 rounded-lg outline-none border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white shadow-sm"
          />
          {searchValue && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        
        {searchValue && (
          <div className="absolute top-full left-0 right-0 mt-1 text-sm text-gray-500 bg-white px-3 py-1 rounded shadow-sm border">
            Searching for: &ldquo;{searchValue}&rdquo;
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Searchbar;
