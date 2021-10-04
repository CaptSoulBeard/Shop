import React from "react";
import Product from "./Product";
import productsData from "../Products";

export default function ProductList() {
  let productsArray = productsData.map((element) => <Product data={element} />);
  return <div className="product-list">{productsArray}</div>;
}
