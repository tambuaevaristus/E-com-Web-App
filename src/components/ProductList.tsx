import React from "react";
import Product from "./Product";




export default function ProductList() {
  return (
    <div className="row container">
      <Product
        name="laptop"
        price={3000}
        description="This is the perfect lappy that you need in your life"
      />
      
    </div>
  );
}
