import React, { useContext } from "react";
import { BsCartXFill } from "react-icons/bs";
import "./cartItem.css";
import formatCurrency from "../../utils/formatCurrency.js";
import AppContext from "../../context/AppContext.js";

const CartItem = ({ data }) => {
  const { id, thumbnail, title, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartXFill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
