import React, { useEffect, useContext } from "react";
import "./products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <section className="products container">
      {products.map((product) => (
        <Link to={`produto/${product.id}`} key={product.id}>
          <ProductCard data={product} />
        </Link>
      ))}
    </section>
  );
};

export default Products;
