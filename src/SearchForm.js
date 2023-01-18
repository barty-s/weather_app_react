import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="searchForm">
      <form>
        <input
          className="search-bar"
          type="text"
          placeholder="Search for a city here..."
          autoFocus="on"
          autoComplete="off"
        />

        <input className="btn btn-primary" type="submit" value="Search" />
      </form>
    </div>
  );
}
