import React, { useState } from "react";

interface Person {
    name?: string;
    price?:number;
    description?:string;
    qty?:number;
}

export default function Product(person : Person) {
  
    
  return (
    <div className="col-md-6 col-lg-4 my-4">
      <div className="card ">
        <img
          src="https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>
          <p className="card-text">
            {person.description}
          </p>
          
          <div>

            <h3>{person.price} frs</h3>
          <button className="btn btn-primary">
            -
          </button>
          <span className="display-6">8</span>
          <button className="btn btn-primary">
            +
          </button>
          </div>

        </div>
      </div>
    </div>
  );
}
