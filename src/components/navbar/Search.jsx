import React from "react";

function Search({ onChange }) {
  return (
    <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
      <div className="search__box">
        <svg
          className="search__icon"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0c-2.49 0-4.5-2.01-4.5-4.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            fill="#D4AF37"
          />
        </svg>
        <input
          className="form-control"
          type="search"
          placeholder="Search episodes..."
          aria-label="Search episodes"
          onChange={onChange}
          aria-describedby="searchHelp"
          style={{
            paddingLeft: "2.5em",
            backgroundColor: "rgba(17, 17, 17, 0.9)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
            color: "#fff",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <small id="searchHelp" className="sr-only">
          Search by episode title, description, or character
        </small>
      </div>
    </form>
  );
}

export default Search;
