import React, { FC, useState } from "react";

interface Product {
  name?: string;
  price?: number;
  description?: string;
  qty?: number;
}

export const Product: FC<Product> = (product) => {
  const [quatity, setQuantity] = useState<number>(0);


  return (
    <div className="col-md-6 col-lg-4 my-4">
      <div className="card ">
        <img
          src="https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>

          <div>
            <h3>{product.price} frs</h3>
            <button
              className="btn btn-primary"
            //   onClick={setQuantity(quatity + 1)}
            >
              -
            </button>
            <span className="display-6">8</span>
            <button
              className="btn btn-primary"
            //   onClick={() => setQuantity(quatity--)}
            >
              +
            </button>
          </div>

          <p>{quatity}</p>
        </div>
      </div>
    </div>
  );
};
