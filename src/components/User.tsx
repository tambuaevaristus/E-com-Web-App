import React, { FC } from "react";
import { UserP } from "../types";


export const User = (props: UserP) => {
  return (
    <div>
      <div className="card col-md-4" >
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.email}</h6>
          <p className="card-text">
           {props.age}
          </p>
        </div>
      </div>
    </div>
  );
};
