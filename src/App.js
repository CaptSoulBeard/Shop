import React from "react";
import "./App.css";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import productsData from "./Products";

export default function App() {
  return (
    <div>
      <Home />
      <ProductList products={productsData} />
    </div>
  );
}
