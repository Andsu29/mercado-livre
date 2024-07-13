import React, { useState, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import "./searchBar.css";
import fetchProducts from "../../api/fetchProducts.js";
import AppContext from "../../context/AppContext.js";

const SearchBar = () => {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
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
