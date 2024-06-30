import React from "react";
import "./productCard.css";
import { FaCartPlus } from "react-icons/fa6";
import formatCurrency from "../../utils/formatCurrency";

const ProductCard = ({ data }) => {
  return (
    <section className="product-card">
      <img
        src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="card__image"
      />
      <div className="card__infos">
        <h2 className="card__price">
          {formatCurrency(data.price, data.currency_id)}
        </h2>
        <h2 className="card__title">{data.title}</h2>
      </div>
      <button type="button" className="button__add-cart">
        <FaCartPlus />
      </button>
    </section>
  );
};

export default ProductCard;