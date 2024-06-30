import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./searchBar.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className="search-bar">
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search_input"
        required
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <button type="submit" className="search_button">
        <CiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
