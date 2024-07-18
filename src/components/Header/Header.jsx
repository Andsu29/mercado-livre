import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./header.css";
import CartButton from "../CartButton/CartButton";
import { SiMercadopago } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <SiMercadopago className="btn-logo" />
        </Link>
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
