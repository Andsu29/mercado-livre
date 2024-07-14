import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Provider from "./context/Provider";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="produto/:id" element={<Product />} />
          </Routes>
          <Cart />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
