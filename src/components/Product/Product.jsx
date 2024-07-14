import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrency";
import Slide from "../Slide/Slide";
import "./product.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [description, setDescription] = useState("");

  const calcularDiferencaPercentual = (precoAntigo, precoNovo) => {
    const diferenca = precoNovo - precoAntigo;
    const percentualDiferenca = Math.abs((diferenca / precoAntigo) * 100);
    return Math.round(percentualDiferenca); // Arredondar para o número inteiro mais próximo
  };

  const fetchProduct = async () => {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  const fetchDescription = async () => {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const data = await response.json();
    setDescription(data);
  };

  useEffect(() => {
    fetchProduct();
    fetchDescription();
  }, [id]);

  console.log(product);

  if (product === null) return <div>Pagina não encontrada</div>;
  return (
    <>
      <section className="container">
        <section className="container-produto">
          <Slide pictures={product.pictures} />
          <div className="descricao">
            <h1 className="title">{product.title}</h1>
            <p className="original-price">
              {formatCurrency(product.original_price, "BRL")}
            </p>
            <p className="price">
              {formatCurrency(product.base_price, "BRL")}{" "}
              <span className="condition">
                {`
              ${calcularDiferencaPercentual(
                product.original_price,
                product.base_price
              )}% OFF no Pix
              `}
              </span>
            </p>
            <div className="buttons">
              <button className="btn-comprar">Comprar</button>
              <button className="btn-add">Adicionar ao Carrinho</button>
            </div>
          </div>
        </section>
        <section className="descricao-produto">
          <h2>Descrição</h2>
          {description.plain_text}
        </section>
        <section>
          <h2>Características</h2>
          {product.attributes &&
            product.attributes.map((attribute) => (
              <div key={attribute.id} className="atributos">
                <p className="chave">{attribute.name}: </p>
                <p className="valor">{attribute.value_name}</p>
              </div>
            ))}
        </section>
      </section>
    </>
  );
};

export default Product;
