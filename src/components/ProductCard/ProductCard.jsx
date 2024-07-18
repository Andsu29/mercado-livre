import React, { useContext } from "react";
import "./productCard.css";
import { FaCartPlus } from "react-icons/fa6";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <section className="product-card">
      <Link to={`produto/${data.id}`} key={data.id}>
        <img
          src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
          alt="product"
          className="card__image"
        />
      </Link>
      <div className="card__infos">
        <h2 className="card__price">
          {formatCurrency(data.price, data.currency_id)}
        </h2>
        <h2 className="card__title">{data.title}</h2>
      </div>
      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <FaCartPlus />
      </button>
    </section>
  );
};

export default ProductCard;
