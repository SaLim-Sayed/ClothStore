import React from "react";
import productsData from "./products-data";
import Product from "./Product";

function ProductsList() {
  const product = productsData.map((product) => {
    return <Product product={product}  key={product.id} />;
  });
  return <div className="row">{product}</div>;
}

export default ProductsList;
