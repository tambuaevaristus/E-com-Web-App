import React, { useState } from "react";

interface Props {
  totalQuantity: number;
}

export default function Navbar(props: Props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NKAP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/payment">
                Payment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/todo">
                Todo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create">
                Create Product
              </a>
            </li>
           
          </ul>
        </div>
      </div>

      {/*  */}
      <a href="/payment">
        <span className="badge text-white bg-black ">
          {props.totalQuantity}
        </span>
      </a>
    </nav>
  );
}
