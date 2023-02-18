import React, { FC, useState } from "react";

interface Product {
  name?: string;
  price?: number | string;
  description?: string;
  qty?: number;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>
}

export const Product: FC<Product> = (product) => {
  let [quatity, setQuantity] = useState<number>(0);

  const handleCountUp = () => {
    setQuantity(quatity + 1);
    product.setTotal(product.total+1)
  };

  const handleCountDown = () => {
    if(quatity>0){
        setQuantity(quatity - 1);
        product.setTotal(product.total-1)

    }
  };

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
            <h3>{product.price} frs cfa</h3>
            <button
              className="btn btn-primary"
                onClick={handleCountDown}
            >
              -
            </button>
            <span className="display-6">{quatity}</span>
            <button className="btn btn-primary" onClick={handleCountUp}>
              +
            </button>
          </div>
{/* resent */}
          {/* <p>{quatity}</p> */}
        </div>
      </div>
    </div>
  );
};
