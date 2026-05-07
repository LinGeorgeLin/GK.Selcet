import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <div className="v1_27">
      <div className="v1_20">
        <input
          type="search"
          className="v1_21"
          placeholder="Search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-label="Search products"
        />
        {value && (
          <button
            type="button"
            className="search-close-btn"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="close-icon"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
